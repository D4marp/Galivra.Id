"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollTextReveal } from "@/components/cinematic/ScrollTextReveal";
import { Counter } from "@/components/cinematic/Counter";
import { Reveal } from "@/components/cinematic/Reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";
import { PROCESS_STEPS, SERVICES } from "@/lib/data";

const FACTS = [
  { to: PORTFOLIO_PROJECTS.length, suffix: "+", label: "Project web, mobile & sistem" },
  { to: SERVICES.length, suffix: "", label: "Layanan dengan harga terbuka" },
  { to: PROCESS_STEPS.length, suffix: "", label: "Langkah dari chat ke live" },
];

export function Manifesto() {
  return (
    <section className="section-pad relative">
      <div className="container-galivra">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-galivra-cyan" />
              Tentang GALIVRA
            </p>
          </div>
          <div className="md:col-span-9">
            <ScrollTextReveal
              text="Kami percaya teknologi yang baik tidak terasa rumit. Ia bekerja diam-diam — menghemat waktu tim, merapikan data, dan mendatangkan pelanggan baru. Itu yang kami bangun: website, aplikasi, dan sistem yang dipakai setiap hari, bukan sekadar dipajang."
              accent={["diam-diam", "dipakai"]}
              className="text-display-sm font-medium leading-[1.18] text-ink md:text-[2.75rem] md:leading-[1.14]"
            />

            <div className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3">
              {FACTS.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.08} y={20}>
                  <Counter
                    to={f.to}
                    suffix={f.suffix}
                    className="font-display text-6xl font-medium tracking-[-0.05em] text-ink md:text-7xl"
                  />
                  <p className="mt-3 max-w-[16ch] text-sm text-ink-muted">{f.label}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12">
              <Link
                href="/tentang"
                className="group inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-galivra-cyan"
              >
                <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-galivra-cyan">
                  Kenali cara kerja kami
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
