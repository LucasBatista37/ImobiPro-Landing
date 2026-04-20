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

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased">
      <Navbar />
      <main>
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
