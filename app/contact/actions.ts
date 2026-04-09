// app/contact/actions.ts
"use server";
import { resend } from "@/lib/resend";

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const { name, company, phone, message } = data;

  if (!name || !company || !phone || !message) {
    return { success: false, error: "All fields are required." };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    return { success: false, error: "Contact email not configured." };
  }

  try {
    await resend.emails.send({
      from: "Detours Website <onboarding@resend.dev>",
      to: toEmail,
      subject: `Demo request from ${name} — ${company}`,
      text: `
Name: ${name}
Company: ${company}
Phone: ${phone}

Message:
${message}
      `.trim(),
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message. Please try WhatsApp instead." };
  }
}
