"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_STEPS } from "@/lib/data";

export function Process() {
  return (
    <section className="section-pad relative border-t border-line bg-deep/40">
      <div className="container-galivra">
        <SectionHeading
          eyebrow="Cara Memulai"
          title="Dari Chat WhatsApp Sampai Project Selesai."
          description="Prosesnya simpel — tidak perlu bingung harus mulai dari mana. Ikuti 5 langkah ini."
        />

        {/* Desktop: horizontal timeline */}
        <div className="mt-20 hidden lg:block">
          <div className="relative grid grid-cols-5 gap-6">
            <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-galivra-blue/60 via-galivra-cyan/40 to-transparent" />
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pt-16"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-galivra-blue/50 bg-void font-mono text-xs text-galivra-bright">
                  {step.index}
                </div>
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="mt-14 space-y-10 lg:hidden">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex gap-5 pl-1"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-galivra-blue/50 bg-void font-mono text-xs text-galivra-bright">
                  {step.index}
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-gradient-to-b from-galivra-blue/50 to-transparent" />
                )}
              </div>
              <div className="pb-2">
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
