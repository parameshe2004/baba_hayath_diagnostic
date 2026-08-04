"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FAF7F2] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Card with Floating Stats Badge */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right">
              <div className="relative rounded-[2rem] overflow-hidden bg-black shadow-2xl p-2 group">
                <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/photos/posh-lab-workspace.png"
                    alt="Baba Hayaath Diagnostic Centre Facility"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating White Stats Badge Box */}
                <div className="bg-white rounded-2xl p-5 shadow-2xl mt-4 border border-black/5 grid grid-cols-3 gap-2 text-center">
                  <div className="border-r border-black/10 pr-2">
                    <p className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#0B3B60]">
                      SINCE 2024
                    </p>
                    <p className="text-[10px] font-bold text-[#7A7068] uppercase tracking-wider">
                      YEARS OF TRUST
                    </p>
                  </div>
                  <div className="border-r border-black/10 px-2">
                    <p className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#10B981]">
                      5,000+
                    </p>
                    <p className="text-[10px] font-bold text-[#7A7068] uppercase tracking-wider">
                      HAPPY PATIENTS
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#0B3B60]">
                      77+
                    </p>
                    <p className="text-[10px] font-bold text-[#7A7068] uppercase tracking-wider">
                      CLINICAL TESTS
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: SweetDreamss Text Content with BHDC Blue/Green Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left">
              <div className="sweet-section-label">
                <span>ABOUT US</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#0B3B60] leading-[1.15] mb-6">
                Where Comfort Meets Precision
              </h2>

              <div className="space-y-4 text-base text-[#2D2D2D] leading-[1.8] font-normal">
                <p>
                  When <strong className="text-[#0B3B60]">Baba Hayaath Diagnostic Centre</strong> first opened its doors in 2024 in Puttaparthi, its primary offering was pathology and routine blood analysis. Later on, it achieved its vision by constructing a brand-new, specialized diagnostic facility in South India, complete with fully automated equipment from <strong className="text-[#10B981]">Erba Mannheim</strong> and <strong className="text-[#10B981]">Snibe Diagnostics</strong>.
                </p>

                <p>
                  Following rapid growth, <strong className="text-[#0B3B60]">Baba Hayaath Diagnostic Centre</strong> built its own exclusive laboratory suite opposite SSS General Hospital, expanding into comprehensive wellness screenings like <strong className="text-[#10B981]">77-Test Packages</strong>, <strong className="text-[#10B981]">Lipid Profiles</strong>, <strong className="text-[#10B981]">Liver & Kidney Panels</strong>, and <strong className="text-[#10B981]">Thyroid CLIA Immunoassay</strong>.
                </p>

                <p>
                  <strong className="text-[#0B3B60]">Baba Hayaath Diagnostic Centre</strong> supplies hospital-grade accuracy to transform healthcare for residential and local patient communities across Puttaparthi.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
