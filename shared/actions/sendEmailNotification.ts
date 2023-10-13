import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

export async function sendNotificationEmail(subject: string, content: string) {
  try {
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
            ,
            {
              Email: 'veracoecheafrancisco@gmail.com',
              Name: 'Francisco Veracoechea',
            },
          ],
          Subject: subject,
          TextPart: content,
          HTMLPart: content,
        },
      ],
    });
  } catch (error) {
    console.log('EMAIL ERROR');
    console.log(error instanceof Error && error.message);
  }
}
