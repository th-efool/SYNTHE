"use client";

"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Navbar() {
  useScrollReveal();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F9F6F0]/80 backdrop-blur-xl border-b border-[#D4C7B8]/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl tracking-tight font-system font-normal text-[#201A17] uppercase">SYNTHE</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#7A6F68]">
          <a href="#discovery" className="hover:text-[#201A17] transition-colors duration-500">Approach</a>
          <a href="#system" className="hover:text-[#201A17] transition-colors duration-500">System</a>
          <a href="#wardrobe" className="hover:text-[#201A17] transition-colors duration-500">Selection</a>
          <a href="#transformation" className="hover:text-[#201A17] transition-colors duration-500">Proof</a>
        </div>
        <button className="text-sm text-[#201A17] border border-[#D4C7B8] rounded-full px-6 py-2 hover:bg-[#201A17] hover:border-[#201A17] hover:text-[#F9F6F0] transition-all duration-500">
          Sign In
        </button>
      </div>
    </nav>
  );
}
