"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DATA_SOURCES, DATA_FLOW, DATA_OUTPUTS } from "@/lib/data";

export function WebScraping() {
  return (
    <section className="section-pad relative border-t border-line bg-deep/40">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-galivra relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Solusi Data"
              title="Ubah Data Publik Jadi Business Intelligence."
              description="GALIVRA menyediakan pengambilan data otomatis dari sumber yang dapat diakses publik untuk riset, analisis pasar, lead generation, monitoring, dan business intelligence."
            />

            <div className="mt-10 flex flex-wrap gap-2.5">
              {DATA_SOURCES.map((source) => (
                <span
                  key={source}
                  className="rounded-full border border-line px-4 py-1.5 text-xs text-ink-muted"
                >
                  {source}
                </span>
              ))}
            </div>

            <p className="mt-8 max-w-md text-xs leading-relaxed text-ink-faint">
              Pengambilan data hanya dilakukan dari informasi yang dapat
              diakses publik dan harus sesuai dengan ketentuan platform serta
              regulasi yang berlaku.
            </p>

            <div className="mt-8">
              <Button href="/kontak" variant="secondary" withArrow>
                Ajukan Pengambilan Data
              </Button>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 md:p-10">
            <p className="eyebrow mb-8">Alur Data</p>
            <div className="flex flex-col gap-0">
              {DATA_FLOW.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-galivra-blue/40 bg-galivra-blue/10 font-mono text-xs text-galivra-bright">
                      {i + 1}
                    </div>
                    {i < DATA_FLOW.length - 1 && (
                      <div className="my-1 h-8 w-px bg-gradient-to-b from-galivra-blue/50 to-transparent" />
                    )}
                  </div>
                  <span className="pb-8 text-sm font-medium text-white">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-2 border-t border-line pt-6">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-faint">
                Hasil Output
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {DATA_OUTPUTS.map((output, i) => (
                  <span key={output} className="flex items-center gap-2">
                    <span className="rounded-md bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-ink-muted">
                      {output}
                    </span>
                    {i < DATA_OUTPUTS.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-ink-faint" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
