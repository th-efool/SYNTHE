"use client";

import { useState } from "react";

export default function Hero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [ctaGlow, setCtaGlow] = useState({ x: 120, y: 28 });

  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 py-12 lg:py-0 gap-8 lg:gap-10 overflow-hidden">
      <div className="w-full lg:w-5/12 z-10 flex flex-col items-start relative mt-4 lg:mt-0">
        <div className="reveal-up inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full border border-[#D4C7B8]/60 bg-white/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(58,49,44,0.04)]" style={{ transitionDelay: "0s" }}>
          <div className="w-1.5 h-1.5 bg-[#B87A5D] rounded-full anim-pulse-soft"></div>
          <span className="text-xs tracking-wider text-[#7A6F68] uppercase">Live Profile Active</span>
        </div>

        <div className="reveal-up text-lg md:text-xl font-editorial italic text-[#8C8A79] mb-2 tracking-wide" style={{ transitionDelay: "0.1s" }}>
          Fabric. Skin. Light.
        </div>

        <h1 className="reveal-up text-5xl md:text-6xl lg:text-7xl font-editorial leading-[1.05] tracking-tight mb-4 text-[#201A17]" style={{ transitionDelay: "0.2s" }}>
          Find what naturally <span className="italic text-[#B87A5D]">suits you.</span>
        </h1>

        <p className="reveal-up text-base text-[#7A6F68] max-w-md leading-[1.8] mb-6" style={{ transitionDelay: "0.3s" }}>
          Clothes should sit right on you.<br />
          The shape, the color, the way it comes together.<br />
          This brings those pieces into place.
        </p>

        <div className="reveal-up flex flex-col w-full sm:w-auto" style={{ transitionDelay: "0.4s" }}>
          <button
            className="pressable-btn w-full sm:w-auto bg-[#201A17] text-[#F9F6F0] rounded-full px-8 py-4 text-sm tracking-wide hover:bg-[#3A312C] hover:shadow-lg flex items-center justify-center gap-3 group relative overflow-hidden border border-[#1A1512]"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCtaGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseLeave={() => setCtaGlow({ x: 120, y: 28 })}
          >
            <span className="relative z-10">Start your profile</span>
            <span className="relative z-10 text-lg">-&gt;</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                backgroundImage: `radial-gradient(circle at ${ctaGlow.x}px ${ctaGlow.y}px, rgba(184,122,93,0.22), transparent 55%)`,
              }}
            ></div>
          </button>

          <div className="mt-4 pt-4 border-t border-[#D4C7B8]/60 w-full">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full border border-[#8C8A79]"></div>
                <span className="text-xs font-normal text-[#201A17]">Structure:</span>
                <span className="text-xs text-[#7A6F68]">Soft Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#E8DFD5] to-[#B87A5D] shadow-inner"></div>
                <span className="text-xs font-normal text-[#201A17]">Season:</span>
                <span className="text-xs text-[#7A6F68]">Soft Autumn</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#D4C7B8] text-xs">*</span>
                <span className="text-xs font-normal text-[#201A17]">Presence:</span>
                <span className="text-xs text-[#7A6F68]">Romantic + Natural</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C8A79]">
              <span className="text-[#D4C7B8]">o</span>
              Grounded wardrobe decisions
            </div>
          </div>
        </div>
      </div>

      <div
        className="reveal-up w-full lg:w-7/12 h-[500px] lg:h-[650px] relative rounded-[2.5rem] overflow-hidden bg-[#F2EFE9] group shadow-[0_16px_48px_-12px_rgba(58,49,44,0.12)] border border-[#D4C7B8]/60"
        style={{ transitionDelay: "0.5s" }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
          const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
          setParallax({ x: offsetX, y: offsetY });
        }}
        onMouseLeave={() => setParallax({ x: 0, y: 0 })}
      >
        <div className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1600&auto=format&fit=crop"
            alt="Styling"
            className="w-full h-full object-cover object-top anim-color-breathe origin-center opacity-95"
            style={{ transform: `translate(${parallax.x}px, ${parallax.y}px) scale(1.02)`, transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)" }}
          />
        </div>

        <div className="absolute inset-0 bg-grain pointer-events-none mix-blend-multiply opacity-40 group-hover:opacity-50 transition-opacity duration-200"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(212,199,184,0.15),transparent_70%)] mix-blend-color-burn pointer-events-none"></div>
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="w-1/2 h-[200%] bg-gradient-to-r from-transparent via-[#F9F6F0]/10 to-transparent anim-light-sweep absolute -top-1/2 left-0 mix-blend-overlay"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#201A17]/30 via-transparent to-transparent pointer-events-none"></div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(249,246,240,0.8)" strokeWidth="0.15" strokeDasharray="1 1.5" className="structural-line"></line>
          <line x1="30" y1="35" x2="70" y2="35" stroke="rgba(249,246,240,0.6)" strokeWidth="0.1" className="structural-line" style={{ animationDelay: "0.5s" }}></line>
          <circle cx="30" cy="35" r="0.6" fill="none" stroke="rgba(249,246,240,0.9)" strokeWidth="0.2" className="anim-pulse-soft"></circle>
          <circle cx="70" cy="35" r="0.6" fill="none" stroke="rgba(249,246,240,0.9)" strokeWidth="0.2" className="anim-pulse-soft" style={{ animationDelay: "1s" }}></circle>
          <path d="M 30 35 Q 45 45 40 60 Q 35 75 32 90" fill="none" stroke="rgba(249,246,240,0.4)" strokeWidth="0.15" className="structural-line" style={{ animationDelay: "1.5s" }}></path>
          <path d="M 70 35 Q 55 45 60 60 Q 65 75 68 90" fill="none" stroke="rgba(249,246,240,0.4)" strokeWidth="0.15" className="structural-line" style={{ animationDelay: "1.5s" }}></path>
        </svg>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-full h-px bg-[#F9F6F0]/20 anim-scan shadow-[0_0_12px_rgba(249,246,240,0.2)]"></div>
        </div>

        <div className="panel absolute top-[20%] left-[6%] glass-panel rounded-xl p-4 flex flex-col gap-2 anim-float cursor-default">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#8C8A79] text-sm">[]</span>
            <span className="text-xs uppercase tracking-wider text-[#7A6F68]">Structure</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-editorial tracking-tight text-[#201A17] leading-none">Soft Natural</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex gap-0.5">
                <div className="w-1 h-3 bg-[#D4C7B8] rounded-sm"></div>
                <div className="w-1 h-2 bg-[#E8DFD5] rounded-sm mt-1"></div>
                <div className="w-1 h-2 bg-[#E8DFD5] rounded-sm mt-1"></div>
              </div>
              <span className="text-xs text-[#8C8A79]">Width + Curve</span>
            </div>
          </div>
        </div>

        <div className="panel absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-2.5 glass-panel-dark rounded-full shadow-2xl anim-float-reverse z-20">
          <div className="w-4 h-4 rounded-full bg-[#E8DFD5] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform duration-200 cursor-pointer"></div>
          <div className="w-4 h-4 rounded-full bg-[#D4C7B8] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform duration-200 cursor-pointer"></div>
          <div className="w-4 h-4 rounded-full bg-[#B87A5D] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform duration-200 cursor-pointer"></div>
          <div className="w-4 h-4 rounded-full bg-[#8C8A79] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform duration-200 cursor-pointer"></div>
          <div className="w-4 h-4 rounded-full bg-[#6B5C52] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform duration-200 cursor-pointer"></div>
          <div className="w-4 h-4 rounded-full bg-[#201A17] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform duration-200 cursor-pointer"></div>
        </div>

        <div className="panel absolute bottom-[22%] right-[12%] glass-panel rounded-xl p-4 flex flex-col gap-1.5 anim-float-delayed cursor-default">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#8C8A79] text-sm">o</span>
            <span className="text-xs uppercase tracking-wider text-[#7A6F68]">Tone</span>
          </div>
          <div className="flex items-end justify-between gap-5">
            <span className="text-lg font-editorial tracking-tight text-[#201A17] leading-none">Soft Autumn</span>
            <span className="text-xs text-[#B87A5D] bg-[#B87A5D]/10 px-2 py-0.5 rounded-sm">Warm / Muted</span>
          </div>
        </div>

        <div className="panel absolute top-[68%] left-[10%] glass-panel rounded-xl p-4 flex flex-col gap-3 anim-float cursor-default">
          <div className="flex items-center justify-between gap-8 mb-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[#8C8A79] text-sm">*</span>
              <span className="text-xs uppercase tracking-wider text-[#7A6F68]">Presence</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#8C8A79] rounded-full anim-pulse-soft"></div>
              <div className="w-1.5 h-1.5 bg-[#D4C7B8] rounded-full anim-pulse-soft" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 bg-[#F9F6F0]/80 border border-[#D4C7B8]/50 rounded-md text-xs tracking-wide text-[#201A17] shadow-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#B87A5D]"></div>
              Romantic
            </div>
            <span className="text-[#D4C7B8] text-xs">+</span>
            <div className="px-3 py-1.5 bg-[#F9F6F0]/80 border border-[#D4C7B8]/50 rounded-md text-xs tracking-wide text-[#201A17] shadow-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#8C8A79]"></div>
              Natural
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
