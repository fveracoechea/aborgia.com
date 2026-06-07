import * as React from "react";
import { Label } from "#/components/ui/label";

interface FormFieldProps {
	label: string;
	htmlFor: string;
	required?: boolean;
	children: React.ReactNode;
}

export function FormField({
	label,
	htmlFor,
	required = false,
	children,
}: FormFieldProps) {
	return (
		<div className="flex flex-col gap-1.5">
			<Label htmlFor={htmlFor}>
				{label}
				{required && <span className="text-destructive ml-0.5">*</span>}
			</Label>
			{children}
		</div>
	);
}
