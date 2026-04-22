// app/driver-disclosure/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Driver Disclosure Statement — Detours Fleet Management",
  description: "What personal data is collected about drivers using the Detours platform, and how it is used.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        className="font-mono text-xs uppercase tracking-[0.18em] mb-3"
        style={{ color: "#ff7a1a" }}
      >
        {title}
      </h2>
      <div className="text-text-muted leading-relaxed text-sm space-y-2">{children}</div>
    </div>
  );
}

export default function DriverDisclosurePage() {
  return (
    <div className="relative isolate max-w-3xl mx-auto px-8 lg:px-12 pt-10 pb-28">
      <AnimatedSection instant className="mb-12 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Legal
        </p>
        <h1
          className="font-display leading-[1.08] mb-4"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
        >
          Driver Disclosure Statement
        </h1>
        <p className="text-text-muted text-sm">
          Effective April 22, 2026 · Issued by Detours Fleet Management · PIPEDA compliant
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <GlassCard hover={false} className="p-8">
          <Section title="What data is collected about you">
            <p>
              When you use the Detours platform as a driver or contractor for your company,
              the following personal data is collected:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>
                <strong className="text-text-primary">Phone number</strong> — used as your unique
                login identifier and for dispatch communications
              </li>
              <li>
                <strong className="text-text-primary">GPS location</strong> — collected only when
                you enable tracking in the app; used for live fleet visibility by your company owner.
                GPS data is retained for 90 days then deleted.
              </li>
              <li>
                <strong className="text-text-primary">Proof of Delivery (POD) records</strong> —
                delivery addresses, materials, quantities, photos, and your name as the submitting
                driver. Retained for 7 years (CRA compliance).
              </li>
              <li>
                <strong className="text-text-primary">Truck assignment and haul records</strong> —
                truck number, load cycles, timestamps.
              </li>
              <li>
                <strong className="text-text-primary">Fuel expense records</strong> — if you submit
                fuel receipts through the app.
              </li>
              <li>
                <strong className="text-text-primary">Vehicle inspection records</strong> —
                checklists and photos submitted during pre-trip inspections.
              </li>
            </ul>
          </Section>

          <Section title="How your data is used">
            <p>Your data is used exclusively for:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Fleet dispatch and job coordination</li>
              <li>Proof of delivery documentation for customers and billing</li>
              <li>Driver payroll and settlement calculations</li>
              <li>Vehicle and compliance record-keeping</li>
              <li>Government-required record retention (CRA 7-year requirement)</li>
            </ul>
          </Section>

          <Section title="Who can see your data">
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-text-primary">Your company owner</strong> — full access to
                all records under your company account
              </li>
              <li>
                <strong className="text-text-primary">Dispatchers</strong> — operational data only
                (dispatch, PODs, haul records); no access to your payroll figures
              </li>
              <li>
                <strong className="text-text-primary">Detours Fleet Management</strong> — access for
                technical support only; never sold to third parties
              </li>
            </ul>
          </Section>

          <Section title="GPS Tracking">
            <p>
              GPS tracking is always opt-in. You control this in the app under your profile.
              Your company owner may require GPS tracking as a condition of your work arrangement —
              this should be discussed with your employer separately. GPS tracking only runs while
              the app is active and you have enabled it.
            </p>
          </Section>

          <Section title="Your rights">
            <p>Under PIPEDA, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Request a copy of your personal data held by Detours</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account data (subject to CRA retention requirements)</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact:{" "}
              <a href="/contact" className="text-brand-orange hover:underline">
                detours-app.com/contact
              </a>
            </p>
          </Section>

          <Section title="Data storage">
            <p>
              All data is stored in Canada (Supabase — Toronto region) and is not transferred
              outside of Canada except as required by Twilio for SMS verification codes.
            </p>
          </Section>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
