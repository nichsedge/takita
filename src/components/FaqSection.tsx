import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../config';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-16 bg-white border-b border-stone-200" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-6 sm:mb-10"
        >
          <h2 className="text-xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1.5">
            Jawaban lengkap seputar alur pembuatan demo website dan bimbingan sidang.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const triggerId = `faq-trigger-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                  isOpen ? 'border-emerald-300 bg-stone-50/70 shadow-2xs' : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  id={triggerId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(idx)}
                  className="w-full min-h-[48px] text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 font-bold text-stone-900 text-xs sm:text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-600'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-3.5 pb-4 sm:px-4 sm:pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-2.5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
