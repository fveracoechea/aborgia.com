import {
	createServerValidate,
	getFormData,
	ServerValidateError,
} from "@tanstack/react-form-start";
import { createServerFn } from "@tanstack/react-start";
import { setResponseStatus } from "@tanstack/react-start/server";
import { Resend } from "resend";
import z from "zod";
import {
	type ClientConsentFormFields,
	ClientConsentFormSchema,
	clientConsentOptions,
} from "./client-consent.schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

const serverValidate = createServerValidate({
	...clientConsentOptions,
	onServerValidate: ClientConsentFormSchema,
});

export const getFormDataFromServer = createServerFn({ method: "GET" }).handler(
	async () => getFormData(),
);

export const $submitConsent = createServerFn({ method: "POST" })
	.validator(z.instanceof(FormData, { error: "Invalid form data" }))
	.handler(async ({ data }) => {
		console.log("server data", data.get("file"));
		try {
			const input = (await serverValidate(data)) as ClientConsentFormFields;
			console.log(input);
			const { email, phone, fullName, file } = input;

			const arrayBuffer = await file.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);

			const attachment = {
				filename: `${fullName.replace(/[^a-z0-9]/gi, "-").toLowerCase()} - Client Consent.pdf`,
				content: buffer.toString("base64"),
			};

			const date = new Date().toLocaleDateString();

			// Email to the client
			await resend.emails.send({
				from: "Arelys Borgia Insurance <aborgiainsurance@gmail.com>",
				to: [email],
				subject: "Client Consent Form - Digital Signature",
				html: `
      <p>Hello ${fullName},</p>
      <p>Thank you for submitting your Client Consent Form. Your digital signature has been recorded.</p>
      <p>Please find your signed consent form attached to this email.</p>
      <br/>
      <p><strong>Submitted Information:</strong></p>
      <ul>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <li>Signature: ${fullName}</li>
        <li>Date: ${date}</li>
      </ul>
      <br/>
      <p>Best regards,<br/>Arelys Borgia Insurance</p>
    `,
				attachments: [attachment],
			});

			// Email to the agent
			await resend.emails.send({
				from: "Arelys Borgia Insurance <aborgiainsurance@gmail.com>",
				to: ["aborgiainsurance@gmail.com"],
				subject: `New Client Consent Form - ${fullName}`,
				html: `
      <p>A new client consent form has been submitted.</p>
      <br/>
      <p><strong>Submitted Information:</strong></p>
      <ul>
        <li>Full Name: ${fullName}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <li>Date: ${date}</li>
      </ul>
      <br/>
      <p>The signed PDF is attached.</p>
    `,
				attachments: [attachment],
			});

			return { success: true };
		} catch (e) {
			if (e instanceof ServerValidateError) {
				return e.response;
			}

			setResponseStatus(500);
			return "There was an internal error";
		}
	});
