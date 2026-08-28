import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once user scrolls past the Hero section (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* 1. Mobile Sticky Bottom Bar (High CTR for Smartphone Users) */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-900/98 backdrop-blur-md border-t border-stone-800 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] px-3.5 flex items-center justify-between gap-2.5 shadow-2xl"
          >
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-black text-white leading-tight flex items-center gap-1.5 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Konsultasi Demo TA</span>
              </span>
              <span className="text-[10px] text-stone-400 truncate">Gratis • Respon cepat &lt; 15 mnt</span>
            </div>

            <a
              id="mobile-sticky-whatsapp-btn"
              href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md shrink-0 active:scale-[0.97]"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Chat WhatsApp</span>
            </a>
          </motion.div>

          {/* 2. Desktop Floating WhatsApp Button */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-2"
          >
            {/* Friendly prompt bubble */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 bg-white text-stone-900 text-xs font-semibold px-3.5 py-2.5 rounded-xl shadow-xl border border-stone-200"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <div>
                    <div>Mau tanya untuk tugas akhir kamu?</div>
                    <div className="text-[10px] text-stone-500 font-normal">Kirim judul / Bab 3, kami cek gratis.</div>
                  </div>
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="text-stone-400 hover:text-stone-600 ml-1 p-0.5 rounded cursor-pointer"
                    aria-label="Tutup pesan"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <a
              id="floating-whatsapp-btn"
              href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              aria-label="Chat WhatsApp Takita"
            >
              <div className="relative">
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full ring-2 ring-emerald-600 animate-ping"></span>
              </div>
              <span>Konsultasi Gratis via WA</span>
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

