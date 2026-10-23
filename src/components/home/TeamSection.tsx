"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { TeamPortraitCard } from "@/components/cards/TeamPortraitCard";
import { Marquee } from "@/components/ui/Marquee";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/content/home";
import type { TeamMember } from "@/lib/types/content";

/**
 * Continuously moving portrait gallery. It pauses on hover, on keyboard
 * focus and while a card is tapped open; the pause/play button gives an
 * explicit stop for anyone who needs it (WCAG 2.2.2).
 */
export function TeamSection({ members }: { members: TeamMember[] }) {
  const [paused, setPaused] = useState(false);

  if (members.length === 0) return null;

  return (
    <Section id="team" labelledBy="team-heading" bleed>
      <div className="container-site">
        <SectionHeading
          id="team-heading"
          eyebrow={team.eyebrow}
          title={team.heading}
          action={
            <button
              type="button"
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-fg transition-colors duration-200 hover:border-fg/60 hover:bg-fg/5 motion-reduce:hidden"
            >
              {paused ? <Play aria-hidden className="h-4 w-4" /> : <Pause aria-hidden className="h-4 w-4" />}
              {paused ? "Play" : "Pause"}
              <span className="sr-only"> team gallery</span>
            </button>
          }
        />
      </div>
      <Marquee
        label="Team gallery"
        duration={members.length * 7}
        paused={paused}
        gapClass="gap-4 sm:gap-6"
        gapPadClass="pr-4 sm:pr-6"
        className="mt-14"
      >
        {members.map((member) => (
          <li key={member.name} className="w-[240px] shrink-0 sm:w-[280px]">
            <TeamPortraitCard member={member} />
          </li>
        ))}
      </Marquee>
    </Section>
  );
}
