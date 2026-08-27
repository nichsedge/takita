import React from 'react';
import { PRICING_INCLUSIONS, CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, Check, ShieldAlert, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-stone-50 border-b border-stone-200" id="biaya">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 block">
            Biaya Transparan
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Investasi Jelas, Tanpa Biaya Tersembunyi
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Bukan langganan bulanan atau paket berbelit-belit. Sekali bayar untuk project demo siap sidang.
          </p>
        </div>

        {/* Focused Pricing Card */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl border-2 border-emerald-600/30 shadow-lg p-4 sm:p-8 relative">
          
          {/* Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] sm:text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
            Paket Pembuatan Demo TA
          </div>

          <div className="text-center pb-5 sm:pb-6 border-b border-stone-100 pt-2">
            <span className="text-[11px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Biaya Pengerjaan
            </span>
            <div className="mt-2 flex items-baseline justify-center gap-1.5">
              <span className="text-xs sm:text-sm font-bold text-stone-500">Mulai dari</span>
              <span className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
                Rp799.000
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-500 mt-1.5 sm:mt-2">
              Satu kali bayar sampai website online & siap didemokan ke dosen
            </p>
          </div>

          {/* What is Included List */}
          <div className="py-5 sm:py-6">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 sm:mb-4">
              Yang Sudah Termasuk:
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {PRICING_INCLUSIONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Honest Note About Complexity & Zero-risk */}
          <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-xl p-3 sm:p-3.5 text-xs text-stone-700 leading-relaxed mb-5 sm:mb-6 space-y-1">
            <div className="font-bold text-emerald-900 flex items-center gap-1.5 text-xs">
              <span>🛡️ Bebas Risiko — Tanpa DP di Awal</span>
            </div>
            <p className="text-stone-600 text-[11px] sm:text-xs">
              Kirim draft/flowchart skripsimu dulu. Kami hitungkan estimasi pasti. Kamu hanya bayar setelah setuju dengan alur & waktu pengerjaan.
            </p>
          </div>

          {/* Main Pricing CTA Button */}
          <a
            id="pricing-cta-btn"
            href={getWhatsAppUrl(CONTACT_CONFIG.messages.pricing)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-base py-3.5 px-4 sm:px-6 rounded-xl transition-all shadow-md active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20" />
            <span>Kirim Materi TA & Cek Estimasi Gratis</span>
          </a>

          <div className="mt-3 text-center">
            <span className="text-[10px] sm:text-[11px] text-stone-500">
              ⚡ Konsultasi & cek bahan 100% gratis • Respon WA &lt; 15 menit
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
