// app/contact/actions.ts
"use server";

import { getGmailTransport } from "@/lib/gmail";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const { name, company, email, phone, message } = data;

  if (!name || !company || !email || !phone || !message) {
    return { success: false, error: "All fields are required." };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.GMAIL_USER;
  if (!toEmail || !fromEmail) {
    return { success: false, error: "Contact email not configured." };
  }

  if (!process.env.GMAIL_APP_PASSWORD && !process.env.GMAIL_PASSWORD) {
    return { success: false, error: "Contact email not configured." };
  }

  try {
    const transport = getGmailTransport();
    await transport.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `Demo request from ${name} — ${company}`,
      text: `
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `.trim(),
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message. Please try again or email us directly." };
  }
}
