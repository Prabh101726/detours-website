/** Strip CR/LF and other control chars so values cannot inject SMTP headers. */
export function sanitizeHeaderValue(value: string, maxLen = 120): string {
  return value
    .replace(/[\r\n\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

/** Body text: drop NULs / other C0 controls except tab/newline. */
export function sanitizeBodyText(value: string, maxLen = 5000): string {
  return value
    .replace(/\u0000/g, "")
    .replace(/[\u0001-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim()
    .slice(0, maxLen);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isPlausibleEmail(value: string): boolean {
  return EMAIL_RE.test(value) && value.length <= 254;
}
