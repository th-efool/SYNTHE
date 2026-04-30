"use client";

import React, { useEffect, useMemo, useState } from "react";

type Layer = {
  key: string;
  title: string;
  result: string;
  confidence: number;
  note: string;
  status: "resolved" | "refinable";
};

type UserProfile = {
  kibbe: string;
  season: string;
  essence: string[];
  descriptors: string[];
  confidence: { kibbe: number; color: number; essence: number };
  layers: Layer[];
  palette: string[];
};

const userProfile: UserProfile = {
  kibbe: "Soft Natural",
  season: "Soft Autumn",
  essence: ["Natural", "Romantic"],
  descriptors: ["Warm", "Muted", "Soft Structure", "Natural Presence"],
  confidence: { kibbe: 0.82, color: 0.76, essence: 0.71 },
  layers: [
    {
      key: "structure",
      title: "Structure",
      result: "Soft Natural",
      confidence: 0.82,
      note: "Width + softness, relaxed drape over rigid tailoring",
      status: "resolved",
    },
    {
      key: "color",
      title: "Color",
      result: "Soft Autumn",
      confidence: 0.76,
      note: "Warm, muted tones with low-medium contrast",
      status: "refinable",
    },
    {
      key: "presence",
      title: "Presence",
      result: "Natural + Romantic",
      confidence: 0.71,
      note: "Soft, approachable presence with gentle femininity",
      status: "refinable",
    },
  ],
  palette: [
    "#A3A380", "#7C8C4A", "#C97B5A", "#D2A679", "#E6B8A2", "#5E6B3C", "#B8A58A", "#C89B3C", "#8B7355", "#D4B896", "#6B7C5E", "#B8956A",
  ],
};

