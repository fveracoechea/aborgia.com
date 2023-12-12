import { createQuoteRequest } from 'shared/actions/createQuoteRequest';

export async function POST(request: Request) {
  const formData = await request.formData();
  const result = await createQuoteRequest(formData);
  return Response.json(result);
}
