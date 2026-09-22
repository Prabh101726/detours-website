/** Simple in-memory sliding window. Good enough on Vercel for abuse spikes;
 * resets per isolate. Pair with Turnstile for real bot resistance. */
const hits = new Map<string, number[]>();

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 60 * 60 * 1000 }: { limit?: number; windowMs?: number } = {},
): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  const windowStart = now - windowMs;
  const prev = (hits.get(key) ?? []).filter((t) => t > windowStart);

  if (prev.length >= limit) {
    const oldest = prev[0]!;
    const retryAfterSec = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
    hits.set(key, prev);
    return { ok: false, retryAfterSec };
  }

  prev.push(now);
  hits.set(key, prev);
  return { ok: true };
}
