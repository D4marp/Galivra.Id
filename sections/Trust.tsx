"use client";

import { motion } from "framer-motion";
import { TRUST_CATEGORIES } from "@/lib/data";

export function Trust() {
  return (
    <section className="border-y border-line bg-deep/60 py-14">
      <div className="container-galivra">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <p className="text-sm text-ink-muted md:max-w-xs">
            Dibuat untuk bisnis yang ingin bergerak lebih cepat.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:justify-end">
            {TRUST_CATEGORIES.map((category, i) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint"
              >
                {category}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
