import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { hero } from "@/content/home";
import { ctas } from "@/content/site";

/**
 * Typographic hero — the headline is the dominant element. Each headline
 * line is its own block from `sm` up, giving the deliberate two-line
 * composition; on narrow phones the lines flow and balance instead.
 */
export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-canvas">
      <div className="container-site pb-[clamp(3.5rem,8vw,7rem)] pt-[clamp(3.5rem,10vw,9rem)]">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 id="hero-heading" className="mt-6 text-hero">
          {hero.headline.map((line, index) => (
            <span key={line} className="sm:block">
              {line}
              {index < hero.headline.length - 1 && " "}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-[44rem] text-base text-muted sm:text-lg">{hero.body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <CTAButton cta={ctas.bookCall} location="hero" />
          <CTAButton cta={ctas.seeWork} variant="secondary" arrow="right" location="hero" />
        </div>
      </div>
    </section>
  );
}
