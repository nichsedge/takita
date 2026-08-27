import React from 'react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config';
import { MessageSquare, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg overflow-hidden bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                T
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">Takita</span>
              <span className="text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800 px-1.5 py-0.5 rounded">
                Tugas Akhir Kita
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-sm mb-4">
              Takita — Layanan pembuatan dan deployment website demo untuk Tugas Akhir, Skripsi, dan Proyek Akhir mahasiswa Indonesia sampai siap dipresentasikan.
            </p>
            <div className="text-stone-300 font-medium">
              Jam Pelayanan: {CONTACT_CONFIG.workingHours}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Kontak Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WhatsApp: {CONTACT_CONFIG.displayPhoneNumber}</span>
                </a>
              </li>
              <li className="text-stone-400">
                Respon rata-rata: {CONTACT_CONFIG.averageResponseTime} pada jam operasional
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-stone-400">
          <div>
            © {new Date().getFullYear()} Takita (Tugas Akhir Kita). All rights reserved. Dibuat untuk mahasiswa pejuang skripsi di seluruh Indonesia.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppUrl(CONTACT_CONFIG.messages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
