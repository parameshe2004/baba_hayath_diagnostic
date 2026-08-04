import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baba Hayaath Diagnostic Centre (BHDC) | Puttaparthi",
  description: "Pioneering clinical lab automation in Puttaparthi. 24/7 Service, Free Home Sample Collection, ₹1,399 Basic & ₹2,999 77-Test Health Checkups.",
  keywords: ["Diagnostic Centre Puttaparthi", "BHDC", "Baba Hayaath Diagnostics", "Health Checkup ₹2999", "Erba XL-200", "Snibe Maglumi X3", "Erba H560"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <body className="bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
