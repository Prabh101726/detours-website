import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WebVitalsReporter from "@/components/WebVitalsReporter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  preload: false,
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://detoursfleet.com";

export const viewport: Viewport = {
  themeColor: "#010108",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Detours — Fleet Management for Growing Ontario Fleets",
    template: "%s | Detours",
  },
  description:
    "Dispatch, POD, fuel logs, driver payroll, and HST invoices. Built for growing Ontario trucking fleets.",
  applicationName: "Detours",
  keywords: [
    "fleet management",
    "trucking software",
    "Ontario trucking",
    "dispatch software",
    "proof of delivery",
    "HST invoicing",
    "driver payroll",
    "MTO compliance",
  ],
  authors: [{ name: "Detours" }],
  creator: "Detours",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Detours",
    title: "Detours — Fleet Management for Growing Ontario Fleets",
    description:
      "Dispatch, POD, fuel logs, driver payroll, and HST invoices. Built for growing Ontario trucking fleets.",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Detours — Fleet Management for Growing Ontario Fleets",
    description:
      "Dispatch, POD, fuel logs, driver payroll, and HST invoices. Built for growing Ontario trucking fleets.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Detours",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Fleet management for growing Ontario trucking fleets. Dispatch, POD, fuel logs, driver payroll, and HST invoicing in one app.",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CAD",
    description: "30-day free trial. No credit card required.",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Ontario, Canada" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${bebasNeue.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#010108] text-text-primary antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="overflow-x-hidden">
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
        <Analytics mode="production" />
        <SpeedInsights />
        <WebVitalsReporter />
      </body>
    </html>
  );
}
