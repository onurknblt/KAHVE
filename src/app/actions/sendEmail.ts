"use server";

import { Resend } from "resend";

export async function sendEmailAction(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { error: "TÜM VERİ ALANLARI ZORUNLUDUR." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "onurknblt@gmail.com",
      subject: `DİREKT HAT [${subject}] - ${name}`,
      html: `
        <div style="font-family: 'JetBrains Mono', monospace, Courier, sans-serif; max-width: 600px; margin: 0 auto; border: 4px solid #000; background-color: #FAFAFA; color: #000;">
          <div style="background-color: #B5433C; color: #FFF; padding: 24px; border-bottom: 4px solid #000; text-transform: uppercase;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -1px;">DİREKT HAT // GELEN VERİ</h1>
          </div>
          
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
            <tr>
              <td style="padding: 16px; border-bottom: 2px solid #000; border-right: 2px solid #000; width: 30%; font-weight: bold; text-transform: uppercase;">KİMLİK</td>
              <td style="padding: 16px; border-bottom: 2px solid #000; background: #FFF;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 16px; border-bottom: 2px solid #000; border-right: 2px solid #000; font-weight: bold; text-transform: uppercase;">AĞ</td>
              <td style="padding: 16px; border-bottom: 2px solid #000; background: #FFF;">
                <a href="mailto:${email}" style="color: #B5433C; text-decoration: none; font-weight: bold;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px; border-bottom: 4px solid #000; border-right: 2px solid #000; font-weight: bold; text-transform: uppercase;">KONU</td>
              <td style="padding: 16px; border-bottom: 4px solid #000; font-weight: bold; background: #FFF;">${subject}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 24px; font-size: 16px; line-height: 1.6; white-space: pre-wrap; background: #FFF;">${message}</td>
            </tr>
          </table>

          <div style="padding: 16px; border-top: 4px solid #000; font-size: 12px; font-weight: bold; text-transform: uppercase; text-align: center; background: #E5E5E5;">
            [ SİSTEM TARAFINDAN OTOMATİK OLUŞTURULDU ]
          </div>
        </div>
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    return { error: "İLETİŞİM PROTOKOLÜ BAŞARISIZ." };
  }
}
