import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
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
    // lucide-react is optimized by default; listed explicitly for clarity
    optimizePackageImports: ["lucide-react"],
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
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
