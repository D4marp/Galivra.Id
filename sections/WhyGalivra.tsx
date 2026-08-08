"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { PRINCIPLES } from "@/lib/data";

export function WhyGalivra() {
  return (
    <section id="why" className="section-pad relative border-t border-line">
      <div className="container-galivra">
        <SectionHeading
          eyebrow="Kenapa GALIVRA"
          title="Dibangun dengan Tujuan. Direkayasa untuk Berkembang."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((principle, i) => (
            <motion.div
              key={principle.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex min-h-[200px] flex-col justify-between bg-panel p-8"
            >
              <span className="num-marker">{principle.index}</span>
              <div>
                <h3 className="text-lg font-medium text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
