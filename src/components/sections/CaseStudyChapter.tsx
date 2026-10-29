import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/cn";

/**
 * One numbered section of a case study narrative. The title sits in a left
 * column with the content beside it on large screens; `wide` drops the
 * content below the title at full width for visual-heavy sections.
 */
export function CaseStudyChapter({
  number,
  title,
  wide = false,
  children,
}: {
  number: number;
  title: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="py-section">
      <div className={cn("grid grid-cols-1 gap-8", !wide && "lg:grid-cols-12 lg:gap-16")}>
        <ScrollReveal className={cn(!wide && "lg:col-span-4")}>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            {String(number).padStart(2, "0")}
          </p>
          <h2 className="mt-3 font-display text-display-md font-semibold text-ink">{title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className={cn(!wide && "lg:col-span-8 lg:pt-8")}>
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}
