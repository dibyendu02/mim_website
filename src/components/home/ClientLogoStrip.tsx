import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { clientsIntro } from "@/content/home";
import type { ClientLogo } from "@/lib/types/content";

/**
 * Restrained logo strip — no cards or borders around logos. Logos are
 * normalised to a shared height (not width) and rendered monochrome white.
 * On mobile the logos loop continuously (so none are clipped without a
 * cue); from `sm` up they sit in a single static row.
 */
export function ClientLogoStrip({ logos }: { logos: ClientLogo[] }) {
  if (logos.length === 0) return null;

  const items = logos.map((logo) => (
    <li key={logo.name} className="flex shrink-0 items-center justify-center">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="h-6 w-auto opacity-70 brightness-0 invert sm:h-7"
      />
    </li>
  ));

  return (
    <section aria-labelledby="clients-heading" className="border-y border-line bg-canvas">
      <div className="container-site flex flex-col gap-6 pb-6 pt-10 sm:gap-8 sm:pb-10 lg:flex-row lg:items-center lg:gap-16">
        <h2 id="clients-heading" className="eyebrow shrink-0 text-muted">
          {clientsIntro.eyebrow}
        </h2>
        <ul className="hidden flex-1 flex-wrap items-center justify-between gap-x-8 gap-y-8 sm:flex">{items}</ul>
      </div>
      <Marquee duration={logos.length * 4} gapClass="gap-12" gapPadClass="pr-12" className="pb-10 sm:hidden">
        {items}
      </Marquee>
    </section>
  );
}
