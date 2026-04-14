export default function Approach() {
  return (
    <section id="discovery" className="py-16 bg-[#FCF9F6] border-t border-[#D4C7B8]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="reveal-up text-xs tracking-wider text-[#7A6F68] uppercase block mb-4" style={{ transitionDelay: '0s' }}>The Approach</span>
          <h2 className="reveal-up text-4xl lg:text-5xl font-editorial tracking-tight text-[#201A17] mb-4" style={{ transitionDelay: '0.1s' }}>
            Three systems. One direction.
          </h2>
          <p className="reveal-up text-base text-[#7A6F68] max-w-lg leading-[1.8]" style={{ transitionDelay: '0.2s' }}>
            Based on established frameworks in body geometry, color theory, and visual identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          <div className="reveal-up group relative flex flex-col p-5 lg:p-6 rounded-3xl bg-[#F9F6F0] bg-gradient-to-b from-white/60 to-transparent border border-[#D4C7B8]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_32px_-8px_rgba(58,49,44,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_16px_48px_-12px_rgba(58,49,44,0.08)] transition-all duration-500" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-[#8C8A79] font-medium">Body Geometry System</span>
              <span className="text-lg text-[#8C8A79]">⌬</span>
            </div>
            <div className="aspect-[4/3]  w-full mb-5 relative rounded-xl overflow-hidden bg-[#F2EFE9] border border-[#D4C7B8]/60 ">
              <img src="/kibbietype.png" alt="Body Geometry" className="w-full h-full object-cover grayscale-[0%] opacity-100 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <h3 className="text-3xl font-editorial tracking-tight text-[#201A17] mt-1 mb-0">Kibbe Body Type</h3>
            <div className="w-[50px] h-px bg-[#D4C7B8] my-4 opacity-70"></div>
            <p className="text-sm text-[#7A6F68] leading-[1.8]">
              A system that defines how fabric interacts with your frame — balancing structure, width, and curve.
            </p>
          </div>

          <div className="reveal-up group relative flex flex-col p-5 lg:p-6 rounded-3xl bg-[#F9F6F0] bg-gradient-to-b from-white/60 to-transparent border border-[#D4C7B8]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_32px_-8px_rgba(58,49,44,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_16px_48px_-12px_rgba(58,49,44,0.08)] transition-all duration-500" style={{ transitionDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-[#8C8A79] font-medium">Color Harmony System</span>
              <span className="text-lg text-[#8C8A79]">◉</span>
            </div>
            <div className="w-full mb-5  relative rounded-xl overflow-hidden bg-[#F2EFE9] border border-[#D4C7B8]/60">
              <img src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60b9022d327540475afd2b49_Twelve%20Seaosons%20Colour%20Analysis.webp" alt="Seasonal Color" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
              {/* <div className="absolute scale-[0.9] md:scale-[0.85] bottom-2 left-4 right-4 flex justify-between gap-1 p-2 bg-[#F9F6F0]/80 backdrop-blur-md rounded-lg border border-[#D4C7B8]/50 shadow-sm">
                <div className="w-full h-8 rounded-md bg-[#E8DFD5] shadow-inner"></div>
                <div className="w-full h-8 rounded-md bg-[#D4C7B8] shadow-inner"></div>
                <div className="w-full h-8 rounded-md bg-[#B87A5D] shadow-inner"></div>
                <div className="w-full h-8 rounded-md bg-[#8C8A79] shadow-inner"></div>
                <div className="w-full h-8 rounded-md bg-[#6B5C52] shadow-inner"></div>
              </div> */}
            </div>
            <h3 className="text-3xl font-editorial tracking-tight text-[#201A17] mt-1 mb-0">Seasonal Color</h3>
            <div className="w-[50px] h-px bg-[#D4C7B8] my-4 opacity-70"></div>
            <p className="text-sm text-[#7A6F68] leading-[1.8]">
              Maps how color behaves against your skin — measuring depth, temperature, and defining overall contrast.
            </p>
          </div>

          <div className="reveal-up group relative flex flex-col p-5 lg:p-6 rounded-3xl bg-[#F9F6F0] bg-gradient-to-b from-white/60 to-transparent border border-[#D4C7B8]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_32px_-8px_rgba(58,49,44,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_16px_48px_-12px_rgba(58,49,44,0.08)] transition-all duration-500" style={{ transitionDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-[#8C8A79] font-medium">Style Identity System</span>
              <span className="text-lg text-[#8C8A79]">✦</span>
            </div>
            <div className="aspect-[4/3] w-full mb-5 relative rounded-xl overflow-hidden bg-[#F2EFE9] border border-[#D4C7B8]/60">
              <img src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60f802b8a0b822634c101106_Style%20Essences%20Spectrum%20Book.webp" alt="Style Essences" className="w-full h-full object-contain object-center opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
              {/* <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 bg-[#F9F6F0]/90 backdrop-blur-sm border border-white/30 rounded-md text-xs uppercase tracking-wider text-[#201A17]">Natural</span>
                <span className="px-2.5 py-1 bg-[#F9F6F0]/90 backdrop-blur-sm border border-white/30 rounded-md text-xs uppercase tracking-wider text-[#201A17]">Romantic</span>
              </div> */}
            </div>
            <h3 className="text-3xl font-editorial tracking-tight text-[#201A17] mt-1 mb-0">Kitchener Essence</h3>
            <div className="w-[50px] h-px bg-[#D4C7B8] my-4 opacity-70"></div>
            <p className="text-sm text-[#7A6F68] leading-[1.8]">
              Captures how you visually read — the subtle blend of traits that ultimately shapes your overall presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
