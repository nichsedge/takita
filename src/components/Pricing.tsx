import React from 'react';
import { motion } from 'motion/react';
import { PRICING_INCLUSIONS, CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, Check, ShieldCheck, ArrowDown } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-stone-50 border-b border-stone-200" id="biaya">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto text-center mb-6 sm:mb-10"
        >
          <h2 className="text-xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Biaya Menyesuaikan Scope Project
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1.5">
            Kirim materi kamu. Kami hitungkan estimasi waktu & biaya secara <span className="font-bold text-stone-800">100% gratis</span>.
          </p>
        </motion.div>

        {/* Focused Consultation & Estimation Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto bg-white rounded-2xl border border-emerald-600/30 shadow-md p-5 sm:p-7 relative"
        >
          
          {/* What is Included List */}
          <div className="pb-5">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
              Paket Pengerjaan Sudah Termasuk:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRICING_INCLUSIONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Zero Risk Assurance Note */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 text-xs text-stone-700 leading-snug mb-5 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <span className="font-bold text-emerald-950">Tanpa DP di Awal:</span> Anda hanya bayar setelah estimasi dan rincian fitur disepakati bersama.
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="space-y-2.5">
            <a
              id="pricing-cta-btn"
              href={getWhatsAppUrl(CONTACT_CONFIG.messages.pricing)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Kirim Materi & Tanya Estimasi Biaya</span>
            </a>

            <div className="text-center">
              <a
                href="#format-pesan"
                className="inline-flex items-center gap-1 text-xs text-stone-600 hover:text-stone-900 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-600 focus-visible:ring-offset-2 rounded"
              >
                <span>Atau gunakan format template pesan WhatsApp di bawah</span>
                <ArrowDown className="w-3 h-3" />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
