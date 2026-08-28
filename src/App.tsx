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
      {/* 1. Top Navigation Bar */}
      <Navbar />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Social Proof / "What You Get" Trust Section */}
        <TrustSection />

        {/* 4. Chat Preview / No-Fear WhatsApp Simulation Section */}
        <ChatPreviewSection />

        {/* 5. Example Demo Projects (3 Realistic TA Demos) */}
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
