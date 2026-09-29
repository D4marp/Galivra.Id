"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/cinematic/RevealText";
import { Reveal } from "@/components/cinematic/Reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";
import { SERVICES } from "@/lib/data";

const Aurora = dynamic(() => import("@/components/cinematic/Aurora").then((m) => m.Aurora), {
  ssr: false,
});

const STATS = [
  { value: `${PORTFOLIO_PROJECTS.length}+`, label: "Project terkirim" },
  { value: String(SERVICES.length), label: "Layanan digital" },
  { value: "Rp0", label: "Biaya konsultasi" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <Aurora className="absolute inset-0" focus={[0.78, 0.7]} />
      {/* Fade the aurora into the page so the next section starts on flat void. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-void" />

      <div className="container-galivra relative flex flex-1 flex-col justify-end pb-10 pt-32 md:pb-14">
        <Reveal trigger="mount" y={12} blur={false}>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-galivra-cyan" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              Website · Aplikasi · Otomasi AI
            </span>
          </div>
        </Reveal>

        <RevealText
          as="h1"
          text="Bisnis Anda bagus. Sayang, tidak terlihat."
          accent="terlihat."
          trigger="mount"
          delay={0.05}
          stagger={0.06}
          className="max-w-[14ch] text-display-xl font-medium text-ink"
        />

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/10 pt-8 md:mt-16 md:grid-cols-12 md:items-end">
          <Reveal trigger="mount" delay={0.45} className="md:col-span-4">
            <h2 className="max-w-md text-base font-normal leading-relaxed text-ink-muted md:text-[17px]">
              Kami bangun website, aplikasi, dan otomasi AI. Hasilnya: bisnis
              Anda <strong className="font-medium text-ink">ditemukan</strong>,{" "}
              <strong className="font-medium text-ink">dipercaya</strong>, lalu{" "}
              <strong className="font-medium text-ink">dipilih</strong>.
            </h2>
          </Reveal>

          <Reveal trigger="mount" delay={0.55} className="md:col-span-5">
            <div className="flex flex-wrap gap-3 lg:flex-nowrap">
              <Button href="/kontak" variant="primary" withArrow size="lg">
                Minta rencana gratis
              </Button>
              <Button href="/karya" variant="secondary" size="lg">
                Lihat hasil kerja
              </Button>
            </div>
          </Reveal>

          <Reveal trigger="mount" delay={0.65} className="md:col-span-3">
            <dl className="grid grid-cols-3 gap-4 md:justify-items-end">
              {STATS.map((s) => (
                <div key={s.label} className="md:text-right">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-medium tracking-[-0.03em] text-ink md:text-3xl">
                    {s.value}
                  </dd>
                  <dd className="mt-1 text-[11px] leading-tight text-ink-faint">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
