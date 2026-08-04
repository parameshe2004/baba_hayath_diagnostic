import Link from "next/link";
import { Phone, Calendar, ArrowRight, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-royal text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            24/7 Service • Free Doorstep Collection
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Prioritize Your Health Today With <br />
            <span className="text-gradient">Baba Hayaath Diagnostics</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Book our ₹1,399 Basic Health Checkup or our ₹2,999 77-Test Package. Accurate results delivered fast to your phone on WhatsApp.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-white shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all duration-300 group"
            >
              Book Appointment Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:8333020667"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call 8333020667 / 8340030073
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="pt-6 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Opposite SSS General Hospital, Main Road, Puttaparthi</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
