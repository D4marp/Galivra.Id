"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/cinematic/RevealText";
import { Reveal } from "@/components/cinematic/Reveal";
import { SERVICES } from "@/lib/data";

export function HargaPreview() {
  return (
    <section id="harga-ringkas" className="section-pad relative">
      <div className="container-galivra grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal y={10} blur={false}>
            <p className="eyebrow mb-6 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-galivra-cyan" />
              Harga
            </p>
          </Reveal>
          <RevealText
            text="Harga terbuka, tanpa biaya tersembunyi."
            accent="terbuka,"
            className="text-display-md font-medium text-ink text-balance"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm leading-relaxed text-ink-muted">
              Ini harga mulai. Setelah konsultasi gratis, Anda menerima penawaran
              tertulis dengan harga final — sebelum membayar apa pun.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/harga"
              className="group mt-10 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-galivra-cyan"
            >
              <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-galivra-cyan">
                Rincian lengkap setiap paket
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>

        <ul className="md:col-span-7">
          {SERVICES.map((s, i) => (
            <li key={s.slug}>
              <Reveal y={16} delay={Math.min(i, 5) * 0.04} blur={false}>
                <Link
                  href={`/layanan/${s.slug}`}
                  className="group flex items-baseline gap-4 border-b border-line py-5"
                >
                  <span className="text-[17px] text-ink transition-colors group-hover:text-galivra-cyan md:text-lg">
                    {s.title}
                  </span>
                  <span className="mb-1 flex-1 border-b border-dotted border-white/15" aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">mulai</span>
                  <span className="font-display text-xl font-medium tracking-[-0.02em] text-ink">
                    {s.priceFrom}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
