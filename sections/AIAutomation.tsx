"use client";

import { motion } from "framer-motion";
import { ScanLine, MessagesSquare, FileText, GitBranch, Cpu, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AUTOMATION_EXAMPLES } from "@/lib/data";

const ICONS = [ScanLine, MessagesSquare, FileText, GitBranch, Cpu, BarChart3];
const FLOW = ["Tugas Manual", "Proses AI", "Otomasi", "Hasil Bisnis"];

export function AIAutomation() {
  return (
    <section className="section-pad relative border-t border-line">
      <div className="container-galivra">
        <SectionHeading
          eyebrow="AI & Otomasi"
          title="Otomatiskan yang Memperlambat Bisnis Anda."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
          {FLOW.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span
                className={`rounded-full border px-5 py-2.5 text-sm font-medium ${
                  i === FLOW.length - 1
                    ? "border-galivra-cyan/50 bg-galivra-cyan/10 text-galivra-cyan"
                    : "border-line text-ink-muted"
                }`}
              >
                {step}
              </span>
              {i < FLOW.length - 1 && (
                <span className="hidden text-galivra-blue/60 sm:block">→</span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {AUTOMATION_EXAMPLES.map((example, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={example}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-panel flex flex-col items-center gap-3 rounded-xl px-4 py-8 text-center transition-colors duration-300 hover:border-galivra-blue/40"
              >
                <Icon className="h-6 w-6 text-galivra-blue" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm text-ink-muted">{example}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
