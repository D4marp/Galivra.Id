"use client";

import { EyeOff, MessageCircleOff, ShieldQuestion } from "lucide-react";
import { RevealText } from "@/components/cinematic/RevealText";
import { ScrollTextReveal } from "@/components/cinematic/ScrollTextReveal";
import { Reveal } from "@/components/cinematic/Reveal";
import { SpotlightCard } from "@/components/cinematic/SpotlightCard";

const PAINS = [
  {
    icon: EyeOff,
    title: "Tidak ditemukan.",
    body: (
      <>
        Tanpa website, nama Anda <strong className="font-medium text-ink">tidak muncul</strong> di Google.
        Pesaing yang muncul.
      </>
    ),
  },
  {
    icon: ShieldQuestion,
    title: "Tidak dipercaya.",
    body: (
      <>
        Link Instagram saja terasa seperti <strong className="font-medium text-ink">usaha sampingan</strong>.
        Pelanggan ragu transfer.
      </>
    ),
  },
  {
    icon: MessageCircleOff,
    title: "Kelelahan.",
    body: (
      <>
        Anda membalas pertanyaan yang sama <strong className="font-medium text-ink">ratusan kali</strong>.
        Setiap minggu.
      </>
    ),
  },
];

/** PAS: names the problem, then makes the cost of inaction concrete. */
export function Agitation() {
  return (
    <section id="kenapa" className="section-pad relative">
      <div className="container-galivra">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal y={10} blur={false}>
              <p className="eyebrow mb-6 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-galivra-cyan" />
                Kenapa Anda kalah
              </p>
            </Reveal>
            <RevealText
              text="Pelanggan hilang. Anda tidak pernah tahu."
              accent="tahu."
              className="text-display-sm font-medium text-ink text-balance"
            />
          </div>

          <div className="md:col-span-8">
            <ScrollTextReveal
              text="Seseorang mencari jasa Anda di Google. Tidak ketemu. Ia bertanya lewat WhatsApp jam sebelas malam. Tidak dibalas. Ia membuka website pesaing Anda. Rapi, cepat, harganya jelas. Ia tidak pernah kembali. Dan Anda tidak pernah tahu ia ada."
              accent={["pesaing", "tahu"]}
              className="text-[1.65rem] font-medium leading-[1.25] text-ink md:text-[2.5rem] md:leading-[1.16]"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 md:mt-28 md:grid-cols-3 md:gap-5">
          {PAINS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08} y={28} className="h-full">
              <SpotlightCard className="flex h-full flex-col rounded-3xl border border-line bg-panel/50 p-7 md:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-galivra-cyan/30 bg-galivra-cyan/10">
                  <Icon className="h-5 w-5 text-galivra-cyan" />
                </span>
                <h3 className="mt-10 font-display text-2xl font-medium tracking-[-0.03em] text-ink">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{body}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="max-w-2xl font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-ink md:text-3xl">
            Masalahnya bukan produk Anda.{" "}
            <span className="serif-accent text-gradient">Masalahnya cara Anda terlihat.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