function SectionReveal({ children, index }: { children: React.ReactNode; index: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), index * 80);
    return () => window.clearTimeout(t);
  }, [index]);

  return (
    <section
      className={`transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
    >
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2.5 font-serif text-[10px] uppercase tracking-[0.18em] text-[#9b8e7e]">{children}</p>;
}

function Divider() {
  return <div className="h-px bg-[#d9d0c5]" />;
}

function RetakeAnalysisModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-md bg-[#f7f3ee] p-5 shadow-xl animate-[modalIn_220ms_ease-out_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-serif text-xl text-[#2f2a24]">Retake Analysis</h3>
        <p className="mt-1 text-sm text-[#5f554b]">Choose how you want to continue your profile refinement.</p>
        <div className="mt-4 flex flex-col gap-2.5">
          <button className="rounded-sm bg-[#c97b5a] px-4 py-2 text-left text-sm font-medium text-white transition hover:brightness-95">Retake Quiz</button>
          <button className="rounded-sm border border-[#c97b5a] bg-[#f0e5dd] px-4 py-2 text-left text-sm font-medium text-[#744f3f] transition hover:bg-[#ead9cf]">Retake AI Image Analysis</button>
          <button className="rounded-sm border border-[#d9d0c5] px-4 py-2 text-left text-sm text-[#5a5046] transition hover:bg-[#efe8de]">Book Professional Analysis</button>
        </div>
        <button className="mt-4 text-xs uppercase tracking-[0.12em] text-[#9b8e7e]" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function TypingPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analysisState] = useState({ phase: "color", progress: 0.76, lastUpdated: "2 min ago" });
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const tick = window.setTimeout(() => setProgressValue(analysisState.progress), 80);
    return () => window.clearTimeout(tick);
  }, [analysisState.progress]);

  const currentPhase = useMemo(() => `${analysisState.phase.charAt(0).toUpperCase()}${analysisState.phase.slice(1)}`, [analysisState.phase]);

  const sections = [
    <div key="h" className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_2fr]">
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80" alt="Profile" className="block aspect-[3/4] w-full rounded object-cover transition-transform duration-300 hover:scale-[1.03]" />
        <div className="absolute inset-x-0 bottom-0 rounded-b bg-gradient-to-t from-[#2f2a24]/55 to-transparent px-4 pb-4 pt-6">
          <p className="font-serif text-[13px] tracking-[0.08em] text-[#f7f3ee]">Soft Autumn · Soft Natural</p>
        </div>
      </div>
      <div className="flex flex-col gap-[17px] pt-1">
        <div>
          <SectionLabel>Personal Style & Color Analysis</SectionLabel>
          <h1 className="m-0 font-serif text-[28px] font-normal leading-[1.15] text-[#2f2a24] sm:text-[34px] lg:text-[38px]">Your Profile</h1>
          <p className="m-0 mt-1 font-serif text-sm italic text-[#7a6e62]">{userProfile.descriptors.join(" · ")}</p>
        </div>
        <p className="m-0 max-w-[480px] text-[13px] leading-[1.7] text-[#4f463e] sm:text-sm">Your profile combines relaxed structure with warm muted color harmony and a soft natural presence. You shine in earthy, golden, and nature-inspired tones with effortless, approachable styling.</p>
        <div>
          <Divider />
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-0">
            {[{ label: "Kibbe Type", value: "Soft Natural", conf: userProfile.confidence.kibbe }, { label: "Color Season", value: "Soft Autumn", conf: userProfile.confidence.color }, { label: "Essence", value: "Natural + Romantic", conf: userProfile.confidence.essence }].map((item) => (
              <div key={item.label} className="sm:pr-4">
                <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-[#9b8e7e]">{item.label}</p>
                <p className="mb-0.5 text-[13px] font-semibold text-[#2f2a24]">{item.value}</p>
                <p className="text-[11px] text-[#9b8e7e]">{Math.round(item.conf * 100)}% confidence</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-sm bg-[#c97b5a] px-4 py-2 font-serif text-xs tracking-[0.06em] text-white">Refine Analysis</button>
          <button className="rounded-sm border border-[#d9d0c5] px-4 py-2 text-xs tracking-[0.06em] text-[#5a5046]" onClick={() => setIsModalOpen(true)}>Retake Analysis</button>
        </div>
      </div>
    </div>,
    <div key="c" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:gap-5">{["In Your Colors", "Out of Your Colors"].map((t, idx) => <div key={t}><div className="relative overflow-hidden rounded"><img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80" alt={t} className="block aspect-[4/3] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.03]" /><div className={`absolute left-2.5 top-2.5 rounded px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[#f7f3ee] ${idx===0?"bg-[#5E6B3C]":"bg-[#2f2a24]"}`}>{t}</div></div><p className="mt-2 text-[11px] leading-6 text-[#5f554b] sm:text-xs">{idx===0?"Skin reads clear, warm, and radiant. Features appear balanced and harmonious.":"Shadows deepen, contrast breaks harmony. Skin looks duller, features less integrated."}</p></div>)}</div>,
    <div key="a"><SectionLabel>Analysis Layers</SectionLabel><div>{userProfile.layers.map((layer, i)=><div key={layer.key}>{i>0&&<Divider/>}<div className="grid grid-cols-[1fr] gap-3 py-3 sm:grid-cols-[120px_1fr_80px_70px] sm:items-center sm:gap-4"><div><p className="mb-0.5 font-serif text-[10px] uppercase tracking-[0.1em] text-[#9b8e7e]">{layer.title}</p><p className="font-serif text-[15px] font-semibold text-[#2f2a24]">{layer.result}</p></div><p className="text-[13px] leading-6 text-[#5f554b]">{layer.note}</p><div className="text-left sm:text-right"><p className="mb-1 text-[11px] text-[#9b8e7e]">{Math.round(layer.confidence*100)}%</p><div className="h-[3px] overflow-hidden rounded bg-[#e8e3dc]"><div className="h-full rounded bg-[#c97b5a] transition-all duration-700 ease-out" style={{width:`${progressValue*100}%`}} /></div></div><div className="text-left sm:text-right"><span className={`rounded border px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] ${layer.status==="resolved"?"border-[#5E6B3C] text-[#5E6B3C]":"border-[#c97b5a] text-[#c97b5a]"}`}>{layer.status}</span></div></div></div>)}</div></div>,
    <div key="hair"><SectionLabel>Hairstyle Recommendations</SectionLabel><p className="mb-3 text-xs text-[#9b8e7e]">Aim for soft texture, natural waves, and light layers around the face.</p><div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">{[{img:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",title:"Soft Layers with Face Framing",note:"Enhances natural width balance and adds movement to soft bone structure."},{img:"https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=400&q=80",title:"Long Wavy Layers",note:"Maintains length while adding natural texture aligned with Soft Natural essence."},{img:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",title:"Curtain Bangs + Layers",note:"Softens the forehead and highlights the eyes — ideal for oval with soft angles."},{img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",title:"Shoulder Length Lob",note:"Creates shape and frames the face without overwhelming soft natural line."}].map(s=><div key={s.title} className="min-w-[180px] snap-start"><img src={s.img} alt={s.title} className="block aspect-[3/4] w-full rounded object-cover object-top transition-transform duration-300 hover:scale-[1.03]"/><p className="mt-2 mb-1 font-serif text-[13px] font-semibold text-[#2f2a24]">{s.title}</p><p className="text-[11px] leading-5 text-[#5f554b]">{s.note}</p></div>)}</div></div>,
    <div key="sg" className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-9"><div><SectionLabel>Skin Analysis</SectionLabel><ul className="flex flex-col gap-1.5">{["Warm, even skin tone with a natural glow","Minor texture on forehead and around nose — normal","Very light freckles and natural brightness","Overall healthy, low-inflammation baseline"].map(o=><li key={o} className="flex gap-2.5 text-[13px] leading-6 text-[#4f463e]"><span className="text-[#c97b5a]">·</span>{o}</li>)}</ul></div><div><SectionLabel>Simple Care Routine</SectionLabel><div className="flex flex-col gap-2">{[{ step: "Cleanser", detail: "Gentle, hydrating — avoid stripping foams" },{ step: "Treatment", detail: "Niacinamide or Vitamin C (AM) for glow and even tone" },{ step: "Moisturizer", detail: "Lightweight, nourishing — warm skin glow" },{ step: "Sunscreen", detail: "SPF 30+ Broad Spectrum daily, no exceptions" }].map(r=><div key={r.step} className="grid grid-cols-[90px_1fr] gap-2.5"><p className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9b8e7e]">{r.step}</p><p className="text-[13px] leading-6 text-[#4f463e]">{r.detail}</p></div>)}</div></div></div>,
    <div key="q"><SectionLabel>Quick Style Guide</SectionLabel><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#5E6B3C]">Best Traits to Highlight</p><ul className="flex flex-col gap-1.5">{["Soft textures — knit, linen, cotton, suede","Warm muted tones — earth, sage, camel","Relaxed, feminine silhouettes with natural drape"].map(b=><li key={b} className="flex gap-2 text-xs leading-5 text-[#4f463e]"><span className="text-[#5E6B3C]">✓</span>{b}</li>)}</ul></div><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#c97b5a]">Avoid</p><ul className="flex flex-col gap-1.5">{["Cool icy tones — stark white, black, cobalt","Overly bright or saturated colors","Sharp tailoring and heavy structure"].map(a=><li key={a} className="flex gap-2 text-xs leading-5 text-[#4f463e]"><span className="text-[#c97b5a]">✕</span>{a}</li>)}</ul></div><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7C8C4A]">Style Direction</p><ul className="flex flex-col gap-1.5">{["Layer soft textures for dimension","Add warmth with gold and bronze jewelry","Keep everything harmonious and grounded"].map(t=><li key={t} className="flex gap-2 text-xs leading-5 text-[#4f463e]"><span className="text-[#7C8C4A]">→</span>{t}</li>)}</ul></div></div></div>
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ee] px-4 pb-16 pt-9 text-[#2f2a24] sm:px-8 lg:px-10">
      <style>{`@keyframes modalIn{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}`}</style>
      <div className="mx-auto flex max-w-[1100px] flex-col gap-0">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <SectionReveal index={index}>{section}</SectionReveal>
            {index < sections.length - 1 && <><div className="h-6 sm:h-7" /><Divider /><div className="h-5 sm:h-6" /></>}
          </React.Fragment>
        ))}
        <div className="mt-4 flex flex-wrap justify-between gap-2 border-t border-[#d9d0c5] py-2 text-[11px] text-[#9b8e7e]">
          <span>Currently refining: {currentPhase}</span>
          <span>Last updated: {analysisState.lastUpdated}</span>
          <span>Iterations: 5</span>
        </div>
      </div>
      <RetakeAnalysisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

export default function TypingPage() {
  return <TypingPageContent />;
}
