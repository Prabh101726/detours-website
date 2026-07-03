// components/Footer.tsx
import Link from "next/link";
import { MapPin } from "lucide-react";

const navLinks = [
  { href: "/fleet-owners", label: "For Owners" },
  { href: "/features", label: "Features" },
  { href: "/screens", label: "Screens" },
  { href: "/ai-automation", label: "AI Automation" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/account-agreement", label: "Account Agreement" },
  { href: "/driver-disclosure", label: "Driver Disclosure" },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="relative z-10 border-t"
      style={{
        borderColor: "rgba(20,18,14,0.08)",
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(18px) saturate(1.3)",
        WebkitBackdropFilter: "blur(18px) saturate(1.3)",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 — Brand */}
        <div className="md:col-span-1">
          <span
            className="font-display text-2xl tracking-wider"
            style={{ color: "#ff6a00" }}
          >
            DETOURS
          </span>
          <p className="text-sm text-text-muted mt-2 max-w-xs leading-relaxed">
            Fleet management built for growing Ontario fleets.
          </p>
          <div
            className="inline-flex items-center gap-1.5 mt-4 font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(255,106,0,0.08)",
              border: "1px solid rgba(255,106,0,0.18)",
              color: "#ff6a00",
            }}
          >
            <MapPin className="w-3 h-3" aria-hidden="true" />
            Built in Ontario
          </div>
        </div>

        {/* Column 2 — Navigation */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
            Navigation
          </p>
          <nav aria-label="Footer" className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm nav-link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3 — Legal */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
            Legal
          </p>
          <nav aria-label="Legal" className="flex flex-col gap-3">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm nav-link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
            Contact
          </p>
          <Link href="/contact" className="text-sm nav-link">
            Book a demo →
          </Link>
          <p className="text-sm text-text-muted mt-6 leading-relaxed">
            © {new Date().getFullYear()} Detours.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-5xl mx-auto px-8 lg:px-16 border-t pt-6 pb-8 text-center"
        style={{ borderColor: "rgba(20,18,14,0.05)" }}
      >
        <p className="font-mono text-xs text-text-muted">
          Built for Ontario trucking operators — 5 to 500 trucks.
        </p>
      </div>
    </footer>
  );
}
