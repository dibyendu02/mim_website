import { KineticHeadline } from "@/components/sections/KineticHeadline";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  eyebrow?: string;
  headline: string;
  body?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  size?: "xl" | "lg";
  className?: string;
}

export function Hero({
  eyebrow,
  headline,
  body,
  primaryCta,
  secondaryCta,
  size = "xl",
  className,
}: HeroProps) {
  return (
    <section className={cn("mx-auto max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 sm:pt-28", className)}>
      {eyebrow && <Badge className="mb-6">{eyebrow}</Badge>}
      <KineticHeadline
        text={headline}
        className={cn(
          "max-w-4xl",
          size === "xl" ? "text-display-xl" : "text-display-lg",
        )}
      />
      {body && <p className="mt-8 max-w-2xl text-lg text-text-muted sm:text-xl">{body}</p>}
      {(primaryCta || secondaryCta) && (
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      )}
    </section>
  );
}
