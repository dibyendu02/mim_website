"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BrowserFrame } from "@/components/sections/BrowserFrame";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/content/services";
import { cn } from "@/lib/cn";

interface HomeHeroProps {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

/**
 * Full-bleed, monochrome hero: an oversized display headline spans the full
 * width up top, fading from white to gray, with a browser-framed site
 * preview sitting below it — everything in normal document flow so the
 * layout holds regardless of headline length.
 */
export function HomeHero({ eyebrow, headline, body, primaryCta, secondaryCta }: HomeHeroProps) {
  const previewServices = services.slice(0, 3);

  return (
    <section data-nav-theme="dark" className="relative overflow-hidden bg-ink text-text-inverse">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_65%_30%,rgba(242,242,242,0.08),transparent)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32 lg:pt-36">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/60"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden />
          {eyebrow}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.08}
          className="mt-6 max-w-4xl bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-[clamp(2.5rem,6vw,5.5rem)] font-display font-semibold leading-[0.98] tracking-tight text-transparent"
        >
          {headline}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.16}
          className="mt-6 max-w-md text-lg text-white/60"
        >
          {body}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.24}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Button href={primaryCta.href} variant="secondary" className="border-transparent bg-white text-ink hover:bg-brand-accent">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="ghost" className="text-text-inverse hover:text-brand-accent">
            {secondaryCta.label}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto mt-16 w-full max-w-6xl sm:mt-20"
        >
          <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-white/10 blur-[90px]" />
          <BrowserFrame>
            <div className="bg-surface-dark p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">MiM Digital</span>
                <div className="hidden gap-4 text-xs text-white/40 sm:flex">
                  <span>Services</span>
                  <span>Case Studies</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {previewServices.map((service, index) => (
                  <div
                    key={service.slug}
                    className={cn(
                      "relative overflow-hidden rounded-xl bg-ink",
                      index === 0 ? "col-span-2 aspect-[3/1]" : "aspect-[4/3]",
                    )}
                  >
                    <Image src={service.image} alt="" fill className="object-cover grayscale contrast-125" />
                    <div className="absolute inset-0 bg-ink/40" />
                    <ServiceIcon
                      name={service.icon}
                      className="absolute bottom-2 left-2 h-7 w-7 bg-white/15 text-text-inverse backdrop-blur [&>svg]:h-3.5 [&>svg]:w-3.5"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-3 h-2.5 w-2/3 rounded-full bg-white/10" />
              <div className="mt-2 h-2.5 w-1/2 rounded-full bg-white/10" />
            </div>
          </BrowserFrame>
        </motion.div>
      </div>
    </section>
  );
}
