import React from 'react';
import { HOW_IT_WORKS_STEPS, CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, UploadCloud, FileSearch, Globe, Award, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const icons = [MessageSquare, UploadCloud, FileSearch, Globe, Award];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200" id="cara-kerja">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 block">
            Alur Sangat Simpel
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Bagaimana Cara Mulainya?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Nggak perlu ribet teknis. Cukup 5 langkah mudah dari bahan yang kamu punya sampai website siap dipakai sidang.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-3 max-w-5xl mx-auto relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx}
                className="relative bg-stone-50 border border-stone-200 rounded-xl p-5 flex flex-col justify-between transition-all hover:bg-emerald-50/40 hover:border-emerald-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Langkah {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-stone-200/80 text-stone-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-stone-200/60 flex items-center text-[11px] font-semibold text-emerald-700">
                  <span>Tahap {idx + 1} dari 5</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            id="how-it-works-cta"
            href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Mulai Langkah 1: Chat WhatsApp Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
};
