import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEMO_PROJECTS, getWhatsAppUrl, CONTACT_CONFIG } from '../config';
import { MessageSquare, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';

export const DemoProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(DEMO_PROJECTS[0].id);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIdx = (index + 1) % DEMO_PROJECTS.length;
      setActiveTab(DEMO_PROJECTS[nextIdx].id);
      document.getElementById(`tab-${DEMO_PROJECTS[nextIdx].id}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIdx = (index - 1 + DEMO_PROJECTS.length) % DEMO_PROJECTS.length;
      setActiveTab(DEMO_PROJECTS[prevIdx].id);
      document.getElementById(`tab-${DEMO_PROJECTS[prevIdx].id}`)?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveTab(DEMO_PROJECTS[0].id);
      document.getElementById(`tab-${DEMO_PROJECTS[0].id}`)?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastIdx = DEMO_PROJECTS.length - 1;
      setActiveTab(DEMO_PROJECTS[lastIdx].id);
      document.getElementById(`tab-${DEMO_PROJECTS[lastIdx].id}`)?.focus();
    }
  };

  return (
    <section className="py-10 sm:py-16 bg-stone-100/70 border-b border-stone-200" id="contoh-demo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Contoh Website Demo Siap Sidang
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1.5 max-w-xl mx-auto">
            Semua alur, rumus metode, dan tampilan disinkronkan langsung dengan naskah skripsi kamu.
          </p>
        </motion.div>

        {/* Project Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          role="tablist"
          aria-label="Daftar contoh demo project"
          className="flex sm:flex-wrap items-center sm:justify-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {DEMO_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              role="tab"
              id={`tab-${proj.id}`}
              aria-selected={activeTab === proj.id}
              aria-controls={`panel-${proj.id}`}
              tabIndex={activeTab === proj.id ? 0 : -1}
              onClick={() => setActiveTab(proj.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`min-h-[44px] text-xs sm:text-sm font-bold px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                activeTab === proj.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200 hover:-translate-y-0.5'
              }`}
            >
              {proj.title}
            </button>
          ))}
        </motion.div>

        {/* Active Demo Project Showcase Card */}
        <AnimatePresence mode="wait">
          {DEMO_PROJECTS.map((project) => {
            if (project.id !== activeTab) return null;

            return (
              <motion.div
                key={project.id}
                id={`panel-${project.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${project.id}`}
                tabIndex={0}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                {/* Project Top Bar */}
                <div className="p-4 sm:p-7 border-b border-stone-100 bg-gradient-to-r from-stone-50 via-white to-stone-50 flex flex-col md:flex-row md:items-center md:justify-between gap-3.5 sm:gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        {project.badge}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black text-stone-900 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 mt-0.5">
                      {project.methodology}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-200">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center min-h-[44px] gap-1.5 bg-stone-900 hover:bg-stone-800 active:bg-black text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-xs shrink-0 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-700 focus-visible:ring-offset-2"
                      >
                        <ExternalLink className="w-4 h-4 text-emerald-400" />
                        <span>Kunjungi Website Demo ↗</span>
                      </a>
                    )}

                    <a
                      href={getWhatsAppUrl(CONTACT_CONFIG.messages.projectExample(project.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[44px] gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-xs shrink-0 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-white/20" />
                      <span>Tanya Model Serupa</span>
                    </a>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Column: Project Description & Features */}
                  <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-100">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Konsep & Gambaran Sistem
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-3">
                        Fitur Demo untuk Presentasi
                      </h4>
                      <ul className="space-y-2.5 mb-6">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-600">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Alur form, database, dan logika bisnis disesuaikan penuh dengan naskah TA kamu.</span>
                    </div>
                  </div>

                  {/* Right Column: Interactive Browser Frame & Specs */}
                  <div className="lg:col-span-5 p-5 sm:p-7 bg-stone-50/70 flex flex-col justify-between gap-5">
                    <div>
                      {/* Browser Frame Mockup */}
                      <div className="rounded-xl border border-stone-300/80 bg-white shadow-sm overflow-hidden mb-5">
                        {/* Chrome window header */}
                        <div className="bg-stone-900 px-3 py-2 flex items-center justify-between gap-2 border-b border-stone-800">
                          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="flex-1 bg-stone-800 px-2.5 py-1 rounded-md text-[10px] font-mono text-emerald-300 truncate text-center flex items-center justify-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                            <span className="truncate">{project.liveUrl || 'demo-sidang.live'}</span>
                          </div>
                          <div className="text-[10px] text-stone-300 font-mono shrink-0 hidden sm:inline">
                            HTTPS
                          </div>
                        </div>

                        {/* Browser simulated content preview */}
                        <div className="p-4 bg-gradient-to-b from-stone-50 to-white text-stone-800">
                          <div className="flex items-center justify-between pb-2.5 border-b border-stone-200 mb-3">
                            <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-600" />
                              {project.title.split('(')[0].trim()}
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full">
                              Status: Siap Sidang
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="bg-stone-100/80 p-2.5 rounded-lg border border-stone-200/80">
                              <span className="block text-[10px] text-stone-600 font-medium">Uji Coba Dosen</span>
                              <span className="text-xs font-bold text-stone-900">Responsif HP/PC</span>
                            </div>
                            <div className="bg-stone-100/80 p-2.5 rounded-lg border border-stone-200/80">
                              <span className="block text-[10px] text-stone-600 font-medium">Kalkulasi Sistem</span>
                              <span className="text-xs font-bold text-emerald-700">Real-Time</span>
                            </div>
                          </div>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 active:bg-black text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-all duration-150 shadow-2xs hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Buka Live Demo di Tab Baru ↗</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Stats Specs List */}
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-2.5">
                        Spesifikasi Teknis
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 mb-3">
                        {project.stats.map((st, stIdx) => (
                          <div key={stIdx} className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
                            <span className="text-xs text-stone-600 font-medium">{st.label}</span>
                            <span className="text-xs font-bold text-stone-900">{st.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-stone-600 bg-white/80 border border-stone-200/80 rounded-xl p-3 text-center sm:text-left leading-relaxed">
                      💡 <strong>Butuh penyesuaian khusus?</strong> Alur kalkulasi, input data penguji, dan desain UI bisa dikustomisasi 100% mengikuti bimbingan dosen.
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Footnote reassurance */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-stone-600">
            Mendukung berbagai topik tugas akhir untuk seluruh jurusan (Informatika, SI, Elektro, Manajemen, Akuntansi, dll).
          </p>
        </div>

      </div>
    </section>
  );
};
