import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { SERVICES, SITE, type Service } from "@/lib/data";
import { RevealText } from "@/components/cinematic/RevealText";
import { Reveal } from "@/components/cinematic/Reveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";

function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

function waLinkFor(serviceTitle: string) {
  const text = `Halo GALIVRA, saya tertarik dengan layanan "${serviceTitle}". Bisa dijelaskan detail dan penawarannya?`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

const serviceSeoData: Record<string, { title: string; description: string; keywords: string[] }> = {
  "pengembangan-website": {
    title: "Jasa Pembuatan Website & Landing Page Profesional | Mulai Rp500K",
    description: "Jasa buat website company profile, landing page, dan blog cepat, modern, responsive di HP & PC dengan Next.js dan Laravel.",
    keywords: ["jasa pembuatan website", "jasa bikin landing page", "website perusahaan murah", "jasa web surabaya lamongan"],
  },
  "pengembangan-aplikasi-mobile": {
    title: "Jasa Pembuatan Aplikasi Mobile Android & iOS | Mulai Rp2.5JT",
    description: "Jasa pengembangan aplikasi Android dan iOS native/cross-platform menggunakan Flutter. Solusi aplikasi bisnis modern dan cepat.",
    keywords: ["jasa pembuatan aplikasi android", "jasa aplikasi flutter", "bikin aplikasi ios", "developer aplikasi mobile"],
  },
  "e-commerce": {
    title: "Jasa Pembuatan Toko Online (E-Commerce) | Mulai Rp750K",
    description: "Buat toko online siap pakai dengan katalog produk, sistem keranjang belanja, dan integrasi payment gateway otomatis.",
    keywords: ["jasa toko online", "bikin web ecommerce", "sistem toko online murah"],
  },
  "sistem-bisnis": {
    title: "Jasa Pembuatan Sistem Bisnis, Dashboard & CRM Custom | Mulai Rp1.5JT",
    description: "Kembangkan software internal perusahaan, sistem inventaris, dashboard analitik, dan CRM khusus sesuai alur kerja bisnis Anda.",
    keywords: ["jasa buat sistem bisnis", "pembuatan software CRM custom", "dashboard inventaris perusahaan"],
  },
  "ai-otomasi": {
    title: "Jasa Integrasi AI & Otomasi Alur Kerja Bisnis | Mulai Rp750K",
    description: "Otomatiskan operasional bisnis Anda dengan integrasi AI, WhatsApp Chatbot, OCR data extraction, dan workflow automation.",
    keywords: ["jasa otomasi AI", "integrasi AI bisnis", "buat chatbot whatsapp", "otomasi data entry"],
  },
  "solusi-data": {
    title: "Jasa Riset Data, Web Scraping & Lead Generation | Mulai Rp50K",
    description: "Pengumpulan dan pengolahan data publik terstruktur untuk kebutuhan riset pasar, analisis kompetitor, dan lead generation.",
    keywords: ["jasa web scraping", "jasa pengolahan data", "riset pasar digital"],
  },
  "api-integrasi": {
    title: "Jasa Integrasi API & Penyaluran Sistem Aplikasi | Mulai Rp250K",
    description: "Hubungkan berbagai sistem, database, dan payment gateway bisnis Anda agar mengalir otomatis tanpa input manual.",
    keywords: ["jasa integrasi API", "penyambung sistem aplikasi", "rest api integration"],
  },
  "pos-system-on-premise": {
    title: "Jasa Sistem Kasir POS On-Premise Server Lokal | Mulai Rp1.5JT",
    description: "Sistem Kasir (POS) aman terpasang di server lokal bisnis Anda. Bebas biaya langganan bulanan dan tidak tergantung internet.",
    keywords: ["sistem kasir on premise", "aplikasi POS server lokal", "software kasir tanpa internet"],
  },
  "cloud-deployment": {
    title: "Jasa Cloud Deployment, Setup Server & DevOps | Mulai Rp150K",
    description: "Jasa konfigurasi server VPS, Proxmox, Docker, SSL, dan deployment aplikasi/website agar online dan aman 24/7.",
    keywords: ["jasa setup vps", "cloud deployment murah", "jasa devops docker proxmox"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getService(params.slug);
  const seo = serviceSeoData[params.slug] || {
    title: service ? `${service.title} — Layanan GALIVRA` : "Layanan Digital Profesional",
    description: service ? service.longDescription : "Solusi teknologi digital terpadu untuk bisnis dari Galivra Innovation Solutions.",
    keywords: ["galivra", "layanan digital"],
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.galivra.web.id";

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/layanan/${params.slug}`,
    },
    openGraph: {
      title: `${seo.title} | Galivra`,
      description: seo.description,
      url: `${siteUrl}/layanan/${params.slug}`,
    },
  };
}

export default function LayananDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
    service.icon
  ];

  return (
    <>
      <Navbar />
      <main className="relative pt-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <div className="container-galivra relative">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Layanan
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                {Icon && (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-galivra-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
                <p className="eyebrow">Layanan</p>
              </div>
              <RevealText
                as="h1"
                text={service.title}
                trigger="mount"
                className="mt-4 text-display-md font-medium text-ink"
              />
              <Reveal y={16} delay={0.3}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                  {service.longDescription}
                </p>
              </Reveal>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Mulai dari
                </span>
                <span className="text-2xl font-semibold tracking-tight text-white">
                  {service.priceFrom}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <WhatsAppCTA
                  locationLabel={`Layanan Detail - ${service.title}`}
                  message={`Halo GALIVRA, saya tertarik dengan layanan "${service.title}". Bisa dijelaskan detail dan penawarannya?`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-void shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-all duration-300 hover:shadow-glow"
                >
                  <MessageCircle className="h-4 w-4" />
                  Tanya Harga di WhatsApp
                </WhatsAppCTA>
                <Button href="/harga" variant="secondary">
                  Lihat Semua Harga
                </Button>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-8 md:p-10">
              <p className="eyebrow mb-6">Yang Anda Dapatkan</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-galivra-blue"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 border-t border-line pt-14">
            <p className="eyebrow">Cocok Untuk Siapa</p>
            <h2 className="mt-3 max-w-xl text-2xl font-semibold text-white md:text-3xl">
              Menjangkau Berbagai Segmen Bisnis.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.segments.map((segment, i) => (
                <Reveal key={segment.title} delay={i * 0.08} y={20}>
                  <div className="glass-panel h-full rounded-2xl p-6">
                    <h3 className="text-base font-medium text-white">
                      {segment.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {segment.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-line pt-14 pb-24">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 max-w-xl text-2xl font-semibold text-white md:text-3xl">
              Pertanyaan yang Sering Ditanyakan.
            </h2>
            <div className="mt-10 max-w-2xl space-y-8">
              {service.faq.map((item, i) => (
                <Reveal key={item.question} delay={i * 0.06}>
                  <h3 className="text-base font-medium text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.answer}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="glass-panel relative mt-14 overflow-hidden rounded-2xl p-8 text-center md:p-12">
              <p className="text-lg font-medium text-white md:text-xl">
                Siap mulai {service.title.toLowerCase()}?
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
                Chat dulu untuk konsultasi gratis, tanpa komitmen.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <Button href="/kontak" variant="primary" withArrow>
                  Mulai Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
