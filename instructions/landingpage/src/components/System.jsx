export default function System() {
  return (
    <section id="system" className="py-20 bg-mesh border-y border-[#D4C7B8]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="reveal-up text-4xl lg:text-5xl font-editorial tracking-tight text-[#201A17] mb-4" style={{ transitionDelay: '0s' }}>
            Where it aligns.
          </h2>
          <p className="reveal-up text-base text-[#7A6F68] max-w-md mx-auto leading-[1.8]" style={{ transitionDelay: '0.1s' }}>
            Structure, color, and presence resolve into a single visual direction.
          </p>
        </div>

        <div className="reveal-up bg-[#F9F6F0]/95 backdrop-blur-xl border border-[#D4C7B8]/60 rounded-[2.5rem] p-5 lg:p-10 shadow-[0_16px_48px_-12px_rgba(58,49,44,0.08)] flex flex-col lg:flex-row gap-8 lg:gap-10 relative" style={{ transitionDelay: '0.2s' }}>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D4C7B8]/60 rounded-full mb-4 shadow-sm">
                <div className="w-1.5 h-1.5 bg-[#201A17] rounded-full anim-pulse-soft"></div>
                <span className="text-xs font-medium uppercase tracking-wider text-[#201A17]">Your Profile</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-editorial tracking-[0.01em] text-[#201A17] flex items-center gap-3 my-4">
                Soft Natural Autumn
              </h3>
            </div>
            
            <div className="flex flex-col gap-3 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[1.5px] before:bg-[#D4C7B8]">
              
              <div className="reveal-up relative flex items-start gap-5" style={{ transitionDelay: '0.3s' }}>
                <div className="w-6 h-6 rounded-full border border-[#D4C7B8]/80 bg-[#F9F6F0] flex items-center justify-center z-10 relative mt-0.5 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#8C8A79]"></div>
                </div>
                <div className="bg-white/60 border border-[#D4C7B8]/50 px-4 py-2 rounded-xl flex-1 flex justify-between items-center backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(58,49,44,0.02)]">
                  <span className="text-xs font-medium tracking-wide text-[#7A6F68]">Kibbe</span>
                  <span className="text-sm font-editorial tracking-wide text-[#201A17]">Soft Natural</span>
                </div>
              </div>
              
              <div className="reveal-up relative flex items-start gap-5" style={{ transitionDelay: '0.4s' }}>
                <div className="w-6 h-6 rounded-full border border-[#D4C7B8]/80 bg-[#F9F6F0] flex items-center justify-center z-10 relative mt-0.5 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#B87A5D]"></div>
                </div>
                <div className="bg-white/60 border border-[#D4C7B8]/50 px-4 py-2 rounded-xl flex-1 flex justify-between items-center backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(58,49,44,0.02)]">
                  <span className="text-xs font-medium tracking-wide text-[#7A6F68]">Season</span>
                  <span className="text-sm font-editorial tracking-wide text-[#201A17]">Soft Autumn</span>
                </div>
              </div>

              <div className="reveal-up relative flex items-start gap-5" style={{ transitionDelay: '0.5s' }}>
                <div className="w-6 h-6 rounded-full border border-[#D4C7B8]/80 bg-[#F9F6F0] flex items-center justify-center z-10 relative mt-0.5 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#D4C7B8]"></div>
                </div>
                <div className="bg-white/60 border border-[#D4C7B8]/50 px-4 py-2 rounded-xl flex-1 flex justify-between items-center backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(58,49,44,0.02)]">
                  <span className="text-xs font-medium tracking-wide text-[#7A6F68]">Essence</span>
                  <span className="text-sm font-editorial tracking-wide text-[#201A17]">Romantic + Natural</span>
                </div>
              </div>

            </div>

            <div className="reveal-up mt-10 pt-10 border-t border-[#D4C7B8]/80 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8" style={{ transitionDelay: '0.6s' }}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2A231F]">
                  <iconify-icon icon="solar:scissors-linear" className="text-sm text-[#8C8A79]"></iconify-icon>
                  Silhouette
                </div>
                <p className="text-sm text-[#2A231F] font-medium leading-[1.6]">Soft, unstructured drape</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2A231F]">
                  <iconify-icon icon="solar:dropper-linear" className="text-sm text-[#8C8A79]"></iconify-icon>
                  Color
                </div>
                <p className="text-sm text-[#2A231F] font-medium leading-[1.6]">Muted, warm palette</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2A231F]">
                  <iconify-icon icon="solar:star-fall-linear" className="text-sm text-[#8C8A79]"></iconify-icon>
                  Presence
                </div>
                <p className="text-sm text-[#2A231F] font-medium leading-[1.6]">Relaxed with softness</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12 relative flex gap-6 min-h-[500px]">
            <div className="reveal-up w-[58%] relative rounded-2xl overflow-hidden border border-[#D4C7B8]/60 shadow-[0_8px_32px_-8px_rgba(58,49,44,0.08)] group" style={{ transitionDelay: '0.3s' }}>
              <img src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=800&auto=format&fit=crop" alt="Aligned Outfit" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700" />
              
              <div className="absolute top-[30%] left-[10%] flex flex-col items-start z-10">
                <div className="w-2 h-2 rounded-full bg-white shadow-md relative before:absolute before:w-8 before:h-px before:bg-white before:top-1/2 before:-left-8"></div>
                <div className="mt-2 bg-[#F9F6F0]/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs tracking-wide text-[#201A17] shadow-lg border border-[#D4C7B8]/50">Relaxed shoulder line</div>
              </div>
              
              <div className="absolute bottom-[25%] right-[10%] flex flex-col items-end z-10">
                <div className="w-2 h-2 rounded-full bg-white shadow-md relative before:absolute before:w-8 before:h-px before:bg-white before:top-1/2 before:-right-8"></div>
                <div className="mt-2 bg-[#F9F6F0]/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs tracking-wide text-[#201A17] shadow-lg border border-[#D4C7B8]/50">Soft, tactile fabric</div>
              </div>
            </div>
            
            <div className="w-[42%] flex flex-col gap-6">
              <div className="reveal-up h-[40%] relative rounded-2xl overflow-hidden border border-[#D4C7B8]/60 shadow-[0_8px_32px_-8px_rgba(58,49,44,0.08)] group" style={{ transitionDelay: '0.4s' }}>
                <img
                  src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60b8d1e0040fe5f0d9ddf92e_Soft%20Autumn%20Title%20Image.webp"
                  alt="Fabric Detail"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#B87A5D]/10 mix-blend-color-burn"></div>
              </div>
              <div className="reveal-up flex-1 relative rounded-2xl overflow-hidden border border-[#D4C7B8]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),_0_8px_32px_-8px_rgba(58,49,44,0.06)] group" style={{ transitionDelay: '0.5s' }}>
                <img
                  src="https://cdn.shopify.com/s/files/1/0729/6214/6631/files/Gigi_Hadids_new_mum_makeup_routine_includes_an_8_foundation_480x480.webp?v=1731257629"
                  alt="Complete Alignment"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(184,122,93,0.1),transparent_70%)]"></div>
                <div className="relative z-10">
                  <iconify-icon icon="solar:check-read-linear" className="text-xl text-[#B87A5D] mb-3" strokeWidth="1.5"></iconify-icon>
                  <h4 className="text-lg font-editorial text-[#201A17] leading-tight tracking-tight">Complete Alignment</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}