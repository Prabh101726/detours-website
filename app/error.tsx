"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Forward to your observability tool of choice
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-xl mx-auto px-8 py-28 text-center">
      <p
        className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
        style={{ color: "#ff7a1a" }}
      >
        Something went wrong
      </p>
      <h1
        className="font-display leading-none mb-4"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
      >
        We hit a bump.
      </h1>
      <p className="text-text-muted mb-8">
        An unexpected error occurred. You can try again, or head back to the
        homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          type="button"
          onClick={reset}
          className="btn-primary inline-flex items-center justify-center px-7 py-3.5 text-base font-bold"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold rounded-xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(180,200,255,0.10)",
            color: "#eef2ff",
          }}
        >
          Go home
        </Link>
      </div>
      {error.digest ? (
        <p
          className="font-mono text-[11px] mt-8"
          style={{ color: "#64748b" }}
        >
          Ref: {error.digest}
        </p>
      ) : null}
    </div>
  );
}
