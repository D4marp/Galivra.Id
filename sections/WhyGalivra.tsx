"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/cinematic/Reveal";
import { SpotlightCard } from "@/components/cinematic/SpotlightCard";
import { PRINCIPLES } from "@/lib/data";

export function WhyGalivra() {
  return (
    <section id="why" className="section-pad relative border-t border-line">
      <div className="container-galivra">
        <SectionHeading
          eyebrow="Kenapa GALIVRA"
          title="Dibangun dengan tujuan, direkayasa untuk berkembang."
          accent="tujuan,"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.index} delay={i * 0.08} y={24} className="h-full">
              <SpotlightCard className="flex h-full min-h-[240px] flex-col justify-between rounded-3xl border border-line bg-panel/50 p-8">
                <span className="serif-accent text-5xl text-ink-faint">{principle.index}</span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{principle.description}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
