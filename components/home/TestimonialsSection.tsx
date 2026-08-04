import { Star, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const reviews = [
  {
    name: "Dr. K. Srinivas",
    role: "Local Medical Practitioner",
    content: "Baba Hayaath Diagnostic Centre has set a new benchmark for lab accuracy in Puttaparthi. Their automated Snibe CLIA and Erba 5-part hematology reports are consistently reliable for clinical diagnosis.",
    rating: 5,
  },
  {
    name: "Ramesh Babu",
    role: "Patient from Puttaparthi",
    content: "The ₹2,999 77-Test package is incredible value. Home sample collection was prompt, and I received my reports on WhatsApp the very same evening.",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    role: "Senior Citizen Patient",
    content: "Very hygienic lab with extremely courteous staff. The free home sample collection is a blessing for elderly patients who cannot travel.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-bg-main relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Patient Trust & Excellence"
          title="What Our Community Says About BHDC"
          description="Trusted by thousands of patients and leading physicians across Puttaparthi and Sri Sathya Sai District."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.name} delay={index * 0.15}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed italic mb-8">
                    &quot;{review.content}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black text-text-primary">
                      {review.name}
                    </p>
                    <p className="text-xs font-semibold text-accent">
                      {review.role}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
