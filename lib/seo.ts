import type { Metadata } from "next";

/**
 * Attach a route-local canonical + og:url. Call from every page so the root
 * layout never pins every URL to "/".
 */
export function withCanonical(
  path: `/${string}` | "/",
  meta: Metadata = {},
): Metadata {
  const canonical = path === "/" ? "/" : path;
  return {
    ...meta,
    alternates: {
      ...meta.alternates,
      canonical,
    },
    openGraph: {
      ...meta.openGraph,
      url: canonical,
    },
  };
}
