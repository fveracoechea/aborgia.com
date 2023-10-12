'use server';

import { z } from 'zod';

import { Dict, getDictionary } from 'shared/dictionaries';
import { FormErrors, validateSchema } from 'shared/formErrors';

import { validateReCaptcha } from './validateReCaptcha';

function generateConcentSchema(dict: Dict) {
  return z.object({
    fullName: z.string({ required_error: dict.quote.name.required }).min(2, dict.quote.name.min),
    email: z.string().email(dict.quote.email.invalid),
    phone: z.string().regex(/^\(\d{3}\)\s\d{3}-\d{4}/, dict.quote.phone.invalid),
    acknowledgement: z.coerce.boolean().refine(val => val, {
      message: dict.quote.acknowledgement.required,
    }),
    ['g-recaptcha-response']: z.string().min(1, dict.quote.recaptcha.required),
  });
}

export type ConcentRequestResponse = Promise<{
  status: 'initial' | 'success' | 'failed';
  message: null | string;
  errors?: FormErrors<ReturnType<typeof generateConcentSchema>>;
}>;

export async function sendClientConcent(
  lang: string,
  prevState: unknown,
  form: FormData,
): ConcentRequestResponse {
  const dict = await getDictionary(lang);
  const schema = generateConcentSchema(dict);
  const validation = validateSchema(form, schema);

  if (!validation.success) {
    return {
      status: 'failed',
      message: null,
      errors: validation.errors,
    };
  }

  const reCaptchaValidation = await validateReCaptcha(validation.values['g-recaptcha-response']);
  if (!reCaptchaValidation) {
    return {
      status: 'failed',
      message: 'ReCAPTCHA Verification Error',
    };
  }

  return {
    status: 'success',
    message: 'success',
  };
}
