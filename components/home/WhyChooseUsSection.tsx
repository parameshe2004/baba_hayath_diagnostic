"use client";

import { ShieldCheck, Clock, Award, PhoneCall } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Calibrated Accuracy",
    description: "Fully automated biochemistry and CLIA immunoassay analyzers eliminate human error for reproducible medical findings.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Lab Service",
    description: "Round-the-clock lab facility and sample processing available 365 days a year in Puttaparthi.",
  },
  {
    icon: Award,
    title: "Free Home Sample Collection",
    description: "Experienced phlebotomists visit your home across Puttaparthi for hassle-free sample collection.",
  },
  {
    icon: PhoneCall,
    title: "Digital WhatsApp Reports",
    description: "Receive your validated digital lab reports directly on WhatsApp with fast turnaround times.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-[#FAF7F2] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="sweet-section-label justify-center">
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#0B3B60] leading-tight mb-4">
              Unmatched Clinical Excellence
            </h2>
            <p className="text-base text-[#7A7068] leading-[1.8] font-normal">
              Trusted by thousands of patients and local medical practitioners across Sri Sathya Sai District.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="sweet-card p-8 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-serif-luxury text-[#0B3B60] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#7A7068] leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
