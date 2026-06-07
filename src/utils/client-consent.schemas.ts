import { formOptions } from "@tanstack/react-form-start";
import z from "zod";

export const ClientConsentFormSchema = z.object({
	email: z.email("Please enter a valid email address"),
	phone: z.string().min(7, "Please enter a valid phone number"),
	fullName: z.string().min(1, "Full name is required"),
	acknowledgment: z
		.boolean()
		.refine(
			(v) => v === true,
			"You must acknowledge the terms and privacy notice",
		),
	file: z
		.instanceof(File)
		.refine((pdf) => pdf.size > 0, "A signed PDF file is required"),
});

export type ClientConsentFormFields = z.infer<typeof ClientConsentFormSchema>;

export const clientConsentOptions = formOptions({
	defaultValues: {
		email: "",
		phone: "",
		fullName: "",
		acknowledgment: false,
		file: undefined as undefined | File,
	},
});
