"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, Database, FileText, Lock, MessageCircle, Sparkles } from "lucide-react";
import { RevealText } from "@/components/cinematic/RevealText";
import { Reveal } from "@/components/cinematic/Reveal";
import { SpotlightCard } from "@/components/cinematic/SpotlightCard";
import { cn } from "@/lib/utils";

function Tile({
  href,
  eyebrow,
  title,
  body,
  className,
  children,
  delay = 0,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} y={30} className={cn("h-full", className)}>
      <SpotlightCard className="h-full rounded-3xl border border-line bg-panel/50">
        <Link href={href} className="group flex h-full flex-col p-7 md:p-8">
          <div className="flex items-center justify-between">
            <span className="eyebrow">{eyebrow}</span>
            <ArrowUpRight className="h-4 w-4 text-ink-faint transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-white" />
          </div>
          <div className="relative my-6 flex-1">{children}</div>
          <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-ink">{title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">{body}</p>
        </Link>
      </SpotlightCard>
    </Reveal>
  );
}

const AI_STEPS = [
  { icon: MessageCircle, label: "Pesan pelanggan masuk ke WhatsApp" },
  { icon: Bot, label: "AI memahami dan membalas otomatis" },
  { icon: Database, label: "Data pesanan tercatat ke sistem" },
  { icon: FileText, label: "Tim menerima ringkasan harian" },
];

function AiFlow() {
  return (
    <div className="relative flex h-full min-h-[260px] flex-col justify-center gap-5 py-2 pl-12">
      <div className="absolute bottom-6 left-[19px] top-6 w-px bg-line">
        <span
          className="absolute left-1/2 h-10 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-galivra-cyan to-transparent"
          style={{ animation: "flow-dot 6.4s cubic-bezier(0.65,0,0.35,1) infinite" }}
        />
      </div>
      {AI_STEPS.map(({ icon: Icon, label }, i) => (
        <div
          key={label}
          className="anim-loop relative flex items-center gap-4"
          style={{ animation: `step-on 6.4s ease-in-out ${i * 1.6}s infinite`, opacity: 0.38 }}
        >
          <span className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-void">
            <Icon className="h-4 w-4 text-galivra-bright" />
          </span>
          <span className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function PosLock() {
  return (
    <div className="flex h-full min-h-[140px] items-center justify-center">
      <div className="relative flex h-20 w-20 items-center justify-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border border-galivra-bright/50"
            style={{ animation: `ring-out 3.6s ease-out ${i * 1.2}s infinite` }}
          />
        ))}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient shadow-glow">
          <Lock className="h-6 w-6 text-white" />
        </span>
      </div>
    </div>
  );
}

function DeviceStack() {
  return (
    <div className="relative h-full min-h-[190px]">
      <div className="absolute left-[4%] top-4 w-[62%] rotate-[-4deg] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50 transition-transform duration-700 ease-out-expo group-hover:-translate-x-2 group-hover:rotate-[-7deg]">
        <Image src="/portfolio/annitadonat.png" alt="" width={1600} height={900} className="h-auto w-full" sizes="30vw" />
      </div>
      <div className="absolute right-[4%] top-10 w-[62%] rotate-[3deg] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50 transition-transform duration-700 ease-out-expo group-hover:translate-x-2 group-hover:rotate-[6deg]">
        <Image src="/portfolio/gensakidz.png" alt="" width={1600} height={900} className="h-auto w-full" sizes="30vw" />
      </div>
    </div>
  );
}

const TERM = [
  { t: "$ git push origin main", c: "text-ink-muted" },
  { t: "✓ Build selesai", c: "text-emerald-300/90" },
  { t: "✓ Deploy ke server", c: "text-emerald-300/90" },
  { t: "✓ SSL aktif · HTTPS", c: "text-emerald-300/90" },
  { t: "→ Live di domainanda.com", c: "text-galivra-cyan" },
];

function Terminal() {
  return (
    <div className="h-full min-h-[190px] overflow-hidden rounded-xl border border-white/10 bg-void/80 font-mono text-[12px] leading-relaxed">
      <div className="flex gap-1.5 border-b border-white/10 px-4 py-3">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/15" />
        ))}
      </div>
      <div className="space-y-1.5 p-4">
        {TERM.map((l, i) => (
          <p
            key={l.t}
            className={cn("anim-loop", l.c)}
            style={{ animation: `term-line 8s ease-out ${i * 0.9}s infinite`, opacity: 0 }}
          >
            {l.t}
          </p>
        ))}
      </div>
    </div>
  );
}

export function Capabilities() {
  return (
    <section id="solutions" className="section-pad relative border-t border-line">
      <div className="container-galivra">
        <div className="max-w-3xl">
          <Reveal y={10} blur={false}>
            <p className="eyebrow mb-6 flex items-center gap-2.5">
              <Sparkles className="h-3.5 w-3.5 text-galivra-cyan" />
              Yang Anda dapatkan
            </p>
          </Reveal>
          <RevealText
            text="Anda tidak membeli fitur. Anda membeli hasil."
            accent="hasil."
            className="text-display-md font-medium text-ink text-balance"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-muted md:text-[17px]">
              Empat hal yang berubah setelah kami selesai bekerja.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-auto grid-cols-1 gap-4 md:mt-20 md:grid-cols-6 md:gap-5">
          <Tile
            href="/layanan/ai-otomasi"
            eyebrow="AI & Otomasi"
            title="Anda tidur. Pesanan tetap masuk."
            body={
              <>
                Chatbot WhatsApp membalas, mencatat, lalu merangkum.{" "}
                <strong className="font-medium text-ink">Tanpa Anda pegang HP.</strong>
              </>
            }
            className="md:col-span-4"
          >
            <AiFlow />
          </Tile>
          <Tile
            href="/layanan/pengembangan-website"
            eyebrow="Web & Mobile"
            title="Terlihat seperti perusahaan besar."
            body={
              <>
                Pelanggan <strong className="font-medium text-ink">yakin</strong> sebelum sempat bertanya.
              </>
            }
            className="md:col-span-2"
            delay={0.08}
          >
            <DeviceStack />
          </Tile>
          <Tile
            href="/layanan/pos-system-on-premise"
            eyebrow="On-Premise"
            title="Data Anda, di tangan Anda."
            body={
              <>
                Internet mati? Kasir <strong className="font-medium text-ink">tetap jalan.</strong>
              </>
            }
            className="md:col-span-2"
            delay={0.16}
          >
            <PosLock />
          </Tile>
          <Tile
            href="/layanan/cloud-deployment"
            eyebrow="Cloud & Deployment"
            title="Dari selesai ke live, tanpa drama."
            body={
              <>
                Domain, server, SSL kami urus. Anda{" "}
                <strong className="font-medium text-ink">cukup terima link-nya.</strong>
              </>
            }
            className="md:col-span-4"
            delay={0.08}
          >
            <Terminal />
          </Tile>
        </div>
      </div>
    </section>
  );
}
