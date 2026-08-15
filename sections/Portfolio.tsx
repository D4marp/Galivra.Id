"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageReveal } from "@/components/cinematic/ImageReveal";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export function Portfolio() {
  return (
    <section id="work" className="section-pad relative border-t border-line bg-deep/40">
      <div className="container-galivra">
        <SectionHeading
          eyebrow="Karya Pilihan"
          title="Project yang Sudah Kami Kerjakan."
          description={`${PORTFOLIO_PROJECTS.length} project nyata dari mobile app, web app, sampai infrastruktur — klik untuk lihat detail lengkap tiap project.`}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            >
              <Link
                href={`/portfolio/${item.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line"
              >
                <ImageReveal className="relative aspect-[16/9] bg-panel">
                  <Image
                    src={`/portfolio/${item.slug}.png`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-void/60 text-ink-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-galivra-blue/50 group-hover:text-galivra-cyan">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </ImageReveal>
                <div className="glass-panel flex flex-1 flex-col border-t-0 p-6">
                  <p className="eyebrow">{item.category}</p>
                  <h3 className="mt-2 text-lg font-medium text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {item.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-xs text-ink-faint">
                    <span>{item.tech.slice(0, 2).join(", ")}</span>
                    <span className="font-mono">{item.year}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
