"use client";

import { useState } from "react";
import { CheckCircle2, Calendar, MapPin, Phone, Home, ArrowRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { diagnosticTests } from "@/lib/data/services";

export default function BookPage() {
  const [selectedType, setSelectedType] = useState<"comprehensive" | "basic" | "individual">("comprehensive");
  const [selectedTestId, setSelectedTestId] = useState<string>("cbc");
  const [collectionType, setCollectionType] = useState<"home" | "clinic">("home");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "Male",
    address: "",
    date: "",
    notes: "",
  });

  const getPrice = () => {
    if (selectedType === "comprehensive") return 2999;
    if (selectedType === "basic") return 1399;
    const test = diagnosticTests.find((t) => t.id === selectedTestId);
    return test ? test.price : 400;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1A1A] pb-24 pt-28">
      {/* Header Banner */}
      <section className="relative py-12 lg:py-16 bg-[#0B3B60] text-white overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300 mb-2">
            Online Appointment Booking
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-luxury text-white mb-3">
            Schedule Diagnostic Test or Home Collection
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Book health checkup packages or select any individual clinical test mentioned in our lab menu. Free home sample collection across Puttaparthi.
          </p>
        </div>
      </section>

      {/* Main Booking Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="sweet-card p-6 sm:p-10 bg-white border border-black/10 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold font-serif-luxury text-[#0B3B60]">
                Appointment Request Confirmed!
              </h2>
              <p className="text-sm text-[#7A7068] max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-[#1A1A1A]">{formData.name}</strong>. Our lab team will contact you shortly at <strong className="text-[#1A1A1A]">{formData.phone}</strong> to confirm your appointment and sample collection slot.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-black/5 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-[#7A7068] font-medium">Selected Test / Package:</span>
                  <span className="font-bold text-[#1A1A1A] uppercase">
                    {selectedType === "comprehensive"
                      ? "77-Test Package (₹2,999)"
                      : selectedType === "basic"
                      ? "Basic Checkup (₹1,399)"
                      : diagnosticTests.find((t) => t.id === selectedTestId)?.name}
                  </span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-[#7A7068] font-medium">Collection Mode:</span>
                  <span className="font-bold text-[#10B981] uppercase">
                    {collectionType === "home" ? "Free Home Collection" : "Clinic Walk-In"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-[#7A7068] font-medium">Preferred Date:</span>
                  <span className="font-bold text-[#1A1A1A]">{formData.date}</span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-1">
                  <span>Total Payable:</span>
                  <span className="text-[#10B981]">₹{getPrice()}</span>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3.5 rounded-full bg-[#0B3B60] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#10B981] transition-all shadow-md"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Selection */}
              <div>
                <h3 className="text-sm font-bold text-[#0B3B60] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0B3B60] text-white text-xs flex items-center justify-center font-bold">1</span>
                  Select Health Package or Individual Clinical Test
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div
                    onClick={() => setSelectedType("comprehensive")}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedType === "comprehensive"
                        ? "border-[#10B981] bg-emerald-50/40 shadow-sm"
                        : "border-black/10 bg-white hover:border-black/20"
                    }`}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#10B981] block mb-1">BEST VALUE</span>
                    <h4 className="text-base font-bold text-[#0B3B60]">77-Test Package</h4>
                    <p className="text-xl font-bold text-[#1A1A1A] mt-1 font-serif-luxury">₹2,999</p>
                  </div>

                  <div
                    onClick={() => setSelectedType("basic")}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedType === "basic"
                        ? "border-[#10B981] bg-emerald-50/40 shadow-sm"
                        : "border-black/10 bg-white hover:border-black/20"
                    }`}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#0B3B60] block mb-1">ESSENTIAL</span>
                    <h4 className="text-base font-bold text-[#0B3B60]">Basic Checkup</h4>
                    <p className="text-xl font-bold text-[#1A1A1A] mt-1 font-serif-luxury">₹1,399</p>
                  </div>

                  <div
                    onClick={() => setSelectedType("individual")}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedType === "individual"
                        ? "border-[#10B981] bg-emerald-50/40 shadow-sm"
                        : "border-black/10 bg-white hover:border-black/20"
                    }`}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#7A7068] block mb-1">INDIVIDUAL</span>
                    <h4 className="text-base font-bold text-[#0B3B60]">Select Specific Test</h4>
                    <p className="text-xs text-[#7A7068] mt-1">From ₹100 onwards</p>
                  </div>
                </div>

                {/* Dropdown for Every Single Test mentioned across posters */}
                {selectedType === "individual" && (
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-black/10">
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Choose Individual Diagnostic Test / Profile (Mentioned in Posters):
                    </label>
                    <select
                      value={selectedTestId}
                      onChange={(e) => setSelectedTestId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-xs sm:text-sm font-medium text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    >
                      {diagnosticTests.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} {t.teluguName ? `(${t.teluguName})` : ""} — ₹{t.price}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Step 2: Collection Mode */}
              <div>
                <h3 className="text-sm font-bold text-[#0B3B60] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0B3B60] text-white text-xs flex items-center justify-center font-bold">2</span>
                  Choose Sample Collection Mode
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setCollectionType("home")}
                    className={`p-4 rounded-2xl border-2 cursor-pointer flex items-center gap-4 transition-all ${
                      collectionType === "home"
                        ? "border-[#10B981] bg-emerald-50/40 shadow-sm"
                        : "border-black/10 hover:border-black/20"
                    }`}
                  >
                    <Home className="w-8 h-8 text-[#10B981] flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0B3B60]">
                        FREE Doorstep Home Collection
                      </h4>
                      <p className="text-xs text-[#7A7068]">
                        Lab phlebotomist visits your home in Puttaparthi
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => setCollectionType("clinic")}
                    className={`p-4 rounded-2xl border-2 cursor-pointer flex items-center gap-4 transition-all ${
                      collectionType === "clinic"
                        ? "border-[#10B981] bg-emerald-50/40 shadow-sm"
                        : "border-black/10 hover:border-black/20"
                    }`}
                  >
                    <MapPin className="w-8 h-8 text-[#0B3B60] flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0B3B60]">
                        Visit Lab Facility (Walk-In)
                      </h4>
                      <p className="text-xs text-[#7A7068]">
                        Opposite SSS General Hospital, Main Road
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Patient Information */}
              <div>
                <h3 className="text-sm font-bold text-[#0B3B60] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0B3B60] text-white text-xs flex items-center justify-center font-bold">3</span>
                  Patient Details & Preferred Date
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4.5 py-3 rounded-xl border border-black/10 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 bg-[#FAF7F2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 8333020667"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4.5 py-3 rounded-xl border border-black/10 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 bg-[#FAF7F2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      Age & Gender *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        required
                        placeholder="Age (e.g. 42)"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full px-4.5 py-3 rounded-xl border border-black/10 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 bg-[#FAF7F2]"
                      />
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full px-4.5 py-3 rounded-xl border border-black/10 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 bg-[#FAF7F2] text-[#1A1A1A]"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4.5 py-3 rounded-xl border border-black/10 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 bg-[#FAF7F2] text-[#1A1A1A]"
                    />
                  </div>

                  {collectionType === "home" && (
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        Complete Home Address (Puttaparthi) *
                      </label>
                      <textarea
                        rows={2}
                        required
                        placeholder="House no, Street name, Landmark near Baba Hayaath Lodge / SSS General Hospital..."
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4.5 py-3 rounded-xl border border-black/10 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 bg-[#FAF7F2]"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#7A7068] block">Total Amount Payable:</span>
                  <span className="text-3xl font-bold font-serif-luxury text-[#10B981]">₹{getPrice()}</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#0B3B60] hover:bg-[#10B981] text-white text-xs font-black uppercase tracking-wider shadow-md transition-all hover:scale-105"
                >
                  Confirm & Request Appointment
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
