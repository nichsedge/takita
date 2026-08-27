import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCheck, FileText, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';

export const ChatPreviewSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-stone-100/70 border-b border-stone-200" id="simulasi-konsultasi">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-[11px] sm:text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nggak Perlu Bingung Bahasa Teknis</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-stone-900 tracking-tight leading-snug">
            Konsultasi Santai, Tanpa Takut Ditanya Macam-Macam
          </h2>
          <p className="text-xs sm:text-base text-stone-600 mt-1.5 sm:mt-2">
            Punya judul skripsi, draft Bab 3, flowchart, atau cuma ide kasar? Kirim saja apa yang ada. Kami bantu bedah solusinya.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          
          {/* Left Column: WhatsApp Chat Simulation Window */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-stone-300 shadow-md overflow-hidden">
            {/* WA Header */}
            <div className="bg-emerald-700 text-white px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5 sm:gap-3">
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
            <div className="p-3 sm:p-4 space-y-2.5 sm:space-y-3 bg-[#efeae2] text-xs sm:text-sm min-h-[240px] sm:min-h-[260px] font-sans">
              
              {/* User Bubble */}
              <div className="flex justify-end">
                <div className="bg-[#d9fdd3] text-stone-900 rounded-lg rounded-tr-none p-2.5 sm:p-3 max-w-[92%] sm:max-w-[85%] shadow-2xs border border-emerald-200/50">
                  <p className="leading-relaxed">
                    Halo kak, saya mahasiswa SI. Mau buat demo website skripsi tentang <b>Sistem Rekomendasi</b> tapi belum paham coding dan deployment-nya. Bisa dibantu?
                  </p>
                  <div className="text-[9px] text-stone-500 text-right mt-1 flex items-center justify-end gap-1">
                    <span>14:02</span>
                    <CheckCheck className="w-3 h-3 text-blue-500 inline" />
                  </div>
                </div>
              </div>

              {/* Admin Bubble */}
              <div className="flex justify-start">
                <div className="bg-white text-stone-900 rounded-lg rounded-tl-none p-2.5 sm:p-3 max-w-[92%] sm:max-w-[88%] shadow-2xs border border-stone-200">
                  <p className="leading-relaxed">
                    Halo kak! Bisa banget 😊 Nggak perlu khawatir soal teknis codingnya, kami yang tangani.
                  </p>
                  <p className="leading-relaxed mt-1.5">
                    Kakak sudah ada file <b>Bab 3 / flowchart / rumus metodenya</b>? Boleh dikirim filenya ya, kami pelajari dulu secara <b>GRATIS</b> dan hitungkan estimasinya.
                  </p>
                  <div className="text-[9px] text-stone-400 text-right mt-1">
                    <span>14:05</span>
                  </div>
                </div>
              </div>

              {/* User Bubble 2 */}
              <div className="flex justify-end">
                <div className="bg-[#d9fdd3] text-stone-900 rounded-lg rounded-tr-none p-2 sm:p-2.5 max-w-[90%] sm:max-w-[85%] shadow-2xs border border-emerald-200/50 flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 bg-emerald-600 text-white rounded shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[11px] sm:text-xs truncate">Bab3_Metodologi_Revisi.pdf</div>
                    <div className="text-[9px] text-stone-500">Siap kak, ini dokumennya!</div>
                  </div>
                </div>
              </div>

            </div>

            {/* WA Footer CTA */}
            <div className="p-2.5 sm:p-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-2">
              <span className="text-[10px] sm:text-[11px] text-stone-500 font-medium truncate">
                Punya draft serupa? Kirim sekarang:
              </span>
              <a
                href={getWhatsAppUrl("Halo Kak, saya mau konsultasi dan kirim file/konsep tugas akhir saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-[11px] sm:text-xs px-3 py-1.5 rounded-lg shadow-xs transition-colors shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Sekarang</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3 Friction Killers */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm">Konsultasi 100% Gratis</h3>
                  <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 sm:mt-1 leading-relaxed">
                    Tanya-tanya dulu, ceritakan kesulitan tugas akhirmu, tanpa ada kewajiban bayar apa pun.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm">Cukup Kirim Apa yang Ada</h3>
                  <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 sm:mt-1 leading-relaxed">
                    Naskah Bab 3, flowchart, coretan tangan, desain Figma, atau file project lama yang error.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm">Didampingi Sampai Siap</h3>
                  <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 sm:mt-1 leading-relaxed">
                    Dapat link online aktif + panduan singkat cara klik dan menjelaskan alurnya ke dosen.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1 text-center md:text-left">
              <a
                href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasikan File TA Kamu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
