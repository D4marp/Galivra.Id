"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28 md:py-40">
      <div className="absolute inset-0 bg-void" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-galivra-blue/20 blur-[140px]" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />

      <div className="container-galivra relative flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-white md:text-6xl lg:text-8xl"
        >
          Punya Ide?
          <br />
          Ayo <span className="text-gradient">Wujudkan</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
        >
          Ceritakan apa yang sedang Anda bangun, apa yang ingin ditingkatkan,
          atau masalah apa yang ingin diselesaikan. GALIVRA akan membantu
          mewujudkannya menjadi solusi digital yang praktis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/kontak" variant="primary" withArrow>
            Mulai Project
          </Button>
          <Button href="/kontak" variant="secondary">
            Hubungi Kami
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
