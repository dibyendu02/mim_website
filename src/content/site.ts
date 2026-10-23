import type { Cta } from "@/lib/types/content";

// Single swap point for global brand config, navigation and contact details.

export const site = {
  name: "MiM Digital",
  // TODO(launch): confirm the production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mimdigital.in",
  description:
    "MiM Digital is a full-service digital marketing agency bringing performance marketing, social media, content production, SEO, brand strategy and web development together in one integrated marketing system.",
};

// Spec §5.9: never label a dead link "Book a Strategy Call". Until a booking
// calendar is configured (NEXT_PUBLIC_BOOKING_URL), the CTA leads to the
// working enquiry form instead.
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

export const ctas = {
  bookCall: { label: "Book a Strategy Call", href: bookingUrl || "/contact#enquiry" },
  seeWork: { label: "See Our Work", href: "/#work" },
  allCaseStudies: { label: "View All Case Studies", href: "/case-studies" },
  exploreServices: { label: "Explore Our Services", href: "/services" },
  howWeCanHelp: { label: "See How We Can Help", href: "/contact#enquiry" },
  tellUs: { label: "Tell Us About Your Project", href: "/contact#enquiry" },
} satisfies Record<string, Cta>;

export const navLinks: Cta[] = [
  { label: "Work", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: Cta[] = [{ label: "Privacy Policy", href: "/privacy" }];

// TODO(launch): MiM to supply real contact details. Fields left empty are
// hidden rather than shown with placeholder values.
export const contactDetails: { email: string; phone?: string; address?: string } = {
  email: "hello@mimdigital.in",
  address: "Kolkata, India",
};

// TODO(launch): add MiM's approved social profile URLs. The footer renders
// nothing until this list is populated, so no generic/dead links ship.
export const socialLinks: Cta[] = [];
