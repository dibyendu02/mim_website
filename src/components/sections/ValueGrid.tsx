import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface Benefit {
  title: string;
  body: string;
}

/**
 * Numbered benefits in a ruled grid: hairlines between cells instead of
 * cards, so it reads as one block rather than another row of tiles.
 */
export function ValueGrid({ benefits }: { benefits: Benefit[] }) {
  return (
    <div className="grid grid-cols-1 border-l border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <ScrollReveal
          key={benefit.title}
          delay={(index % 3) * 0.08}
          className="border-b border-r border-ink/10 p-8 sm:p-10"
        >
          <p className="font-display text-sm font-semibold text-text-muted">{String(index + 1).padStart(2, "0")}.</p>
          <h3 className="mt-6 font-display text-xl font-semibold text-ink sm:text-2xl">{benefit.title}</h3>
          <p className="mt-3 text-text-muted">{benefit.body}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}
