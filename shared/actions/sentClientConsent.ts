'use server';

import { z } from 'zod';

import { fetchClientByEmail, strapi } from 'shared/api';
import { Dict, getDictionary } from 'shared/dictionaries';
import { FormErrors, validateSchema } from 'shared/formErrors';

import { sendNotificationEmail } from './sendEmailNotification';
import { validateReCaptcha } from './validateReCaptcha';

function generateConsentSchema(dict: Dict) {
  return z.object({
    fullname: z.string({ required_error: dict.quote.name.required }).min(3, dict.quote.name.min),
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
  clientId?: number;
  errors?: FormErrors<ReturnType<typeof generateConsentSchema>>;
  values?: z.infer<ReturnType<typeof generateConsentSchema>>;
}>;

export async function sendClientConsent(lang: string, form: FormData): ConsentRequestResponse {
  const dict = await getDictionary(lang);
  const schema = generateConsentSchema(dict);
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
    const reCaptchaValidation = await validateReCaptcha(validation.values['g-recaptcha-response']);
    if (!reCaptchaValidation) {
      return {
        status: 'failed',
        message: 'ReCAPTCHA Verification Error',
      };
    }

    const clients = await fetchClientByEmail(validation.values.email);
    if (clients.data.length > 0) {
      return {
        status: 'failed',
        message: dict.quote.uniqueError,
      };
    }

    const response = await strapi
      .post('/api/clients', {
        data: {
          fullname: validation.values.fullname,
          email: validation.values.email,
          phone: validation.values.phone,
        },
      })
      .resolve();

    const json = await response.json();
    const clientId = json?.data?.id;

    if (response.ok) {
      sendNotificationEmail(
        `${validation.values.fullname} - client consent aborgia.com`,
        `
          A client conset form has been submitted by ${validation.values.fullname}.
          Phone: ${validation.values.phone}.
          Email: ${validation.values.email}.

          https://strapi-production-8e4b.up.railway.app/admin/content-manager/collectionType/api::client.client?page=1&pageSize=10&sort=id:DESC
        `,
      );

      return {
        status: 'success',
        values: validation.values,
        clientId,
        message: dict.quote.success,
      };
    }

    return { status: 'failed', message: dict.quote.error };
  } catch (error) {
    console.error('createQuoteRequest error ', error);
    return { status: 'failed', message: dict.quote.error };
  }
}
