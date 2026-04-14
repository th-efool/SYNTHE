export default function Commerce() {
  return (
    <section className="py-20 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="max-w-2xl">
            <h2 className="reveal-up text-4xl lg:text-5xl font-editorial tracking-tight text-[#201A17] mb-4" style={{ transitionDelay: '0s' }}>
              A grounded wardrobe.
            </h2>
            <p className="reveal-up text-base text-[#7A6F68] leading-[1.8]" style={{ transitionDelay: '0.1s' }}>
              Every piece is chosen because it works with your proportions, matches your tone, and sits naturally on your frame.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="reveal-up hover-scale-card group cursor-pointer flex flex-col" style={{ transitionDelay: '0.2s' }}>
            <div className="aspect-[3/4] bg-[#F2EFE9] rounded-2xl mb-4 relative overflow-hidden border border-[#D4C7B8]/50 shadow-[0_8px_32px_-8px_rgba(58,49,44,0.06)]">
              <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop" alt="Fluid Tailoring" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col px-1">
              <h4 className="text-2xl font-editorial text-[#201A17] mb-4">Fluid Tailoring</h4>
              <div className="flex flex-col gap-3 mt-auto border-t border-[#D4C7B8]/60 pt-4">
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-[#8C8A79] uppercase">Shape</span>
                  <span className="text-[#2A231F] font-medium">Natural drape</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-[#8C8A79] uppercase">Tone</span>
                  <span className="text-[#2A231F] font-medium">Muted warmth</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-[#8C8A79] uppercase">Presence</span>
                  <span className="text-[#2A231F] font-medium">Soft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-up hover-scale-card group cursor-pointer flex flex-col" style={{ transitionDelay: '0.3s' }}>
            <div className="aspect-[3/4] bg-[#F2EFE9] rounded-2xl mb-4 relative overflow-hidden border border-[#D4C7B8]/50 shadow-[0_8px_32px_-8px_rgba(58,49,44,0.06)]">
              <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2017411/rs_765x1024-170511085828-765.Bella-Hadid-Street-Style.jl.051117.jpg" alt="Textured Edge" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col px-1">
              <h4 className="text-2xl font-editorial text-[#201A17] mb-4">Textured Edge</h4>
              <div className="flex flex-col gap-3 mt-auto border-t border-[#D4C7B8]/60 pt-4">
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-[#8C8A79] uppercase">Shape</span>
                  <span className="text-[#2A231F] font-medium">Clean lines</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-[#8C8A79] uppercase">Tone</span>
                  <span className="text-[#2A231F] font-medium">Earthy neutral</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-[#8C8A79] uppercase">Presence</span>
                  <span className="text-[#2A231F] font-medium">Sharp</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-up hover-scale-card group cursor-pointer flex flex-col" style={{ transitionDelay: '0.4s' }}>
            <div className="aspect-[3/4] bg-[#F2EFE9] rounded-2xl mb-4 relative overflow-hidden border border-[#D4C7B8]/50 shadow-[0_8px_32px_-8px_rgba(58,49,44,0.06)]">
              <img src="https://ourfashiongarden.com/wp-content/uploads/2023/04/sn-formal3.jpeg" alt="Tactile Depth" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col px-1">
              <h4 className="text-2xl font-editorial text-[#201A17] mb-4">Tactile Depth</h4>
              <div className="flex flex-col gap-3 mt-auto border-t border-[#D4C7B8]/60 pt-4">
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-[#8C8A79] uppercase">Shape</span>
                  <span className="text-[#2A231F] font-medium">Relaxed fit</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-[#8C8A79] uppercase">Tone</span>
                  <span className="text-[#2A231F] font-medium">Deep bronze</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-[#8C8A79] uppercase">Presence</span>
                  <span className="text-[#2A231F] font-medium">Effortless</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
