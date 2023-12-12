import { z } from 'zod';

export type FormErrors<Schema extends z.ZodTypeAny> = Partial<
  Record<keyof z.infer<Schema>, string>
>;

type FormValidation<Schema extends z.AnyZodObject> =
  | {
      success: true;
      values: z.infer<Schema>;
    }
  | {
      success: false;
      errors: FormErrors<Schema>;
    };

export function validateSchema<Schema extends z.AnyZodObject>(
  data: FormData | URLSearchParams,
  schema: Schema,
): FormValidation<Schema> {
  console.log('form data = ', Object.fromEntries(data));
  const result = schema.safeParse(Object.fromEntries(data));

  if (result.success) {
    return {
      success: true,
      values: result.data as z.infer<Schema>,
    };
  }

  const fieldErrors = result.error.formErrors.fieldErrors;
  const issues: Record<string, string> = {};

  for (const key in fieldErrors) {
    if (Object.prototype.hasOwnProperty.call(fieldErrors, key)) {
      const messages = fieldErrors[key];
      if (messages && messages[0]) {
        issues[key] = messages[0];
      }
    }
  }

  return {
    success: false,
    errors: issues as FormErrors<Schema>,
  };
}
