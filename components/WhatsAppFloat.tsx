"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/918333020667?text=${encodeURIComponent(
    "Hello Baba Hayaath Diagnostic Centre, I would like to inquire about test packages and home sample collection."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group border-2 border-white/20"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-current animate-bounce" />
      <span className="hidden sm:inline font-extrabold tracking-wider uppercase">
        WhatsApp Quick Booking
      </span>
    </a>
  );
}
