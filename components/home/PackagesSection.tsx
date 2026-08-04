"use client";

import Link from "next/link";
import { Check, Star, ArrowRight, Tag, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const packages = [
  {
    id: "basic",
    name: "BHDC Basic Health Checkup",
    price: 1399,
    originalPrice: 1900,
    savings: 501,
    tag: "Essential Screening",
    description: "6 essential profiles covering key vital health indicators.",
    highlighted: false,
    features: [
      "CBC Complete Blood Count (34 Parameters)",
      "Diabetic Profile (Blood Sugar Evaluation)",
      "Lipid Profile (Cholesterol & Heart Check)",
      "Liver Profile (LFT Liver Function Assessment)",
      "Kidney Profile (KFT Renal Health Check)",
      "Urine Routine (Urinary Infection Screening)",
      "Free Doorstep Home Sample Collection",
      "Fast & Reliable Same-Day Digital Reports",
    ],
    cta: "Book Basic Checkup (₹1,399)",
    href: "/book?package=basic",
  },
  {
    id: "comprehensive",
    name: "BHDC Health Checkup Package",
    price: 2999,
    originalPrice: 4500,
    savings: 1501,
    testCount: 77,
    tag: "BEST VALUE — 77 TESTS ONLY",
    description: "77 tests across 10 profiles — our most thorough comprehensive body evaluation.",
    highlighted: true,
    features: [
      "CBC Complete Hemogram (34 Tests)",
      "Lipid Profile (10 Tests)",
      "Liver Profile (12 Tests)",
      "Kidney Profile (9 Tests)",
      "Iron Deficiency Profile (4 Tests)",
      "Electrolytes Profile (2 Tests)",
      "Diabetic Screen & HbA1c (2 Tests)",
      "Pancreas Profile (2 Tests)",
      "Thyroid Profile T3, T4, TSH (3 Tests)",
      "Urinary & Body Health Indicators",
      "Free Home Sample Collection Included",
      "Expert Doctor Consultation Guidance",
    ],
    cta: "Book 77-Test Package (₹2,999)",
    href: "/book?package=comprehensive",
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="py-16 sm:py-20 bg-[#FAF7F2] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="sweet-section-label justify-center">
              <span>HEALTH PACKAGES & PRICING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-[#0B3B60] leading-tight mb-2">
              Preventative Screening Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#7A7068] leading-relaxed font-normal">
              Comprehensive health checkups with free home sample collection across Puttaparthi.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.1}>
              <div
                className={`relative h-full rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  pkg.highlighted
                    ? "bg-[#0B3B60] text-white border-amber-400/40 shadow-xl scale-[1.01]"
                    : "bg-white text-[#1A1A1A] border-black/10 hover:border-black/20 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Floating Tag */}
                {pkg.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                      <Star className="w-3 h-3 fill-current text-black" />
                      {pkg.tag}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Title */}
                  <div className="mb-4">
                    {!pkg.highlighted && (
                      <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/5 text-[#7A7068] border border-black/10 mb-2">
                        {pkg.tag}
                      </span>
                    )}
                    <h3 className={`text-xl sm:text-2xl font-bold mb-1 font-serif-luxury ${pkg.highlighted ? "text-white" : "text-[#0B3B60]"}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${pkg.highlighted ? "text-slate-200" : "text-[#7A7068]"}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div className={`mb-5 p-4 rounded-xl border ${pkg.highlighted ? "bg-white/10 border-white/10" : "bg-[#FAF7F2] border-black/5"}`}>
                    <div className="flex items-baseline gap-2.5">
                      <span className={`text-3xl sm:text-4xl font-bold tracking-tight font-serif-luxury ${pkg.highlighted ? "text-amber-300" : "text-[#0B3B60]"}`}>
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </span>
                      <span className={`text-sm line-through font-semibold ${pkg.highlighted ? "text-slate-300" : "text-[#7A7068]"}`}>
                        ₹{pkg.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.highlighted ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30" : "bg-emerald-50 text-emerald-800 border-emerald-200"}`}>
                        <Tag className="w-3 h-3" />
                        Save ₹{pkg.savings.toLocaleString("en-IN")}
                      </span>
                      {pkg.testCount && (
                        <span className={`text-[11px] font-bold ${pkg.highlighted ? "text-amber-300" : "text-amber-600"} flex items-center gap-1`}>
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          77 Tests Included
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className={`space-y-2 mb-6 text-xs font-medium ${pkg.highlighted ? "text-slate-200" : "text-[#2D2D2D]"}`}>
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                            pkg.highlighted ? "text-amber-300" : "text-[#10B981]"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href={pkg.href}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 group shadow-sm ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black hover:scale-[1.01]"
                      : "bg-[#0B3B60] hover:bg-[#10B981] text-white hover:scale-[1.01]"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
