export default function CTA() {
  return (
    <section className="py-24 bg-[#FCF9F6] relative overflow-hidden border-t border-[#D4C7B8]/40 shadow-[inset_0_16px_48px_-12px_rgba(58,49,44,0.04)]">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <iconify-icon icon="solar:body-shape-linear" className="reveal-up text-4xl text-[#D4C7B8] mb-5" strokeWidth="1.5" style={{ transitionDelay: '0s' }}></iconify-icon>
        <h2 className="reveal-up text-5xl lg:text-7xl font-editorial tracking-tight text-[#201A17] mb-4" style={{ transitionDelay: '0.1s' }}>
          Find your <span className="italic text-[#B87A5D]">direction.</span>
        </h2>
        
        <p className="reveal-up text-base text-[#7A6F68] mb-8 max-w-xl leading-[1.8]" style={{ transitionDelay: '0.2s' }}>
          Step away from the noise.<br />
          Start building a wardrobe that naturally aligns with your frame and tone.
        </p>
        
        <button className="reveal-up bg-[#201A17] text-[#F9F6F0] rounded-full px-10 py-4 text-sm tracking-wide hover:bg-[#3A312C] transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3" style={{ transitionDelay: '0.3s' }}>
          Start your profile
          <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
        </button>
      </div>
    </section>
  );
}