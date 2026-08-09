"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-galivra">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Teknologi yang Dibangun Sesuai Kebutuhan Bisnis Anda."
          description="Dari produk digital pertama Anda sampai sistem bisnis yang kompleks — setiap layanan sudah termasuk harga mulai dan rincian yang jelas, supaya Anda tidak bingung harus pilih yang mana."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              service.icon
            ];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={`/layanan/${service.slug}`}
                  className="group relative flex h-full flex-col justify-between gap-8 bg-panel p-7 transition-colors duration-300 hover:bg-white/[0.03] md:min-h-[220px]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_0%,rgba(59,130,246,0.12),transparent_65%)]" />
                  <div className="relative flex items-start justify-between">
                    <span className="num-marker">{service.index}</span>
                    {Icon && (
                      <Icon
                        className="h-5 w-5 text-galivra-blue/70 transition-colors duration-300 group-hover:text-galivra-cyan"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="relative">
                    <h3 className="flex items-center gap-1.5 text-base font-medium text-white">
                      {service.title}
                      <ArrowUpRight className="h-4 w-4 -translate-y-0.5 translate-x-0 text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-galivra-cyan" />
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-xs text-galivra-cyan">
                      Mulai dari {service.priceFrom}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
