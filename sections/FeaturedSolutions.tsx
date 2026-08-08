"use client";

import { motion } from "framer-motion";
import { Workflow, Database, Layers } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SOLUTIONS } from "@/lib/data";

const VISUALS = [Workflow, Database, Layers];
const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-12"];

export function FeaturedSolutions() {
  return (
    <section id="solutions" className="section-pad relative border-t border-line">
      <div className="container-galivra">
        <SectionHeading
          eyebrow="Solusi"
          title="Solusi yang Menjawab Masalah Nyata."
          align="left"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {SOLUTIONS.map((solution, i) => {
            const Icon = VISUALS[i];
            return (
              <motion.div
                key={solution.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`glass-panel relative overflow-hidden rounded-2xl p-9 md:p-12 ${SPANS[i]}`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-galivra-blue/10 blur-3xl" />
                <Icon
                  className="h-8 w-8 text-galivra-cyan"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                <p className="eyebrow mt-8">{solution.label}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  {solution.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
