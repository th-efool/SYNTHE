import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import System from './components/System';
import Wardrobe from './components/Wardrobe';
import Transformation from './components/Transformation';
import Commerce from './components/Commerce';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      {/* Global Subtle Warmth */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(212,199,184,0.15),transparent_60%)] z-[-1]"></div>

      <Navbar />
      
      <main className="pt-20">
        <Hero />
        <Approach />
        <System />
        <Wardrobe />
        <Transformation />
        <Commerce />
        <CTA />
      </main>

      <Footer />
    </>
  );
}