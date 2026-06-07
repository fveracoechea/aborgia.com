import { formOptions } from "@tanstack/react-form-start";
import z from "zod";

export const ClientConsentFormSchema = z.object({
	email: z.email("Please enter a valid email address"),
	phone: z.string().min(7, "Please enter a valid phone number"),
	fullName: z.string().min(1, "Full name is required"),
	acknowledgment: z
		.union([z.boolean(), z.stringbool()])
		.refine(
			(v) => v === true,
			"You must acknowledge the terms and privacy notice",
		),
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
