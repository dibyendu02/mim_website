import Link from "next/link";
import { contactDetails, footerLinks, site, socialLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-text-inverse">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold">{site.name}</p>
            <p className="mt-4 max-w-xs text-sm text-text-inverse/70">{site.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-inverse/50">Company</p>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-inverse/80 hover:text-brand-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-inverse/50">Services</p>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-inverse/80 hover:text-brand-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-inverse/50">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-text-inverse/80">
              <li>{contactDetails.email}</li>
              <li>{contactDetails.phone}</li>
              <li>{contactDetails.address}</li>
            </ul>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-inverse/60 hover:text-brand-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-text-inverse/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
