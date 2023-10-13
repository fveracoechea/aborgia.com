'use server';

import { z } from 'zod';

import { strapi } from 'shared/api';
import { Dict, getDictionary } from 'shared/dictionaries';
import { FormErrors, validateSchema } from 'shared/formErrors';

import { sendNotificationEmail } from './sendEmailNotification';
import { validateReCaptcha } from './validateReCaptcha';

function generateConcentSchema(dict: Dict) {
  return z.object({
    fullname: z.string({ required_error: dict.quote.name.required }).min(2, dict.quote.name.min),
    email: z.string().email(dict.quote.email.invalid),
    phone: z.string().regex(/^\(\d{3}\)\s\d{3}-\d{4}/, dict.quote.phone.invalid),
    acknowledgement: z.coerce.boolean().refine(val => val, {
      message: dict.quote.acknowledgement.required,
    }),
    ['g-recaptcha-response']: z.string().min(1, dict.quote.recaptcha.required),
  });
}

export type ConsentRequestResponse = Promise<{
  status: 'initial' | 'success' | 'failed';
  message: null | string;
  errors?: FormErrors<ReturnType<typeof generateConcentSchema>>;
}>;

export async function sendClientConsent(
  lang: string,
  prevState: unknown,
  form: FormData,
): ConsentRequestResponse {
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

  try {
    let message: string | null = null;
    const response = await strapi
      .post('/api/clients', {
        data: {
          fullname: validation.values.fullname,
          email: validation.values.email,
          phone: validation.values.phone,
        },
      })
      .badRequest(async error => {
        console.error('STRAPI BAD REQUEST');
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
      // sendNotificationEmail(
      //   `${validation.values.fullname} - client consent`,
      //   `
      //     Client form conset by ${validation.values.fullname}, from aborgia.com.
      //     Phone: ${validation.values.phone}.
      //     Email: ${validation.values.email}.

      //     https://strapi-production-8e4b.up.railway.app/admin/content-manager/collectionType/api::client.client?page=1&pageSize=10&sort=id:DESC
      //   `,
      // );
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
