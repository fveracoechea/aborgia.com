import { NextRequest, NextResponse } from 'next/server';

import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

type Data = {
  email: string;
  firstName: string;
  lastName?: string;
  age?: number;
  phone: string;
  insurance: string;
  additionalInformation?: string;
};

type ApiResponse = {
  error: boolean;
};

const getEmailText = (data: Data) => {
  const { firstName, lastName, email, age, insurance, additionalInformation, phone } = data;
  return `
  New Quote request from: ${firstName}

  Email: ${email}

  First Name: ${firstName}

  Last Name: ${lastName || 'none'}

  Age:  ${age || 'none'}

  Phone: ${phone || 'none'}

  Insurance: ${insurance || 'none'}

  Additional Information:


  ${additionalInformation || 'none'}
  `;
};

export async function POST(request: NextRequest) {
  try {
    const values = await request.json();

    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'aborgiainsurance@gmail.com',
            Name: 'Noreply Website: Arelys Borgia',
          },
          To: [
            {
              Email: 'aborgiainsurance@gmail.com',
              Name: 'Arelys Borgia',
            },
          ],
          Subject: `${values.firstName} ${values}`,
          TextPart: getEmailText(values),

        },
      ],
    });

    return NextResponse.json({ error: false });
  } catch (error) {
    console.error('error ', error);
    return NextResponse.json({ error: true });
  }
}
