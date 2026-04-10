// app/contact/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Detours Fleet Management",
  description: "Book a demo or send us a message. We reply within 1 business day.",
};

export default function ContactPage() {
  return (
    <div className="relative isolate max-w-xl mx-auto px-8 pt-10 pb-28">
      <AnimatedSection instant className="text-center mb-12 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Contact
        </p>
        <h1
          className="font-display leading-[1.08] mb-6"
          style={{ fontSize: "clamp(2.8rem, 6vw, 4rem)" }}
        >
          Get in touch
        </h1>
        <p className="text-text-muted">
          Book a demo, ask a question, or just say hi. We&apos;re quick to respond.
        </p>
      </AnimatedSection>

      {/* Email form */}
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    </div>
  );
}
