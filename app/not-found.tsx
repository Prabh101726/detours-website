import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-8 py-28 text-center">
      <p
        className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
        style={{ color: "#ff7a1a" }}
      >
        404 — Page not found
      </p>
      <h1
        className="font-display leading-none mb-4"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
      >
        Took a wrong turn.
      </h1>
      <p className="text-text-muted mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="btn-primary inline-flex items-center justify-center px-7 py-3.5 text-base font-bold"
        >
          Go home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold rounded-xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(180,200,255,0.10)",
            color: "#eef2ff",
          }}
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
