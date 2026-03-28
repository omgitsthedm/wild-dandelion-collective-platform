type SendEmailParams = {
  to: string;
  subject: string;
  html: string;
};

type SendEmailResult = {
  success: boolean;
  placeholder: boolean;
  id?: string;
};

export async function sendEmail(params: SendEmailParams): Promise<SendEmailResult> {
  if (!process.env.RESEND_API_KEY) {
    console.log(`[EMAIL PLACEHOLDER] To: ${params.to}, Subject: ${params.subject}`);
    return { success: true, placeholder: true };
  }

  // Wire Resend here when ready:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // const { data, error } = await resend.emails.send({ from: '...', ...params });
  // return { success: !error, placeholder: false, id: data?.id };

  return { success: true, placeholder: true };
}
