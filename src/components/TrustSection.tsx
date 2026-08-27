import React from 'react';
import { Globe2, FileCode2, PlayCircle, FolderGit2, CheckCircle, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const benefits = [
    {
      icon: Globe2,
      title: "Website Live & Stabil di Internet",
      description: "Kamu dapat link URL aktif yang bisa langsung dikirim ke dosen pembimbing dan penguji. Bebas cemas laptop mendadak bermasalah saat sidang."
    },
    {
      icon: PlayCircle,
      title: "Alur Demo Sesuai Alur Skripsi",
      description: "Form input, proses kalkulasi metode/algoritma, sampai tampilan output disinkronkan persis dengan bab 3 & 4 penelitian yang kamu susun."
    },
    {
      icon: FileCode2,
      title: "Panduan Singkat Cara Demo",
      description: "Dapat ringkasan urutan langkah demonstrasi dan tips menjelaskan alur sistem, jadi kamu nggak gugup saat dosen minta coba fitur tertentu."
    },
    {
      icon: FolderGit2,
      title: "Source Code Lengkap Diserahkan",
      description: "Semua file source code rapi diserahkan sepenuhnya ke kamu untuk kebutuhan lampiran naskah skripsi atau pengumpulan berkas akhir."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-stone-200/80" id="keuntungan">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
            Fokus & Transparan
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Apa yang Kamu Dapatkan untuk Sidang?
          </p>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Bukan sekadar kode yang jalan di laptop sendiri, tapi solusi utuh agar demo tugas akhir kamu tampil siap dan profesional di hadapan penguji.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-stone-50/80 border border-stone-200/90 rounded-xl p-5 sm:p-6 transition-all hover:border-stone-300 hover:bg-stone-50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 max-w-4xl mx-auto bg-stone-100/70 border border-stone-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
            <div className="text-xs sm:text-sm text-stone-700">
              <span className="font-bold text-stone-900">Garansi Penyesuaian Sebelum Sidang:</span> Jika ada masukan dosen saat bimbingan pra-sidang, kami bantu penyesuaian minor.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
