// components/Footer.tsx
import Link from "next/link";
import { MapPin } from "lucide-react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/screens", label: "Screens" },
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
      className="border-t"
      style={{
        borderColor: "rgba(180,200,255,0.06)",
        background: "rgba(1,1,8,0.7)",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 — Brand */}
        <div className="md:col-span-1">
          <span
            className="font-display text-2xl tracking-wider"
            style={{ color: "#ff7a1a" }}
          >
            DETOURS
          </span>
          <p className="text-sm text-text-muted mt-2 max-w-xs leading-relaxed">
            Fleet management built for growing Ontario fleets.
          </p>
          <div
            className="inline-flex items-center gap-1.5 mt-4 font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(255,122,26,0.08)",
              border: "1px solid rgba(255,122,26,0.18)",
              color: "#ff7a1a",
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
        style={{ borderColor: "rgba(180,200,255,0.05)" }}
      >
        <p className="font-mono text-xs text-text-muted">
          Built for Ontario trucking operators — 5 to 50 trucks.
        </p>
      </div>
    </footer>
  );
}
