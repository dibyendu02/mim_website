"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/cn";
import { navLinks, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { useSectionTheme } from "@/components/motion/useSectionTheme";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const overDarkSection = useSectionTheme();
  // Full-bleed image heroes (data-nav-theme="overlay") sit behind the header;
  // while one is under the top of the viewport the header goes transparent
  // with light text and the hero's own gradient provides contrast.
  const overImageHero = useSectionTheme("overlay", "0px 0px -90% 0px") && !mobileOpen;
  const inverse = overDarkSection || overImageHero;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // Close the mobile menu on navigation by adjusting state during render
  // (React's documented pattern for resetting state on prop change) instead
  // of an effect — avoids an extra render pass.
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        overImageHero
          ? "bg-transparent text-text-inverse"
          : overDarkSection
            ? "bg-ink text-text-inverse shadow-sm"
            : scrolled
              ? "bg-surface/90 text-ink shadow-sm backdrop-blur"
              : "bg-transparent text-ink",
      )}
    >
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-6 sm:px-10">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                inverse ? "text-text-inverse/70 hover:text-text-inverse" : "text-text-muted hover:text-ink",
                pathname === link.href && (inverse ? "text-text-inverse" : "text-ink"),
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href="/contact"
            variant="primary"
            className={cn(
              "px-5 py-2.5 text-xs",
              inverse && "bg-brand-accent text-ink hover:bg-brand hover:text-text-inverse",
            )}
          >
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span
            className={cn(
              "h-0.5 w-6 transition-transform",
              inverse ? "bg-text-inverse" : "bg-ink",
              mobileOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 transition-opacity",
              inverse ? "bg-text-inverse" : "bg-ink",
              mobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 transition-transform",
              inverse ? "bg-text-inverse" : "bg-ink",
              mobileOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={cn("overflow-hidden md:hidden", inverse ? "bg-ink" : "bg-surface")}
          >
            <div className="flex flex-col gap-4 px-6 pb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn("text-base font-medium", inverse ? "text-text-inverse" : "text-ink")}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="w-fit">
                Get in Touch
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
