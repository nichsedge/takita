import React from 'react';
import { MessageSquare, CheckCircle2, ShieldAlert, Sparkles, ArrowRight, Laptop, Globe, ServerCrash, Check, Zap } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 overflow-hidden" id="hero-section">
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-emerald-100/60 via-stone-100/30 to-transparent -z-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Friendly ethical context badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6 shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600" />
            <span>Layanan Teknis Website & Demo Tugas Akhir / Skripsi</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-5">
            Website TA Kamu, <br className="hidden sm:inline" />
            <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2 underline-offset-6">
              Siap Buat Sidang.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Sudah punya konsep, bab skripsi, atau source code tapi belum punya website/demo yang proper? 
            Kirim materi project kamu, kami bantu buat sampai <span className="font-semibold text-stone-800">online, stabil, dan siap dipresentasikan ke dosen</span>.
          </p>

          {/* Social Proof Pill for Live Projects */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-100/90 rounded-xl border border-stone-200/90 mb-7 text-xs">
            <span className="text-stone-500 font-semibold px-2 py-0.5">Live Demo Aktif:</span>
            <a 
              href="http://sabasunten.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-emerald-50 text-stone-800 hover:text-emerald-700 px-2.5 py-1 rounded-lg border border-stone-200 font-medium transition-colors inline-flex items-center gap-1 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>sabasunten.id ↗</span>
            </a>
            <a 
              href="https://nutrijoy.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-emerald-50 text-stone-800 hover:text-emerald-700 px-2.5 py-1 rounded-lg border border-stone-200 font-medium transition-colors inline-flex items-center gap-1 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>nutrijoy.vercel.app ↗</span>
            </a>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5">
            <a
              id="hero-primary-cta"
              href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Chat WhatsApp Sekarang</span>
            </a>

            <a
              href="#contoh-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm px-5 py-3.5 rounded-xl border border-stone-200 transition-colors"
            >
              <span>Lihat Contoh Demo</span>
              <ArrowRight className="w-4 h-4 text-stone-500" />
            </a>
          </div>

          {/* Secondary microcopy / assurances */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs sm:text-sm text-stone-500 font-medium">
            <span className="inline-flex items-center gap-1.5 text-stone-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Konsultasi 100% Gratis
            </span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="inline-flex items-center gap-1.5 text-stone-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Tanpa DP sebelum estimasi disepakati
            </span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="inline-flex items-center gap-1.5 text-stone-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Dapat URL online & source code
            </span>
          </div>

        </div>

        {/* Visual Comparison: Localhost vs Live Demo WebTA */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 sm:p-6">
            <div className="text-center mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Solusi Masalah Klasik Sidang Tugas Akhir
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pain Point: Localhost Problem */}
              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-rose-800 font-bold text-sm">
                    <ServerCrash className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Kondisi Bikin Cemas (Localhost)</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>Dosen minta buka link di HP/laptop beliau tapi nggak bisa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>Database lokal error atau lupa nyalain XAMPP saat giliran maju</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>Tampilan UI berantakan dan alur demo macet di depan penguji</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-rose-200/60 text-[12px] text-rose-700 font-medium">
                  Bikin panik dan nilai presentasi berkurang
                </div>
              </div>

              {/* Solution: WebTA Ready */}
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-emerald-900 font-bold text-sm">
                    <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Setelah Dibantu WebTA (Siap Sidang)</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 font-bold shrink-0 mt-0.5" />
                      <span>URL online aktif & stabil, bisa dibuka dosen kapan saja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 font-bold shrink-0 mt-0.5" />
                      <span>Alur form, tombol, dan perhitungan sesuai bab metode skripsi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 font-bold shrink-0 mt-0.5" />
                      <span>Tampilan responsif, bersih, dan percaya diri saat presentasi</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200/60 text-[12px] text-emerald-800 font-semibold flex items-center justify-between">
                  <span>Presentasi lancar & tenang</span>
                  <span className="bg-emerald-200/60 text-emerald-900 px-2 py-0.5 rounded text-[11px]">Siap Sidang</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
