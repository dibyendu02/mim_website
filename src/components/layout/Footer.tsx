import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/content/services";
import { contactDetails, legalLinks, navLinks, site, socialLinks } from "@/content/site";

const linkClass = "text-sm text-muted transition-colors duration-200 hover:text-fg";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-site grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.25fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">
            Integrated digital marketing — performance, content, brand, SEO and web, working as one.
          </p>
        </div>

        <FooterColumn title="Explore">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Services">
          {services.map((service) => (
            <li key={service.slug}>
              <Link href={`/services#${service.slug}`} className={linkClass}>
                {service.title}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <li>
            <a href={`mailto:${contactDetails.email}`} className={linkClass}>
              {contactDetails.email}
            </a>
          </li>
          {contactDetails.phone && (
            <li>
              <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className={linkClass}>
                {contactDetails.phone}
              </a>
            </li>
          )}
          {contactDetails.address && <li className="text-sm text-muted">{contactDetails.address}</li>}
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="container-site flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <ul className="flex gap-6">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors duration-200 hover:text-fg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow text-fg">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}
