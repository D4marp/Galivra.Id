"use client";

import { Check } from "lucide-react";
import { RevealText } from "@/components/cinematic/RevealText";
import { Reveal } from "@/components/cinematic/Reveal";
import { SpotlightCard } from "@/components/cinematic/SpotlightCard";

// Every answer below restates terms already in /terms and the process steps —
// no promise here that the business hasn't already made in writing.
const OBJECTIONS = [
  {
    q: "“Bagaimana kalau saya bayar, lalu ditinggal?”",
    lead: "Wajar. Cerita vendor menghilang setelah DP memang banyak.",
    points: [
      <>Anda <strong className="font-medium text-ink">tidak bayar penuh</strong> di depan.</>,
      <>DP 50% hanya untuk mengunci jadwal pengerjaan.</>,
      <>Progres bisa Anda <strong className="font-medium text-ink">pantau dan koreksi</strong> di tengah jalan.</>,
      <>Sisa 50% dibayar <strong className="font-medium text-ink">setelah Anda setuju</strong> dengan hasilnya.</>,
    ],
  },
  {
    q: "“Saya tidak paham teknis. Nanti saya tergantung Anda?”",
    lead: "Tidak. Justru itu yang kami hindari.",
    points: [
      <>Anda <strong className="font-medium text-ink">tidak perlu paham kode</strong> sama sekali.</>,
      <>Kami bicara bahasa bisnis, bukan bahasa server.</>,
      <>Source code dan akses <strong className="font-medium text-ink">sepenuhnya milik Anda</strong>.</>,
      <>Ada garansi perbaikan bug setelah serah terima.</>,
    ],
  },
];

export function Objections() {
  return (
    <section id="keraguan" className="section-pad relative">
      <div className="container-galivra">
        <div className="max-w-3xl">
          <Reveal y={10} blur={false}>
            <p className="eyebrow mb-6 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-galivra-cyan" />
              Keraguan yang wajar
            </p>
          </Reveal>
          <RevealText
            text="Dua pertanyaan yang pasti Anda pikirkan."
            accent="pasti"
            className="text-display-md font-medium text-ink text-balance"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2 md:gap-5">
          {OBJECTIONS.map((o, i) => (
            <Reveal key={o.q} delay={i * 0.1} y={30} className="h-full">
              <SpotlightCard className="flex h-full flex-col rounded-3xl border border-line bg-panel/50 p-8 md:p-10">
                <h3 className="serif-accent text-3xl leading-tight text-ink md:text-[2.4rem]">{o.q}</h3>
                <p className="mt-5 text-ink-muted">{o.lead}</p>
                <ul className="mt-8 space-y-4 border-t border-line pt-8">
                  {o.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-ink-muted">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
