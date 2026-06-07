import { formOptions } from "@tanstack/react-form-start";
import { z } from "zod";

export const ClientConsentSchema = z.object({
	email: z.email("Please enter a valid email address"),
	phone: z.string().min(7, "Please enter a valid phone number"),
	fullName: z.string().min(1, "Full name is required"),
	acknowledgment: z.literal(true, {
		error: "You must acknowledge the terms and privacy notice",
	}),
});

export const clientConsentOptions = formOptions({
	defaultValues: {
		email: "",
		phone: "",
		fullName: "",
		acknowledgment: false,
	},
	validators: {
		onSubmit: ClientConsentSchema,
	},
});

export type ClientConsentInput = z.infer<typeof ClientConsentSchema>;
