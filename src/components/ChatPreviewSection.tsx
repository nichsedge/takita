import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, CheckCheck, FileText, Sparkles, Check } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';

export const ChatPreviewSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-14 bg-stone-100/70 border-b border-stone-200" id="simulasi-konsultasi">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] sm:text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Konsultasi Santai</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-stone-900 tracking-tight leading-snug">
            Cukup Kirim Apa yang Kamu Punya
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Punya judul, Bab 3, flowchart, atau rumus? Kami bedah kebutuhan teknisnya secara gratis.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
          
          {/* Left Column: WhatsApp Chat Simulation Window */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 bg-white rounded-2xl border border-stone-300 shadow-sm overflow-hidden"
          >
            {/* WA Header */}
            <div className="bg-emerald-700 text-white px-3.5 sm:px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs text-white ring-2 ring-emerald-300">
                  T
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm leading-tight flex items-center gap-1.5">
                    <span>Admin Takita</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-emerald-100">Online • Respons &lt; 15 menit</div>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-100 font-mono">
                {CONTACT_CONFIG.displayPhoneNumber}
              </span>
            </div>

            {/* WA Chat Body */}
            <div className="p-3 sm:p-4 space-y-2.5 bg-[#efeae2] text-xs sm:text-sm min-h-[220px] font-sans">
              
              {/* User Bubble */}
              <div className="flex justify-end">
                <div className="bg-[#d9fdd3] text-stone-900 rounded-lg rounded-tr-none p-2.5 max-w-[92%] sm:max-w-[85%] shadow-2xs border border-emerald-200/50">
                  <p className="leading-snug">
                    Halo kak, mau buat demo website skripsi tentang <b>Sistem Rekomendasi</b> tapi belum paham kodingnya. Bisa dibantu?
                  </p>
                  <div className="text-[9px] text-stone-500 text-right mt-1 flex items-center justify-end gap-1">
                    <span>14:02</span>
                    <CheckCheck className="w-3 h-3 text-blue-500 inline" />
                  </div>
                </div>
              </div>

              {/* Admin Bubble */}
              <div className="flex justify-start">
                <div className="bg-white text-stone-900 rounded-lg rounded-tl-none p-2.5 max-w-[92%] sm:max-w-[88%] shadow-2xs border border-stone-200">
                  <p className="leading-snug">
                    Halo kak! Bisa banget 😊 Boleh kirim file <b>Bab 3 / rumus metodenya</b> ya. Kami cek dulu secara <b>GRATIS</b>.
                  </p>
                  <div className="text-[9px] text-stone-400 text-right mt-1">
                    <span>14:04</span>
                  </div>
                </div>
              </div>

              {/* User Bubble 2 */}
              <div className="flex justify-end">
                <div className="bg-[#d9fdd3] text-stone-900 rounded-lg rounded-tr-none p-2 max-w-[90%] sm:max-w-[85%] shadow-2xs border border-emerald-200/50 flex items-center gap-2">
                  <div className="p-1.5 bg-emerald-600 text-white rounded shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[11px] sm:text-xs truncate">Bab3_Metodologi.pdf</div>
                    <div className="text-[9px] text-stone-500">Ini filenya kak!</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Chat Footer note */}
            <div className="p-2.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
              <span className="font-medium">
                Punya draft / Bab 3 serupa?
              </span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Konsultasi & estimasi gratis</span>
              </span>
            </div>

          </motion.div>

          {/* Right Column: 3 Quick Points */}
          <div className="md:col-span-5 space-y-2.5 sm:space-y-3">
            
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm">Konsultasi Bebas & Gratis</h3>
                  <p className="text-[11px] text-stone-500">Tanya dulu tanpa paksaan pesan</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm">Terima Segala Format</h3>
                  <p className="text-[11px] text-stone-500">PDF, Word, flowchart, atau coretan</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm">Panduan Presentasi</h3>
                  <p className="text-[11px] text-stone-500">Diberi cheat-sheet alur klik untuk sidang</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};


