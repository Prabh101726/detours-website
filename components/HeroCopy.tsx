import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function HeroCopy() {
  return (
    <div className="flex-1 max-w-xl">
      <div className="hero-rise inline-flex items-center gap-2 mb-7" style={{ animationDelay: "0s" }}>
        <span
          className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.20)",
            color: "#22c55e",
          }}
        >
          <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
          Ontario fleet-ready
        </span>
      </div>

      <h1
        className="hero-rise font-display leading-none mb-6"
        style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", animationDelay: "0.1s" }}
      >
        Run Your Fleet.{" "}
        <span style={{ color: "#ff7a1a" }}>Not Paperwork.</span>
      </h1>

      <p
        className="hero-rise text-lg leading-relaxed mb-9 max-w-md"
        style={{ color: "#64748b", animationDelay: "0.22s" }}
      >
        Dispatch, POD, fuel logs, driver payroll, and HST invoices — built for
        growing Ontario fleets.
      </p>

      <div className="hero-rise flex flex-col sm:flex-row gap-3" style={{ animationDelay: "0.34s" }}>
        <Link
          href="/contact"
          className="btn-primary inline-flex items-center justify-center px-7 py-3.5 text-base font-bold"
        >
          Book a Demo →
        </Link>
      </div>
    </div>
  );
}
