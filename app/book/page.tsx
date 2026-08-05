"use client";

import { useState, useEffect, useRef, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  MapPin,
  Home,
  ArrowRight,
  Check,
  Search,
  Sparkles,
  MessageSquare,
  Smartphone,
} from "lucide-react";
import { diagnosticTests, DiagnosticTest } from "@/lib/data/services";

function BookFormContent() {
  const searchParams = useSearchParams();
  const paramTest = searchParams.get("test") || searchParams.get("tests");
  const paramPackage = searchParams.get("package");

  const formRef = useRef<HTMLDivElement>(null);

  const [selectedType, setSelectedType] = useState<"comprehensive" | "basic" | "individual">("comprehensive");
  const [selectedTestIds, setSelectedTestIds] = useState<string[]>(["cbc"]);
  const [collectionType, setCollectionType] = useState<"home" | "clinic">("home");
  const [submitted, setSubmitted] = useState(false);

  const [testSearchQuery, setTestSearchQuery] = useState("");
  const [selectedTestCategory, setSelectedTestCategory] = useState("all");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "Male",
    address: "",
    date: "",
    notes: "",
  });

  // Automatically process query parameters from URL when user lands on page
  useEffect(() => {
    if (paramPackage === "comprehensive" || paramPackage === "basic") {
      setSelectedType(paramPackage);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else if (paramTest) {
      setSelectedType("individual");
      const parsedIds = paramTest
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      
      // Verify parsed IDs exist in diagnosticTests
      const validIds = parsedIds.filter((id) =>
        diagnosticTests.some((t) => t.id === id)
      );

      if (validIds.length > 0) {
        setSelectedTestIds(validIds);
      } else {
        setSelectedTestIds(["cbc"]);
      }

      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [paramTest, paramPackage]);

  const toggleTestSelection = (id: string) => {
    setErrorMessage("");
    setSelectedTestIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearAllSelected = () => {
    setSelectedTestIds([]);
  };

  const getPrice = () => {
    if (selectedType === "comprehensive") return 2999;
    if (selectedType === "basic") return 1399;
    if (selectedTestIds.length === 0) return 0;
    return selectedTestIds.reduce((total, id) => {
      const t = diagnosticTests.find((item) => item.id === id);
      return total + (t ? t.price : 0);
    }, 0);
  };

  const selectedTestObjects = useMemo(() => {
    return selectedTestIds
      .map((id) => diagnosticTests.find((t) => t.id === id))
      .filter(Boolean) as DiagnosticTest[];
  }, [selectedTestIds]);

  // Sort tests so selected tests always appear at the top of the checklist
  const displayedTests = useMemo(() => {
    const filtered = diagnosticTests.filter((test) => {
      const matchesSearch =
        test.name.toLowerCase().includes(testSearchQuery.toLowerCase()) ||
        (test.teluguName && test.teluguName.includes(testSearchQuery)) ||
        test.description.toLowerCase().includes(testSearchQuery.toLowerCase()) ||
        (test.profileName && test.profileName.toLowerCase().includes(testSearchQuery.toLowerCase())) ||
        (test.parameters &&
          test.parameters.some((p) =>
            p.toLowerCase().includes(testSearchQuery.toLowerCase())
          ));

      let matchesCategory = true;
      if (selectedTestCategory === "Profiles") {
        matchesCategory = !test.isIndividualTest;
      } else if (selectedTestCategory !== "all") {
        matchesCategory = test.category === selectedTestCategory;
      }

      return matchesSearch && matchesCategory;
    });

    // Selected items pinned to top
    return filtered.sort((a, b) => {
      const aSel = selectedTestIds.includes(a.id);
      const bSel = selectedTestIds.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return 0;
    });
  }, [testSearchQuery, selectedTestCategory, selectedTestIds]);

  // Generate formatted message text for WhatsApp and SMS to Lab 9390529597
  const generateMessageText = () => {
    const testDetails =
      selectedType === "comprehensive"
        ? "• 77-Test Comprehensive Health Checkup Package (₹2,999)"
        : selectedType === "basic"
        ? "• BHDC Basic Health Checkup (₹1,399)"
        : selectedTestObjects
            .map((t, i) => `${i + 1}. ${t.name} ${t.teluguName ? `(${t.teluguName})` : ""} - ₹${t.price}`)
            .join("\n");

    const modeText =
      collectionType === "home"
        ? "Free Doorstep Home Collection"
        : "Clinic Walk-In (Opp SSS Hospital)";

    return `🏥 *BABA HAYAATH DIAGNOSTIC CENTRE*
📍 *NEW APPOINTMENT BOOKING REQUEST*

👤 *Patient Name:* ${formData.name}
📱 *Patient Mobile:* ${formData.phone}
👤 *Age / Gender:* ${formData.age} Yrs / ${formData.gender}

🧪 *Selected Tests / Package:*
${testDetails}

💰 *Total Amount Payable:* ₹${getPrice()}
🚗 *Sample Collection Mode:* ${modeText}
📅 *Preferred Date:* ${formData.date}
${collectionType === "home" && formData.address ? `🏠 *Address:* ${formData.address}` : ""}

Please confirm appointment booking & time slot. Thank you!`;
  };

  const getLabWaUrl = () => {
    const msg = generateMessageText();
    return `https://api.whatsapp.com/send?phone=919390529597&text=${encodeURIComponent(msg)}`;
  };

  const getLabSmsUrl = () => {
    const msg = generateMessageText();
    return `sms:+919390529597?body=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType === "individual" && selectedTestIds.length === 0) {
      setErrorMessage("Please select at least one clinical test to proceed.");
      return;
    }

    // Register booking in backend API
    try {
      await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName: formData.name,
          phone: formData.phone,
          age: formData.age,
          gender: formData.gender,
          address: formData.address,
          preferredDate: formData.date,
          selectedType,
          selectedTests: selectedTestObjects.map((t) => ({
            id: t.id,
            name: t.name,
            price: t.price,
          })),
          totalPrice: getPrice(),
          collectionType,
        }),
      });
    } catch (err) {
      console.error("Failed to post appointment API:", err);
    }

    // Automatically send booking details via WhatsApp to Lab number 9390529597
    window.open(getLabWaUrl(), "_blank");

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
            Book health checkup packages or select multiple individual clinical tests from our lab menu. Free home sample collection across Puttaparthi.
          </p>
        </div>
      </section>

      {/* Main Booking Form Container */}
      <div ref={formRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="sweet-card p-6 sm:p-10 bg-white border border-black/10 shadow-xl">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold font-serif-luxury text-[#0B3B60]">
                Appointment Request Confirmed!
              </h2>
              <p className="text-sm text-[#7A7068] max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-[#1A1A1A]">{formData.name}</strong>. Your appointment request has been submitted and sent to our lab team at <strong className="text-[#0B3B60]">9390529597</strong>.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-black/5 text-left max-w-lg mx-auto space-y-3 text-xs">
                <div className="border-b border-black/5 pb-2">
                  <span className="text-[#7A7068] font-medium block mb-1">Selected Package / Tests:</span>
                  {selectedType === "comprehensive" ? (
                    <span className="font-bold text-[#0B3B60] uppercase">
                      77-Test Comprehensive Package (₹2,999)
                    </span>
                  ) : selectedType === "basic" ? (
                    <span className="font-bold text-[#0B3B60] uppercase">
                      BHDC Basic Health Checkup (₹1,399)
                    </span>
                  ) : (
                    <div className="space-y-1 mt-1">
                      <p className="font-bold text-[#0B3B60] uppercase text-[11px]">
                        {selectedTestObjects.length} Test{selectedTestObjects.length > 1 ? "s" : ""} Selected:
                      </p>
                      <ul className="space-y-1.5 pt-1">
                        {selectedTestObjects.map((t, idx) => (
                          <li key={t.id} className="flex justify-between items-center text-xs bg-white p-2 rounded-lg border border-black/5">
                            <span className="font-medium text-[#1A1A1A]">
                              {idx + 1}. {t.name} {t.teluguName ? `(${t.teluguName})` : ""}
                            </span>
                            <span className="font-bold text-[#10B981]">₹{t.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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

                {collectionType === "home" && formData.address && (
                  <div className="border-b border-black/5 pb-2">
                    <span className="text-[#7A7068] font-medium block">Address:</span>
                    <span className="font-medium text-[#1A1A1A]">{formData.address}</span>
                  </div>
                )}

                <div className="flex justify-between text-base font-bold pt-1">
                  <span>Total Amount Payable:</span>
                  <span className="text-[#10B981]">₹{getPrice()}</span>
                </div>
              </div>

              {/* Messaging Actions directed specifically to Lab Admin Number 9390529597 */}
              <div className="space-y-3 pt-2 max-w-md mx-auto">
                <p className="text-xs font-bold text-[#0B3B60] uppercase tracking-wider text-center">
                  Lab Notification Status:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {/* WhatsApp to Lab 9390529597 */}
                  <a
                    href={getLabWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-md hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    Send Details to Lab WhatsApp (9390529597)
                  </a>

                  {/* SMS Fallback to Lab 9390529597 */}
                  <a
                    href={getLabSmsUrl()}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B3B60] hover:bg-[#061826] text-white text-xs font-bold transition-all shadow-md hover:scale-105"
                  >
                    <Smartphone className="w-4 h-4" />
                    Send via SMS (9390529597)
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 rounded-full bg-black/5 hover:bg-black/10 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Notification Banner when arriving from home page with pre-selection */}
              {paramTest && selectedTestObjects.length > 0 && selectedType === "individual" && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-300 flex items-start gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-[#0B3B60] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      Test Pre-Selected From Home Page:
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-1.5 items-center">
                      {selectedTestObjects.map((t) => (
                        <span key={t.id} className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0B3B60] text-white text-xs font-bold rounded-lg shadow-sm">
                          {t.name} {t.teluguName ? `(${t.teluguName})` : ""} — ₹{t.price}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#7A7068] mt-2">
                      Your test is auto-selected below. You can select more tests or enter patient details to complete booking.
                    </p>
                  </div>
                </div>
              )}

              {paramPackage && (selectedType === "comprehensive" || selectedType === "basic") && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-300 flex items-start gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-[#0B3B60] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      Health Package Pre-Selected:
                    </h4>
                    <p className="text-xs font-bold text-[#10B981] mt-1">
                      {selectedType === "comprehensive"
                        ? "77-Test Comprehensive Health Checkup Package (₹2,999)"
                        : "BHDC Basic Health Checkup (₹1,399)"}
                    </p>
                    <p className="text-[11px] text-[#7A7068] mt-1">
                      Package auto-selected. Scroll down to choose sample collection mode & enter patient details.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 1: Selection */}
              <div>
                <h3 className="text-sm font-bold text-[#0B3B60] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0B3B60] text-white text-xs flex items-center justify-center font-bold">1</span>
                  Select Health Package or Individual Clinical Tests
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div
                    onClick={() => {
                      setSelectedType("comprehensive");
                      setErrorMessage("");
                    }}
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
                    onClick={() => {
                      setSelectedType("basic");
                      setErrorMessage("");
                    }}
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
                    onClick={() => {
                      setSelectedType("individual");
                      setErrorMessage("");
                    }}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedType === "individual"
                        ? "border-[#10B981] bg-emerald-50/40 shadow-sm"
                        : "border-black/10 bg-white hover:border-black/20"
                    }`}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#7A7068] block mb-1">MULTI-TEST SELECTOR</span>
                    <h4 className="text-base font-bold text-[#0B3B60]">Choose Specific Tests</h4>
                    <p className="text-xs text-[#7A7068] mt-1">Select 1 or more tests</p>
                  </div>
                </div>

                {/* Multi-Test Selector Component */}
                {selectedType === "individual" && (
                  <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-black/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/10">
                      <div>
                        <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                          Select Clinical Tests / Organ Profiles (Multi-Selection Enabled):
                        </label>
                        <p className="text-[11px] text-[#7A7068] mt-0.5">
                          Tap any test card to add or remove it from your appointment.
                        </p>
                      </div>
                      
                      {selectedTestIds.length > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                            {selectedTestIds.length} Test{selectedTestIds.length > 1 ? "s" : ""} (₹{getPrice()})
                          </span>
                          <button
                            type="button"
                            onClick={clearAllSelected}
                            className="text-[11px] font-bold text-red-600 hover:underline"
                          >
                            Clear All
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Error message if user cleared all */}
                    {errorMessage && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs font-bold rounded-xl border border-red-200">
                        {errorMessage}
                      </div>
                    )}

                    {/* Selected Badges */}
                    {selectedTestIds.length > 0 && (
                      <div className="p-3 bg-white rounded-xl border border-black/10 flex flex-wrap gap-2 items-center">
                        <span className="text-[10px] font-bold text-[#7A7068] uppercase tracking-wider">
                          Selected Tests:
                        </span>
                        {selectedTestIds.map((id) => {
                          const testObj = diagnosticTests.find((t) => t.id === id);
                          if (!testObj) return null;
                          return (
                            <span
                              key={id}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0B3B60] text-white text-xs font-medium"
                            >
                              <span>{testObj.name} (₹{testObj.price})</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleTestSelection(id);
                                }}
                                className="w-4 h-4 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white text-[10px] font-bold"
                              >
                                ✕
                              </button>
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* Search & Category Filter */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search test by name or Telugu (e.g. CBC, Lipid, HbA1c, LFT)..."
                          value={testSearchQuery}
                          onChange={(e) => setTestSearchQuery(e.target.value)}
                          className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-white border border-black/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                        />
                        {testSearchQuery && (
                          <button
                            type="button"
                            onClick={() => setTestSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-black"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                        {["all", "Profiles", "Pathology", "Biochemistry", "Immunology", "Clinical"].map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedTestCategory(cat)}
                            className={`px-3 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${
                              selectedTestCategory === cat
                                ? "bg-[#0B3B60] text-white"
                                : "bg-white text-[#7A7068] hover:bg-black/5 border border-black/5"
                            }`}
                          >
                            {cat === "all" ? "All Tests" : cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Test List Checklist (Selected tests pinned at top) */}
                    <div className="max-h-[380px] overflow-y-auto pr-1 space-y-2 border border-black/10 rounded-xl bg-white p-3">
                      {displayedTests.length === 0 ? (
                        <p className="text-center py-6 text-xs text-[#7A7068]">
                          No tests found matching &quot;{testSearchQuery}&quot;. Try clearing search query.
                        </p>
                      ) : (
                        displayedTests.map((t) => {
                          const isSelected = selectedTestIds.includes(t.id);
                          return (
                            <div
                              key={t.id}
                              onClick={() => toggleTestSelection(t.id)}
                              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                                isSelected
                                  ? "border-[#10B981] bg-emerald-50/70 shadow-sm ring-1 ring-emerald-400"
                                  : "border-black/5 hover:border-black/20 bg-[#FAF7F2]/50 hover:bg-[#FAF7F2]"
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div
                                  className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
                                    isSelected
                                      ? "bg-[#10B981] border-[#10B981] text-white"
                                      : "border-slate-300 bg-white"
                                  }`}
                                >
                                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className={`text-xs font-bold ${isSelected ? "text-[#0B3B60]" : "text-[#1A1A1A]"}`}>
                                      {t.name}
                                    </span>
                                    {t.teluguName && (
                                      <span className="text-[10px] font-semibold text-[#10B981]">
                                        ({t.teluguName})
                                      </span>
                                    )}
                                    <span className="text-[9px] px-2 py-0.2 rounded bg-black/5 text-[#7A7068] uppercase font-bold">
                                      {t.category}
                                    </span>
                                    {isSelected && (
                                      <span className="text-[9px] px-2 py-0.2 rounded bg-emerald-600 text-white uppercase font-black tracking-wider">
                                        AUTO-SELECTED
                                      </span>
                                    )}
                                  </div>
                                  {t.profileName && (
                                    <p className="text-[10px] text-[#7A7068] truncate mt-0.5">
                                      Profile: {t.profileName}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="text-right flex-shrink-0">
                                <span className={`text-sm font-bold ${isSelected ? "text-[#10B981]" : "text-[#0B3B60]"}`}>
                                  ₹{t.price}
                                </span>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
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
                  {selectedType === "individual" && selectedTestIds.length > 0 && (
                    <span className="text-[11px] text-[#7A7068] block">
                      ({selectedTestIds.length} test{selectedTestIds.length > 1 ? "s" : ""} selected)
                    </span>
                  )}
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

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center pt-28 text-[#0B3B60]">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-4 border-[#0B3B60] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold uppercase tracking-wider">Loading Booking Form...</p>
          </div>
        </div>
      }
    >
      <BookFormContent />
    </Suspense>
  );
}
