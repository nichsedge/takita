/**
 * Configurable constants for Takita landing page.
 * Easy to update WhatsApp contact number, pricing, copy, and sample projects.
 */

export const CONTACT_CONFIG = {
  // Nomor WhatsApp aktif
  whatsappNumber: "6285183275679",
  displayPhoneNumber: "+62 851-8327-5679",
  workingHours: "Setiap hari (08.00 - 22.00 WIB)",
  averageResponseTime: "< 15 menit",
  
  // Template pesan WhatsApp untuk berbagai konteks
  messages: {
    hero: "Halo kak, saya mau konsultasi website untuk project Tugas Akhir (TA) saya.",
    urgent: "Halo kak, jadwal sidang/semhas saya sudah dekat. Mau tanya apakah masih ada slot pengerjaan kilat untuk web TA?",
    pricing: "Halo kak, saya mau diskusi project TA saya dan tanya estimasi biayanya.",
    projectExample: (projectTitle: string) => `Halo kak, saya tertarik mau buat website demo yang mirip dengan model "${projectTitle}" untuk TA saya.`,
    faq: "Halo kak, saya mau tanya-tanya dulu seputar pengerjaan web untuk project skripsi/TA saya.",
    customEstimator: (projectType: string, deadline: string, hasSourceCode: string) => 
      `Halo kak, saya mau konsultasi project TA:\n- Jenis: ${projectType}\n- Target selesai: ${deadline}\n- Kondisi materi: ${hasSourceCode}\n\nKira-kira estimasi waktu & biayanya berapa ya kak?`
  }
};

