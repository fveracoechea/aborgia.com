import { getFormData } from "@tanstack/react-form-start";
import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import z from "zod";
import { ClientConsentSchema } from "./client-consent.schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const getFormDataFromServer = createServerFn({ method: "GET" }).handler(
	async () => {
		return getFormData();
	},
);

export const $submitConsent = createServerFn({ method: "POST" })
	.validator(
		ClientConsentSchema.extend({
			file: z.instanceof(File).refine((pdf) => pdf.size > 0, {
				error: "A signed PDF file is required",
			}),
		}).omit({ acknowledgment: true }),
	)
	.handler(async ({ data }) => {
		const { file, fullName, email, phone } = data;

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const normalizedName = fullName.replace(/[^a-z0-9]/gi, "-").toLowerCase();
		const filename = `${normalizedName}__aborgia__Client-Consent.pdf`;

		const attachment = {
			filename,
			content: buffer.toString("base64"),
		};

		const date = new Date().toLocaleDateString();

		// Email to the client
		await resend.emails.send({
			from: "Arelys Borgia Insurance <onboarding@resend.dev>",
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
			from: "Arelys Borgia Insurance <onboarding@resend.dev>",
			to: ["aborgiainsurance@gmail.com"],
			subject: `New Client Consent - ${fullName}`,
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
	});
