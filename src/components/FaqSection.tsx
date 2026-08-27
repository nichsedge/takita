import React, { useState } from 'react';
import { FAQ_ITEMS, CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 block">
            Tanya Jawab
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Jawaban ringkas untuk hal-hal yang sering ditanyakan sebelum memulai.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all ${
                  isOpen ? 'border-emerald-300 bg-stone-50/70 shadow-xs' : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-stone-900 text-sm sm:text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{item.question}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-8 text-center bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs sm:text-sm text-stone-600 text-center sm:text-left">
            Punya pertanyaan lain yang belum terjawab di sini?
          </div>
          <a
            href={getWhatsAppUrl(CONTACT_CONFIG.messages.faq)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Tanyakan langsung via WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
