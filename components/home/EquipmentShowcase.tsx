"use client";

import { useState } from "react";
import Image from "next/image";
import { Cpu, Flame, ShieldAlert, CheckCircle2, ArrowRight, X, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const equipment = [
  {
    id: "xl200",
    name: "Erba XL-200",
    subtitle: "Fully Automated Clinical Chemistry Analyzer",
    manufacturer: "Erba Mannheim, Germany",
    image: "/photos/equipment-xl200.jpeg",
    badge: "High Throughput Biochemistry",
    badgeColor: "bg-[#0B3B60]",
    highlights: [
      "200 clinical tests/hour throughput",
      "Routine LFT, KFT & Lipid testing",
      "Sub-microliter pipetting precision",
      "Automated reagent cooling system",
      "Stat sample loading for emergency cases",
    ],
    description: "State-of-the-art clinical chemistry analyzer manufactured by Erba Mannheim. Ensures error-free automated biochemical analysis with zero human error.",
  },
  {
    id: "maglumi",
    name: "Snibe MAGLUMI X3",
    subtitle: "Chemiluminescence Immunoassay (CLIA) System",
    manufacturer: "Snibe Diagnostic",
    image: "/photos/equipment-maglumi.jpeg",
    badge: "NEW CLIA TECHNOLOGY",
    badgeColor: "bg-gradient-to-r from-[#0B3B60] to-[#10B981]",
    isNew: true,
    highlights: [
      "Ultra-sensitive hormone detection",
      "Thyroid (T3, T4, TSH) & Fertility panel",
      "Tumor markers & Cardiac biomarkers",
      "Flash chemiluminescence technology",
      "180 tests/hour immunoassay speed",
    ],
    description: "Next-generation CLIA immunoassay analyzer delivering hospital-grade precision for complex hormonal, immunological, and infection screenings.",
  },
  {
    id: "h560",
    name: "Erba H 560",
    subtitle: "5-Part Differential Hematology Analyzer",
    manufacturer: "Erba Mannheim",
    image: "/photos/equipment-h560.jpeg",
    badge: "MALARIA FLAGGING UPDATE",
    badgeColor: "bg-[#10B981]",
    hasMalariaFlag: true,
    highlights: [
      "Advanced 5-part WBC differential count",
      "Proprietary Malaria Flagging software",
      "Complete hemogram (34 parameters)",
      "High sensitivity platelet counting",
      "Touchscreen operation & micro-sample mode",
    ],
    description: "Features the latest software update with automated Malaria Flagging, enabling early detection of parasitic blood infections alongside complete CBC profiling.",
  },
];

export default function EquipmentShowcase() {
  const [selectedMachine, setSelectedMachine] = useState<typeof equipment[0] | null>(null);

  return (
    <section id="equipment" className="py-16 sm:py-20 bg-[#FAF7F2] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SweetDreamss Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="sweet-section-label justify-center">
              <span>HOSPITAL-GRADE AUTOMATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-[#0B3B60] leading-tight mb-2">
              World-Class Laboratory Equipment
            </h2>
            <p className="text-xs sm:text-sm text-[#7A7068] leading-relaxed font-normal">
              We invest in top-tier fully automated analyzers from Erba Mannheim and Snibe Diagnostics to guarantee accurate, reproducible medical findings.
            </p>
          </div>
        </ScrollReveal>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {equipment.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <div className="sweet-card rounded-2xl p-6 sm:p-7 border border-black/10 bg-white shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden">
                
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm flex items-center gap-1.5 ${item.badgeColor}`}>
                      {item.isNew && <Flame className="w-3.5 h-3.5 fill-current text-amber-300" />}
                      {item.hasMalariaFlag && <ShieldAlert className="w-3.5 h-3.5 fill-current text-emerald-200" />}
                      {item.badge}
                    </span>
                    <Cpu className="w-5 h-5 text-[#10B981]" />
                  </div>

                  {/* Machine Image Box */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#FAF7F2] border border-black/5 flex items-center justify-center p-5 group-hover:bg-emerald-50/40 transition-colors">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Info Text */}
                  <div className="space-y-1.5 mb-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B3B60] font-serif-luxury group-hover:text-[#10B981] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-bold text-[#10B981] uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#7A7068] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="pt-4 border-t border-black/5 space-y-2 mb-5 text-xs text-[#2D2D2D]">
                    {item.highlights.slice(0, 3).map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Specs Trigger */}
                <button
                  onClick={() => setSelectedMachine(item)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0B3B60] hover:bg-[#10B981] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  View Technical Specifications
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Technical Spec Modal */}
      {selectedMachine && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-black/10 rounded-3xl p-6 sm:p-8 max-w-xl w-full text-[#1A1A1A] shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedMachine(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#1A1A1A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#10B981] uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Technical Analyzer Specs
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-1 font-serif-luxury text-[#0B3B60]">
              {selectedMachine.name}
            </h3>
            <p className="text-xs text-[#7A7068] mb-4">{selectedMachine.manufacturer}</p>

            <div className="relative w-full aspect-[16/9] rounded-2xl bg-[#FAF7F2] border border-black/5 mb-5 overflow-hidden">
              <Image
                src={selectedMachine.image}
                alt={selectedMachine.name}
                fill
                className="object-contain p-4"
              />
            </div>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3B60] mb-3">
              Key Capabilities & Features:
            </h4>
            <ul className="space-y-2 mb-6 text-xs text-[#2D2D2D]">
              {selectedMachine.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedMachine(null)}
              className="w-full py-3.5 rounded-full bg-[#0B3B60] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#10B981] transition-colors shadow-md"
            >
              Close Specifications
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
