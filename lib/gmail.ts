import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

export function getGmailTransport(): nodemailer.Transporter {
  if (transporter) return transporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD ?? process.env.GMAIL_PASSWORD;

  if (!user || !pass) {
    throw new Error("Gmail SMTP is not configured (GMAIL_USER / GMAIL_APP_PASSWORD).");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  return transporter;
}
