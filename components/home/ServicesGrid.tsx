"use client";

import Link from "next/link";
import { Search, Clock, TestTube, ArrowRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { diagnosticTests } from "@/lib/data/services";

// Filter exactly 9 major tests that patients frequently search for
const majorTestIds = [
  "cbc",
  "hba1c-diabetic",
  "lipid-profile",
  "lft",
  "kft",
  "thyroid-profile",
  "iron-profile",
  "urine-routine",
  "vitamin-b12-d3",
];

const majorTests = diagnosticTests.filter((test) => majorTestIds.includes(test.id));

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-[#FAF7F2] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="sweet-section-label justify-center">
              <span>MAJOR CLINICAL TESTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-[#0B3B60] leading-tight mb-2">
              9 Most Frequently Requested Tests
            </h2>
            <p className="text-xs sm:text-sm text-[#7A7068] leading-relaxed font-normal">
              Essential diagnostic tests processed daily with calibrated automated accuracy and same-day reporting.
            </p>
          </div>
        </ScrollReveal>

        {/* 9 Major Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {majorTests.map((test, index) => (
            <ScrollReveal key={test.id} delay={index * 0.05}>
              <div className="sweet-card p-6 bg-white border border-black/10 transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                <div>
                  {/* Category & Price */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-[#10B981] border border-emerald-200">
                      {test.category}
                    </span>
                    <span className="text-xl font-bold font-serif-luxury text-[#0B3B60]">
                      ₹{test.price}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif-luxury text-[#1A1A1A] mb-1 group-hover:text-[#10B981] transition-colors">
                    {test.name}
                  </h3>
                  {test.teluguName && (
                    <p className="text-xs font-bold text-[#10B981] mb-2">
                      {test.teluguName}
                    </p>
                  )}
                  <p className="text-xs text-[#7A7068] leading-relaxed mb-4">
                    {test.description}
                  </p>

                  {/* Included Parameters Preview */}
                  {test.parameters && (
                    <div className="mb-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                        Key Parameters ({test.parameters.length}):
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {test.parameters.slice(0, 4).map((p) => (
                          <span
                            key={p}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-black/5 text-[#2D2D2D] font-medium"
                          >
                            {p}
                          </span>
                        ))}
                        {test.parameters.length > 4 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-50 text-[#10B981] font-bold">
                            +{test.parameters.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Details Bar & CTA */}
                <div>
                  <div className="flex items-center justify-between gap-2 py-2 px-3 rounded-lg bg-[#FAF7F2] border border-black/5 text-[11px] text-[#7A7068] mb-4">
                    <div className="flex items-center gap-1">
                      <TestTube className="w-3.5 h-3.5 text-[#0B3B60]" />
                      <span>{test.sampleType}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>{test.turnaroundTime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/book?test=${test.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#0B3B60] hover:bg-[#10B981] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                  >
                    Book Test Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Tests & Book CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1A1A1A] hover:bg-[#10B981] text-white shadow-md transition-all hover:scale-105"
          >
            View All Tests & Book Appointment
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
