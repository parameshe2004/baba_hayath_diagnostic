import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Cpu, Flame, ShieldAlert, CheckCircle2, ArrowRight, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const equipmentList = [
  {
    name: "Erba XL-200",
    type: "Fully Automated Clinical Chemistry Analyzer",
    image: "/photos/equipment-xl200.jpeg",
    description: "High-throughput biochemistry analyzer engineered by Erba Mannheim. Handles automated LFT, KFT, lipid profiles, and glucose metrics with extreme precision.",
  },
  {
    name: "Erba H 560",
    type: "5-Part Differential Hematology Analyzer",
    image: "/photos/equipment-h560.jpeg",
    badge: "MALARIA FLAGGING UPDATE",
    description: "Features proprietary automated Malaria Flagging software, delivering complete 34-parameter hemograms and 5-part WBC differential counts.",
  },
  {
    name: "Snibe MAGLUMI X3",
    type: "Chemiluminescence Immunoassay (CLIA) System",
    image: "/photos/equipment-maglumi.jpeg",
    badge: "NEW CLIA TECHNOLOGY",
    description: "Ultra-sensitive CLIA immunoassay analyzer for thyroid profiles, cardiac markers, tumor markers, and hormone evaluations.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-gradient-royal text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300 mb-3">
            About Baba Hayaath Diagnostics
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Precision Diagnostics in Puttaparthi
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Dedicated to bringing hospital-grade lab automation to the local community with uncompromised accuracy, speed, and compassion.
          </p>
        </div>
      </section>

      {/* Posh Lab Interior Highlight */}
      <section className="section-padding overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual Image Render Box */}
            <ScrollReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/photos/posh-lab-workspace.png"
                    alt="Posh Baba Hayaath Diagnostic Centre Interior"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-text-primary">
                      100% Spotless Sterilized Suite
                    </p>
                    <p className="text-[11px] text-text-secondary">
                      Calibrated equipment & rigorous daily quality control protocols.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Story & Philosophy */}
            <ScrollReveal direction="left">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 mb-4">
                  <span className="block w-6 h-px bg-emerald-600" />
                  Our Story & Mission
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-6">
                  Bringing Advanced Lab Automation to Your Doorstep
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed text-xs sm:text-sm">
                  <p>
                    Established in 2024, <strong className="text-text-primary">Baba Hayaath Diagnostic Centre (BHDC)</strong> was founded in Puttaparthi with a vision: to bridge the gap between high-end hospital-grade diagnostics and local patient affordability.
                  </p>
                  <p>
                    Located conveniently on Main Road opposite SSS General Hospital, our facility is equipped with fully automated analyzer technology from world-leading medical brands including <strong className="text-text-primary">Erba Mannheim</strong> and <strong className="text-text-primary">Snibe Diagnostics</strong>.
                  </p>
                  <p>
                    Whether it&apos;s a routine Complete Blood Count (CBC) or a 77-parameter comprehensive body screening, our team ensures every test is processed with uncompromising precision, rapid turnaround time, and compassionate patient support.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200 text-xs font-bold text-text-primary">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    24/7 Emergency Service
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Free Doorstep Collection
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    WhatsApp Digital Reports
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Expert Technicians
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Advanced Equipment Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Automated Technology"
            title="Our Advanced Laboratory Equipment"
            description="Fully automated analyzers eliminate human error and ensure reproducible clinical results."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipmentList.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 0.15}>
                <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 shadow-xl flex flex-col justify-between h-full group">
                  <div>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-700 flex items-center justify-center p-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {item.badge && (
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
