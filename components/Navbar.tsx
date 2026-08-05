"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  // On non-home pages (like /book, /services, /contact), or when scrolled on home page, use visible light navbar theme with dark text
  const isLightNav = !isHomePage || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/#packages" },
    { name: "Major Tests", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Equipment", href: "/#equipment" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightNav
          ? "bg-[#FAF7F2]/95 backdrop-blur-md py-3.5 border-b border-black/10 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 border border-white/20">
            <Image
              src="/photos/logo.jpeg"
              alt="BHDC Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-base sm:text-lg font-bold font-serif-luxury leading-none transition-colors ${
              isLightNav ? "text-[#0B3B60]" : "text-white"
            }`}>
              Baba Hayaath
            </span>
            <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-none mt-1 ${
              isLightNav ? "text-[#10B981]" : "text-emerald-400"
            }`}>
              Diagnostic Centre
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors relative py-1 group ${
                isLightNav ? "text-[#1A1A1A] hover:text-[#10B981]" : "text-slate-200 hover:text-emerald-300"
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button - BOOK APPOINTMENT */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#0B3B60] to-[#10B981] hover:from-[#061826] hover:to-[#059669] text-white shadow-md hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-3.5 h-3.5" />
            BOOK APPOINTMENT
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            isLightNav ? "bg-black/5 text-[#1A1A1A]" : "bg-white/10 text-[#1A1A1A]"
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-black/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#1A1A1A] hover:text-[#10B981] py-2 border-b border-black/5"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#0B3B60] to-[#10B981] rounded-full shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
