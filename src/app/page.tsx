import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Approach from "@/components/landing/Approach";
import System from "@/components/landing/System";
import Wardrobe from "@/components/landing/Wardrobe";
import Transformation from "@/components/landing/Transformation";
import Commerce from "@/components/landing/Commerce";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
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
