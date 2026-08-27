import React from 'react';
import { MessageSquare } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { TakitaLogoIcon } from './TakitaLogo';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a href="#" className="flex items-center gap-2.5 group" id="brand-logo-link">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <TakitaLogoIcon size={40} className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-stone-900 text-lg tracking-tight">Takita</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">Tugas Akhir Kita</span>
            </div>
            <span className="text-xs text-stone-500 hidden sm:inline">Website Demo Tugas Akhir Siap Sidang</span>
          </div>
        </a>

        {/* Status Indicator & Direct WhatsApp CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Respon WhatsApp {CONTACT_CONFIG.averageResponseTime}</span>
          </div>

          <a
            id="nav-whatsapp-btn"
            href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-3.5 sm:px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow active:scale-[0.99]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

