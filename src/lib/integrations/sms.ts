type SendSmsParams = {
  to: string;
  body: string;
};

type SendSmsResult = {
  success: boolean;
  placeholder: boolean;
  sid?: string;
};

export async function sendSms(params: SendSmsParams): Promise<SendSmsResult> {
  if (!process.env.TWILIO_ACCOUNT_SID) {
    console.log(`[SMS PLACEHOLDER] To: ${params.to}, Body: ${params.body}`);
    return { success: true, placeholder: true };
  }

  // Wire Twilio here when ready:
  // const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  // const message = await client.messages.create({
  //   to: params.to,
  //   from: process.env.TWILIO_PHONE_NUMBER,
  //   body: params.body,
  // });
  // return { success: true, placeholder: false, sid: message.sid };

  return { success: true, placeholder: true };
}
