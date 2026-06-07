import { formOptions } from "@tanstack/react-form-start";
import z from "zod";
import { m } from "#/paraglide/messages";

export const ClientConsentFormSchema = z.object({
	email: z.email(m.form_error_email()),
	phone: z.string().min(7, m.form_error_phone()),
	fullName: z.string().min(1, m.form_error_full_name()),
	acknowledgment: z
		.union([z.boolean(), z.stringbool()])
		.refine((v) => v === true, m.form_error_acknowledgment()),
});

export type ClientConsentFormFields = z.infer<typeof ClientConsentFormSchema>;

export const clientConsentOptions = formOptions({
	validators: {
		onSubmit: ClientConsentFormSchema,
	},
	defaultValues: {
		email: "",
		phone: "",
		fullName: "",
		acknowledgment: false as string | boolean,
	},
});
