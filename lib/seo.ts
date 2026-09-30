import type { Metadata } from "next";

/**
 * Normalize page titles so the layout template does not produce
 * "Features — Detours Fleet Management | Detours".
 * Result: "Features | Detours" for both <title> and og:title.
 */
function absolutePageTitle(title: Metadata["title"]): string | undefined {
  if (typeof title !== "string") return undefined;
  const trimmed = title.trim();
  if (!trimmed) return undefined;

  // Already in "X | Detours" form
  if (/\| Detours$/i.test(trimmed)) return trimmed;

  // "Features — Detours Fleet Management" → "Features"
  const withoutBrand = trimmed
    .replace(/\s*[—–\-]\s*Detours(?:\s+Fleet Management)?$/i, "")
    .trim();

  // Homepage-style long brand titles stay as-is
  if (/^Detours\b/i.test(withoutBrand)) return withoutBrand;

  return `${withoutBrand} | Detours`;
}

/**
 * Attach a route-local canonical + og:url (+ clean absolute title).
 * Call from every page so the root layout never pins every URL to "/".
 */
export function withCanonical(
  path: `/${string}` | "/",
  meta: Metadata = {},
): Metadata {
  const canonical = path === "/" ? "/" : path;
  const absoluteTitle = absolutePageTitle(meta.title);

  return {
    ...meta,
    ...(absoluteTitle
      ? {
          title: { absolute: absoluteTitle },
        }
      : {}),
    alternates: {
      ...meta.alternates,
      canonical,
    },
    openGraph: {
      ...meta.openGraph,
      url: canonical,
      ...(absoluteTitle ? { title: absoluteTitle } : {}),
    },
    twitter: {
      ...meta.twitter,
      ...(absoluteTitle ? { title: absoluteTitle } : {}),
    },
  };
}
