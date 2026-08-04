import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  dark = false,
}: SectionHeaderProps) {
  return (
    <ScrollReveal>
      <div className={`mb-12 lg:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
        <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-[0.2em] bg-accent/10 text-accent mb-4 border border-accent/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {subtitle}
        </p>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-[1.15] ${dark ? "text-white" : "text-text-primary"}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-sm sm:text-base leading-relaxed font-normal ${dark ? "text-slate-300" : "text-text-secondary"}`}>
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
