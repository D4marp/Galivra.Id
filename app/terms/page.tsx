import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/data";
import { RevealText } from "@/components/cinematic/RevealText";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — GALIVRA",
  description: "Syarat dan ketentuan penggunaan layanan GALIVRA.",
};

const SECTIONS = [
  {
    title: "1. Ruang Lingkup Layanan",
    body: [
      "GALIVRA menyediakan jasa pengembangan digital meliputi website, aplikasi mobile, e-commerce, sistem bisnis, AI & otomasi, data solutions, API & integrasi, serta cloud & deployment. Cakupan pekerjaan setiap project ditentukan berdasarkan kesepakatan tertulis (penawaran/quote) antara GALIVRA dan klien.",
    ],
  },
  {
    title: "2. Proses Pemesanan",
    body: [
      "Setiap project dimulai dari konsultasi kebutuhan (via WhatsApp atau form di website), dilanjutkan dengan penawaran tertulis yang mencakup scope kerja, harga final, dan estimasi waktu pengerjaan. Harga yang tercantum di halaman Harga adalah harga mulai (starting price) dan bukan harga final untuk semua project.",
    ],
  },
  {
    title: "3. Sistem Pembayaran",
    body: [
      "Pengerjaan project dimulai setelah klien membayar DP (uang muka) sebesar 50% dari total harga yang disepakati. Sisa 50% dibayarkan setelah project selesai dikerjakan, direview, dan disetujui oleh klien — sebelum serah terima penuh (source code / akses).",
      "DP yang sudah dibayarkan untuk memulai pengerjaan tidak dapat dikembalikan (non-refundable) apabila pembatalan project terjadi atas permintaan klien setelah pengerjaan dimulai, kecuali disepakati lain secara tertulis.",
    ],
  },
  {
    title: "4. Revisi",
    body: [
      "Jumlah dan cakupan revisi mengikuti kesepakatan pada penawaran masing-masing project. Permintaan perubahan besar di luar scope awal (penambahan fitur baru, perubahan konsep total) akan dihitung sebagai pekerjaan tambahan dan dapat dikenakan biaya tambahan sesuai kesepakatan.",
    ],
  },
  {
    title: "5. Kepemilikan & Hak Cipta",
    body: [
      "Source code, desain, dan aset digital yang dikerjakan akan diserahkan sepenuhnya menjadi milik klien setelah pelunasan penuh dilakukan. Sebelum pelunasan, hak kepemilikan penuh masih berada pada GALIVRA.",
      "GALIVRA berhak menampilkan hasil project (nama, screenshot, deskripsi umum) sebagai bagian dari portofolio, kecuali klien meminta secara tertulis untuk merahasiakannya (NDA).",
    ],
  },
  {
    title: "6. Garansi & Dukungan",
    body: [
      "Setelah serah terima, GALIVRA memberikan garansi perbaikan bug (bug fixing) dalam jangka waktu tertentu sesuai kesepakatan pada penawaran project. Garansi tidak mencakup penambahan fitur baru, perubahan desain, atau kerusakan akibat modifikasi pihak ketiga di luar tim GALIVRA.",
    ],
  },
  {
    title: "7. Batasan Tanggung Jawab",
    body: [
      "GALIVRA berupaya membangun solusi digital sesuai standar praktik terbaik, namun tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan produk oleh klien, gangguan pihak ketiga (hosting, API eksternal, dll), atau penyalahgunaan sistem oleh pihak yang tidak berwenang.",
      "Untuk layanan Data Solutions, klien bertanggung jawab penuh atas kepatuhan penggunaan data hasil pengumpulan terhadap hukum dan regulasi yang berlaku.",
    ],
  },
  {
    title: "8. Perubahan Ketentuan",
    body: [
      "Syarat & ketentuan ini dapat diperbarui sewaktu-waktu. Perubahan akan berlaku sejak dipublikasikan di halaman ini dan tidak berlaku surut terhadap project yang sudah disepakati sebelumnya.",
    ],
  },
  {
    title: "9. Hukum yang Berlaku",
    body: [
      "Syarat & ketentuan ini tunduk pada hukum yang berlaku di Republik Indonesia.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <div className="container-galivra relative pb-24">
          <p className="eyebrow">Legal</p>
          <RevealText
            as="h1"
            text="Syarat & Ketentuan"
            trigger="mount"
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl"
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
                10. Hubungi Kami
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Ada pertanyaan soal syarat & ketentuan ini? Hubungi kami via
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
