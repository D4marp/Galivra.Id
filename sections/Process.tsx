"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { RevealText } from "@/components/cinematic/RevealText";
import { Reveal } from "@/components/cinematic/Reveal";
import { ensureGsap, prefersReducedMotion, scheduleRefresh } from "@/lib/gsap";
import { PROCESS_STEPS, SITE } from "@/lib/data";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export function Process() {
  const listRef = React.useRef<HTMLOListElement>(null);
  const lineRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const list = listRef.current;
    const line = lineRef.current;
    if (!list || !line || prefersReducedMotion()) return;
    const { gsap } = ensureGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: list, start: "top 60%", end: "bottom 60%", scrub: 0.5 },
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-step]", list).forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.28 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: step, start: "top 68%", end: "top 48%", scrub: true },
          }
        );
      });
    }, list);

    scheduleRefresh();
    return () => ctx.revert();
  }, []);

  return (
    <section id="proses" className="relative bg-paper text-paper-ink">
      <div className="container-galivra grid grid-cols-1 gap-16 py-24 md:grid-cols-12 md:py-36 lg:py-44">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <Reveal y={10} blur={false}>
              <p className="mb-6 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-galivra-blue" />
                Cara kerja
              </p>
            </Reveal>
            <RevealText
              text="Dari chat pertama sampai live."
              accent="live."
              accentClassName="serif-accent text-galivra-blue"
              className="text-display-md font-medium text-paper-ink"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm leading-relaxed text-paper-muted">
                Tidak perlu paham teknis. Ceritakan kebutuhan Anda — kami susun
                rencana, harga, dan jadwal yang jelas sebelum apa pun dimulai.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <WhatsAppCTA
                locationLabel="Process Section"
                message="Halo GALIVRA, saya ingin konsultasi project."
                className="group mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-paper-ink pl-2 pr-6 text-[15px] font-medium text-paper transition-colors hover:bg-galivra-deep"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-paper-ink transition-transform duration-500 ease-out-expo group-hover:rotate-12">
                  <MessageCircle className="h-4 w-4" />
                </span>
                Konsultasi gratis via WhatsApp
              </WhatsAppCTA>
            </Reveal>
          </div>
        </div>

        <ol ref={listRef} className="relative md:col-span-6 md:col-start-7">
          <div className="absolute bottom-0 left-[1.35rem] top-0 w-px bg-paper-line md:left-[1.6rem]">
            <div ref={lineRef} className="h-full w-full origin-top bg-galivra-blue" />
          </div>
          {PROCESS_STEPS.map((step) => (
            <li key={step.index} data-step className="relative pb-16 pl-16 last:pb-0 md:pb-24 md:pl-20">
              <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-paper-line bg-paper font-mono text-xs text-paper-ink md:h-[3.2rem] md:w-[3.2rem]">
                {step.index}
              </span>
              <h3 className="pt-1.5 font-display text-2xl font-medium tracking-[-0.03em] md:text-[2rem]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-paper-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
