import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { Clock, MessageSquare } from 'lucide-react';

export const UrgencySection: React.FC = () => {
  return (
    <section className="py-8 sm:py-14 bg-amber-50/60 border-b border-amber-200/70" id="urgent">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border-2 border-amber-300/80 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-6"
        >
          
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-amber-900 uppercase tracking-wider mb-0.5">
                <span>Sidang / Semhas Mepet?</span>
              </div>
              <h3 className="text-base sm:text-xl font-black text-stone-900 tracking-tight leading-snug">
                Butuh Demo Selesai 1–3 Hari?
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Tanyakan ketersediaan slot pengerjaan kilat via WhatsApp agar project kamu diprioritaskan.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              id="urgency-wa-btn"
              href={getWhatsAppUrl(CONTACT_CONFIG.messages.urgent)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-stone-950/20" />
              <span>Tanya Slot Kilat</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

