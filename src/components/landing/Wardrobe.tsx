export default function Wardrobe() {
  return (
    <section id="wardrobe" className="py-20 bg-[#FCF9F6] relative border-b border-[#D4C7B8]/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="w-full lg:w-4/12 flex flex-col">
            <div>
              <h2 className="reveal-up text-4xl lg:text-5xl font-editorial tracking-tight text-[#201A17] mb-4" style={{ transitionDelay: "0s" }}>
                Applied to your<br /><span className="italic text-[#B87A5D]">wardrobe.</span>
              </h2>
              <p className="reveal-up text-base text-[#7A6F68] leading-[1.8]" style={{ transitionDelay: "0.1s" }}>
                Not more options. Just the right ones - selected based on your structure, tone, and presence.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-8/12 flex flex-col">
            <div className="reveal-up mb-8 flex items-center gap-3 border-b border-[#D4C7B8]/40 pb-3" style={{ transitionDelay: "0.2s" }}>
              <div className="w-1.5 h-1.5 bg-[#B87A5D] rounded-full anim-pulse-soft"></div>
              <span className="text-xs uppercase tracking-wider text-[#7A6F68]">
                Based on your profile: <span className="font-medium text-[#201A17]">Soft Natural · Soft Autumn · Romantic/Natural</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="reveal-up hover-scale-card group cursor-pointer flex flex-col relative" style={{ transitionDelay: "0.3s" }}>
                <div className="aspect-[3/4] bg-[#F2EFE9] rounded-2xl mb-3 relative overflow-hidden border border-[#D4C7B8]/40 shadow-[0_8px_32px_-8px_rgba(58,49,44,0.04)]">
                  <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" alt="Soft Linen Jacket" className="card-image w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#201A17]/[0.02] mix-blend-multiply pointer-events-none"></div>
                  <div className="card-light"></div>
                </div>
                <h4 className="text-shift text-xl font-editorial tracking-tight text-[#201A17] mb-2">Soft Linen Jacket</h4>
                <ul className="flex flex-col gap-1 text-xs text-[#7A6F68] tracking-wide mb-2">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4C7B8]"></div> Natural drape</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4C7B8]"></div> Warm neutral</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4C7B8]"></div> Relaxed presence</li>
                </ul>
                <div className="text-shift text-xs uppercase tracking-wider text-[#B87A5D] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                  View piece -&gt;
                </div>
              </div>

              <div className="reveal-up hover-scale-card group cursor-pointer flex flex-col relative" style={{ transitionDelay: "0.4s" }}>
                <div className="aspect-[4/5] bg-[#F2EFE9] rounded-2xl mb-3 relative overflow-hidden border border-[#D4C7B8]/40 shadow-[0_8px_32px_-8px_rgba(58,49,44,0.04)]">
                  <img src="https://cdn-images.farfetch-contents.com/19/80/63/95/19806395_44431071_1000.jpg" alt="Draped Silk Blouse" className="card-image w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#201A17]/[0.02] mix-blend-multiply pointer-events-none"></div>
                  <div className="card-light"></div>
                </div>
                <h4 className="text-shift text-xl font-editorial tracking-tight text-[#201A17] mb-2">Draped Silk Blouse</h4>
                <ul className="flex flex-col gap-1 text-xs text-[#7A6F68] tracking-wide mb-2">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4C7B8]"></div> Soft width</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4C7B8]"></div> Matte finish</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4C7B8]"></div> Romantic essence</li>
                </ul>
                <div className="text-shift text-xs uppercase tracking-wider text-[#B87A5D] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                  View piece -&gt;
                </div>
              </div>

              <div className="reveal-up hover-scale-card group cursor-pointer flex flex-col relative" style={{ transitionDelay: "0.5s" }}>
                <div className="aspect-[4/5] bg-[#F2EFE9] rounded-2xl mb-3 relative overflow-hidden border border-[#D4C7B8]/40 shadow-[0_8px_32px_-8px_rgba(58,49,44,0.04)]">
                  <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop" alt="Tapered Wool Trousers" className="card-image w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#201A17]/[0.02] mix-blend-multiply pointer-events-none"></div>
                  <div className="card-light"></div>
                </div>
                <h4 className="text-shift text-xl font-editorial tracking-tight text-[#201A17] mb-2">Tapered Wool Trousers</h4>
                <ul className="flex flex-col gap-1 text-xs text-[#7A6F68] tracking-wide mb-2">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4C7B8]"></div> Unstructured tailoring</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4C7B8]"></div> Earthy depth</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4C7B8]"></div> Grounded presence</li>
                </ul>
                <div className="text-shift text-xs uppercase tracking-wider text-[#B87A5D] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                  View piece -&gt;
                </div>
              </div>
            </div>

            <div className="reveal-up mt-10 pt-8 border-t border-[#D4C7B8]/40 text-center lg:text-left" style={{ transitionDelay: "0.6s" }}>
              <p className="text-sm text-[#8C8A79] italic font-editorial tracking-wide">
                Every piece selected to sit correctly on your frame, hold your color, match how you naturally come across.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


