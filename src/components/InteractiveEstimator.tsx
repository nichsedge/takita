import React, { useState } from 'react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, Send, Sparkles, SlidersHorizontal, Check } from 'lucide-react';

export const InteractiveEstimator: React.FC = () => {
  const [category, setCategory] = useState<string>("Sistem Rekomendasi / Prediksi");
  const [materialState, setMaterialState] = useState<string>("Baru ada naskah / Bab 3 skripsi");
  const [deadline, setDeadline] = useState<string>("Dalam 4 - 7 hari ke depan");

  const categories = [
    "Sistem Rekomendasi / SPK",
    "Dashboard Analisis Data / Prediksi",
    "Sistem Informasi / Web Layanan",
    "Topik Lainnya"
  ];

  const materialStates = [
    "Baru ada naskah / Bab 3 skripsi",
    "Ada desain Figma / screenshot",
    "Ada source code tapi error / belum selesai"
  ];

  const deadlines = [
    "Mendesak (1 - 3 hari lagi)",
    "Dalam 4 - 7 hari ke depan",
    "Masih 1 - 2 minggu lagi"
  ];

  const customWaMessage = CONTACT_CONFIG.messages.customEstimator(category, deadline, materialState);
  const waUrl = getWhatsAppUrl(customWaMessage);

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200" id="hitung-kebutuhan">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Kalkulator Ringkas
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2">
            Bingung Mau Ngetik Apa di WhatsApp?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mb-6">
            Pilih kondisi project kamu di bawah ini, kami siapkan format pesannya secara otomatis:
          </p>

          <div className="space-y-5">
            {/* 1. Kategori Project */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                1. Kategori / Model Demo TA:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`text-left text-xs p-3 rounded-lg border transition-all flex items-center justify-between ${
                      category === cat
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-semibold'
                        : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <span>{cat}</span>
                    {category === cat && <Check className="w-4 h-4 text-emerald-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Kondisi Materi */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                2. Materi yang Kamu Miliki Sekarang:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {materialStates.map((mat) => (
                  <button
                    key={mat}
                    type="button"
                    onClick={() => setMaterialState(mat)}
                    className={`text-left text-xs p-3 rounded-lg border transition-all flex items-center justify-between ${
                      materialState === mat
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-semibold'
                        : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <span>{mat}</span>
                    {materialState === mat && <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Target Deadline */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                3. Target Waktu Selesai / Jadwal Sidang:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {deadlines.map((dl) => (
                  <button
                    key={dl}
                    type="button"
                    onClick={() => setDeadline(dl)}
                    className={`text-left text-xs p-3 rounded-lg border transition-all flex items-center justify-between ${
                      deadline === dl
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-semibold'
                        : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <span>{dl}</span>
                    {deadline === dl && <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Box & Send Button */}
            <div className="pt-3 border-t border-stone-800">
              <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 mb-4 font-mono text-xs text-stone-300 whitespace-pre-line leading-relaxed">
                {customWaMessage}
              </div>

              <a
                id="estimator-wa-send-btn"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-stone-950 font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Format Ini ke WhatsApp Sekarang</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
