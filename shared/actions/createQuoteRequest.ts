'use server';

import { z } from 'zod';

import { strapi } from '../api';
import { Dict, getDictionary } from '../dictionaries';
import { FormErrors, validateSchema } from '../formErrors';
import { sendNotificationEmail } from './sendEmailNotification';
import { validateReCaptcha } from './validateReCaptcha';

function generateQuoteRequestSchema(dict: Dict) {
  return z.object({
    name: z.string({ required_error: dict.quote.name.required }).min(2, dict.quote.name.min),
    email: z.string().email(dict.quote.email.invalid),
    phone: z.string().regex(/^\(\d{3}\)\s\d{3}-\d{4}/, dict.quote.phone.invalid),
    additionalInfo: z.string().max(500, dict.quote.additionalInfo.max).nullable().default(null),
    insurance: z.coerce.number({ required_error: dict.quote.insurance.required }).positive(),
    acknowledgement: z.coerce.boolean().refine(val => val, {
      message: dict.quote.acknowledgement.required,
    }),
    ['g-recaptcha-response']: z.string().min(1, dict.quote.recaptcha.required),
  });
}

export type QuoteRequestResponse = Promise<{
  status: 'initial' | 'success' | 'failed';
  message: null | string;
  errors?: FormErrors<ReturnType<typeof generateQuoteRequestSchema>>;
}>;

export async function createQuoteRequest(
  lang: string,
  prevState: Awaited<QuoteRequestResponse>,
  form: FormData,
): QuoteRequestResponse {
  await new Promise(r => setTimeout(r, 4000));
  const dict = await getDictionary(lang);
  const schema = generateQuoteRequestSchema(dict);
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

  try {
    let message: string | null = null;
    const response = await strapi
      .post('/api/quote-requests', {
        data: {
          name: validation.values.name,
          email: validation.values.email,
          phone: validation.values.phone,
          insurance_coverage: validation.values.insurance,
          additional_info: validation.values.additionalInfo,
        },
      })
      .badRequest(async error => {
        console.error('BAD REQUEST');
        const json = await error.response.json();
        console.log(json);

        if (
          json.error.name === 'ValidationError' &&
          json.error.message === 'This attribute must be unique'
        ) {
          message = dict.quote.uniqueError;
        }
      })
      .resolve();

    if (response.ok) {
      sendNotificationEmail(
        `Quote Request - ${validation.values.name}`,
        `
          Quote Requested by ${validation.values.name}, from aborgia.com.
          Phone: ${validation.values.phone}.
          Email: ${validation.values.email}.
      
          https://strapi-production-8e4b.up.railway.app/admin/content-manager/collectionType/api::quote-request.quote-request?page=1&pageSize=10&sort=id:DESC
        `,
      );
      return {
        status: 'success',
        message: dict.quote.success,
      };
    }

    return { status: 'failed', message: message ?? dict.quote.error };
  } catch (error) {
    console.log('createQuoteRequest error ', error);
    return { status: 'failed', message: dict.quote.error };
  }
}
