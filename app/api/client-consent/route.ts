import { NextRequest, NextResponse } from 'next/server';

import { sendClientConsent } from 'shared/actions/sentClientConsent';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const result = await sendClientConsent(formData);
  return NextResponse.json(result);
}
