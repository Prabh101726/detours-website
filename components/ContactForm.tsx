// components/ContactForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { sendContactEmail } from "@/app/contact/actions";

type FormState = "idle" | "loading" | "success" | "error";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!SITE_KEY || !widgetRef.current) return;

    const mount = () => {
      if (!widgetRef.current || !window.turnstile || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: SITE_KEY,
        theme: "light",
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    if (window.turnstile) {
      mount();
      return;
    }

    window.onTurnstileLoad = mount;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="challenges.cloudflare.com/turnstile"]',
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (SITE_KEY && !turnstileToken) {
      setState("error");
      setErrorMsg("Please complete the security check.");
      return;
    }
    setState("loading");
    const result = await sendContactEmail({ ...form, turnstileToken });
    if (result.success) {
      setState("success");
    } else {
      setState("error");
      setErrorMsg(result.error ?? "Something went wrong.");
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    }
  };

  if (state === "success") {
    return (
      <div className="glass p-8 text-center">
        <span className="text-4xl block mb-4" aria-hidden="true">
          ✅
        </span>
        <h3 className="text-xl font-bold text-text-primary mb-2">
          Message sent!
        </h3>
        <p className="text-text-muted">
          We typically reply within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-8 flex flex-col gap-5">
      {/* Honeypot — hidden from users, bots often fill it */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-name"
            className="text-xs font-bold uppercase tracking-wider text-text-muted"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted/50 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-company"
            className="text-xs font-bold uppercase tracking-wider text-text-muted"
          >
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Fleet or company name"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted/50 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-email"
          className="text-xs font-bold uppercase tracking-wider text-text-muted"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted/50 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-phone"
          className="text-xs font-bold uppercase tracking-wider text-text-muted"
        >
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          required
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted/50 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="text-xs font-bold uppercase tracking-wider text-text-muted"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your fleet — how many trucks, what you're looking for..."
          required
          rows={4}
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted/50 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors resize-none"
        />
      </div>

      {SITE_KEY ? <div ref={widgetRef} className="min-h-[65px]" /> : null}

      {state === "error" ? (
        <p className="text-sm text-red-400" role="alert">
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "loading"}
        className="bg-brand-orange text-white font-bold py-3.5 rounded-xl hover:bg-brand-orange-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Sending..." : "Send Message →"}
      </button>
      <p className="text-xs text-text-muted text-center">
        We typically reply within 1 business day.
      </p>
    </form>
  );
}
