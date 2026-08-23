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
 * Full-bleed, minimal hero: a device-mockup preview of the site carries the
 * visual weight instead of oversized headline type — restrained copy block
 * on one side, a browser-framed preview on the other.
 */
export function HomeHero({ eyebrow, headline, body, primaryCta, secondaryCta }: HomeHeroProps) {
  const previewServices = services.slice(0, 3);

  return (
    <section data-nav-theme="dark" className="relative overflow-hidden bg-ink text-text-inverse">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-2 lg:py-32">
        <div>
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
            className="mt-6 max-w-lg text-display-xl font-display font-semibold"
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
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              href={primaryCta.href}
              variant="secondary"
              className="border-white/30 text-text-inverse hover:border-white hover:bg-white/10"
            >
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="ghost" className="text-text-inverse hover:text-brand-accent">
              {secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto w-full max-w-xl"
        >
          <BrowserFrame>
            <div className="bg-surface-dark p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">MiM Digital</span>
                <div className="hidden gap-4 text-xs text-white/40 sm:flex">
                  <span>Services</span>
                  <span>Case Studies</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {previewServices.map((service, index) => (
                  <div
                    key={service.slug}
                    className={cn(
                      "relative overflow-hidden rounded-xl bg-ink",
                      index === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square",
                    )}
                  >
                    <Image src={service.image} alt="" fill className="object-cover grayscale contrast-125" />
                    <div className="absolute inset-0 bg-brand mix-blend-color" />
                    <div className="absolute inset-0 bg-ink/20" />
                    <ServiceIcon
                      name={service.icon}
                      className="absolute bottom-2 left-2 h-7 w-7 bg-white/15 text-text-inverse backdrop-blur [&>svg]:h-3.5 [&>svg]:w-3.5"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4 h-2.5 w-2/3 rounded-full bg-white/10" />
              <div className="mt-2 h-2.5 w-1/2 rounded-full bg-white/10" />
            </div>
          </BrowserFrame>
        </motion.div>
      </div>
    </section>
  );
}
