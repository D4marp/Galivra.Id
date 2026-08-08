export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/#services" },
  { label: "Solusi", href: "/#solutions" },
  { label: "Karya", href: "/#work" },
  { label: "Tentang", href: "/tentang" },
  { label: "Harga", href: "/harga" },
  { label: "Kontak", href: "/kontak" },
];

export type Service = {
  index: string;
  title: string;
  description: string;
  icon: string;
  priceFrom: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Pengembangan Website",
    description:
      "Website resmi untuk bisnis Anda — landing page, company profile, atau blog. Desain modern, cepat diakses, dan enak dilihat di HP maupun laptop.",
    icon: "Globe",
    priceFrom: "Rp500K",
    features: [
      "1–5 halaman (landing page / company profile)",
      "Desain responsif untuk HP, tablet, dan desktop",
      "Source code diserahkan penuh ke Anda",
      "SEO dasar & optimasi kecepatan loading",
    ],
  },
  {
    index: "02",
    title: "Pengembangan Aplikasi Mobile",
    description:
      "Aplikasi Android maupun iOS untuk kebutuhan bisnis nyata — mulai dari aplikasi internal sampai aplikasi yang dipakai pelanggan Anda sehari-hari.",
    icon: "Smartphone",
    priceFrom: "Rp2.5JT",
    features: [
      "Desain UI/UX sesuai brand bisnis Anda",
      "Terhubung ke backend / API sesuai kebutuhan",
      "Testing di perangkat asli sebelum rilis",
      "Bantuan proses publish ke Play Store / App Store",
    ],
  },
  {
    index: "03",
    title: "E-Commerce",
    description:
      "Toko online lengkap dari katalog produk sampai pembayaran, jadi pelanggan bisa belanja langsung tanpa ribet chat manual satu-satu.",
    icon: "ShoppingCart",
    priceFrom: "Rp750K",
    features: [
      "Katalog produk, keranjang, dan checkout",
      "Integrasi pembayaran (QRIS / transfer / payment gateway)",
      "Panel admin untuk kelola produk & pesanan",
      "Desain responsif dan siap dipakai jualan",
    ],
  },
  {
    index: "04",
    title: "Sistem Bisnis",
    description:
      "Dashboard, CRM, sistem inventory, atau alat operasional lain yang dibuat khusus mengikuti alur kerja bisnis Anda — bukan template generik.",
    icon: "LayoutDashboard",
    priceFrom: "Rp1.5JT",
    features: [
      "Dashboard admin / CRM / inventory sesuai kebutuhan",
      "Manajemen user & hak akses (role-based)",
      "Laporan dan visualisasi data otomatis",
      "Bisa terhubung ke sistem lain yang sudah Anda pakai",
    ],
  },
  {
    index: "05",
    title: "AI & Otomasi",
    description:
      "Otomatiskan pekerjaan berulang — dari chat pelanggan sampai input data — supaya tim Anda fokus ke hal yang lebih penting.",
    icon: "Bot",
    priceFrom: "Rp750K",
    features: [
      "Chatbot AI untuk WhatsApp atau website",
      "Otomasi workflow (notifikasi, follow-up, input data)",
      "Integrasi OCR / pemrosesan dokumen",
      "Terhubung ke tools yang sudah Anda pakai (Sheets, WA, email)",
    ],
  },
  {
    index: "06",
    title: "Solusi Data",
    description:
      "Pengumpulan dan penyusunan data dari sumber publik untuk riset pasar, lead generation, atau monitoring bisnis — rapi dan siap pakai.",
    icon: "Database",
    priceFrom: "Rp50K",
    features: [
      "Pengambilan data dari sumber publik (Google Maps, website, dll)",
      "Pembersihan & penyusunan data",
      "Output siap pakai: CSV, Excel, atau database",
      "Hanya dari sumber yang legal & sesuai ketentuan platform",
    ],
  },
  {
    index: "07",
    title: "API & Integrasi",
    description:
      "Sambungkan aplikasi, sistem, dan layanan pihak ketiga yang Anda pakai supaya data mengalir otomatis tanpa kerja manual.",
    icon: "Plug",
    priceFrom: "Rp250K",
    features: [
      "Menghubungkan aplikasi atau sistem yang berbeda",
      "Integrasi payment gateway / layanan pihak ketiga",
      "Dokumentasi API yang jelas",
      "Testing end-to-end sebelum digunakan",
    ],
  },
  {
    index: "08",
    title: "Cloud & Deployment",
    description:
      "Setup server, domain, dan infrastruktur produksi supaya website atau aplikasi Anda online, aman, dan siap diakses publik.",
    icon: "Cloud",
    priceFrom: "Rp150K",
    features: [
      "Setup server / hosting / cloud",
      "Konfigurasi domain & SSL (HTTPS)",
      "Deployment dengan Docker / CI-CD dasar",
      "Monitoring dasar setelah project live",
    ],
  },
];

