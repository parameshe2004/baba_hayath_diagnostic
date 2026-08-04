"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "BHDC Health Checkup Package (₹2,999)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SweetDreamss Contact Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="sweet-section-label justify-center">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#0B3B60] leading-tight mb-4">
              Visit Our Diagnostic Lab or Message Us
            </h2>
            <p className="text-base text-[#7A7068] leading-[1.8] font-normal">
              Experience Puttaparthi&apos;s finest clinical laboratory services in person at Main Road, or send us an instant inquiry.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Location & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Our Location & Embedded Google Map */}
            <ScrollReveal>
              <div className="sweet-card p-6 sm:p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center flex-shrink-0 text-[#0B3B60]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B3B60]">
                      Our Location
                    </h3>
                    <p className="text-xs text-[#7A7068] leading-[1.7] mt-1">
                      #14/2032, Near Baba Hayaath Lodge, Main Road, Opp. SSS General Hospital, Puttaparthi, Sri Sathya Sai Dist, AP 515134
                    </p>
                    <a
                      href="https://maps.google.com/?q=Puttaparthi+Sri+Sathya+Sai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#10B981] hover:underline mt-2"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                {/* Embedded Interactive Google Map Preview */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden border border-black/10 mt-4">
                  <iframe
                    title="BHDC Lab Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.8123285743!2d77.7915!3d14.1652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb17b629081e649%3A0xbcae93c12f!2sPuttaparthi%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Call or WhatsApp */}
            <ScrollReveal delay={0.1}>
              <div className="sweet-card p-6 sm:p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center flex-shrink-0 text-[#0B3B60]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B3B60]">
                    Call or WhatsApp
                  </h3>
                  <p className="text-xs font-bold text-[#1A1A1A] mt-1">
                    +91 83330 20667 | +91 83400 30073
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Lab Timing */}
            <ScrollReveal delay={0.2}>
              <div className="sweet-card p-6 sm:p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center flex-shrink-0 text-[#0B3B60]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B3B60]">
                    Lab Timing
                  </h3>
                  <p className="text-xs text-[#7A7068] mt-1">
                    24/7 Emergency Lab Service Available<br />
                    Free Doorstep Home Sample Collection
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Send an Inquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="sweet-card p-8 sm:p-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-serif-luxury text-[#0B3B60]">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-[#7A7068] leading-[1.7] mt-1">
                    Fill in your details below to get instant test catalogs, pricing, or home collection appointments sent straight to your WhatsApp.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 text-[#10B981] text-center space-y-3 border border-emerald-100">
                    <CheckCircle2 className="w-10 h-10 mx-auto" />
                    <h4 className="text-lg font-bold text-[#0B3B60]">Inquiry Sent Successfully!</h4>
                    <p className="text-xs text-[#7A7068]">
                      Thank you <strong className="text-[#1A1A1A]">{formData.name}</strong>. Our team will contact you shortly at <strong className="text-[#1A1A1A]">{formData.phone}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                          YOUR NAME
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 83330 20667"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        TEST INTEREST
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-xs text-[#1A1A1A]"
                      >
                        <option value="BHDC Health Checkup Package (₹2,999)">
                          BHDC 77-Test Health Checkup Package (₹2,999)
                        </option>
                        <option value="BHDC Basic Health Checkup (₹1,399)">
                          BHDC Basic Health Checkup (₹1,399)
                        </option>
                        <option value="Individual Diagnostic Tests">
                          Individual Diagnostic Tests / Profiles
                        </option>
                        <option value="Free Home Sample Collection">
                          Free Home Sample Collection Request
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        MESSAGE / REQUIREMENTS
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your required tests, preferred time slot, or home sample collection address..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B3B60] hover:bg-[#10B981] text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                    >
                      SEND INQUIRY →
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
