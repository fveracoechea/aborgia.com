import { NextRequest, NextResponse } from 'next/server';

import { createQuoteRequest } from 'shared/actions/createQuoteRequest';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const result = await createQuoteRequest(formData);
  return NextResponse.json(result);
}
