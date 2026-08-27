import React from 'react';
import { HOW_IT_WORKS_STEPS, CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, UploadCloud, FileSearch, Globe, Award, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const icons = [MessageSquare, UploadCloud, FileSearch, Globe, Award];

  return (
    <section className="py-12 sm:py-20 bg-white border-b border-stone-200" id="cara-kerja">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1.5 sm:mb-2 block">
            Alur Sangat Simpel
          </span>
          <h2 className="text-xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Bagaimana Cara Mulainya?
          </h2>
          <p className="text-xs sm:text-base text-stone-600 mt-2">
            Nggak perlu ribet teknis. Cukup 5 langkah mudah dari bahan yang kamu punya sampai website siap dipakai sidang.
          </p>
        </div>

        {/* Steps Flow Grid: Connected Vertical on Mobile, 5-col Grid on Desktop */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile View: Connected Timeline List */}
          <div className="md:hidden space-y-3 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-emerald-200">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <div key={idx} className="relative flex items-start gap-3 bg-stone-50 border border-stone-200 rounded-xl p-3.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white z-10 shadow-xs">
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                        {step.title}
                      </h3>
                      <div className="text-stone-400 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View: 5-Col Grid */}
          <div className="hidden md:grid grid-cols-5 gap-3 relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <div 
                  key={idx}
                  className="relative bg-stone-50 border border-stone-200 rounded-xl p-4 flex flex-col justify-between transition-all hover:bg-emerald-50/40 hover:border-emerald-200"
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
        </div>

        {/* Action Prompt */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            id="how-it-works-cta"
            href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>Mulai Langkah 1: Chat WhatsApp Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
};
