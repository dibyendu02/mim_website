"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/components/motion/useReducedMotion";
import type { Logo } from "@/lib/types/content";

export function LogoMarquee({ logos }: { logos: Logo[] }) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 py-4">
        {logos.map((logo) => (
          <LogoImg key={logo.name} logo={logo} />
        ))}
      </div>
    );
  }

  const track = [...logos, ...logos];

  return (
    <div className="group overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex w-max items-center gap-14"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        whileHover={{ transitionProperty: "none" }}
      >
        {track.map((logo, index) => (
          <LogoImg key={`${logo.name}-${index}`} logo={logo} />
        ))}
      </motion.div>
    </div>
  );
}

function LogoImg({ logo }: { logo: Logo }) {
  return (
    <Image
      src={logo.src}
      alt={logo.name}
      width={120}
      height={30}
      className="h-6 w-auto shrink-0 text-ink/40 opacity-60 grayscale transition-opacity hover:opacity-100 sm:h-7"
    />
  );
}
