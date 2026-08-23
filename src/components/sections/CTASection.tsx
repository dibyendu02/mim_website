import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import type { CtaContent } from "@/lib/types/content";

export function CTASection({ content }: { content: CtaContent }) {
  return (
    <section className="bg-brand text-text-inverse">
      <ScrollReveal className="mx-auto max-w-[1440px] px-6 py-20 text-center sm:px-10 sm:py-28">
        {content.eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">{content.eyebrow}</p>
        )}
        <h2 className="mx-auto mt-4 max-w-2xl text-display-lg font-display font-semibold">{content.headline}</h2>
        {content.body && <p className="mx-auto mt-4 max-w-xl text-white/80">{content.body}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={content.primaryCta.href}
            variant="secondary"
            className="border-white/40 text-text-inverse hover:border-white hover:bg-white/10"
          >
            {content.primaryCta.label}
          </Button>
          {content.secondaryCta && (
            <Button href={content.secondaryCta.href} variant="ghost" className="text-text-inverse hover:text-brand-accent">
              {content.secondaryCta.label}
            </Button>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
