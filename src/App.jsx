import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Demo from './components/sections/Demo';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import FooterCTA from './components/sections/FooterCTA';
import Footer from './components/sections/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { initAnalytics, trackPageView } from './lib/analytics';

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-blue-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Demo />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    initAnalytics();
    trackPageView();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacidade" element={<PrivacyPolicy />} />
      <Route path="/termos" element={<TermsOfService />} />
    </Routes>
  );
}
