"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/components/motion/useReducedMotion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

const offsets = {
  up: { y: 24, x: 0 },
  left: { y: 0, x: -24 },
  right: { y: 0, x: 24 },
};

export function ScrollReveal({ children, delay = 0, className, direction = "up" }: ScrollRevealProps) {
  const reducedMotion = usePrefersReducedMotion();
  const offset = offsets[direction];

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
