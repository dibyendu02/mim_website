import { Eyebrow } from "@/components/ui/SectionHeading";

/** Inner-page hero: eyebrow, the page's single H1 and a short intro. */
export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <section aria-labelledby="page-heading" className="border-b border-line bg-canvas">
      <div className="container-site pb-[clamp(3rem,7vw,6rem)] pt-[clamp(3rem,8vw,7rem)]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 id="page-heading" className="mt-6 max-w-4xl text-[clamp(2.25rem,4.8vw,4.5rem)] leading-[1.06] tracking-[-0.035em]">
          {title}
        </h1>
        {body && <p className="mt-8 max-w-[44rem] text-base text-muted sm:text-lg">{body}</p>}
      </div>
    </section>
  );
}
