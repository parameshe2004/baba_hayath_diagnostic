"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-bg-main pb-24">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-gradient-royal text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300 mb-3">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Contact & Location Details
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
            Located conveniently on Main Road opposite SSS General Hospital in Puttaparthi. Open 24/7 for emergency lab testing & home sample collection.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Cards Info */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
                <h3 className="text-xl font-black text-text-primary">
                  Baba Hayaath Diagnostic Centre
                </h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-text-primary mb-1">
                      Lab Address
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      #14/2032, Near Baba Hayaath Lodge, Main Road, Opp. SSS General Hospital, Puttaparthi, Sri Sathya Sai Dist, AP 515134
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-text-primary mb-1">
                      Phone / WhatsApp Appointments
                    </h4>
                    <div className="text-xs text-text-secondary space-y-1">
                      <p>
                        <a href="tel:8333020667" className="font-bold text-text-primary hover:text-emerald-600">
                          8333020667
                        </a>
                      </p>
                      <p>
                        <a href="tel:8340030073" className="font-bold text-text-primary hover:text-emerald-600">
                          8340030073
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-text-primary mb-1">
                      Email Address
                    </h4>
                    <p className="text-xs font-bold text-text-primary">
                      bhdcptp@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-text-primary mb-1">
                      Working Hours
                    </h4>
                    <p className="text-xs font-bold text-emerald-600">
                      24/7 Emergency Lab & Home Collection
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-black text-text-primary mb-2">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-text-secondary mb-8">
                  Have questions about test prices or home sample collection? Leave your message below.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 text-emerald-800 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-700">
                      Thank you for contacting BHDC. We will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-text-primary uppercase mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-text-primary uppercase mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 8333020667"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-text-primary uppercase mb-1">Message / Inquiry Details *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Inquire about test costs, home sample collection, or report delivery..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-wider shadow-lg transition-all"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}
