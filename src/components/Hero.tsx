import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, CheckCircle2, ArrowRight, Zap, Globe2, Sparkles, Code2 } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-10 sm:pt-12 sm:pb-16 overflow-hidden" id="hero-section">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 sm:h-96 bg-gradient-to-b from-emerald-100/50 via-stone-100/20 to-transparent -z-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-semibold mb-3 sm:mb-5 shadow-2xs"
          >
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Layanan Website & Demo Sidang Tugas Akhir</span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-4"
          >
            Website TA Kamu, <br className="hidden sm:inline" />
            <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2 underline-offset-4 sm:underline-offset-6">
              Siap Buat Sidang.
            </span>
          </motion.h1>

          {/* Supporting Copy - Short & punchy */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-base text-stone-600 leading-relaxed mb-5 max-w-xl mx-auto"
          >
            Kirim materi atau Bab 3 skripsi kamu. Kami bangun website demo yang <span className="font-semibold text-stone-800">online, stabil, dan sinkron naskah</span> untuk dipresentasikan ke dosen.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-4"
          >
            <a
              id="hero-primary-cta"
              href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20" />
              <span>Konsultasi WhatsApp Sekarang</span>
            </a>

            <a
              href="#contoh-demo"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl border border-stone-200 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Lihat Contoh Demo</span>
              <ArrowRight className="w-4 h-4 text-stone-500" />
            </a>
          </motion.div>

          {/* Micro assurances */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-y-1 gap-x-3 text-[11px] sm:text-xs text-stone-500 font-medium"
          >
            <span className="inline-flex items-center gap-1 text-stone-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Konsultasi Gratis
            </span>
            <span className="text-stone-300">•</span>
            <span className="inline-flex items-center gap-1 text-stone-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Tanpa DP Awal
            </span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="inline-flex items-center gap-1 text-stone-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Dapat Link & Source Code
            </span>
          </motion.div>

        </div>

        {/* Crisp 3-Pillar Highlight Grid (Replaces bulky text cards) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          <div className="bg-white rounded-xl border border-stone-200/90 p-3.5 sm:p-4 flex items-center gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-stone-900 leading-tight">Link Live Aktif</div>
              <div className="text-[11px] text-stone-500 mt-0.5">Bisa dibuka dosen di HP/Laptop</div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-stone-200/90 p-3.5 sm:p-4 flex items-center gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-stone-900 leading-tight">Bisa Slot Kilat</div>
              <div className="text-[11px] text-stone-500 mt-0.5">1–3 hari untuk deadline mepet</div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-stone-200/90 p-3.5 sm:p-4 flex items-center gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-stone-900 leading-tight">Sinkron Bab 3 & 4</div>
              <div className="text-[11px] text-stone-500 mt-0.5">Alur & metode persis naskah</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


