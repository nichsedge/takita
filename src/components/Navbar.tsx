import React from 'react';
import { MessageSquare } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { TakitaLogoIcon } from './TakitaLogo';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0" id="brand-logo-link">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <TakitaLogoIcon size={40} className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-stone-900 text-base sm:text-lg tracking-tight">Takita</span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">TA Kita</span>
            </div>
            <span className="text-[11px] text-stone-500 hidden sm:inline">Website Demo Tugas Akhir Siap Sidang</span>
          </div>
        </a>

        {/* Status Indicator & Direct WhatsApp CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Respon WhatsApp {CONTACT_CONFIG.averageResponseTime}</span>
          </div>

          <a
            id="nav-whatsapp-btn"
            href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all shadow-xs active:scale-[0.98]"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white/20" />
            <span>Chat WA</span>
          </a>
        </div>
      </div>
    </header>
  );
};

