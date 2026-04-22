// app/account-agreement/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Account Agreement — Detours Fleet Management",
  description: "The service contract between Detours Fleet Management and your company.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-xl text-text-primary mb-3">{title}</h2>
      <div className="text-text-muted leading-relaxed text-sm space-y-2">{children}</div>
    </div>
  );
}

export default function AccountAgreementPage() {
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
          Account Agreement
        </h1>
        <p className="text-text-muted text-sm">
          Last updated: April 22, 2026 · Governing law: Ontario, Canada
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <GlassCard hover={false} className="p-8">
          <Section title="1. Parties and Services">
            <p>
              This Account Agreement (&quot;Agreement&quot;) is entered into between Detours Fleet Management
              (&quot;Provider&quot;) and the company or individual creating the account (&quot;Customer&quot;).
              The Provider will make the Detours fleet management platform available to the Customer
              during the term of this Agreement.
            </p>
          </Section>

          <Section title="2. Trial and Subscription">
            <p>
              The Customer receives a 14-day free trial with full access. After the trial period,
              continued use requires a paid subscription. The Customer is responsible for providing
              valid payment information before the trial expires. Subscription details, pricing, and
              billing cycles are set out at detours-app.com/pricing.
            </p>
          </Section>

          <Section title="3. Data Ownership and Processing">
            <p>
              The Customer owns all data they enter into Detours (drivers, vehicles, POD records,
              invoices, settlements). The Provider processes this data solely to deliver the contracted
              services. The Provider will not sell, share, or use Customer data for any other purpose.
              Upon account termination, data is available for export for 30 days, then permanently deleted.
            </p>
          </Section>

          <Section title="4. Customer Responsibilities">
            <p>The Customer is responsible for:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Ensuring all users of their account (drivers, dispatchers) have consented to data collection</li>
              <li>Keeping login credentials secure</li>
              <li>Providing accurate company and billing information</li>
              <li>Ensuring their use of Detours complies with all applicable Ontario employment and privacy laws</li>
            </ul>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>
              The Provider is not liable for the accuracy of data entered by users (POD records,
              fuel receipts, odometer readings). The Provider&apos;s total liability is limited to fees paid
              in the 3 months prior to any claim. The Provider is not liable for indirect, incidental,
              or consequential damages.
            </p>
          </Section>

          <Section title="6. Governing Law">
            <p>
              This Agreement is governed by the laws of Ontario, Canada. Any disputes will be resolved
              in the courts of Ontario.
            </p>
          </Section>

          <Section title="7. Termination">
            <p>
              Either party may terminate this Agreement with 30 days written notice. The Provider may
              terminate immediately for non-payment or violation of these terms. Upon termination, the
              Customer retains access to their data for 30 days for export.
            </p>
          </Section>

          <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(180,200,255,0.06)" }}>
            <p className="text-text-muted text-xs">
              Questions about this Agreement?{" "}
              <a href="/contact" className="text-brand-orange hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
