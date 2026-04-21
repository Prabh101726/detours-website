"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/features", label: "Features" },
  { href: "/screens", label: "Screens" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full pt-[env(safe-area-inset-top,0px)]"
      style={{ background: "#010108" }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl tracking-wider transition-colors duration-150"
          style={{ color: "#ff7a1a" }}
        >
          DETOURS
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium relative pb-0.5 ${
                pathname === l.href ? "active" : ""
              }`}
            >
              {l.label}
              {pathname === l.href && (
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full"
                  style={{ background: "#ff7a1a" }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="btn-primary text-sm px-5 py-2 inline-flex items-center"
          >
            Book a Demo →
          </Link>
        </div>

        <button
          className="md:hidden cursor-pointer nav-link p-1 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden mobile-menu ${open ? "mobile-menu-open" : ""}`}
        aria-hidden={!open}
      >
        <div
          className="border-t px-6 py-5 flex flex-col gap-5"
          style={{
            borderColor: "rgba(180,200,255,0.06)",
            background: "#010108",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={`nav-link text-sm font-medium ${
                pathname === l.href ? "active" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="btn-primary text-sm px-5 py-2.5 text-center"
          >
            Book a Demo →
          </Link>
        </div>
      </div>
    </header>
  );
}
