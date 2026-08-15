"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/cinematic/RevealText";

const ParticleField = dynamic(
  () =>
    import("@/components/cinematic/ParticleField").then(
      (m) => m.ParticleField
    ),
  { ssr: false }
);

const TRUST_ITEMS = ["Web", "Mobile", "AI", "Otomasi", "Data"];

function GMark() {
  return (
    <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center md:h-[420px] md:w-[420px]">
      {/* ambient glow */}
      <div className="absolute h-[80%] w-[80%] rounded-full bg-galivra-blue/20 blur-[90px]" />
      <div className="absolute h-[50%] w-[50%] rounded-full bg-galivra-cyan/10 blur-[70px]" />

      {/* slow rotating orbit rings */}
      <motion.svg
        viewBox="0 0 420 420"
        className="absolute h-full w-full animate-spin-slower opacity-40"
        aria-hidden="true"
      >
        <circle
          cx="210"
          cy="210"
          r="190"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
      </motion.svg>
      <motion.svg
        viewBox="0 0 420 420"
        className="absolute h-[85%] w-[85%] animate-spin-slow opacity-25"
        aria-hidden="true"
      >
        <circle
          cx="210"
          cy="210"
          r="150"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1"
          strokeDasharray="1 6"
        />
      </motion.svg>

      {/* the G, rendered as a wireframe arc — not the literal logo glyph */}
      <svg
        viewBox="0 0 200 200"
        className="relative h-[62%] w-[62%] drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="55%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <motion.path
          d="M138 62
             A62 62 0 1 0 150 128
             L150 100
             L112 100"
          fill="none"
          stroke="url(#gStroke)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {/* data nodes along the mark */}
        {[
          [138, 62],
          [150, 100],
          [150, 128],
          [112, 100],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={3.5}
            fill="#22D3EE"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.6, 1], scale: 1 }}
            transition={{ duration: 2.4, delay: 1 + i * 0.15, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </svg>

      {/* floating data lines */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-px w-16 bg-gradient-to-r from-transparent via-galivra-cyan/70 to-transparent"
          style={{
            top: `${28 + i * 22}%`,
            left: i % 2 === 0 ? "4%" : "auto",
            right: i % 2 !== 0 ? "4%" : "auto",
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      <div className="absolute inset-0 bg-void bg-glow-blue" />
      <ParticleField className="absolute inset-0 opacity-70" />
      <div className="grid-bg absolute inset-0" />
      <div className="noise-overlay absolute inset-0" />

      <div className="container-galivra relative grid grid-cols-1 items-center gap-16 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Mitra Inovasi Digital
          </motion.p>

          <RevealText
            as="h1"
            text="Bangun Solusi Digital yang Membawa Bisnis Anda Maju."
            highlight="Bisnis"
            trigger="mount"
            delay={0.15}
            className="mt-6 text-hero-mobile font-semibold text-white md:text-hero-tablet lg:text-hero-desktop"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg"
          >
            GALIVRA membantu bisnis membangun website modern, aplikasi
            mobile, otomasi berbasis AI, solusi data, dan sistem digital
            yang bisa berkembang bersama bisnis Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/kontak" variant="primary" withArrow>
              Mulai Project Anda
            </Button>
            <Button href="#services" variant="secondary">
              Lihat Layanan
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint"
          >
            {TRUST_ITEMS.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {item}
                {i < TRUST_ITEMS.length - 1 && (
                  <span className="text-galivra-blue/50">•</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <GMark />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-x-0 bottom-8 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
          Scroll
        </span>
        <motion.span
          className="h-9 w-px bg-gradient-to-b from-galivra-cyan/70 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
