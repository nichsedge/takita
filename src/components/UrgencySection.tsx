import React from 'react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { Clock, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

export const UrgencySection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-amber-50/60 border-b border-amber-200/70" id="urgent">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        <div className="bg-white border-2 border-amber-300/80 rounded-2xl p-4 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                <span>Sidang / Semhas Sudah Dekat?</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-stone-900 tracking-tight leading-snug">
                Butuh Demo Website dalam Waktu Singkat?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 sm:mt-2 leading-relaxed">
                Kalau jadwal sidang kamu tinggal hitungan hari, tanyakan ketersediaan slot pengerjaan kilat (express) lewat WhatsApp agar kami prioritaskan.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              id="urgency-wa-btn"
              href={getWhatsAppUrl(CONTACT_CONFIG.messages.urgent)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all whitespace-nowrap active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-stone-950/20" />
              <span>Tanya Slot Kilat WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
