import React from 'react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, ShieldCheck, CheckCircle2, Laptop } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-stone-900 text-white relative overflow-hidden" id="final-cta">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-72 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Ethic badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Fokus Sidang & Presentasi Tanpa Hambatan Teknis</span>
        </div>

        {/* Strong Closing Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Jangan sidang dengan localhost, <br />
          kalau project kamu bisa dibuat <span className="text-emerald-400">lebih proper</span>.
        </h2>

        {/* Supporting message */}
        <p className="text-sm sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Bikin dosen penguji fokus pada substansi penelitian dan metodologimu, dengan demo website yang rapi, responsif, dan siap diakses kapan saja.
        </p>

        {/* Big WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            id="final-whatsapp-btn"
            href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-stone-950 font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-6 h-6 fill-stone-950/20" />
            <span>Chat WhatsApp Sekarang</span>
          </a>
        </div>

        {/* Microcopy */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Konsultasi Gratis
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Respon Cepat {CONTACT_CONFIG.averageResponseTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Tanpa DP Sebelum Cek Materi
          </span>
        </div>

      </div>
    </section>
  );
};
