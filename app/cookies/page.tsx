import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = withCanonical("/cookies", {
  title: "Cookie Notice — Detours Fleet Management",
  description:
    "How Detours uses cookies and similar technologies on detours-app.com, and how you can control them.",
});

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 lg:px-12 pt-10 pb-28">
      <div className="mb-12 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff6a00" }}
        >
          Legal
        </p>
        <h1
          className="font-display leading-[1.08] mb-4"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", color: "#16161a" }}
        >
          Cookie Notice
        </h1>
        <p style={{ color: "#64748b", fontSize: 14 }}>
          Last updated: September 21, 2026 &middot; Governing law: Ontario /
          Quebec, Canada
        </p>
      </div>

      <div
        className="glass p-8 space-y-6"
        style={{ color: "#2a2a30", lineHeight: 1.7, fontSize: 14 }}
      >
        <p>
          This Cookie Notice explains how Detours (&ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar
          technologies on{" "}
          <a href="https://detours-app.com" className="text-brand-orange-ink">
            detours-app.com
          </a>
          . It supplements our{" "}
          <Link href="/privacy" className="text-brand-orange-ink underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className="font-bold text-text-primary text-base pt-2">
          What are cookies?
        </h2>
        <p>
          Cookies are small text files stored on your device. We also use
          similar technologies such as local storage and pixels that help the
          site function or measure performance.
        </p>

        <h2 className="font-bold text-text-primary text-base pt-2">
          Cookies we use
        </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential / functional.</strong> Required for security,
              load balancing, and basic site operation. These cannot be switched
              off through this notice.
            </li>
            <li>
              <strong>Analytics (Vercel Analytics &amp; Speed Insights).</strong>{" "}
              We use Vercel&apos;s first-party analytics and Core Web Vitals
              reporting to understand page performance (for example LCP, INP, and
              CLS) and aggregate traffic patterns. These tools are configured for
              product improvement, not advertising or cross-site tracking.
            </li>
          </ul>

        <h2 className="font-bold text-text-primary text-base pt-2">
          How to control cookies
        </h2>
        <p>
          You can delete or block cookies in your browser settings. Blocking
          essential cookies may affect how the site works. For analytics, you
          can also use browser controls or extensions that limit measurement
          scripts, and (where available) your device&apos;s tracking
          preferences.
        </p>
        <p>
          Under Quebec&apos;s Law 25 and Canadian privacy expectations, you may
          withdraw consent to non-essential cookies at any time by adjusting
          your browser settings or contacting us.
        </p>

        <h2 className="font-bold text-text-primary text-base pt-2">
          Contact
        </h2>
        <p>
          Questions about cookies or this notice:{" "}
          <a
            href="mailto:contact@detours-app.com"
            className="text-brand-orange-ink underline"
          >
            contact@detours-app.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
