import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import type { Industry } from "@/lib/types/content";

/**
 * Numbered, typography-led grid of industries, styled for a dark (bg-ink)
 * section. Cards gain a photo when the industry has `image` and become a
 * link to related work when it has `href`.
 */
export function IndustryGrid({ industries }: { industries: Industry[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((industry, index) => {
        const card = (
          <>
            {industry.image && (
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-bento bg-white/5">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="border-t border-white/20 pt-6">
              <p className="font-display text-sm font-semibold text-white/50">{String(index + 1).padStart(2, "0")}.</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-text-inverse">{industry.title}</h3>
              <p className="mt-3 text-white/70">{industry.description}</p>
              {industry.href && (
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text-inverse">
                  View work
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              )}
            </div>
          </>
        );

        return (
          <ScrollReveal key={industry.slug} delay={index * 0.08} className="h-full">
            {industry.href ? (
              <Link href={industry.href} className="group block h-full">
                {card}
              </Link>
            ) : (
              card
            )}
          </ScrollReveal>
        );
      })}
    </div>
  );
}
