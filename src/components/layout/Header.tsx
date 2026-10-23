"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Logo } from "@/components/ui/Logo";
import { ctas, navLinks } from "@/content/site";
import { cn } from "@/lib/cn";

const DESKTOP_QUERY = "(min-width: 1024px)";

// Header/menu destinations always open at the top of the page, so the
// booking CTA drops its in-page anchor here (external booking URLs are kept).
const headerCta = ctas.bookCall.href.startsWith("/")
  ? { ...ctas.bookCall, href: ctas.bookCall.href.split("#")[0] }
  : ctas.bookCall;

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

/**
 * Restrained sticky header (64px, so it costs little mobile viewport). On
 * small screens the links move into a disclosure panel: accessible toggle
 * name + expanded state, Escape closes and returns focus to the toggle, and
 * the scroll lock is always released on close, on navigation and when the
 * viewport grows to desktop — so the page can never get stuck locked.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const scrollTopOnNavigate = useRef(false);

  // Every header/menu link lands at the top of its page — including the
  // page you're already on, where Next.js would otherwise do nothing.
  const onNavClick = (event: React.MouseEvent) => {
    const anchor = (event.target as HTMLElement).closest("a");
    if (!anchor || anchor.origin !== window.location.origin) return;
    setOpen(false);
    document.documentElement.style.overflow = "";
    if (anchor.pathname === window.location.pathname) scrollToTop();
    else scrollTopOnNavigate.current = true;
  };

  useEffect(() => {
    if (!scrollTopOnNavigate.current) return;
    scrollTopOnNavigate.current = false;
    scrollToTop();
  }, [pathname]);

  // Close on navigation (state adjustment during render, not an effect).
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    root.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onViewportChange);
    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        onClickCapture={onNavClick}
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-200",
          scrolled || open
            ? "border-line bg-canvas/95 backdrop-blur"
            : "border-transparent bg-canvas",
        )}
      >
        <div className="container-site flex h-16 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "py-2 text-[0.9375rem] transition-colors duration-200 hover:text-fg",
                      isActive(link.href) ? "text-fg" : "text-muted",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <CTAButton
              cta={headerCta}
              location="header"
              className="min-h-10 py-2 text-sm"
            />
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-button text-fg lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X aria-hidden className="h-6 w-6" />
            ) : (
              <Menu aria-hidden className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Deliberately outside <header>: the header's backdrop-filter makes it
        the containing block for fixed descendants, which would collapse
        this viewport-height panel to nothing. */}
      <div
        id="mobile-menu"
        hidden={!open}
        onClickCapture={onNavClick}
        className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto border-t border-line bg-canvas lg:hidden"
      >
        <nav aria-label="Main" className="container-site flex flex-col py-6">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="block py-4 font-display text-2xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <CTAButton
            cta={headerCta}
            location="mobile-menu"
            className="mt-8 w-full"
          />
        </nav>
      </div>
    </>
  );
}
