"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF7F2] text-[#1A1A1A] border-t border-black/10 pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Col 1: Brand Logo */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md">
                <Image
                  src="/photos/logo.jpeg"
                  alt="BHDC Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold font-serif-luxury text-[#0B3B60] leading-none">
                  Baba Hayaath
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#10B981] leading-none mt-1">
                  Diagnostic Centre
                </span>
              </div>
            </div>

            <p className="text-xs text-[#7A7068] leading-[1.8]">
              Puttaparthi&apos;s premium destination for automated clinical diagnostics. Making every test accurate & accessible since 2024.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Col 2: QUICK LINKS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3B60] mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 text-xs text-[#7A7068] font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "Packages", href: "/#packages" },
                { name: "About Us", href: "/#about" },
                { name: "Why Choose Us", href: "/#why-us" },
                { name: "Patient Portal", href: "/reports" },
                { name: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#10B981] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: VISIT US */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3B60] mb-6">
              VISIT US
            </h4>

            <div className="flex items-start gap-3 text-xs text-[#7A7068]">
              <MapPin className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
              <span>
                Baba Hayaath Diagnostic Centre, Main Road, Opp. SSS General Hospital, Puttaparthi - 515134
              </span>
            </div>

            <div className="flex items-start gap-3 text-xs text-[#7A7068]">
              <Phone className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p>+91 83330 20667</p>
                <p>+91 83400 30073</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#7A7068]">
              <Mail className="w-4 h-4 text-[#10B981] flex-shrink-0" />
              <a href="mailto:bhdcptp@gmail.com" className="hover:text-[#10B981] transition-colors">
                bhdcptp@gmail.com
              </a>
            </div>
          </div>

          {/* Col 4: CONNECT WITH US */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3B60] mb-6">
              CONNECT WITH US
            </h4>

            <p className="text-xs text-[#7A7068] leading-[1.8]">
              Have questions about our health checkups? Send us a message on WhatsApp and we&apos;ll get back to you right away.
            </p>

            <a
              href="https://wa.me/918333020667?text=Hello%20BHDC%20Diagnostic%20Centre"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              CHAT ON WHATSAPP →
            </a>
          </div>

        </div>

        {/* Bottom Centered Copyright Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#0B3B60]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Baba Hayaath Diagnostic Centre. All rights reserved. OM SRI SAI RAM.
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-emerald-100 hover:bg-emerald-200 text-[#10B981] flex items-center justify-center transition-all shadow-sm"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
