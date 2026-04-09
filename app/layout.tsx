import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className="bg-[#060c18] text-text-primary antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