/**
 * Helper to generate WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || CONTACT_CONFIG.messages.hero;
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface DemoProject {
  id: string;
  title: string;
  category: string;
  methodology: string;
  description: string;
  badge: string;
  features: string[];
  mockupType: "sabasunten" | "nutrijoy" | "cepatkerja" | "dashboard";
  liveUrl?: string;
  stats: { label: string; value: string }[];
}

export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: "saba-sunten",
    title: "Saba Sunten (Portal Informasi & Wisata Budaya)",
    category: "Sistem Informasi / Rekayasa Perangkat Lunak",
    methodology: "Peta Interaktif, Direktori Wisata & Content Management",
    description: "Website portal interaktif untuk eksplorasi potensi pariwisata, budaya lokal, dan informasi desa/daerah dengan navigasi terstruktur dan tampilan modern.",
    badge: "Live Demo Asli",
    liveUrl: "http://sabasunten.id/",
    features: [
      "Direktori destinasi wisata budaya dengan filter kategori",
      "Peta lokasi & panduan rute interaktif",
      "Galeri kegiatan & artikel informasi berbasis CMS",
      "Tampilan responsif dan sangat ringan dibuka di HP dosen"
    ],
    mockupType: "sabasunten",
    stats: [
      { label: "Status Demo", value: "Online / Live" },
      { label: "Aksesibilitas", value: "Responsif Mobile" },
      { label: "Domain Asli", value: "sabasunten.id" }
    ]
  },
  {
    id: "cepatkerja",
    title: "CepatKerja ID (Portal Rekrutmen & Penyaluran Karir)",
    category: "Sistem Informasi / Rekayasa Perangkat Lunak & HR Tech",
    methodology: "Filter Lowongan Kerja, Skill Matching & Pelacakan Lamaran (ATS)",
    description: "Platform portal karir dan rekrutmen kerja modern untuk menghubungkan pencari kerja dengan lowongan terverifikasi, dilengkapi filtering spesifik, status tracking, dan profil kandidat.",
    badge: "Live Demo Asli (Vercel)",
    liveUrl: "https://cepatkerja-id.vercel.app/",
    features: [
      "Pencarian & filtering lowongan (bidang, tipe kerja, gaji, lokasi)",
      "Sistem pencocokan kualifikasi & skill pelamar kerja",
      "Pelacakan status proses lamaran terstruktur",
      "Tampilan modern, rapi, dan responsif siap diuji dosen"
    ],
    mockupType: "cepatkerja",
    stats: [
      { label: "Status Demo", value: "Online di Vercel" },
      { label: "Fitur Sistem", value: "Job Portal & ATS" },
      { label: "Akses Demo", value: "cepatkerja-id.vercel.app" }
    ]
  },
  {
    id: "nutrijoy",
    title: "NutriJoy (Web App Rekomendasi Nutrisi & Pola Makan)",
    category: "Teknik Informatika / Ilmu Komputer & Kesehatan",
    methodology: "Algoritma Kalkulasi Kebutuhan Kalori & Gizi Harian (TDEE/BMR)",
    description: "Aplikasi web interaktif untuk menghitung kebutuhan kalori harian, rekomendasi menu gizi seimbang, dan pemantauan pola makan sehat.",
    badge: "Live Demo Asli (Vercel)",
    liveUrl: "https://nutrijoy.vercel.app/",
    features: [
      "Kalkulator kebutuhan kalori & rasio makronutrisi harian",
      "Sistem rekomendasi menu makanan sehat personal",
      "Visualisasi pelacakan gizi (Protein, Karbohidrat, Lemak)",
      "Bisa langsung dicoba live di browser oleh dosen penguji"
    ],
    mockupType: "nutrijoy",
    stats: [
      { label: "Status Demo", value: "Online di Vercel" },
      { label: "Kalkulasi", value: "Otomatis & Real-time" },
      { label: "Platform", value: "Web App" }
    ]
  },
  {
    id: "dashboard-prediksi",
    title: "Dashboard Analitik & Prediksi Tren Data",
    category: "Sains Data / Sistem Informasi",
    methodology: "Metode: Regresi Linear / Time Series Forecasting",
    description: "Dashboard analitik interaktif untuk memvisualisasikan data historis transaksi dan menampilkan proyeksi tren periode mendatang yang mudah dipahami dosen.",
    badge: "Contoh Demo Data Science",
    features: [
      "Grafik visual perbandingan data aktual vs nilai prediksi",
      "Fitur simulasi upload dataset penelitian (CSV/Excel)",
      "Ringkasan metrik evaluasi akurasi (MAPE / RMSE)",
      "Export hasil pengujian & grafik ke format PDF"
    ],
    mockupType: "dashboard",
    stats: [
      { label: "Nilai MAPE", value: "6.4% (Akurat)" },
      { label: "Visualisasi", value: "Grafik & Tabel" },
      { label: "Format Uji", value: "Dataset CSV" }
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Chat WhatsApp",
    desc: "Sampaikan topik TA atau kendala demo website yang kamu hadapi."
  },
  {
    step: "02",
    title: "Kirim Draft Bab 3 / Materi",
    desc: "Kirim naskah bab 3, flowchart, rumus, Figma, atau kodingan lama."
  },
  {
    step: "03",
    title: "Estimasi & Kesepakatan",
    desc: "Kami pelajari gratis lalu berikan estimasi waktu dan biaya yang pasti."
  },
  {
    step: "04",
    title: "Pengerjaan & Deploy Online",
    desc: "Website dibuat, disinkronkan dengan skripsi, dan di-online-kan."
  },
  {
    step: "05",
    title: "Review & Siap Sidang",
    desc: "Cek demo bersama + panduan alur presentasi di depan penguji."
  }
];

export const PRICING_INCLUSIONS = [
  "Website responsif (rapi di laptop & HP dosen)",
  "Alur form & kalkulasi sesuai Bab 3 & 4 skripsi",
  "Hosting online aktif dengan link publik",
  "Panduan cara klik & penjelasan alur demo",
  "Revisi penyesuaian sebelum jadwal sidang",
  "Source code lengkap diserahkan"
];

export const FAQ_ITEMS = [
  {
    question: "Saya sama sekali nggak bisa koding, apakah tetap bisa?",
    answer: "Sangat bisa. Cukup kirimkan Bab 3 atau flowchart sistem. Kami yang selesaikan seluruh aspek koding dan online-nya sampai siap kamu presentasikan."
  },
  {
    question: "Kodingan lama saya error atau setengah jadi, bisa dibereskan?",
    answer: "Bisa. Kirim file project lama, kami audit bagian error-nya dan lanjutkan sampai berfungsi optimal."
  },
  {
    question: "Materi saya baru sebatas naskah Word / Figma / coretan, bisa?",
    answer: "Bisa. Kami langsung terjemahkan rancangan Bab 3 atau wireframe kamu menjadi website demo yang hidup."
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer: "Rata-rata 2–5 hari kerja. Tersedia juga slot pengerjaan kilat 1–2 hari jika jadwal sidang sudah mepet."
  },
  {
    question: "Apakah dapat source code-nya?",
    answer: "Pasti. Semua file source code diserahkan 100% lengkap dan rapi untuk lampiran naskah skripsi."
  }
];

