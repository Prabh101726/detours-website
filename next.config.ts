import type { NextConfig } from "next";
import path from "node:path";

/**
 * Enforcing CSP. Keep Next/Vercel/Turnstile allowances.
 * If something breaks in production, check DevTools console for blocked URIs
 * and widen the matching directive — do not remove frame-ancestors.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  // Next hydration + Vercel Analytics / Speed Insights / live preview + Turnstile
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://vercel.live https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://vercel.live https://challenges.cloudflare.com",
  "worker-src 'self' blob:",
  "child-src 'self' blob:",
  "frame-src 'self' https://challenges.cloudflare.com https://vercel.live",
  "media-src 'self' blob:",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  reactCompiler: true,
  // Pin the workspace root so Turbopack doesn't climb to a sibling lockfile
  turbopack: {
    root: path.join(__dirname),
  },
  compiler: {
    // Strip console.* in production (keep error + warn for debuggability)
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "gsap",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
  async headers() {
    return [
      {
        // Long cache for public assets (Next already handles /_next/static)
        source: "/:path(.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff2))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
