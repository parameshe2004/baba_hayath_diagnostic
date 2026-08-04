"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ShieldCheck, Eye, Layers } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PoshWorkspaceSection() {
  const [activeTab, setActiveTab] = useState<"posh" | "real">("posh");

  const realPhotos = [
    { src: "/photos/lab-interior-1.jpeg", label: "Microscopic Pathology Station" },
    { src: "/photos/lab-interior-2.jpeg", label: "Reception & Diagnostic Desk" },
    { src: "/photos/lab-interior-3.jpeg", label: "Automated Chemistry Bench" },
    { src: "/photos/lab-interior-4.jpeg", label: "Entrance & Facility Overview" },
  ];

  return (
    <section id="workspace" className="py-24 bg-[#F9F7F4] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SweetDreams Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-label justify-center">
              <span>Posh Workspace Showcase</span>
            </div>
            <h2 className="section-title">
              State-of-the-Art Laboratory Suite
            </h2>
            <p className="text-base text-[#7A7068] leading-[1.8] font-normal">
              We&apos;ve combined hospital-grade equipment layout with a spotless, modern architectural environment designed for precision, hygiene, and patient comfort.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-white border border-black/10 shadow-sm">
            <button
              onClick={() => setActiveTab("posh")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "posh"
                  ? "bg-[#1A1A1A] text-white shadow-sm"
                  : "text-[#7A7068] hover:text-[#1A1A1A]"
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Posh Cleaned 3D Render
            </button>

            <button
              onClick={() => setActiveTab("real")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "real"
                  ? "bg-[#1A1A1A] text-white shadow-sm"
                  : "text-[#7A7068] hover:text-[#1A1A1A]"
              }`}
            >
              <Layers className="w-4 h-4 text-emerald-600" />
              Real Lab Interior Views
            </button>
          </div>
        </div>

        {/* Content View */}
        {activeTab === "posh" ? (
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden border border-black/10 bg-white shadow-xl p-4 lg:p-6">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden group">
                <Image
                  src="/photos/posh-lab-workspace.png"
                  alt="Posh Cleaned BHDC Laboratory Render"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Floating Badges */}
                <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                  <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-700 text-white shadow-lg flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Pristine Clean Environment
                  </span>
                  <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 text-slate-100 backdrop-blur-md border border-white/10">
                    Teal & Cyan Custom Cabinetry • Glass Partition Desk
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-serif-luxury">
                      Baba Hayaath Diagnostic Centre — High-Tech Suite
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                      Featuring fully calibrated Erba XL-200 biochemistry, Erba H560 5-part hematology with malaria flagging, and Snibe Maglumi X3 chemiluminescence systems.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                    <CheckCircle2 className="w-4 h-4" />
                    100% Spotless & Sterilized
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realPhotos.map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 bg-white shadow-md group">
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <p className="text-xs font-bold text-white flex items-center gap-2">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      {photo.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
