/**
 * Configurable constants for WebTA landing page.
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
  mockupType: "sabasunten" | "nutrijoy" | "dashboard";
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
    desc: "Ceritakan topik skripsi/TA kamu atau sampaikan kebutuhan demo website yang ingin dibuat."
  },
  {
    step: "02",
    title: "Kirim Materi Project",
    desc: "Kirim bahan yang kamu miliki: bab 3/4 skripsi, flowchart, desain Figma, screenshot, atau source code yang ada."
  },
  {
    step: "03",
    title: "Cek & Estimasi Transparan",
    desc: "Kami tinjau kebutuhan teknisnya lalu berikan estimasi waktu pengerjaan dan biaya yang jelas di awal."
  },
  {
    step: "04",
    title: "Pengerjaan & Live Demo",
    desc: "Website dibuat, dihubungkan dengan alur data skripsimu, lalu di-online-kan agar bisa diakses lewat link publik."
  },
  {
    step: "05",
    title: "Review & Siap Sidang",
    desc: "Kamu coba langsung fiturnya. Kami bantu pastikan alur demonya lancar sampai kamu percaya diri di depan dosen."
  }
];

export const PRICING_INCLUSIONS = [
  "Tampilan website responsif (rapi di laptop, tablet, & HP)",
  "Integrasi alur demo sesuai metode penelitian / alur skripsi",
  "Hosting online aktif (langsung bisa diakses dosen penguji via URL)",
  "Bantuan setup & panduan singkat cara mengoperasikan saat demo",
  "Revisi penyesuaian dasar sebelum jadwal sidang",
  "Source code lengkap diserahkan ke kamu"
];

export const FAQ_ITEMS = [
  {
    question: "Saya sama sekali nggak bisa coding, apakah tetap bisa dibantu?",
    answer: "Sangat bisa. Kamu cukup jelaskan alur sistem atau kirimkan dokumen rancangan skripsi (seperti flowchart atau use case). Kami yang tangani seluruh pembuatan kode dan teknisnya sampai websitenya hidup dan siap kamu demokan."
  },
  {
    question: "Project saya sudah ada kodenya tapi error / setengah jalan, bisa dilanjutkan?",
    answer: "Bisa banget. Kirimkan source code atau folder project yang sudah ada. Kami akan cek bagian mana yang error atau belum selesai, lalu kami bantu perbaiki dan rapikan sampai siap dipresentasikan."
  },
  {
    question: "Bahan materi saya baru sebatas dokumen skripsi / Figma / screenshot, bisa?",
    answer: "Bisa. Kami terbiasa menerjemahkan dokumen perancangan bab 3 skripsi, diagram alur, wireframe, atau coretan konsep menjadi website interaktif yang fungsional."
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer: "Rata-rata pengerjaan berkisar antara 3 hingga 7 hari kerja tergantung kompleksitas fitur. Jika jadwal sidang kamu sudah sangat dekat, tanyakan ketersediaan slot pengerjaan cepat (express) lewat WhatsApp."
  },
  {
    question: "Apakah bisa menggunakan domain sendiri?",
    answer: "Bisa. Secara default kami sediakan subdomain gratis yang langsung aktif dan stabil. Jika kamu ingin memakai domain khusus (misal: namaproject.com atau .id), kami bantu setup tanpa biaya tambahan."
  }
];
