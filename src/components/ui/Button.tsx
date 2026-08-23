"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-text-inverse hover:bg-brand",
  secondary: "bg-transparent text-ink border border-ink/20 hover:border-ink",
  ghost: "bg-transparent text-ink hover:text-brand",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <motion.span
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="inline-block"
    >
      <Link
        href={href}
        className={cn(
          "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300",
          variantStyles[variant],
          className,
        )}
      >
        <span>{children}</span>
        <motion.span
          aria-hidden
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          →
        </motion.span>
      </Link>
    </motion.span>
  );
}
