'use server';

import { z } from 'zod';

import { reCAPTCHA } from 'shared/api';

const ReCaptchaResponseSchema = z.object({
  success: z.boolean(),
  ['error-codes']: z.array(z.string()).nullable().default(null),
  challenge_ts: z.string(),
  hostname: z.string(),
});

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
