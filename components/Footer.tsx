// components/Footer.tsx
import Link from "next/link";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{
        borderColor: "rgba(180,200,255,0.06)",
        background: "rgba(1,1,8,0.7)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span
            className="font-display text-2xl tracking-wider"
            style={{ color: "#ff7a1a" }}
          >
            DETOURS
          </span>
          <p className="text-sm text-text-muted mt-1 max-w-xs">
            Fleet management built for growing Ontario fleets.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm nav-link"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} Detours. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