export type Solution = {
  label: string;
  title: string;
  description: string;
};

export const SOLUTIONS: Solution[] = [
  {
    label: "Otomasi Bisnis",
    title: "Alur Kerja Otomatis",
    description: "Ubah proses yang berulang menjadi alur kerja otomatis.",
  },
  {
    label: "Intelijen Data",
    title: "Wawasan Terstruktur",
    description:
      "Kumpulkan, susun, dan ubah data publik menjadi wawasan yang bisa ditindaklanjuti.",
  },
  {
    label: "Produk Digital",
    title: "Dibangun untuk Berkembang",
    description:
      "Luncurkan website, aplikasi mobile, dan platform yang dirancang untuk skala besar.",
  },
];

export const DATA_SOURCES = [
  "Data Google Maps",
  "Data Website",
  "Halaman Facebook Publik",
  "Informasi Bisnis Publik",
  "Data Katalog Produk",
  "Data Riset Pasar",
];

export const DATA_FLOW = ["Sumber", "Kumpulkan", "Proses", "Susun", "Ekspor"];
export const DATA_OUTPUTS = ["CSV", "Excel", "Database", "API", "Dashboard"];

export const AUTOMATION_EXAMPLES = [
  "OCR",
  "Chatbot AI",
  "Pemrosesan Dokumen",
  "Otomasi Alur Kerja",
  "Pemrosesan Data",
  "Kecerdasan Bisnis",
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Chat via WhatsApp",
    description:
      "Ceritakan kebutuhan project Anda — jenis layanan, target, dan budget. Chat gratis, tanpa komitmen.",
  },
  {
    index: "02",
    title: "Konsultasi & Penawaran",
    description:
      "Tim GALIVRA berdiskusi lebih detail lalu mengirim penawaran tertulis: scope kerja, harga final, dan estimasi waktu pengerjaan.",
  },
  {
    index: "03",
    title: "DP 50% untuk Mulai",
    description:
      "Setelah sepakat, bayar DP 50% dari total harga agar project langsung masuk antrian pengerjaan.",
  },
  {
    index: "04",
    title: "Proses & Review",
    description:
      "Tim mengerjakan sesuai timeline yang disepakati. Anda bisa pantau progres dan memberi masukan di tengah jalan.",
  },
  {
    index: "05",
    title: "Pelunasan & Serah Terima",
    description:
      "Setelah selesai dan disetujui, lunasi sisa 50%. Anda menerima source code / akses penuh beserta garansi bug fix singkat.",
  },
];

export type Principle = {
  index: string;
  title: string;
  description: string;
};

export const PRINCIPLES: Principle[] = [
  {
    index: "01",
    title: "Bisnis Diutamakan",
    description: "Teknologi harus menyelesaikan masalah bisnis nyata.",
  },
  {
    index: "02",
    title: "Rekayasa Modern",
    description: "Arsitektur bersih dan kode yang mudah dirawat.",
  },
  {
    index: "03",
    title: "Performa",
    description: "Pengalaman yang cepat, responsif, dan teroptimasi.",
  },
  {
    index: "04",
    title: "Skalabel",
    description: "Dibangun untuk berkembang bersama bisnis Anda.",
  },
];

export const TRUST_CATEGORIES = [
  "Startup",
  "UMKM",
  "Pendidikan",
  "Kesehatan",
  "Enterprise",
  "Organisasi",
];

export const PROJECT_TYPES = [
  "Website",
  "Aplikasi Mobile",
  "E-Commerce",
  "Dashboard",
  "Otomasi AI",
  "Web Scraping",
  "Integrasi API",
  "Lainnya",
];

export const BUDGET_RANGES = [
  "< Rp1M",
  "Rp1M–5M",
  "Rp5M–10M",
  "Rp10M+",
  "Belum Yakin",
];

export const SITE = {
  name: "GALIVRA",
  fullName: "Galivra Innovation Solutions",
  tagline: "Bangun. Otomatiskan. Kembangkan.",
  positioning: "Mitra Inovasi Digital",
  whatsapp: "6289601321118",
  email: "praaji12@gmail.com",
};
