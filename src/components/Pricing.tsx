import React from 'react';
import { PRICING_INCLUSIONS, CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, Check, ShieldCheck, ArrowRight, Sparkles, Send } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-stone-50 border-b border-stone-200" id="biaya">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estimasi Transparan & Tanpa Komitmen</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Punya project yang mau dibuat online?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2.5 max-w-xl mx-auto">
            Kirim detail project kamu. Kami cek kebutuhan teknis dan berikan estimasi harga secara <span className="font-bold text-stone-800">100% gratis</span>.
          </p>
        </div>

        {/* Focused Consultation & Estimation Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border-2 border-emerald-600/30 shadow-lg p-5 sm:p-8 relative">
          
          {/* Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] sm:text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
            Konsultasi & Estimasi Project TA
          </div>

          <div className="text-center pb-6 border-b border-stone-100 pt-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Fleksibel & Proporsional
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
              Harga Menyesuaikan Kebutuhan Project
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
              Tiap judul skripsi dan metode punya kompleksitas berbeda. Chat kami dulu untuk dapat hitungan estimasi yang adil dan akurat.
            </p>
          </div>

          {/* Simple 3-step Qualification Preview */}
          <div className="py-4 border-b border-stone-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                <div className="text-[10px] font-extrabold text-emerald-700 uppercase">1. Kirim Materi</div>
                <div className="text-xs text-stone-700 font-semibold mt-0.5">Bab 3 / flowchart / draft</div>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                <div className="text-[10px] font-extrabold text-emerald-700 uppercase">2. Kami Tinjau</div>
                <div className="text-xs text-stone-700 font-semibold mt-0.5">Cek scope & waktu pengerjaan</div>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                <div className="text-[10px] font-extrabold text-emerald-700 uppercase">3. Dapatkan Estimasi</div>
                <div className="text-xs text-stone-700 font-semibold mt-0.5">Estimasi pasti & tanpa komitmen</div>
              </div>
            </div>
          </div>

          {/* What is Included List */}
          <div className="py-5 sm:py-6">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 sm:mb-4">
              Setiap Pengerjaan Project Sudah Termasuk:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PRICING_INCLUSIONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Zero Risk Assurance Note */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 text-xs text-stone-700 leading-relaxed mb-5 sm:mb-6 flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-950 block">100% Bebas Risiko — Tanpa DP di Awal</span>
              <span className="text-stone-600 text-[11px] sm:text-xs">
                Kirimkan bahannya dulu secara santai. Anda hanya bayar setelah menyetujui rincian fitur dan estimasi yang disepakati bersama.
              </span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="space-y-3">
            <a
              id="pricing-cta-btn"
              href={getWhatsAppUrl(CONTACT_CONFIG.messages.pricing)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[50px] inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-sm sm:text-base py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20" />
              <span>Konsultasi via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="text-center">
              <p className="text-[11px] sm:text-xs text-stone-500 font-medium italic">
                *Harga menyesuaikan kompleksitas dan deadline project.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

