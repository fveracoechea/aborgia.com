'use server';

import Mailjet from 'node-mailjet';
import { z } from 'zod';

import { reCAPTCHA, strapi } from './api';
import { Dict, getDictionary } from './dictionaries';
import { FormErrors, validateSchema } from './formErrors';

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

type QuoteRquest = z.infer<ReturnType<typeof generateQuoteRequestSchema>>;

const ReCaptchaResponseSchema = z.object({
  success: z.boolean(),
  ['error-codes']: z.array(z.string()).nullable().default(null),
  challenge_ts: z.string(),
  hostname: z.string(),
});

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

const Email = 'aborgiainsurance@gmail.com';

async function sendNotificationEmail(request: QuoteRquest) {
  await mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email,
          Name: 'Noreply Website: Arelys Borgia',
        },
        To: [
          {
            Email: 'f.v.borgia@gmail.com',
            Name: 'Arelys Borgia',
          },
        ],
        Subject: `${request.name} - Quote Request - aborgia.com`,
        TextPart: `
          Phone: ${request.phone}.
          Email: ${request.email}.

          https://strapi-production-8e4b.up.railway.app/admin/content-manager/collectionType/api::quote-request.quote-request?page=1&pageSize=10&sort=id:DESC
        `,
      },
    ],
  });
}

export async function validateReCaptcha(response: FormDataEntryValue | null) {
  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY!,
    response: String(response),
  });

  const json = await reCAPTCHA
    .post(`/siteverify?${params.toString()}`)
    .json(ReCaptchaResponseSchema.parse);

  return json.success;
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
      sendNotificationEmail(validation.values);
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
