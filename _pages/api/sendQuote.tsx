import type { NextApiRequest, NextApiResponse } from 'next';
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

const getEmailHtml = (data: Data) => {
  const { firstName, lastName, email, age, insurance, additionalInformation, phone } = data;
  return `
  <h3 style="color: #c26dbc">
  New Quote request from: ${firstName}
  </h3>
  <p><b style="color: #3cacae">Email: </b> ${email}</p>
  <p><b style="color: #3cacae">First Name: </b> ${firstName}</p>
  <p><b style="color: #3cacae">Last Name: </b> ${lastName || 'none'}</p>
  <p><b style="color: #3cacae">Age: </b> ${age || 'none'}</p>
  <p><b style="color: #3cacae">Phone: </b> ${phone || 'none'}</p>
  <p><b style="color: #3cacae">Insurance: </b> ${insurance || 'none'}</p>
  <p>
  <b style="color: #3cacae">Additional Information: </b>
  </p>
  <p>${additionalInformation || 'none'}</p>
  `;
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

const sendQuote = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
  if (req.method !== 'POST') {
    res.status(200).json({ error: true });
    return;
  }

  try {
    const values = req.body;
    console.log('values ', values);

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
          Subject: `New Quote requested from: ${values.firstName}`,
          TextPart: getEmailText(values),
          HTMLPart: getEmailHtml(values),
        },
      ],
    });

    res.status(200).json({ error: false });
  } catch (error) {
    console.log('error ', error);
    res.status(200).json({ error: true });
  }
};

export default sendQuote;
