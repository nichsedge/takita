import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChatPreviewSection } from './components/ChatPreviewSection';
import { TrustSection } from './components/TrustSection';
import { DemoProjects } from './components/DemoProjects';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Skip to Content Link for Keyboard and Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-700 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 font-bold text-xs"
      >
        Lewati ke konten utama
      </a>

      {/* 1. Top Navigation Bar */}
      <Navbar />

      <main id="main-content" className="flex-1 pb-24 sm:pb-0">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Social Proof / "What You Get" Trust Section */}
        <TrustSection />

        {/* 4. Chat Preview / No-Fear WhatsApp Simulation Section */}
        <ChatPreviewSection />

        {/* 5. Example Demo Projects (Realistic TA Demos) */}
        <DemoProjects />

        {/* 6. How It Works (Simple 5-Step Process) */}
        <HowItWorks />

        {/* 7. Simple Transparent Pricing */}
        <Pricing />

        {/* 8. Interactive Message Generator / Estimator */}
        <InteractiveEstimator />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />

        {/* 10. Strong Final Closing CTA */}
        <FinalCta />
      </main>

      {/* 11. Footer & Academic Ethics Disclaimer */}
      <Footer />

      {/* 12. Floating WhatsApp Fast Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
