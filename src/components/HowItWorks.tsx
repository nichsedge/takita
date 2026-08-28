import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS, CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, UploadCloud, FileSearch, Globe, Award } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const icons = [MessageSquare, UploadCloud, FileSearch, Globe, Award];

  return (
    <section className="py-10 sm:py-16 bg-white border-b border-stone-200" id="cara-kerja">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto text-center mb-6 sm:mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1 block">
            Alur Pengerjaan
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-stone-900 tracking-tight">
            5 Langkah Mudah Sampai Siap Sidang
          </h2>
        </motion.div>

        {/* Steps Flow Grid */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile View: Connected Timeline List */}
          <div className="md:hidden space-y-2.5 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-emerald-200">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="relative flex items-start gap-3 bg-stone-50 border border-stone-200 rounded-xl p-3 shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white z-10 shadow-xs">
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                        {step.title}
                      </h3>
                      <div className="text-stone-400 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop View: 5-Col Grid */}
          <div className="hidden md:grid grid-cols-5 gap-3 relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex flex-col justify-between transition-all duration-200 hover:bg-emerald-50/40 hover:border-emerald-200 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        Langkah {step.step}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-stone-200/80 text-stone-700 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-200/60 flex items-center text-[10px] font-semibold text-emerald-700">
                    <span>Tahap {idx + 1} dari 5</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

