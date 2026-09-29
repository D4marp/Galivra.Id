"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/cinematic/RevealText";
import { ensureGsap, scheduleRefresh } from "@/lib/gsap";
import { FEATURED_PROJECTS, PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export function FeaturedWork() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const barRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const { gsap } = ensureGsap();
    const mm = gsap.matchMedia();

    // Desktop: pin the section and translate the track sideways as you scroll.
    // Mobile / reduced motion fall back to a native swipeable row.
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (barRef.current) barRef.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      // Each image drifts against the track for depth.
      gsap.utils.toArray<HTMLElement>("[data-parallax-img]", section).forEach((img) => {
        gsap.fromTo(
          img,
          { xPercent: -7 },
          {
            xPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    });

    scheduleRefresh();
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden border-t border-line md:flex md:h-[100svh] md:flex-col md:justify-center"
    >
      <div className="container-galivra flex items-end justify-between gap-6 pt-24 md:pt-28">
        <div>
          <p className="eyebrow mb-5 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-galivra-cyan" />
            Karya pilihan
          </p>
          <RevealText
            text="Dibangun untuk dipakai, bukan dipajang."
            accent="dipakai,"
            className="text-display-md font-medium text-ink"
          />
        </div>
        <Link
          href="/karya"
          className="group hidden shrink-0 items-center gap-2 pb-2 text-sm text-ink-muted transition-colors hover:text-white md:inline-flex"
        >
          Semua {PORTFOLIO_PROJECTS.length} project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
        </Link>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-16 [scrollbar-width:none] md:mt-14 md:w-max md:snap-none md:gap-8 md:overflow-visible md:px-10 md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {FEATURED_PROJECTS.map((p, i) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            data-cursor-label="Lihat"
            className="group relative w-[82vw] shrink-0 snap-start sm:w-[60vw] md:w-[min(46vw,calc((100svh_-_360px)_*_1.6))] lg:w-[min(38vw,calc((100svh_-_360px)_*_1.6))]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-panel">
              <div data-parallax-img className="absolute -inset-x-[10%] inset-y-0">
                <Image
                  src={`/portfolio/${p.slug}.png`}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 82vw, 40vw"
                  // The track moves via transform, not scroll, so native lazy-loading never fires.
                  loading="eager"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-80" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-void/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink backdrop-blur-md">
                {String(i + 1).padStart(2, "0")} — {p.year}
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-ink md:text-[1.75rem]">
                  {p.name}
                </h3>
                <p className="mt-1.5 line-clamp-2 max-w-md text-sm text-ink-muted">{p.summary}</p>
              </div>
              <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                {p.category}
              </span>
            </div>
          </Link>
        ))}

        <Link
          href="/karya"
          className="group relative flex w-[70vw] shrink-0 snap-start flex-col justify-between rounded-2xl border border-line bg-brand-gradient p-8 sm:w-[44vw] md:w-[28vw] md:p-10"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
            Arsip lengkap
          </span>
          <div>
            <p className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-white md:text-5xl">
              Lihat semua {PORTFOLIO_PROJECTS.length} project
            </p>
            <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-white text-void transition-transform duration-700 ease-out-expo group-hover:rotate-45 group-hover:scale-110">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </Link>
      </div>

      <div className="container-galivra hidden pb-10 pt-12 md:block">
        <div className="h-px w-full bg-line">
          <div ref={barRef} className="h-full origin-left bg-brand-gradient" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </section>
  );
}
