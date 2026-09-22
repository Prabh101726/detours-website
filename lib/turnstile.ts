/**
 * Verify a Cloudflare Turnstile token when TURNSTILE_SECRET_KEY is set.
 * Without keys, verification is skipped (rate limit + honeypot still apply).
 */
export async function verifyTurnstile(
  token: string | undefined,
  ip: string | undefined,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "[contact] TURNSTILE_SECRET_KEY missing — bot check skipped; set keys in Vercel.",
      );
    }
    return { ok: true };
  }

  if (!token) {
    return { ok: false, error: "Please complete the security check." };
  }

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body,
      },
    );
    const data = (await res.json()) as { success?: boolean };
    if (!data.success) {
      return { ok: false, error: "Security check failed. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Security check unavailable. Please try again." };
  }
}
