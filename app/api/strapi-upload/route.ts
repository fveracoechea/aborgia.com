import { uploadFile } from 'shared/actions/uploadFile';

export async function POST(request: Request) {
  const formData = await request.formData();
  await uploadFile(formData);
  return Response.json({ success: true });
}
