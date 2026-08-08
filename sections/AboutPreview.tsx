"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PRINCIPLES } from "@/lib/data";

export function AboutPreview() {
  return (
    <section id="why" className="section-pad relative border-t border-line">
      <div className="container-galivra">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Kenapa GALIVRA"
            title="Dibangun dengan Tujuan. Direkayasa untuk Berkembang."
            description="Empat prinsip yang kami pegang di setiap project — dan cara lengkap kami bekerja sama dengan Anda dari chat pertama sampai serah terima."
          />
          <Button href="/tentang" variant="secondary" withArrow className="shrink-0">
            Selengkapnya Tentang Kami
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {PRINCIPLES.map((principle, i) => (
            <motion.div
              key={principle.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="num-marker">{principle.index}</span>
              <h3 className="mt-3 text-base font-medium text-white">
                {principle.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
