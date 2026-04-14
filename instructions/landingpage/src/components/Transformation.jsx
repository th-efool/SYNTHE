export default function Transformation() {
  return (
    <section id="transformation" className="py-20 bg-[#1A1512] text-[#F9F6F0] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2A231F] via-[#1A1512] to-[#120E0C]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="reveal-up text-4xl lg:text-6xl font-editorial tracking-tight mb-4 text-[#F9F6F0]" style={{ transitionDelay: '0s' }}>
            When it works.
          </h2>
          <p className="reveal-up text-base text-[#D4C7B8] max-w-xl mx-auto leading-[1.8]" style={{ transitionDelay: '0.1s' }}>
            Watch the shift from clothes that just sit there, to shapes that naturally hold the frame and enhance the skin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          <div className="reveal-up relative rounded-3xl overflow-hidden bg-[#120E0C] group aspect-[4/5] lg:aspect-square" style={{ transitionDelay: '0.2s' }}>
            <img src="https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=800&auto=format&fit=crop" alt="Unaligned styling" className="absolute inset-0 w-full h-full object-cover grayscale-[40%] opacity-60 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C]/95 via-[#1A1512]/30 to-transparent"></div>
            
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-[#1A1512]/80 backdrop-blur-md rounded-full text-xs uppercase tracking-wider text-[#A69B91] border border-[#3A312C]/60 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">Unconsidered</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
              <div className="p-4 rounded-xl bg-[#1A1512]/70 backdrop-blur-md border border-[#3A312C]/60 flex items-start gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <iconify-icon icon="solar:close-square-linear" className="text-[#8C8A79] mt-1" strokeWidth="1.5"></iconify-icon>
                <p className="text-sm text-[#D4C7B8] leading-[1.6]">The shape feels stiff and disconnected from natural lines.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1A1512]/70 backdrop-blur-md border border-[#3A312C]/60 flex items-start gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <iconify-icon icon="solar:close-square-linear" className="text-[#8C8A79] mt-1" strokeWidth="1.5"></iconify-icon>
                <p className="text-sm text-[#D4C7B8] leading-[1.6]">Color sits flat and creates harsh, unnatural contrast.</p>
              </div>
            </div>
          </div>

          <div className="reveal-up relative rounded-3xl overflow-hidden bg-[#2A231F] group aspect-[4/5] lg:aspect-square border border-[#D4C7B8]/20 shadow-2xl" style={{ transitionDelay: '0.3s' }}>
            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop" alt="Resolved styling" className="absolute inset-0 w-full h-full object-cover transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C]/95 via-[#2A231F]/30 to-transparent"></div>
            
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-[#F9F6F0]/15 backdrop-blur-md rounded-full text-xs uppercase tracking-wider text-[#F9F6F0] border border-[#F9F6F0]/30 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">In Harmony</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
              <div className="p-4 rounded-xl bg-[#F9F6F0]/10 backdrop-blur-lg border border-[#F9F6F0]/20 flex flex-col gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#D4C7B8]">Structure</span>
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#F9F6F0]" strokeWidth="1.5"></iconify-icon>
                </div>
                <p className="text-sm text-[#F9F6F0] leading-[1.6]">The soft, natural silhouette drapes and holds together beautifully.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F6F0]/10 backdrop-blur-lg border border-[#F9F6F0]/20 flex flex-col gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#D4C7B8]">Tone &amp; Presence</span>
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#F9F6F0]" strokeWidth="1.5"></iconify-icon>
                </div>
                <p className="text-sm text-[#F9F6F0] leading-[1.6]">Warm, muted colors work with the skin. Everything reads as one tactile look.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}