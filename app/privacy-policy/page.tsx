import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/data";
import { RevealText } from "@/components/cinematic/RevealText";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — GALIVRA",
  description: "Kebijakan privasi GALIVRA mengenai data yang kami kumpulkan dan cara kami menggunakannya.",
};

const SECTIONS = [
  {
    title: "1. Data yang Kami Kumpulkan",
    body: [
      "Saat Anda mengisi form kontak/project inquiry atau menghubungi kami via WhatsApp, kami dapat menerima data berupa: nama, nama bisnis/perusahaan, alamat email, nomor WhatsApp, jenis project, perkiraan budget, dan isi pesan yang Anda tulis.",
      "Kami tidak meminta atau menyimpan data pembayaran (nomor kartu, rekening, dll) melalui website ini — proses pembayaran project disepakati langsung antara Anda dan tim GALIVRA di luar website.",
    ],
  },
  {
    title: "2. Cara Kami Menggunakan Data",
    body: [
      "Data yang Anda kirimkan hanya digunakan untuk merespons pertanyaan atau permintaan project Anda, menyusun penawaran, dan berkomunikasi terkait project yang sedang atau akan berjalan.",
      "Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda ke pihak ketiga untuk kepentingan pemasaran tanpa persetujuan Anda.",
    ],
  },
  {
    title: "3. Layanan Pengumpulan Data (Data Solutions)",
    body: [
      "Untuk layanan Data Solutions / web scraping, GALIVRA hanya mengumpulkan data dari sumber yang dapat diakses publik dan wajib mematuhi ketentuan platform serta regulasi yang berlaku. Klien bertanggung jawab memastikan penggunaan data hasil pengumpulan sesuai hukum yang berlaku.",
    ],
  },
  {
    title: "4. Penyimpanan & Keamanan Data",
    body: [
      "Data yang Anda kirimkan disimpan seperlunya untuk keperluan komunikasi dan pengerjaan project, dan kami berupaya menjaga keamanannya dari akses yang tidak sah.",
      "Form di halaman Kontak akan meneruskan detail pesan Anda ke WhatsApp resmi GALIVRA — pastikan Anda memahami bahwa percakapan WhatsApp selanjutnya mengikuti kebijakan privasi WhatsApp/Meta.",
    ],
  },
  {
    title: "5. Cookie & Analitik",
    body: [
      "Website ini dapat menggunakan cookie dasar atau alat analitik untuk memahami penggunaan website secara umum (misalnya jumlah pengunjung), bukan untuk melacak identitas pribadi Anda secara individual.",
    ],
  },
  {
    title: "6. Hak Anda",
    body: [
      "Anda berhak meminta kami menghapus atau memperbarui data pribadi yang sudah Anda berikan dengan menghubungi kami langsung melalui kontak di bawah ini.",
    ],
  },
  {
    title: "7. Perubahan Kebijakan",
    body: [
      "Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan berlaku sejak dipublikasikan di halaman ini.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <div className="container-galivra relative pb-24">
          <p className="eyebrow">Legal</p>
          <RevealText
            as="h1"
            text="Kebijakan Privasi"
            trigger="mount"
            className="mt-4 max-w-2xl text-[2.25rem] font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl"
          />
          <p className="mt-5 max-w-2xl text-sm text-ink-faint">
            Terakhir diperbarui: 8 Agustus 2026
          </p>

          <div className="mt-14 max-w-3xl space-y-10 border-t border-line pt-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-medium text-white">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-ink-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="text-lg font-medium text-white">
                8. Hubungi Kami
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Ada pertanyaan soal privasi data Anda? Hubungi kami via
                WhatsApp di{" "}
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-galivra-cyan hover:underline"
                >
                  +{SITE.whatsapp}
                </a>{" "}
                atau email ke{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-galivra-cyan hover:underline"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
