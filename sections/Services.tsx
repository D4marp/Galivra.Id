"use client";

import * as React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight, Check } from "lucide-react";
import { RevealText } from "@/components/cinematic/RevealText";
import { Reveal } from "@/components/cinematic/Reveal";
import { ensureGsap } from "@/lib/gsap";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconFor = (name: string) =>
  (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;

export function Services() {
  const previewRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState<number | null>(null);
  const [canHover, setCanHover] = React.useState(false);
  const moveTo = React.useRef<{ x: (v: number) => void; y: (v: number) => void } | null>(null);

  React.useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanHover(fine);
    if (!fine || !previewRef.current) return;
    const { gsap } = ensureGsap();
    moveTo.current = {
      x: gsap.quickTo(previewRef.current, "x", { duration: 0.6, ease: "expo.out" }),
      y: gsap.quickTo(previewRef.current, "y", { duration: 0.6, ease: "expo.out" }),
    };
  }, []);

  const onMove = (e: React.MouseEvent) => {
    moveTo.current?.x(e.clientX + 28);
    moveTo.current?.y(e.clientY - 120);
  };

  const current = active !== null ? SERVICES[active] : null;
  const CurrentIcon = current ? iconFor(current.icon) : null;

  return (
    <section id="services" className="section-pad relative">
      <div className="container-galivra">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal y={10} blur={false}>
              <p className="eyebrow mb-6 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-galivra-cyan" />
                Layanan
              </p>
            </Reveal>
            <RevealText
              text="Semua yang bisnis Anda butuhkan untuk tumbuh di dunia digital."
              accent="tumbuh"
              className="text-display-md font-medium text-ink text-balance"
            />
          </div>
          <Reveal delay={0.1} className="md:col-span-4 md:pb-2">
            <p className="text-ink-muted md:text-right">
              Sembilan layanan, satu tim. Setiap layanan punya harga mulai yang
              jelas — klik untuk rincian lengkap.
            </p>
          </Reveal>
        </div>

        <ul className="group/list mt-16 border-t border-line md:mt-24" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
          {SERVICES.map((service, i) => (
            <li key={service.slug} onMouseEnter={() => setActive(i)}>
              <Reveal y={24} delay={Math.min(i, 4) * 0.05} blur={false}>
                <Link
                  href={`/layanan/${service.slug}`}
                  className={cn(
                    "group relative grid grid-cols-12 items-center gap-4 overflow-hidden border-b border-line py-6 md:py-8",
                    "transition-opacity duration-500 md:group-hover/list:opacity-35 md:hover:!opacity-100"
                  )}
                >
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-white/[0.025] transition-transform duration-700 ease-out-expo group-hover:scale-y-100" />
                  <span className="relative col-span-2 font-mono text-xs text-ink-faint md:col-span-1">
                    {service.index}
                  </span>
                  <span className="relative col-span-10 md:col-span-7">
                    <span className="block font-display text-[1.65rem] font-medium leading-tight tracking-[-0.035em] text-ink transition-transform duration-700 ease-out-expo group-hover:translate-x-3 md:text-[2.6rem]">
                      {service.title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-ink-muted md:hidden">
                      {service.description}
                    </span>
                  </span>
                  <span className="relative col-span-8 col-start-3 font-mono text-xs tracking-[0.08em] text-ink-muted md:col-span-3 md:col-start-auto md:text-right">
                    <span className="uppercase tracking-[0.14em]">mulai</span>{" "}
                    <span className="text-sm text-ink">{service.priceFrom}</span>
                  </span>
                  <span className="relative col-span-2 flex justify-end md:col-span-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-transparent group-hover:bg-ink group-hover:text-void">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating preview that trails the cursor over the list (fine pointers only). */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-40 hidden w-[320px] md:block",
          !canHover && "!hidden"
        )}
      >
        <div
          className={cn(
            "glass-panel rounded-2xl bg-panel/80 p-6 shadow-2xl shadow-black/40 transition-all duration-500 ease-out-expo",
            current ? "scale-100 opacity-100" : "scale-90 opacity-0"
          )}
        >
          {current && CurrentIcon && (
            <>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white">
                  <CurrentIcon className="h-[18px] w-[18px]" />
                </span>
                <span className="font-mono text-[11px] text-ink-faint">
                  {current.index} / {String(SERVICES.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink">{current.description}</p>
              <ul className="mt-4 space-y-2">
                {current.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex gap-2 text-xs leading-relaxed text-ink-muted">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-galivra-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
