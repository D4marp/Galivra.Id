"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/data";

const HIGHLIGHTS = SERVICES.slice(0, 4);

export function HargaPreview() {
  return (
    <section className="section-pad relative border-t border-line">
      <div className="container-galivra">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Harga"
            title="Transparan Sejak Konsultasi Pertama."
            description="Tidak ada biaya tersembunyi — harga di bawah adalah harga mulai, harga final tergantung kompleksitas dan Anda selalu terima penawaran tertulis dulu sebelum bayar apa pun."
          />
          <Button href="/harga" variant="secondary" withArrow className="shrink-0">
            Lihat Semua Harga
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {HIGHLIGHTS.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-panel p-6"
            >
              <p className="text-sm text-ink-muted">{service.title}</p>
              <p className="mt-2 text-xl font-semibold text-white">
                {service.priceFrom}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
