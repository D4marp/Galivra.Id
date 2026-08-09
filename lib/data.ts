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

export type ServiceSegment = {
  title: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type Service = {
  index: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  priceFrom: string;
  features: string[];
  segments: ServiceSegment[];
  faq: ServiceFAQ[];
};

export const SERVICES: Service[] = [
  {
    index: "01",
    slug: "pengembangan-website",
    title: "Pengembangan Website",
    description:
      "Website resmi untuk bisnis Anda — landing page, company profile, atau blog. Desain modern, cepat diakses, dan enak dilihat di HP maupun laptop.",
    longDescription:
      "Website adalah etalase digital pertama bisnis Anda. GALIVRA membangun website yang bukan cuma tampil bagus, tapi juga cepat diakses, mudah ditemukan di Google, dan mendorong pengunjung untuk menghubungi atau membeli. Cocok untuk landing page produk, company profile, sampai blog bisnis — dari UMKM sampai institusi.",
    icon: "Globe",
    priceFrom: "Rp500K",
    features: [
      "1–5 halaman (landing page / company profile)",
      "Desain responsif untuk HP, tablet, dan desktop",
      "Source code diserahkan penuh ke Anda",
      "SEO dasar & optimasi kecepatan loading",
    ],
    segments: [
      {
        title: "UMKM & Bisnis Lokal",
        description:
          "Tampil profesional di mata pelanggan tanpa budget besar — landing page atau company profile yang siap pakai jualan atau menerima booking.",
      },
      {
        title: "Startup & Perusahaan Rintisan",
        description:
          "Website company profile yang meyakinkan calon investor dan pengguna awal, dengan desain modern yang mencerminkan visi produk.",
      },
      {
        title: "Sekolah, Kampus & Klinik",
        description:
          "Website institusi yang menampilkan informasi layanan, jadwal, dan kontak dengan jelas untuk masyarakat umum.",
      },
      {
        title: "Organisasi & Komunitas",
        description:
          "Website profil organisasi untuk publikasi kegiatan, transparansi, dan pendaftaran anggota atau relawan.",
      },
    ],
    faq: [
      {
        question: "Berapa lama waktu pengerjaan website?",
        answer:
          "Tergantung kompleksitas — umumnya 1–2 minggu untuk landing page atau company profile setelah kebutuhan disepakati.",
      },
      {
        question: "Apakah saya dapat source code-nya?",
        answer:
          "Ya. Setelah pelunasan, Anda menerima source code penuh — bukan sekadar akses sewa.",
      },
      {
        question: "Bisa minta desain custom sesuai brand saya?",
        answer:
          "Bisa. Desain disesuaikan dengan brand guideline atau referensi yang Anda berikan.",
      },
    ],
  },
  {
    index: "02",
    slug: "pengembangan-aplikasi-mobile",
    title: "Pengembangan Aplikasi Mobile",
    description:
      "Aplikasi Android maupun iOS untuk kebutuhan bisnis nyata — mulai dari aplikasi internal sampai aplikasi yang dipakai pelanggan Anda sehari-hari.",
    longDescription:
      "GALIVRA membangun aplikasi mobile yang benar-benar dipakai — bukan sekadar dikerjakan. Dari aplikasi internal untuk operasional tim, sampai aplikasi customer-facing yang dipakai ribuan pengguna setiap hari, kami bantu wujudkan dari desain sampai rilis ke Play Store dan App Store.",
    icon: "Smartphone",
    priceFrom: "Rp2.5JT",
    features: [
      "Desain UI/UX sesuai brand bisnis Anda",
      "Terhubung ke backend / API sesuai kebutuhan",
      "Testing di perangkat asli sebelum rilis",
      "Bantuan proses publish ke Play Store / App Store",
    ],
    segments: [
      {
        title: "UMKM & Retail",
        description:
          "Aplikasi loyalitas pelanggan, reservasi, atau katalog produk yang mempermudah transaksi harian.",
      },
      {
        title: "Startup",
        description:
          "MVP aplikasi untuk memvalidasi ide bisnis ke investor dan pengguna awal secepat mungkin.",
      },
      {
        title: "Perusahaan & Enterprise",
        description:
          "Aplikasi internal karyawan — absensi, approval, laporan lapangan — yang menyederhanakan operasional harian.",
      },
      {
        title: "Institusi Pendidikan",
        description:
          "Aplikasi akademik, presensi, atau informasi kampus untuk dosen, staf, dan mahasiswa.",
      },
    ],
    faq: [
      {
        question: "Bisa dikerjakan untuk Android dan iOS sekaligus?",
        answer:
          "Bisa. Kami memakai Flutter sehingga satu basis kode bisa jalan di kedua platform, lebih hemat waktu dan biaya.",
      },
      {
        question: "Apakah proses publish ke Play Store/App Store dibantu?",
        answer:
          "Ya, kami bantu proses submission sampai aplikasi live di kedua store.",
      },
      {
        question: "Bagaimana kalau butuh maintenance setelah rilis?",
        answer:
          "Tersedia paket maintenance terpisah setelah masa garansi bug fix selesai — bisa didiskusikan sesuai kebutuhan.",
      },
    ],
  },
  {
    index: "03",
    slug: "e-commerce",
    title: "E-Commerce",
    description:
      "Toko online lengkap dari katalog produk sampai pembayaran, jadi pelanggan bisa belanja langsung tanpa ribet chat manual satu-satu.",
    longDescription:
      "Punya toko online sendiri berarti bisa jualan 24 jam tanpa harus balas chat satu per satu. GALIVRA membangun toko online lengkap dengan katalog, keranjang, checkout, dan panel admin — siap dipakai jualan sejak hari pertama live.",
    icon: "ShoppingCart",
    priceFrom: "Rp750K",
    features: [
      "Katalog produk, keranjang, dan checkout",
      "Integrasi pembayaran (QRIS / transfer / payment gateway)",
      "Panel admin untuk kelola produk & pesanan",
      "Desain responsif dan siap dipakai jualan",
    ],
    segments: [
      {
        title: "UMKM & Toko Rumahan",
        description:
          "Toko online yang buka 24 jam tanpa harus jaga HP terus untuk balas chat pesanan.",
      },
      {
        title: "Brand & Retail",
        description:
          "Katalog multi-kategori dengan manajemen stok yang rapi untuk brand dengan banyak produk.",
      },
      {
        title: "Reseller & Dropshipper",
        description:
          "Etalase produk profesional untuk membangun kepercayaan pembeli tanpa perlu stok sendiri.",
      },
      {
        title: "Bisnis F&B",
        description:
          "Sistem pre-order dan delivery yang terintegrasi untuk usaha makanan dan minuman.",
      },
    ],
    faq: [
      {
        question: "Integrasi pembayaran apa saja yang tersedia?",
        answer:
          "QRIS, transfer bank manual, dan payment gateway (Midtrans/Xendit dll) sesuai kebutuhan Anda.",
      },
      {
        question: "Apakah ongkos kirim dihitung otomatis?",
        answer:
          "Bisa diintegrasikan dengan API ongkir kurir agar perhitungan ongkos kirim otomatis sesuai lokasi pembeli.",
      },
      {
        question: "Ada batasan jumlah produk?",
        answer:
          "Tidak ada batasan teknis — jumlah produk menyesuaikan kebutuhan dan dibahas saat konsultasi.",
      },
    ],
  },
  {
    index: "04",
    slug: "sistem-bisnis",
    title: "Sistem Bisnis",
    description:
      "Dashboard, CRM, sistem inventory, atau alat operasional lain yang dibuat khusus mengikuti alur kerja bisnis Anda — bukan template generik.",
    longDescription:
      "Setiap bisnis punya alur kerja yang berbeda. GALIVRA membangun sistem bisnis custom — dashboard admin, CRM, inventory, sampai sistem administrasi internal — yang benar-benar mengikuti proses kerja Anda, bukan dipaksakan ke template generik.",
    icon: "LayoutDashboard",
    priceFrom: "Rp1.5JT",
    features: [
      "Dashboard admin / CRM / inventory sesuai kebutuhan",
      "Manajemen user & hak akses (role-based)",
      "Laporan dan visualisasi data otomatis",
      "Bisa terhubung ke sistem lain yang sudah Anda pakai",
    ],
    segments: [
      {
        title: "Enterprise & Perusahaan",
        description:
          "Sistem ERP/CRM internal untuk menyatukan data operasional lintas divisi.",
      },
      {
        title: "UMKM Naik Kelas",
        description:
          "Sistem inventory dan pencatatan sederhana untuk bisnis yang mulai berkembang dari catatan manual.",
      },
      {
        title: "Instansi & Organisasi",
        description:
          "Sistem administrasi internal untuk mempercepat proses pengajuan, approval, dan pelaporan.",
      },
      {
        title: "Klinik & Layanan Kesehatan Kecil",
        description:
          "Manajemen data pasien dan jadwal praktik yang rapi dan mudah diakses tim.",
      },
    ],
    faq: [
      {
        question: "Bisa custom hak akses per role user?",
        answer:
          "Bisa. Setiap peran (admin, staf, manajer, dll) bisa diatur akses fitur dan datanya masing-masing.",
      },
      {
        question: "Bisa diintegrasikan ke software lain yang sudah dipakai?",
        answer:
          "Bisa, selama software tersebut punya API atau mekanisme integrasi yang bisa diakses.",
      },
      {
        question: "Sistemnya di-hosting di mana?",
        answer:
          "Bisa di cloud maupun on-premise (server milik Anda sendiri) — didiskusikan sesuai kebutuhan keamanan data.",
      },
    ],
  },
  {
    index: "05",
    slug: "ai-otomasi",
    title: "AI & Otomasi",
    description:
      "Otomatiskan pekerjaan berulang — dari chat pelanggan sampai input data — supaya tim Anda fokus ke hal yang lebih penting.",
    longDescription:
      "Banyak pekerjaan operasional yang sebenarnya bisa dikerjakan sistem, bukan manusia. GALIVRA membangun otomasi berbasis AI — chatbot, pemrosesan dokumen, follow-up otomatis — supaya tim Anda bisa fokus ke pekerjaan yang benar-benar butuh sentuhan manusia.",
    icon: "Bot",
    priceFrom: "Rp750K",
    features: [
      "Chatbot AI untuk WhatsApp atau website",
      "Otomasi workflow (notifikasi, follow-up, input data)",
      "Integrasi OCR / pemrosesan dokumen",
      "Terhubung ke tools yang sudah Anda pakai (Sheets, WA, email)",
    ],
    segments: [
      {
        title: "Customer Service",
        description:
          "Chatbot WhatsApp/website yang menjawab pertanyaan umum pelanggan otomatis, 24 jam.",
      },
      {
        title: "Operasional Bisnis",
        description:
          "Otomasi input data dan notifikasi internal supaya tim tidak lagi kerja manual berulang.",
      },
      {
        title: "Sales & Marketing",
        description:
          "Follow-up lead otomatis supaya tidak ada calon pelanggan yang terlewat begitu saja.",
      },
      {
        title: "Back-Office & Administrasi",
        description:
          "Pemrosesan dokumen otomatis dengan OCR untuk mempercepat input data dari kertas ke sistem.",
      },
    ],
    faq: [
      {
        question: "Butuh data dalam jumlah besar dulu?",
        answer:
          "Tidak selalu. Banyak kasus otomasi bisa langsung jalan dengan aturan/workflow sederhana tanpa training data besar.",
      },
      {
        question: "Model AI apa yang digunakan?",
        answer:
          "Menyesuaikan kebutuhan — bisa memakai layanan AI pihak ketiga (mis. OpenAI) atau model khusus untuk kasus seperti OCR.",
      },
      {
        question: "Biaya API AI ditanggung siapa?",
        answer:
          "Biaya penggunaan API AI pihak ketiga (jika ada) berjalan terpisah dan akan dijelaskan transparan sejak awal.",
      },
    ],
  },
  {
    index: "06",
    slug: "solusi-data",
    title: "Solusi Data",
    description:
      "Pengumpulan dan penyusunan data dari sumber publik untuk riset pasar, lead generation, atau monitoring bisnis — rapi dan siap pakai.",
    longDescription:
      "Data yang berantakan tidak ada gunanya. GALIVRA mengumpulkan data dari sumber yang dapat diakses publik, membersihkannya, dan menyusunnya jadi format siap pakai — untuk riset pasar, lead generation, atau monitoring bisnis Anda.",
    icon: "Database",
    priceFrom: "Rp50K",
    features: [
      "Pengambilan data dari sumber publik (Google Maps, website, dll)",
      "Pembersihan & penyusunan data",
      "Output siap pakai: CSV, Excel, atau database",
      "Hanya dari sumber yang legal & sesuai ketentuan platform",
    ],
    segments: [
      {
        title: "Riset Pasar & Kompetitor",
        description:
          "Kumpulkan data harga, produk, atau lokasi kompetitor untuk mendukung keputusan bisnis.",
      },
      {
        title: "Sales & Lead Generation",
        description:
          "Data calon pelanggan potensial dari sumber publik untuk mempercepat proses penjualan.",
      },
      {
        title: "Monitoring Bisnis",
        description:
          "Pantau perubahan harga, ulasan, atau informasi bisnis secara berkala dan otomatis.",
      },
      {
        title: "Akademisi & Peneliti",
        description:
          "Dataset terstruktur dari sumber publik untuk mendukung riset dan analisis akademik.",
      },
    ],
    faq: [
      {
        question: "Apakah pengambilan data ini legal?",
        answer:
          "Kami hanya mengambil data dari sumber yang dapat diakses publik dan sesuai ketentuan platform yang berlaku.",
      },
      {
        question: "Format output-nya seperti apa?",
        answer:
          "Bisa CSV, Excel, atau langsung masuk ke database sesuai kebutuhan Anda.",
      },
      {
        question: "Berapa lama proses pengambilan data?",
        answer:
          "Tergantung volume dan sumber data — akan diestimasikan saat konsultasi kebutuhan.",
      },
    ],
  },
  {
    index: "07",
    slug: "api-integrasi",
    title: "API & Integrasi",
    description:
      "Sambungkan aplikasi, sistem, dan layanan pihak ketiga yang Anda pakai supaya data mengalir otomatis tanpa kerja manual.",
    longDescription:
      "Banyak bisnis punya beberapa sistem yang berjalan sendiri-sendiri dan tidak saling terhubung. GALIVRA menyambungkan aplikasi, sistem internal, dan layanan pihak ketiga (payment gateway, CRM, dll) lewat API supaya data mengalir otomatis tanpa input manual berulang.",
    icon: "Plug",
    priceFrom: "Rp250K",
    features: [
      "Menghubungkan aplikasi atau sistem yang berbeda",
      "Integrasi payment gateway / layanan pihak ketiga",
      "Dokumentasi API yang jelas",
      "Testing end-to-end sebelum digunakan",
    ],
    segments: [
      {
        title: "Bisnis dengan Banyak Sistem Terpisah",
        description:
          "Sambungkan sistem kasir, inventory, dan akuntansi supaya data tidak perlu diinput dua kali.",
      },
      {
        title: "Marketplace & Payment",
        description:
          "Integrasi payment gateway dan marketplace agar transaksi tercatat otomatis di sistem Anda.",
      },
      {
        title: "Perusahaan dengan Partner API",
        description:
          "Hubungkan sistem internal ke API partner atau vendor untuk pertukaran data yang lancar.",
      },
      {
        title: "Startup",
        description:
          "Integrasi cepat ke layanan pihak ketiga (auth, notifikasi, analytics) tanpa membangun dari nol.",
      },
    ],
    faq: [
      {
        question: "Apa itu API dan kenapa saya butuh ini?",
        answer:
          "API adalah jembatan agar dua sistem berbeda bisa saling bertukar data otomatis — jadi Anda tidak perlu input manual berulang.",
      },
      {
        question: "Apakah integrasi ini aman untuk data saya?",
        answer:
          "Ya, kami menerapkan praktik keamanan standar (autentikasi, enkripsi koneksi) di setiap integrasi yang dibangun.",
      },
      {
        question: "Perlu dokumentasi API dari sistem lama saya?",
        answer:
          "Idealnya ada, tapi jika tidak tersedia kami bisa membantu menganalisis sistem yang ada terlebih dahulu.",
      },
    ],
  },
  {
    index: "08",
    slug: "pos-system-on-premise",
    title: "POS System On-Premise",
    description:
      "Sistem kasir (POS) yang terpasang langsung di server lokal bisnis Anda — data transaksi tetap aman tersimpan di tempat Anda sendiri, tanpa wajib bergantung pada internet atau server pihak ketiga.",
    longDescription:
      "Untuk bisnis yang butuh kontrol penuh atas data transaksi, GALIVRA membangun sistem POS on-premise — berjalan di server milik Anda sendiri, tetap bisa dipakai walau internet mati, dan data tidak pernah keluar dari lokasi bisnis Anda.",
    icon: "Store",
    priceFrom: "Rp1.5JT",
    features: [
      "Sistem kasir + manajemen stok terintegrasi",
      "Berjalan on-premise, tetap bisa dipakai walau internet mati",
      "Data transaksi tersimpan aman di server milik Anda sendiri",
      "Cocok untuk retail, resto, gudang, atau bisnis yang butuh kontrol penuh atas data",
    ],
    segments: [
      {
        title: "Retail & Toko Fisik",
        description:
          "Kasir cepat dan stabil untuk transaksi harian tanpa takut sistem down akibat internet lambat.",
      },
      {
        title: "Restoran & Cafe",
        description:
          "Sistem kasir yang terintegrasi dengan menu dan stok bahan baku secara real-time.",
      },
      {
        title: "Gudang & Distributor",
        description:
          "Pencatatan stok dan transaksi yang akurat untuk volume barang yang besar.",
      },
      {
        title: "Bisnis dengan Internet Tidak Stabil",
        description:
          "Operasional tetap berjalan normal karena sistem tidak bergantung pada koneksi internet.",
      },
    ],
    faq: [
      {
        question: "Apakah sistem ini butuh internet untuk berjalan?",
        answer:
          "Tidak. Sistem berjalan di server lokal Anda, jadi tetap bisa dipakai walau internet mati.",
      },
      {
        question: "Data transaksinya tersimpan di mana?",
        answer:
          "Tersimpan langsung di server milik Anda sendiri, bukan di server pihak ketiga.",
      },
      {
        question: "Bisa dipakai untuk banyak kasir atau cabang?",
        answer:
          "Bisa, konfigurasi multi-kasir dan multi-cabang bisa disesuaikan sesuai kebutuhan bisnis Anda.",
      },
    ],
  },
  {
    index: "09",
    slug: "cloud-deployment",
    title: "Cloud & Deployment",
    description:
      "Setup server, domain, dan infrastruktur produksi supaya website atau aplikasi Anda online, aman, dan siap diakses publik.",
    longDescription:
      "Produk digital yang bagus butuh infrastruktur yang stabil. GALIVRA membantu setup server, domain, SSL, dan proses deployment agar website atau aplikasi Anda online dengan aman dan siap menerima trafik publik.",
    icon: "Cloud",
    priceFrom: "Rp150K",
    features: [
      "Setup server / hosting / cloud",
      "Konfigurasi domain & SSL (HTTPS)",
      "Deployment dengan Docker / CI-CD dasar",
      "Monitoring dasar setelah project live",
    ],
    segments: [
      {
        title: "Startup yang Mau Go-Live Cepat",
        description:
          "Setup infrastruktur produksi dari nol supaya produk bisa segera dipakai pengguna.",
      },
      {
        title: "Bisnis yang Migrasi Hosting",
        description:
          "Pindahkan website/aplikasi dari hosting lama tanpa downtime yang mengganggu bisnis.",
      },
      {
        title: "Tim Engineering Internal",
        description:
          "Setup CI/CD dasar agar proses update aplikasi jadi lebih cepat dan minim human error.",
      },
      {
        title: "Aplikasi dengan Trafik Bertumbuh",
        description:
          "Konfigurasi infrastruktur yang siap discale mengikuti pertumbuhan pengguna.",
      },
    ],
    faq: [
      {
        question: "Pakai provider cloud apa?",
        answer:
          "Menyesuaikan kebutuhan dan budget — bisa VPS, atau provider cloud seperti yang sudah Anda punya akunnya.",
      },
      {
        question: "Apakah domain sudah termasuk?",
        answer:
          "Setup domain termasuk, tapi biaya pembelian domain baru (jika belum punya) terpisah dari harga layanan ini.",
      },
      {
        question: "Ada monitoring setelah live?",
        answer:
          "Ya, monitoring dasar disertakan untuk memastikan server tetap sehat setelah project live.",
      },
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
    title: "Konfirmasi & Mulai Dikerjakan",
    description:
      "Setelah sepakat harga dan scope, cukup DP 50% untuk mengunci jadwal pengerjaan — sisanya baru dibayar setelah project selesai dan Anda puas.",
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
