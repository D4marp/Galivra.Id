"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Check, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES, SITE } from "@/lib/data";

function waLinkFor(serviceTitle: string) {
  const text = `Halo GALIVRA, saya tertarik dengan layanan "${serviceTitle}". Bisa dijelaskan detail dan penawarannya?`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function Pricing() {
  return (
    <section id="pricing" className="section-pad relative border-t border-line">
      <div className="container-galivra">
        <SectionHeading
          eyebrow="Harga"
          title="Harga per Layanan — Jelas dari Awal."
          description="Harga di bawah ini adalah harga mulai (starting price). Harga final tergantung kompleksitas, jumlah halaman/fitur, dan kebutuhan integrasi — Anda akan menerima penawaran tertulis sebelum membayar apa pun."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              service.icon
            ];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="glass-panel relative flex flex-col overflow-hidden rounded-2xl p-7"
              >
                <div className="flex items-start justify-between">
                  {Icon && (
                    <Icon
                      className="h-6 w-6 text-galivra-cyan"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  )}
                  <span className="num-marker">{service.index}</span>
                </div>

                <h3 className="mt-6 text-lg font-medium text-white">
                  {service.title}
                </h3>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                    Mulai dari
                  </span>
                  <span className="text-2xl font-semibold tracking-tight text-white">
                    {service.priceFrom}
                  </span>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-galivra-blue"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLinkFor(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-galivra-blue/40 hover:bg-white/[0.04] hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-galivra-cyan" />
                  Tanya Harga di WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel relative mt-10 overflow-hidden rounded-2xl p-8 md:p-10"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-galivra-blue/15 blur-3xl" />
          <p className="eyebrow">Sistem Pembayaran</p>
          <p className="relative mt-3 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            <span className="font-medium text-white">DP 50%</span> di awal
            untuk memulai pengerjaan, dan{" "}
            <span className="font-medium text-white">pelunasan 50%</span>{" "}
            setelah project selesai, direview, dan disetujui — sebelum serah
            terima penuh (source code / akses).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
