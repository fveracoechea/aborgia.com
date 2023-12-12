import { sendClientConsent } from 'shared/actions/sentClientConsent';

export async function POST(request: Request) {
  const formData = await request.formData();
  const result = await sendClientConsent(formData);
  return Response.json(result);
}
