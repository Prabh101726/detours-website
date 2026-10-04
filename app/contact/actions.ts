// app/contact/actions.ts
"use server";

import { headers } from "next/headers";
import { getGmailTransport } from "@/lib/gmail";
import { rateLimit } from "@/lib/rateLimit";
import {
  isPlausibleEmail,
  sanitizeBodyText,
  sanitizeHeaderValue,
} from "@/lib/sanitize";
import { verifyTurnstile } from "@/lib/turnstile";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  /** Honeypot — must stay empty */
  website?: string;
  turnstileToken?: string;
}

function clientIp(h: Headers): string {
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  return h.get("x-real-ip") || "unknown";
}

export async function sendContactEmail(
  data: ContactFormData,
): Promise<{ success: boolean; error?: string }> {
  const { website, turnstileToken } = data;

  // Bots that fill every field trip the honeypot — fail closed silently.
  if (website && website.trim() !== "") {
    return { success: true };
  }

  const name = sanitizeHeaderValue(data.name ?? "", 80);
  const company = sanitizeHeaderValue(data.company ?? "", 120);
  const email = sanitizeHeaderValue(data.email ?? "", 254);
  const phone = sanitizeHeaderValue(data.phone ?? "", 40);
  const message = sanitizeBodyText(data.message ?? "", 5000);

  if (!name || !company || !email || !phone || !message) {
    return { success: false, error: "All fields are required." };
  }

  if (!isPlausibleEmail(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const h = await headers();
  const ip = sanitizeHeaderValue(clientIp(h), 64);

  const limited = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60 * 60 * 1000 });
  if (!limited.ok) {
    return {
      success: false,
      error: `Too many requests. Try again in about ${Math.ceil(limited.retryAfterSec / 60)} minutes.`,
    };
  }

  const captcha = await verifyTurnstile(turnstileToken, ip);
  if (!captcha.ok) {
    return { success: false, error: captcha.error };
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
      replyTo: email,
      subject: `Demo request from ${name} — ${company}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `IP: ${ip}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
    return { success: true };
  } catch {
    return {
      success: false,
      error: "Failed to send message. Please try again or email us directly.",
    };
  }
}
