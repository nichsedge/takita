import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, Send, Check } from 'lucide-react';

export const InteractiveEstimator: React.FC = () => {
  const [category, setCategory] = useState<string>("Sistem Rekomendasi / SPK");
  const [materialState, setMaterialState] = useState<string>("Baru ada naskah / Bab 3 skripsi");
  const [deadline, setDeadline] = useState<string>("Dalam 4 - 7 hari ke depan");

  const categories = [
    "Sistem Rekomendasi / SPK",
    "Dashboard Analisis Data / Prediksi",
    "Website Layanan / Profil & Portofolio",
    "Sistem Informasi & Topik Lainnya"
  ];

  const materialStates = [
    "Baru ada naskah / Bab 3 skripsi",
    "Ada desain / flowchart / gambaran alur",
    "Ada bahan/file tapi belum jalan atau belum online"
  ];

  const deadlines = [
    "Mendesak (1 - 3 hari lagi)",
    "Dalam 4 - 7 hari ke depan",
    "Masih 1 - 2 minggu lagi"
  ];

  const customWaMessage = CONTACT_CONFIG.messages.customEstimator(category, deadline, materialState);
  const waUrl = getWhatsAppUrl(customWaMessage);

  return (
    <section className="py-10 sm:py-16 bg-white border-b border-stone-200" id="hitung-kebutuhan">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-stone-900 text-white rounded-2xl p-4 sm:p-7 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400">
              Format Pesan Instan
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-black tracking-tight mb-1.5 sm:mb-2">
            Bingung Mau Ngetik Apa di WhatsApp?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mb-5 sm:mb-6">
            Pilih kondisi tugas akhir kamu di bawah ini, kami siapkan format pesannya secara otomatis:
          </p>

          <div className="space-y-4 sm:space-y-5">
            {/* 1. Kategori Project */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                1. Kategori / Model Demo TA:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`min-h-[44px] text-left text-xs p-3 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer active:scale-[0.98] ${
                      category === cat
                        ? 'bg-emerald-950/90 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-stone-800/80 border-stone-700/80 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <span>{cat}</span>
                    {category === cat && <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Kondisi Materi */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                2. Materi yang Kamu Miliki Sekarang:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {materialStates.map((mat) => (
                  <button
                    key={mat}
                    type="button"
                    onClick={() => setMaterialState(mat)}
                    className={`min-h-[44px] text-left text-xs p-3 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer active:scale-[0.98] ${
                      materialState === mat
                        ? 'bg-emerald-950/90 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-stone-800/80 border-stone-700/80 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <span>{mat}</span>
                    {materialState === mat && <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Target Deadline */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                3. Target Waktu Selesai / Jadwal Sidang:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {deadlines.map((dl) => (
                  <button
                    key={dl}
                    type="button"
                    onClick={() => setDeadline(dl)}
                    className={`min-h-[44px] text-left text-xs p-3 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer active:scale-[0.98] ${
                      deadline === dl
                        ? 'bg-emerald-950/90 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-stone-800/80 border-stone-700/80 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <span>{dl}</span>
                    {deadline === dl && <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Box & Send Button */}
            <div className="pt-2 sm:pt-3 border-t border-stone-800">
              <div className="bg-stone-950 p-3 sm:p-3.5 rounded-xl border border-stone-800 mb-3.5 sm:mb-4 font-mono text-[11px] sm:text-xs text-emerald-400/90 whitespace-pre-line leading-relaxed">
                {customWaMessage}
              </div>

              <a
                id="estimator-wa-send-btn"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-stone-950 font-black text-xs sm:text-sm py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Format Ini ke WhatsApp Sekarang</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

