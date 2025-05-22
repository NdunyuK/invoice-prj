import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const formData = new URLSearchParams(event.body);
  const email = formData.get('email');
  const pdfBase64 = formData.get('pdfBase64');

  if (!email || !pdfBase64) {
    return { statusCode: 400, body: 'Missing email or PDF data' };
  }

  try {
    await resend.emails.send({
      from: 'Your Service <you@domain.com>',
      to: email,
      subject: 'Your Invoice',
      html: '<p>Thank you for your business. Your invoice is attached.</p>',
      attachments: [
        {
          filename: 'invoice.pdf',
          content: pdfBase64,
        },
      ],
    });

    return { statusCode: 200, body: 'Email sent successfully' };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: 'Failed to send email' };
  }
}
