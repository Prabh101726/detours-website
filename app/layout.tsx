import type { Metadata } from "next";
import { Space_Grotesk, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Detours — Fleet Management for Growing Ontario Fleets",
  description:
    "Dispatch, POD, fuel logs, driver payroll, and HST invoices. Built for growing Ontario trucking fleets.",
  keywords: ["fleet management", "trucking software", "Ontario", "dispatch", "POD", "invoicing"],
  openGraph: {
    title: "Detours — Fleet Management for Growing Ontario Fleets",
    description:
      "Dispatch, POD, fuel logs, driver payroll, and HST invoices. Built for growing Ontario trucking fleets.",
    type: "website",
  },
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
      <body className="bg-[#010108] text-text-primary antialiased overflow-x-hidden">
        <Navbar />
        <main className="relative z-10 pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)+1.5rem))]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
