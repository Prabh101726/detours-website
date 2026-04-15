// components/ContactForm.tsx
"use client";
import { useState } from "react";
import { sendContactEmail } from "@/app/contact/actions";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    const result = await sendContactEmail(form);
    if (result.success) {
      setState("success");
    } else {
      setState("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  };

  if (state === "success") {
    return (
      <div className="glass p-8 text-center">
        <span className="text-4xl block mb-4">✅</span>
        <h3 className="text-xl font-bold text-text-primary mb-2">Message sent!</h3>
        <p className="text-text-muted">We typically reply within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-8 flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted/50 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Company</label>
          <input
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
        <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Email</label>
        <input
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
        <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Phone</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          required
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted/50 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your fleet — how many trucks, what you're looking for..."
          required
          rows={4}
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted/50 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors resize-none"
        />
      </div>

      {state === "error" ? (
        <p className="text-sm text-red-400">{errorMsg}</p>
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
