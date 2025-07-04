'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function sendContact(formData: FormData) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  try {
    const res = await resend.emails.send({
      from: 'Akanksha <onboarding@resend.dev>',  // or your custom domain
      to: 'akankshavadnerkar00@gmail.com',                      // 🔁 your actual receiving address
      subject: `[Contact] ${parsed.data.subject}`,
      html: `
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Message:</strong><br/>${parsed.data.message}</p>
      `,
      replyTo: parsed.data.email, // ✅ optional, but helpful
    });

    console.log("📤 Email sent response:", res);

    return { success: true };
  } catch (error) {
    console.error("❌ Email send failed:", error);
    return { success: false, errors: { general: ['Failed to send email.'] } };
  }
}
