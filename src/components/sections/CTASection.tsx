import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import type { CtaContent } from "@/lib/types/content";

/**
 * Closing conversion band: large type, lots of negative space, one solid
 * primary button and an understated text-link secondary.
 */
export function CTASection({ content }: { content: CtaContent }) {
  return (
    <section data-nav-theme="dark" className="bg-ink text-text-inverse">
      <ScrollReveal className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 sm:py-40">
        {content.eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">{content.eyebrow}</p>
        )}
        <h2 className="mt-6 max-w-4xl text-display-xl font-display font-semibold">{content.headline}</h2>
        {content.body && <p className="mt-6 max-w-2xl text-lg text-white/70">{content.body}</p>}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button
            href={content.primaryCta.href}
            arrow="external"
            className="bg-text-inverse px-8 py-4 text-base text-ink hover:bg-brand-accent"
          >
            {content.primaryCta.label}
          </Button>
          {content.secondaryCta && (
            <Button
              href={content.secondaryCta.href}
              variant="ghost"
              className="px-0 text-white/60 hover:text-text-inverse"
            >
              {content.secondaryCta.label}
            </Button>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
