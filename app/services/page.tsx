"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, TestTube, ArrowRight, ShieldCheck, Filter } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { diagnosticTests, categories } from "@/lib/data/services";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTests = useMemo(() => {
    return diagnosticTests.filter((test) => {
      const matchesSearch =
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (test.teluguName && test.teluguName.includes(searchQuery)) ||
        test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (test.parameters &&
          test.parameters.some((p) =>
            p.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      const matchesCategory =
        selectedCategory === "all" || test.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-bg-main pb-24">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-gradient-royal text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300 mb-3">
            Diagnostic Test Directory & Menu
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Comprehensive Clinical Testing
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Filter our lab testing menu by category, sample requirements, and turnaround time. All individual tests can be booked for home collection or clinic walk-in.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Section */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search test name (e.g. CBC, Lipid, HbA1c, Thyroid, మూత్రం)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs sm:text-sm font-medium transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-text-primary"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-3 rounded-full text-xs font-black whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTests.map((test, index) => (
            <ScrollReveal key={test.id} delay={index * 0.04}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-50 text-primary">
                      {test.category}
                    </span>
                    <span className="text-2xl font-black text-text-primary">
                      ₹{test.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-text-primary mb-1 group-hover:text-primary transition-colors">
                    {test.name}
                  </h3>
                  {test.teluguName && (
                    <p className="text-xs font-bold text-emerald-600 mb-3">
                      {test.teluguName}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {test.description}
                  </p>

                  {/* Included Parameters */}
                  {test.parameters && (
                    <div className="mb-6">
                      <p className="text-[11px] font-black uppercase tracking-wider text-text-primary mb-2">
                        Included Parameters ({test.parameters.length}):
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {test.parameters.map((p) => (
                          <span
                            key={p}
                            className="text-[11px] px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 font-medium text-text-secondary"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sample details box */}
                  <div className="bg-slate-50 rounded-2xl p-4 space-y-2 mb-6 border border-slate-100 text-xs text-text-secondary">
                    <div className="flex items-center gap-2">
                      <TestTube className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>
                        <strong className="text-text-primary">Sample:</strong> {test.sampleType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>
                        <strong className="text-text-primary">Turnaround:</strong> {test.turnaroundTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>
                        <strong className="text-text-primary">Preparation:</strong> {test.preparation}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/book?test=${test.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-md transition-all group-hover:scale-[1.01]"
                >
                  Book This Test
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
