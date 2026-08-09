export type PortfolioLinks = {
  playStore?: string;
  appStore?: string;
  website?: string;
};

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  year: string;
  tech: string[];
  summary: string;
  description: string;
  role: string[];
  impact: string[];
  learning?: string[];
  features?: string[];
  links: PortfolioLinks;
  linkNote?: string;
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "smart-presence",
    name: "Smart Presence",
    category: "Mobile & Web App",
    year: "2025",
    tech: ["Flutter", "Bloc", "AI Face Recognition", "GPS"],
    summary:
      "Sistem absensi berbasis mobile dan web untuk cybernet.co.id, dengan fitur face recognition dan verifikasi GPS.",
    description:
      "Penugasan kerja membangun sistem absensi internal perusahaan yang menggabungkan verifikasi wajah berbasis AI dengan validasi lokasi GPS untuk mencegah kecurangan absensi.",
    role: ["Mobile Developer (Flutter + Bloc, integrasi AI)"],
    impact: [
      "Meningkatkan akurasi absensi dan mengurangi kecurangan bagi perusahaan",
    ],
    learning: [
      "Mengintegrasikan AI face recognition dengan verifikasi berbasis lokasi",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.cybernet.attendance&pcampaignid=web_share",
    },
  },
  {
    slug: "uib-presentsee",
    name: "UIB-Presentsee",
    category: "Mobile App",
    year: "2025",
    tech: ["Flutter"],
    summary:
      "Aplikasi mobile untuk Universitas Islam Balitar guna mengelola absensi dosen dan staf dengan sistem yang simpel dan terintegrasi.",
    description:
      "Penugasan kerja membangun aplikasi absensi berbasis Flutter untuk kebutuhan institusi pendidikan, mencakup jadwal kelas, sesi berlangsung, dan riwayat absensi.",
    role: ["Mobile Developer (Flutter + state management)"],
    impact: [
      "Meningkatkan efisiensi dan transparansi pelacakan absensi harian di universitas",
    ],
    learning: [
      "Memperkuat skill membangun aplikasi absensi berbasis role",
      "Mengintegrasikan solusi mobile ke alur kerja institusi",
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=presentsee.beta",
      appStore: "https://apps.apple.com/us/app/uib-presentsee/id6752840530",
    },
  },
  {
    slug: "sasivision",
    name: "SasiVision",
    category: "Mobile App (AR & Edukasi)",
    year: "2025",
    tech: ["Flutter", "Augmented Reality", "Deep Learning"],
    summary:
      "Aplikasi edukasi berbasis Augmented Reality untuk meningkatkan literasi bahasa Inggris dan berpikir kritis siswa SMA lewat eksplorasi budaya Sasirangan, kain tradisional Kalimantan Selatan.",
    description:
      "Penugasan kerja mengembangkan aplikasi AR yang menggabungkan pembelajaran bahasa Inggris dengan pengenalan budaya lokal, lengkap dengan kuis interaktif dan pemindaian motif kain secara real-time.",
    role: ["Mobile Developer (Flutter + integrasi AR)"],
    impact: [
      "Meningkatkan kemampuan bahasa Inggris siswa (listening, speaking, reading, writing) sambil mengenalkan pengetahuan budaya lokal",
      "Memperkuat kemampuan berpikir kritis siswa melalui interaksi AR dan konteks budaya",
    ],
    learning: [
      "Mengembangkan aplikasi edukasi berbasis AR",
      "Mengintegrasikan deep learning untuk contextual learning",
      "Menggabungkan teknologi dengan budaya lokal dalam lingkungan pendidikan",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.sasivision.mobile",
      appStore: "https://apps.apple.com/us/app/sasivision/id6780816316",
    },
  },
  {
    slug: "sarana-bahagia",
    name: "Sarana Bahagia",
    category: "Web App (Sistem Bisnis)",
    year: "2024",
    tech: ["Laravel"],
    summary:
      "Sistem manajemen surat jalan dan invoice untuk perusahaan ekspedisi, dibangun penuh menggunakan Laravel.",
    description:
      "Kolaborasi dengan PT. Rahmat Alam Samudera untuk membangun sistem internal yang menangani pembuatan surat jalan hingga invoice, lengkap dengan jurnal keuangan.",
    role: ["Full development menggunakan Laravel"],
    impact: [
      "Membuat surat jalan hingga invoice dalam satu sistem terintegrasi",
      "Pencatatan jurnal keuangan otomatis",
    ],
    features: ["Manajemen surat jalan", "Invoice", "Jurnal keuangan"],
    links: {},
    linkNote: "Sistem internal, tidak memiliki akses publik.",
  },
  {
    slug: "server-management",
    name: "Server Management",
    category: "Infrastruktur",
    year: "2025",
    tech: ["Docker", "Proxmox", "MikroTik", "Linux"],
    summary:
      "Pengelolaan infrastruktur server menggunakan container Docker, virtualisasi Proxmox, jaringan MikroTik, dan Linux OS untuk mendukung operasional sistem.",
    description:
      "Mengelola dan memelihara infrastruktur server produksi, termasuk virtualisasi, containerization, jaringan, dan backup untuk memastikan sistem berjalan stabil dan aman.",
    role: ["Container menggunakan Docker", "Proxmox", "MikroTik", "Linux OS"],
    impact: ["Infrastruktur server yang stabil dan mudah dikelola untuk berbagai layanan internal"],
    links: {},
    linkNote: "Infrastruktur internal, tidak memiliki akses publik.",
  },
  {
    slug: "visualisasi-data",
    name: "Visualisasi Data",
    category: "Dashboard / Data Visualization",
    year: "2024",
    tech: ["Metabase", "SQL", "SMTP"],
    summary:
      "Dashboard visualisasi data menggunakan Metabase, terintegrasi dengan SMTP, mendukung data spasial, dan query SQL penuh.",
    description:
      "Membangun dashboard analitik internal untuk memvisualisasikan data bisnis, termasuk data spasial/peta, dengan akses query SQL penuh untuk kebutuhan analisis lanjutan.",
    role: ["Membuat visualisasi data menggunakan Metabase"],
    impact: ["Mempermudah tim internal membaca dan menganalisis data bisnis secara visual"],
    features: [
      "Visualisasi data dengan Metabase",
      "Terintegrasi dengan SMTP",
      "Dukungan data spasial",
      "Query SQL penuh",
    ],
    links: { website: "https://metabase.fiyansa.com" },
    linkNote: "Tools internal, memerlukan akun untuk mengakses.",
  },
  {
    slug: "auto-lamongan",
    name: "AutoLamongan",
    category: "Website",
    year: "2026",
    tech: ["Next.js", "Tailwind CSS"],
    summary:
      "Website showroom mobil baru & bekas di Lamongan — katalog unit, simulasi kredit, dan CTA test drive gratis via WhatsApp.",
    description:
      "Landing page untuk showroom mobil, mencakup katalog mobil unggulan (baru & bekas) dengan harga OTR, info kredit/leasing dan tukar tambah, testimoni pelanggan, serta CTA konsultasi dan test drive gratis lewat WhatsApp.",
    role: ["Full development menggunakan Next.js & Tailwind CSS"],
    impact: [
      "Mempermudah calon pembeli melihat katalog unit dan harga tanpa harus datang ke showroom dulu",
      "Meningkatkan kepercayaan lewat testimoni dan informasi garansi/kredit yang jelas",
    ],
    features: [
      "Katalog mobil unggulan dengan harga OTR",
      "Info kredit, tukar tambah, dan asuransi",
      "Testimoni pelanggan",
      "CTA test drive gratis & konsultasi via WhatsApp",
    ],
    links: { website: "https://auto-lamongan.vercel.app" },
  },
  {
    slug: "maxchine",
    name: "MAXCHINE",
    category: "Website (Startup / Pitch Deck)",
    year: "2026",
    tech: ["Next.js", "Tailwind CSS"],
    summary:
      "Website pitch deck untuk startup MAXCHINE — Compatibility Engine untuk standarisasi data komponen dan marketplace suku cadang otomotif Indonesia.",
    description:
      "Membangun landing page investor-facing untuk startup MAXCHINE, mencakup penjelasan masalah pasar, solusi Compatibility Engine, analisis kompetitor, unit economics, roadmap, tim, hingga penawaran pendanaan pre-seed.",
    role: ["Full development menggunakan Next.js & Tailwind CSS"],
    impact: [
      "Menyajikan data pasar dan model bisnis yang kompleks dalam format yang mudah dipahami calon investor",
      "Mendukung proses fundraising pre-seed startup",
    ],
    features: [
      "Penjelasan masalah pasar & solusi (Compatibility Engine)",
      "Analisis kompetitor & TAM/SAM/SOM",
      "Unit economics & roadmap ekspansi",
      "Profil tim & penawaran pendanaan",
    ],
    links: { website: "https://maxchine-id.vercel.app" },
  },
  {
    slug: "ptsam",
    name: "PT. Sinar Afnaindo Makmur",
    category: "Website (UMKM)",
    year: "2025",
    tech: ["Next.js", "Tailwind CSS"],
    summary:
      "Website company profile untuk produsen cemilan sehat daun kelor \"Minimi\" — katalog produk, layanan produksi/distribusi, dan galeri aktivitas perusahaan.",
    description:
      "Landing page untuk UMKM produsen cemilan sehat berbahan daun kelor, mencakup pengenalan produk (snack, mie, rengginang), katalog produk dengan pemesanan via WhatsApp, testimoni pelanggan, layanan produksi-distribusi-konsultasi, serta galeri aktivitas perusahaan.",
    role: ["Full development menggunakan Next.js & Tailwind CSS"],
    impact: [
      "Memberikan kehadiran digital profesional untuk produk UMKM lokal Lamongan",
      "Mempermudah pelanggan memesan produk langsung via WhatsApp",
    ],
    features: [
      "Katalog produk dengan pemesanan via WhatsApp",
      "Testimoni pelanggan",
      "Layanan produksi, distribusi, & konsultasi",
      "Galeri aktivitas perusahaan",
    ],
    links: { website: "https://ptsam.vercel.app" },
  },
  {
    slug: "otobook-landingpage",
    name: "Otobook — Landing Page",
    category: "Website",
    year: "2024",
    tech: ["Web"],
    summary:
      "Landing page promosi untuk aplikasi Otobook — pembaca otomatis metadata buku untuk perpustakaan menggunakan Tesseract OCR dan OpenAI GPT.",
    description:
      "Website promosi yang menjelaskan cara kerja Otobook dalam mendigitalisasi metadata buku perpustakaan secara otomatis, sebagai pelengkap aplikasi mobile Otobook.",
    role: ["Full development landing page"],
    impact: ["Memberikan halaman promosi yang jelas untuk memperkenalkan Otobook ke perpustakaan baru"],
    links: { website: "https://otobook-landingpage.netlify.app" },
  },
  {
    slug: "juup-id",
    name: "Ju.Up.id",
    category: "Website",
    year: "2024",
    tech: ["Next.js"],
    summary:
      "Website untuk brand minuman jus \"Ju.Up\" dengan tagline #PressTheGoodness, dibangun penuh menggunakan Next.js.",
    description:
      "Website company profile dan katalog produk untuk brand jus Ju.Up dengan tagline \"Ini bukan sekedar Jus, Ini Gaya Hidup.\"",
    role: ["Full development menggunakan Next.js"],
    impact: ["Memberikan kehadiran digital yang modern untuk brand Ju.Up"],
    links: { website: "https://juupid.vercel.app" },
  },
  {
    slug: "gensakidz",
    name: "GenSA Kidz",
    category: "Website",
    year: "2026",
    tech: ["Next.js", "Tailwind CSS"],
    summary:
      "Website profil untuk GenSA Kidz, pusat terapi dan stimulasi tumbuh kembang anak di Lamongan, lengkap dengan 8 layanan terapi, alur konsultasi, dan testimoni orang tua.",
    description:
      "Membangun website profil untuk klinik tumbuh kembang anak yang menjelaskan 8 program terapi (wicara, okupasi, fisioterapi, perilaku, dll), alur layanan dari konsultasi awal hingga sesi terapi rutin, testimoni orang tua, serta info 2 cabang di Lamongan dengan integrasi WhatsApp untuk pendaftaran konsultasi.",
    role: ["Full development menggunakan Next.js & Tailwind CSS"],
    impact: [
      "Memudahkan orang tua memahami layanan dan alur konsultasi sebelum menghubungi klinik",
      "Mempercepat proses pendaftaran konsultasi lewat integrasi WhatsApp langsung dari website",
    ],
    features: [
      "8 program terapi dijelaskan detail per layanan",
      "Alur layanan 4 langkah (konsultasi hingga sesi terapi)",
      "Testimoni orang tua pasien",
      "Info lokasi & kontak 2 cabang (Lamongan & Babat)",
    ],
    links: { website: "https://www.gensakidz.com" },
  },
  {
    slug: "annitadonat",
    name: "Annita Donat",
    category: "Website (UMKM)",
    year: "2026",
    tech: ["Next.js", "Tailwind CSS"],
    summary:
      "Website UMKM untuk Annita Donat — katalog harga, paket donat acara/hajatan, dan form pemesanan yang langsung terkirim ke WhatsApp Bu Anita.",
    description:
      "Landing page untuk UMKM donat rumahan, mencakup daftar harga per paket, katalog untuk donat acara/hajatan (lamaran, ulang tahun, syukuran), galeri varian rasa, FAQ, lokasi toko, dan form pemesanan yang otomatis mengirim detail pesanan ke WhatsApp pemilik.",
    role: ["Full development menggunakan Next.js & Tailwind CSS"],
    impact: [
      "Mempermudah calon pembeli melihat harga dan memesan tanpa harus chat manual dulu",
      "Meningkatkan kepercayaan lewat testimoni dan katalog produk yang jelas",
    ],
    features: [
      "Daftar harga & paket donat (harian dan acara/hajatan)",
      "Form pemesanan otomatis terkirim ke WhatsApp",
      "Galeri varian rasa & katalog produk",
      "FAQ dan info lokasi toko",
    ],
    links: { website: "https://www.annitadonat.my.id" },
  },
  {
    slug: "overtime-basketball-lamongan",
    name: "Overtime Academy Basketball Lamongan",
    category: "Website",
    year: "2026",
    tech: ["Next.js", "Tailwind CSS"],
    summary:
      "Website profil untuk akademi basket Overtime Lamongan — program latihan berjenjang per kelompok usia, profil pelatih, dan info pendaftaran.",
    description:
      "Website untuk akademi pembinaan bola basket usia dini dan remaja, menjelaskan filosofi latihan (Play Smart, Play Hard, Play Team), program berjenjang per kelompok usia (KU 10–12, 14, 16–18), fasilitas lapangan, dan galeri prestasi tim, dengan CTA pendaftaran via WhatsApp.",
    role: ["Full development menggunakan Next.js & Tailwind CSS"],
    impact: [
      "Memberikan informasi program latihan yang jelas per kelompok usia untuk calon pendaftar",
      "Mempermudah orang tua mendaftarkan anak lewat kontak langsung ke pelatih",
    ],
    features: [
      "Program latihan berjenjang per kelompok usia",
      "Profil pelatih & fasilitas lapangan",
      "Galeri momen prestasi tim",
      "CTA pendaftaran via WhatsApp",
    ],
    links: { website: "https://overtime-basketball-lamongan.vercel.app" },
  },
];

export function getPortfolioProject(slug: string) {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
