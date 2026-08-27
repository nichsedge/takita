import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCheck, FileText, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';

export const ChatPreviewSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-stone-100/70 border-b border-stone-200" id="simulasi-konsultasi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nggak Perlu Bingung Bahasa Teknis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Konsultasi Santai, Tanpa Takut Ditanya Macam-Macam
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            Punya judul skripsi, draft Bab 3, flowchart, atau cuma ide kasar? Kirim saja apa yang ada. Kami bantu bedah solusinya.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: WhatsApp Chat Simulation Window */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-stone-300 shadow-md overflow-hidden">
            {/* WA Header */}
            <div className="bg-emerald-700 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs text-white ring-2 ring-emerald-300">
                  T
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm leading-tight flex items-center gap-1.5">
                    <span>Admin Takita (Tugas Akhir Kita)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  </div>
                  <div className="text-[10px] text-emerald-100">Online • Respons &lt; 15 menit</div>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-100 font-mono">
                {CONTACT_CONFIG.displayPhoneNumber}
              </span>
            </div>

            {/* WA Chat Body */}
            <div className="p-4 space-y-3 bg-[#efeae2] text-xs sm:text-sm min-h-[260px] font-sans">
              
              {/* User Bubble */}
              <div className="flex justify-end">
                <div className="bg-[#d9fdd3] text-stone-900 rounded-lg rounded-tr-none p-3 max-w-[85%] shadow-2xs border border-emerald-200/50">
                  <p className="leading-relaxed">
                    Halo kak, saya mahasiswa jurusan Sistem Informasi. Mau buat demo website skripsi tentang <b>Sistem Rekomendasi</b> tapi saya belum paham cara coding dan deployment-nya. Bisa dibantu?
                  </p>
                  <div className="text-[9px] text-stone-500 text-right mt-1 flex items-center justify-end gap-1">
                    <span>14:02</span>
                    <CheckCheck className="w-3 h-3 text-blue-500 inline" />
                  </div>
                </div>
              </div>

              {/* Admin Bubble */}
              <div className="flex justify-start">
                <div className="bg-white text-stone-900 rounded-lg rounded-tl-none p-3 max-w-[88%] shadow-2xs border border-stone-200">
                  <p className="leading-relaxed">
                    Halo kak! Bisa banget 😊 Nggak perlu khawatir soal teknis codingnya, kami yang tangani.
                  </p>
                  <p className="leading-relaxed mt-1.5">
                    Kakak sudah ada file <b>Bab 3 / flowchart / rumus metodenya</b>? Boleh dikirim filenya ke sini ya, kami pelajari dulu secara <b>GRATIS</b> dan buatkan estimasi pengerjaannya.
                  </p>
                  <div className="text-[9px] text-stone-400 text-right mt-1">
                    <span>14:05</span>
                  </div>
                </div>
              </div>

              {/* User Bubble 2 */}
              <div className="flex justify-end">
                <div className="bg-[#d9fdd3] text-stone-900 rounded-lg rounded-tr-none p-2.5 max-w-[85%] shadow-2xs border border-emerald-200/50 flex items-center gap-2">
                  <div className="p-2 bg-emerald-600 text-white rounded">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[11px]">Bab3_Metodologi_Revisi.pdf</div>
                    <div className="text-[9px] text-stone-500">Siap kak, ini dokumennya!</div>
                  </div>
                </div>
              </div>

            </div>

            {/* WA Footer CTA */}
            <div className="p-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
              <span className="text-[11px] text-stone-500 font-medium">
                Punya dokumen serupa? Kirim sekarang:
              </span>
              <a
                href={getWhatsAppUrl("Halo Kak, saya mau konsultasi dan kirim file/konsep tugas akhir saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Sekarang</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3 Friction Killers */}
          <div className="md:col-span-5 space-y-4">
            
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">Konsultasi 100% Gratis</h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Tanya-tanya dulu, ceritakan kesulitan tugas akhirmu, tanpa ada kewajiban bayar apa pun.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">Cukup Kirim Apa yang Kamu Punya</h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Bisa berupa naskah Bab 3, flowchart, coretan tangan, desain Figma, atau file project lama yang error.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">Jaminan Dampingi Sampai Siap</h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Dapat link online aktif + panduan singkat cara klik dan menjelaskan alurnya di hadapan dosen penguji.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1 text-center md:text-left">
              <a
                href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasikan File Tugas Akhir Kamu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
