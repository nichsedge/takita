import React, { useState } from 'react';
import { DEMO_PROJECTS, DemoProject, getWhatsAppUrl, CONTACT_CONFIG } from '../config';
import { MessageSquare, ExternalLink, Check, Sparkles, Filter, TrendingUp, Shield, BarChart3, MapPin, Star, FileText, CheckCircle2 } from 'lucide-react';

export const DemoProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(DEMO_PROJECTS[0].id);

  return (
    <section className="py-14 sm:py-20 bg-stone-100/70 border-b border-stone-200" id="contoh-demo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-semibold mb-3">
            <span>Contoh Model Demo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            "Project TA Gue Bisa Dibuat Seperti Apa?"
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 max-w-2xl mx-auto">
            Berikut adalah 3 contoh model website demo yang umum dibuat untuk kebutuhan sidang tugas akhir. 
            Semua alur, formula metode, dan tampilan bisa disesuaikan dengan naskah skripsi kamu.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {DEMO_PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(proj.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all ${
                activeTab === proj.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Active Demo Project Showcase Card */}
        {DEMO_PROJECTS.map((project) => {
          if (project.id !== activeTab) return null;

          return (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-all"
            >
              {/* Project Top Bar */}
              <div className="p-5 sm:p-7 border-b border-stone-100 bg-gradient-to-r from-stone-50 via-white to-stone-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded">
                      {project.badge}
                    </span>
                    <span className="text-xs font-medium text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded border border-stone-200">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-700 mt-0.5">
                    {project.methodology}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold px-3.5 py-2.5 rounded-lg transition-colors shadow-xs shrink-0"
                    >
                      <ExternalLink className="w-4 h-4 text-emerald-400" />
                      <span>Buka Live Demo ↗</span>
                    </a>
                  )}

                  <a
                    href={getWhatsAppUrl(CONTACT_CONFIG.messages.projectExample(project.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shadow-xs shrink-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Tanya Model Serupa</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Column: Project Description & Features */}
                <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-100">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                      Konsep & Gambaran Sistem
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                      Fitur Demo untuk Presentasi
                    </h4>
                    <ul className="space-y-2.5 mb-6">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick stats / metrics tag */}
                  <div className="pt-4 border-t border-stone-100 bg-stone-50/70 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-4 sm:p-5">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {project.stats.map((st, stIdx) => (
                        <div key={stIdx} className="bg-white p-2 rounded-lg border border-stone-200">
                          <div className="text-[10px] text-stone-500 font-medium">{st.label}</div>
                          <div className="text-xs sm:text-sm font-extrabold text-stone-900">{st.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Realistic In-App Browser Simulation Mockup */}
                <div className="lg:col-span-7 bg-stone-900 p-3 sm:p-5 flex flex-col justify-center">
                  <div className="bg-stone-950 rounded-xl overflow-hidden border border-stone-800 shadow-2xl">
                    
                    {/* Simulated Browser Chrome */}
                    <div className="bg-stone-900 px-3.5 py-2.5 border-b border-stone-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="bg-stone-800 text-stone-300 px-3 py-0.5 rounded text-[11px] font-mono truncate max-w-[220px] sm:max-w-xs flex items-center gap-1.5">
                        <span className="text-emerald-400">🔒</span>
                        <span>{project.liveUrl ? project.liveUrl : `https://demo-ta-${project.id}.webta.id`}</span>
                      </div>
                      <div className="text-emerald-400 text-[10px] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Online</span>
                      </div>
                    </div>

                    {/* Mockup Canvas Screen */}
                    <div className="p-3.5 sm:p-5 bg-stone-50 text-stone-900 min-h-[320px] text-xs">
                      
                      {/* 1. Saba Sunten Mockup (Portal Wisata & Budaya) */}
                      {project.mockupType === 'sabasunten' && (
                        <div className="space-y-3">
                          {/* Portal Header */}
                          <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-emerald-700 text-white font-bold flex items-center justify-center text-[10px]">
                                SS
                              </div>
                              <div>
                                <span className="font-extrabold text-stone-900 text-sm">Saba Sunten</span>
                                <span className="text-[10px] text-stone-500 ml-2">Eksplorasi Budaya & Wisata</span>
                              </div>
                            </div>
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                              sabasunten.id
                            </span>
                          </div>

                          {/* Portal Hero Banner Preview */}
                          <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-3.5 rounded-xl space-y-1.5 shadow-xs">
                            <span className="bg-emerald-600/60 text-emerald-200 text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                              Wisata Budaya & Desa
                            </span>
                            <div className="font-extrabold text-sm sm:text-base leading-tight">
                              Temukan Keindahan Budaya & Destinasi Desa Pasundan
                            </div>
                            <div className="text-[11px] text-emerald-100/80">
                              Direktori lengkap paket wisata, cagar budaya, dan kearifan lokal terintegrasi.
                            </div>
                          </div>

                          {/* Destination Cards Grid */}
                          <div className="space-y-2">
                            <div className="text-[11px] font-bold text-stone-700 flex justify-between">
                              <span>Destinasi & Kebudayaan Unggulan:</span>
                              <span className="text-emerald-700 font-semibold">Katalog Siap Sidang</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-white p-2.5 rounded-lg border border-stone-200 shadow-xs flex flex-col justify-between">
                                <div>
                                  <div className="bg-stone-200 h-14 rounded mb-1.5 flex items-center justify-center text-stone-500 text-[10px] font-semibold">
                                    🏞️ Kampung Adat & Wisata
                                  </div>
                                  <div className="font-bold text-stone-900 text-xs">Kampung Budaya Sunda</div>
                                  <div className="text-[10px] text-stone-500">Pusat Tradisi & Seni</div>
                                </div>
                                <div className="mt-2 pt-1.5 border-t border-stone-100 flex items-center justify-between text-[10px]">
                                  <span className="text-emerald-700 font-bold">Terverifikasi</span>
                                  <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-medium">Detail →</span>
                                </div>
                              </div>

                              <div className="bg-white p-2.5 rounded-lg border border-stone-200 shadow-xs flex flex-col justify-between">
                                <div>
                                  <div className="bg-stone-200 h-14 rounded mb-1.5 flex items-center justify-center text-stone-500 text-[10px] font-semibold">
                                    🏛️ Situs Cagar Sejarah
                                  </div>
                                  <div className="font-bold text-stone-900 text-xs">Cagar Sejarah & Galeri</div>
                                  <div className="text-[10px] text-stone-500">Edukasi & Peta Rute</div>
                                </div>
                                <div className="mt-2 pt-1.5 border-t border-stone-100 flex items-center justify-between text-[10px]">
                                  <span className="text-emerald-700 font-bold">Peta Aktif</span>
                                  <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-medium">Detail →</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 2. NutriJoy Mockup (Aplikasi Nutrisi & Kalori) */}
                      {project.mockupType === 'nutrijoy' && (
                        <div className="space-y-3">
                          {/* App Header */}
                          <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px]">
                                NJ
                              </div>
                              <div>
                                <span className="font-extrabold text-stone-900 text-sm">NutriJoy</span>
                                <span className="text-[10px] text-stone-500 ml-2">Smart Nutrition Assistant</span>
                              </div>
                            </div>
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                              nutrijoy.vercel.app
                            </span>
                          </div>

                          {/* Calorie & Macro Target Summary */}
                          <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-2.5">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-[10px] text-stone-500 uppercase font-semibold">Target Kalori Harian (TDEE)</div>
                                <div className="text-base font-black text-emerald-700">2.150 kkal <span className="text-[10px] font-normal text-stone-500">/ hari</span></div>
                              </div>
                              <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded-lg">
                                Status: Seimbang
                              </span>
                            </div>

                            {/* Macro Progress Bars */}
                            <div className="grid grid-cols-3 gap-2 pt-1">
                              <div className="bg-stone-50 p-2 rounded-lg border border-stone-200 text-center">
                                <div className="text-[9px] text-stone-500">Protein</div>
                                <div className="text-xs font-bold text-stone-900">125g / 140g</div>
                                <div className="w-full bg-stone-200 h-1.5 rounded-full mt-1 overflow-hidden">
                                  <div className="bg-emerald-500 h-full w-[85%] rounded-full" />
                                </div>
                              </div>
                              <div className="bg-stone-50 p-2 rounded-lg border border-stone-200 text-center">
                                <div className="text-[9px] text-stone-500">Karbohidrat</div>
                                <div className="text-xs font-bold text-stone-900">210g / 250g</div>
                                <div className="w-full bg-stone-200 h-1.5 rounded-full mt-1 overflow-hidden">
                                  <div className="bg-blue-500 h-full w-[78%] rounded-full" />
                                </div>
                              </div>
                              <div className="bg-stone-50 p-2 rounded-lg border border-stone-200 text-center">
                                <div className="text-[9px] text-stone-500">Lemak Sehat</div>
                                <div className="text-xs font-bold text-stone-900">48g / 60g</div>
                                <div className="w-full bg-stone-200 h-1.5 rounded-full mt-1 overflow-hidden">
                                  <div className="bg-amber-500 h-full w-[75%] rounded-full" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Meal Recommendation List */}
                          <div className="space-y-1.5">
                            <div className="text-[11px] font-bold text-stone-700 flex justify-between">
                              <span>Rekomendasi Menu Hari Ini:</span>
                              <span className="text-emerald-700 font-semibold">Terkalkulasi Otomatis</span>
                            </div>

                            <div className="bg-white p-2.5 rounded-lg border border-emerald-300 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-base">🥗</span>
                                <div>
                                  <div className="font-bold text-stone-900 text-xs">Grilled Chicken Salad + Quinoa</div>
                                  <div className="text-[10px] text-stone-500">520 kkal • Protein 42g • Serat Tinggi</div>
                                </div>
                              </div>
                              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                                Menu Makan Siang
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 3. Dashboard Mockup */}
                      {project.mockupType === 'dashboard' && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                            <div>
                              <span className="font-bold text-stone-900 text-sm">Dashboard Analitik Prediksi Tren Data</span>
                              <p className="text-[11px] text-stone-500">Model: Time Series Forecasting (Holt-Winters / ARIMA)</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded">
                              Data Real-Time
                            </span>
                          </div>

                          {/* Metrics preview */}
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-white p-2 rounded-lg border border-stone-200">
                              <div className="text-[10px] text-stone-500">Akurasi MAPE</div>
                              <div className="text-xs font-extrabold text-emerald-700">6.42%</div>
                              <div className="text-[9px] text-stone-400">Tingkat Error Rendah</div>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-stone-200">
                              <div className="text-[10px] text-stone-500">Total Periode Uji</div>
                              <div className="text-xs font-extrabold text-stone-900">36 Bulan</div>
                              <div className="text-[9px] text-stone-400">Dataset Valid</div>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-stone-200">
                              <div className="text-[10px] text-stone-500">Prediksi Bulan Depan</div>
                              <div className="text-xs font-extrabold text-blue-700">1.485 Unit</div>
                              <div className="text-[9px] text-emerald-600 font-semibold">+12.4% Tren Naik</div>
                            </div>
                          </div>

                          {/* Chart Visual Simulation */}
                          <div className="bg-white p-3 rounded-lg border border-stone-200">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-bold text-stone-700">Grafik Data Aktual vs Nilai Prediksi Model</span>
                              <div className="flex items-center gap-2 text-[9px]">
                                <span className="flex items-center gap-1 text-stone-600">
                                  <span className="w-2 h-2 rounded-full bg-stone-400" /> Aktual
                                </span>
                                <span className="flex items-center gap-1 text-blue-600 font-bold">
                                  <span className="w-2 h-2 rounded-full bg-blue-600" /> Prediksi
                                </span>
                              </div>
                            </div>
                            {/* Visual Bars Simulation */}
                            <div className="h-20 flex items-end justify-between gap-1.5 pt-2 border-b border-stone-200">
                              {[
                                { m: 'Jan', act: 60, pred: 62 },
                                { m: 'Feb', act: 75, pred: 72 },
                                { m: 'Mar', act: 68, pred: 70 },
                                { m: 'Apr', act: 85, pred: 83 },
                                { m: 'Mei', act: 92, pred: 90 },
                                { m: 'Jun', act: 100, pred: 98 },
                                { m: 'Jul*', act: 0, pred: 108 },
                              ].map((bar, bIdx) => (
                                <div key={bIdx} className="flex-1 flex flex-col items-center gap-1">
                                  <div className="w-full flex items-end justify-center gap-0.5 h-16">
                                    {bar.act > 0 && (
                                      <div style={{ height: `${bar.act}%` }} className="w-2 sm:w-2.5 bg-stone-300 rounded-t-sm" />
                                    )}
                                    <div style={{ height: `${bar.pred}%` }} className="w-2 sm:w-2.5 bg-blue-600 rounded-t-sm" />
                                  </div>
                                  <span className="text-[8px] text-stone-500">{bar.m}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                  <div className="mt-2 text-center text-[11px] text-stone-400">
                    💡 Pengunjung bisa langsung klik tombol <span className="text-stone-200 font-semibold">"Buka Live Demo ↗"</span> untuk mencoba website aslinya secara langsung.
                  </div>
                </div>
              </div>

            </div>
          );
        })}

        {/* Footnote reassurance */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-stone-500">
            Punya topik atau jurusan lain (Teknik Elektro, Manajemen, Akuntansi, Farmasi, dll)?{' '}
            <a
              href={getWhatsAppUrl("Halo kak, saya punya topik TA yang berbeda. Mau tanya apakah bisa dibantu dibuatkan website demonya?")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold hover:underline"
            >
              Konsultasikan judul TA kamu lewat WhatsApp →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
