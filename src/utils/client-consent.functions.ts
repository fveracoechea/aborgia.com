import {
	createServerValidate,
	ServerValidateError,
} from "@tanstack/react-form-start";
import { createServerFn } from "@tanstack/react-start";
import { setResponseStatus } from "@tanstack/react-start/server";
import { Resend } from "resend";
import z from "zod";
import { getLocale } from "#/paraglide/runtime";
import { m } from "#/paraglide/messages";
import {
	type ClientConsentFormFields,
	ClientConsentFormSchema,
	clientConsentOptions,
} from "./client-consent.schemas";
import { createAssessment } from "./recaptcha";

const resend = new Resend(process.env.RESEND_API_KEY);

const serverValidate = createServerValidate({
	...clientConsentOptions,
	onServerValidate: ClientConsentFormSchema,
});

export const $submitConsent = createServerFn({ method: "POST" })
	.validator(
		z
			.instanceof(FormData, { error: "Invalid form data" })
			.transform((values) => {
				const file = values.get("file");
				const recaptchaToken = values.get("recaptchaToken");
				values.delete("file");
				values.delete("recaptchaToken");
				return { values, file, recaptchaToken };
			}),
	)
	.handler(async ({ data: { values, file, recaptchaToken } }) => {
		try {
			const input = (await serverValidate(values)) as ClientConsentFormFields;
			const { email, phone, fullName } = input;

			if (
				recaptchaToken &&
				typeof recaptchaToken === "string" &&
				process.env.RECAPTCHA_ENABLED === "true"
			) {
				const score = await createAssessment({
					projectID: process.env.RECAPTCHA_PROJECT_ID ?? "",
					recaptchaKey: process.env.VITE_RECAPTCHA_SITE_KEY ?? "",
					token: recaptchaToken,
					recaptchaAction: "CLIENT_CONSENT",
				});

				if (score === null) {
				return {
					status: "error",
					result: m.error_recaptcha_failed(),
				} as const;
			}
		}

		if (!(file instanceof File) || file.size === 0) {
			return {
				status: "error",
				result: m.error_pdf_required(),
			} as const;
		}

			const arrayBuffer = await file.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);

			const attachment = {
				filename: m.email_consent_attachment_name({
					fullName: fullName.replace(/[^a-z0-9]/gi, "-").toLowerCase(),
				}),
				content: buffer.toString("base64"),
			};

			const date = new Date().toLocaleDateString(getLocale());

			// Email to the agent
			await resend.emails.send({
				from: "Arelys Borgia Insurance <onboarding@resend.dev>",
				to: ["aborgiainsurance@gmail.com"],
				subject: m.email_consent_subject({ fullName }),
				html: m.email_consent_body({ fullName, email, phone, date }),
				attachments: [attachment],
			});

			return { status: "success" } as const;
		} catch (e) {
			if (e instanceof ServerValidateError) {
				return { status: "validation-error", result: e.formState } as const;
			}

			setResponseStatus(500);
			console.log("form error", e);

			return { status: "error", result: m.email_consent_error() };
		}
	});
