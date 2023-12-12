import { NextRequest, NextResponse } from 'next/server';

import { uploadFile } from 'shared/actions/uploadFile';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  await uploadFile(formData);
  return NextResponse.json({ success: true });
}
