"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-black text-white">
      {/* Full-Cover Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/posh-lab-workspace.png"
          alt="Posh Baba Hayaath Diagnostic Centre Laboratory"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Dark Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-3xl space-y-8">
          
          {/* Subtitle Tag with Emerald Pulse */}
          <ScrollReveal direction="down">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>PREMIUM CLINICAL DIAGNOSTICS — PUTTAPARTHI</span>
            </div>
          </ScrollReveal>

          {/* Editorial Title */}
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.08] text-white font-serif-luxury">
              Where Precision <br />
              Feels Like <span className="italic font-normal text-emerald-400">Care.</span>
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-[1.8] max-w-xl">
              Hospital-grade automation, Erba Biochemistry & Snibe CLIA Immunoassay — curated to bring accurate clinical findings & peace of mind to your family.
            </p>
          </ScrollReveal>

          {/* White Pill Button */}
          <ScrollReveal delay={0.3}>
            <div className="pt-2">
              <Link
                href="/#packages"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-black uppercase tracking-wider bg-white text-[#0B3B60] hover:bg-[#10B981] hover:text-white shadow-2xl transition-all duration-300 group"
              >
                BOOK CHECKUP
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Bottom Scroll Dots */}
      <div className="relative z-10 text-center flex items-center justify-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-slate-400">
        <span className="w-6 h-1 rounded-full bg-emerald-400/80" />
        <span>SCROLL</span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
