"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/cinematic/Reveal";
import { SpotlightCard } from "@/components/cinematic/SpotlightCard";
import { SERVICES, SITE } from "@/lib/data";

function waLinkFor(serviceTitle: string) {
  const text = `Halo GALIVRA, saya tertarik dengan layanan "${serviceTitle}". Bisa dijelaskan detail dan penawarannya?`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Full pricing grid — the main content of /harga. */
export function Pricing() {
  return (
    <section id="pricing" className="relative pb-24 pt-36 md:pb-36 md:pt-44">
      <div className="container-galivra">
        <SectionHeading
          as="h1"
          trigger="mount"
          eyebrow="Harga"
          title="Harga per layanan, jelas dari awal."
          accent="jelas"
          description="Harga di bawah adalah harga mulai. Harga final tergantung kompleksitas, jumlah fitur, dan integrasi — Anda menerima penawaran tertulis sebelum membayar apa pun."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon];
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.07} y={28} className="h-full">
                <SpotlightCard className="flex h-full flex-col rounded-3xl border border-line bg-panel/50 p-7 md:p-8">
                  <div className="flex items-start justify-between">
                    {Icon && (
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                        <Icon className="h-5 w-5 text-galivra-bright" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                    )}
                    <span className="num-marker">{service.index}</span>
                  </div>

                  <Link
                    href={`/layanan/${service.slug}`}
                    className="group mt-7 inline-flex items-center gap-1.5 font-display text-xl font-medium tracking-[-0.02em] text-ink"
                  >
                    {service.title}
                    <ArrowUpRight className="h-4 w-4 text-ink-faint transition-transform duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-white" />
                  </Link>

                  <p className="mt-4 flex items-baseline gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                      mulai
                    </span>
                    <span className="font-display text-4xl font-medium tracking-[-0.04em] text-ink">
                      {service.priceFrom}
                    </span>
                  </p>

                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-galivra-cyan" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLinkFor(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 text-sm font-medium text-ink transition-colors duration-300 hover:border-transparent hover:bg-ink hover:text-void"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Tanya harga via WhatsApp
                  </a>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <div className="grid grid-cols-1 gap-6 rounded-3xl border border-line bg-panel/50 p-8 md:grid-cols-12 md:items-center md:p-10">
            <p className="eyebrow md:col-span-3">Sistem pembayaran</p>
            <p className="text-lg leading-relaxed text-ink-muted md:col-span-9 md:text-xl">
              <span className="text-ink">DP 50%</span> untuk mengunci jadwal pengerjaan,{" "}
              <span className="text-ink">pelunasan 50%</span> setelah project selesai dan
              Anda setujui — sebelum serah terima source code atau akses.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
