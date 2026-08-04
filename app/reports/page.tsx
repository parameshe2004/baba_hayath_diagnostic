"use client";

import { useState } from "react";
import { Search, FileText, Download, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ReportsPage() {
  const [searchId, setSearchId] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-bg-main pb-24">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-gradient-royal text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300 mb-3">
            Patient Portal
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Online Diagnostic Reports Download
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
            Access your test results instantly by entering your Booking Reference ID or registered Mobile Number.
          </p>
        </div>
      </section>

      {/* Search Input Box */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
          <form onSubmit={handleSearch} className="space-y-4">
            <label className="block text-xs font-black uppercase tracking-wider text-text-primary">
              Enter Booking ID or Registered Mobile Number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                placeholder="e.g. BHDC-2026-8810 or 8333020667"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="flex-1 px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Find Report
              </button>
            </div>
          </form>

          {/* Results Simulator */}
          {searched && (
            <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider mb-2">
                    Report Ready
                  </span>
                  <h4 className="text-base font-bold text-text-primary">
                    77-Test Health Checkup Package
                  </h4>
                  <p className="text-xs text-slate-500">
                    Patient: Demo Patient • Date: {new Date().toLocaleDateString()}
                  </p>
                </div>

                <a
                  href="/photos/comprehensive-checkup-flyer.jpeg"
                  target="_blank"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-black uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download PDF Report
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
