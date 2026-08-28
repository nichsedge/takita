import React from 'react';
import { motion } from 'motion/react';
import { Globe2, FileCode2, PlayCircle, FolderGit2, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const benefits = [
    {
      icon: Globe2,
      title: "Website Live di Internet",
      description: "URL aktif siap akses di laptop maupun HP dosen saat sidang tanpa takut error."
    },
    {
      icon: PlayCircle,
      title: "Sinkron Naskah Skripsi",
      description: "Form input, rumus kalkulasi, dan output persis sesuai metodologi Bab 3 & 4."
    },
    {
      icon: FileCode2,
      title: "Panduan Skenario Demo",
      description: "Lengkap dengan urutan klik dan tips menjawab saat dosen menguji fitur."
    },
    {
      icon: FolderGit2,
      title: "Source Code 100% Milikmu",
      description: "File rapi dan terstruktur untuk kelengkapan berkas lampiran skripsi."
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-white border-y border-stone-200/80" id="keuntungan">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto text-center mb-8 sm:mb-10"
        >
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
            Fokus & Transparan
          </h2>
          <p className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Output yang Kamu Terima
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 max-w-4xl mx-auto">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="bg-stone-50/80 border border-stone-200/90 rounded-xl p-4 sm:p-5 transition-all duration-200 hover:border-stone-300 hover:bg-stone-50 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-6 sm:mt-8 max-w-4xl mx-auto bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 text-left"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <div className="text-xs sm:text-sm text-stone-700">
            <span className="font-bold text-stone-900">Garansi Penyesuaian:</span> Jika ada masukan dosen saat bimbingan pra-sidang, kami bantu penyesuaian minor gratis.
          </div>
        </motion.div>

      </div>
    </section>
  );
};


