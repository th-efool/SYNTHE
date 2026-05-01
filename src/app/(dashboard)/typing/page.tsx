"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

type Layer = {
  key: string;
  title: string;
  result: string;
  confidence: number;
  note: string;
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
    },
    {
      key: "color",
      title: "Color",
      result: "Soft Autumn",
      confidence: 0.76,
      note: "Warm, muted tones with low-medium contrast",
    },
    {
      key: "presence",
      title: "Presence",
      result: "Natural + Romantic",
      confidence: 0.71,
      note: "Soft, approachable presence with gentle femininity",
    },
  ],
  palette: [
    "#A3A380","#7C8C4A","#C97B5A","#D2A679",
    "#E6B8A2","#5E6B3C","#B8A58A","#C89B3C",
    "#8B7355","#D4B896","#6B7C5E","#B8956A",
  ],
};

/* ─── DIVIDER ─── */
function Divider() {
  return <div style={{ height: 1, background: "#d9d0c5", margin: "0" }} />;
}

/* ─── SECTION LABEL ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'Georgia', serif",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#9b8e7e",
      marginBottom: 12,
    }}>
      {children}
    </p>
  );
}

/* ─── PROFILE HEADER ─── */
function ProfileHeader({
  profile,
  onRetake,
  onStart,
  onRefine,
}: {
  profile: UserProfile;
  onRetake: () => void;
  onStart: () => void;
  onRefine: () => void;
}) {
  return (
    <section className="profile-header" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, alignItems: "start" }}>
      <div style={{ position: "relative" }}>
        <img className="hover-image"
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
          alt="Profile"
          style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block", borderRadius: 4 }}
        />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "linear-gradient(to top, rgba(47,42,36,0.55) 0%, transparent 60%)",
          padding: "24px 16px 16px", borderRadius: "0 0 4px 4px",
        }}>
          <p style={{ color: "#f7f3ee", fontFamily: "Georgia, serif", fontSize: 13, letterSpacing: "0.08em" }}>
            Soft Autumn · Soft Natural
          </p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 4 }}>
        <div>
          <SectionLabel>Personal Style & Color Analysis</SectionLabel>
          <h1 style={{
            fontFamily: "'Georgia', serif",
            fontSize: 38,
            fontWeight: 400,
            color: "#2f2a24",
            lineHeight: 1.15,
            margin: "0 0 6px",
          }}>
            Your Profile
          </h1>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#7a6e62", margin: 0 }}>
            {profile.descriptors.join(" · ")}
          </p>
        </div>

        <p style={{ fontSize: 14, color: "#4f463e", lineHeight: 1.7, margin: 0, maxWidth: 480 }}>
          Your profile combines relaxed structure with warm muted color harmony and a soft natural presence.
          You shine in earthy, golden, and nature-inspired tones with effortless, approachable styling.
        </p>

        <div>
          <Divider />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, marginTop: 12 }}>
            {[
              { label: "Kibbe Type", value: "Soft Natural", conf: profile.confidence.kibbe },
              { label: "Color Season", value: "Soft Autumn", conf: profile.confidence.color },
              { label: "Essence", value: "Natural + Romantic", conf: profile.confidence.essence },
            ].map((item, i) => (
              <div key={i} style={{ paddingRight: 20 }}>
                <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9b8e7e", margin: "0 0 3px" }}>
                  {item.label}
                </p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#2f2a24", margin: "0 0 2px" }}>{item.value}</p>
                <p style={{ fontSize: 11, color: "#9b8e7e", margin: 0 }}>{Math.round(item.conf * 100)}% confidence</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            className="hover-button"
            onClick={onStart}
            style={{
              background: "#2f2a24",
              color: "#fff",
              border: "none",
              borderRadius: 3,
              padding: "8px 18px",
              fontSize: 12,
              letterSpacing: "0.06em",
              cursor: "pointer",
              fontFamily: "Georgia, serif",
            }}
          >
            Start Flow
          </button>
          <button className="hover-button" style={{
            background: "#c97b5a", color: "#fff", border: "none",
            borderRadius: 3, padding: "8px 18px", fontSize: 12,
            letterSpacing: "0.06em", cursor: "pointer", fontFamily: "Georgia, serif",
          }} onClick={onRefine}>
            Refine Analysis
          </button>
          <button className="hover-button" onClick={onRetake} style={{
            background: "transparent", color: "#5a5046", border: "1px solid #d9d0c5",
            borderRadius: 3, padding: "8px 18px", fontSize: 12,
            letterSpacing: "0.06em", cursor: "pointer",
          }}>
            Retake Analysis
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── PROFILE SNAPSHOT (palette + rules) ─── */
function ProfileSnapshot({ profile }: { profile: UserProfile }) {
  const rules = [
    "Soft drape over rigid structure — avoid sharp tailoring",
    "Warm muted tones only — earth, sage, camel, terracotta",
    "Natural textured fabrics — linen, cotton, knit, suede",
    "Relaxed, approachable silhouettes — no boxy or stiff cuts",
  ];
  return (
    <section>
      <SectionLabel>Soft Autumn Palette</SectionLabel>
      <div className="profile-snapshot" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
            {profile.palette.map((c) => (
              <div key={c} style={{
                aspectRatio: "1", borderRadius: 2,
                backgroundColor: c, border: "1px solid rgba(0,0,0,0.06)",
              }} />
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#9b8e7e", marginTop: 8 }}>
            Warm · Muted · Low–Medium Contrast · Earth-rooted
          </p>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {rules.map((r) => (
            <li key={r} style={{ fontSize: 13, color: "#4f463e", lineHeight: 1.5, display: "flex", gap: 10 }}>
              <span style={{ color: "#c97b5a", flexShrink: 0, marginTop: 1 }}>—</span>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── COLOR COMPARISON ─── */
function ColorComparisonSection() {
  return (
    <section>
      <SectionLabel>Color Comparison</SectionLabel>
      <div className="color-comparison" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: 3 }}>
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
              alt="In your colors"
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: "top", display: "block", filter: "saturate(0.9) warmth(1.1)" }}
            />
            <div style={{
              position: "absolute", top: 10, left: 10,
              background: "#5E6B3C", color: "#f7f3ee",
              fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "3px 8px", borderRadius: 2,
            }}>
              In Your Colors
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#5f554b", marginTop: 8, lineHeight: 1.5 }}>
            Skin reads clear, warm, and radiant. Features appear balanced and harmonious.
          </p>
        </div>
        <div>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: 3 }}>
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
              alt="Out of your colors"
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: "top", display: "block", filter: "saturate(0.3) contrast(1.1) brightness(0.9)" }}
            />
            <div style={{
              position: "absolute", top: 10, left: 10,
              background: "#2f2a24", color: "#f7f3ee",
              fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "3px 8px", borderRadius: 2,
            }}>
              Out of Your Colors
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#5f554b", marginTop: 8, lineHeight: 1.5 }}>
            Shadows deepen, contrast breaks harmony. Skin looks duller, features less integrated.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── ANALYSIS LAYERS ─── */
function AnalysisLayers({ layers }: { layers: Layer[] }) {
  return (
    <section>
      <SectionLabel>Analysis Layers</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {layers.map((layer, i) => (
          <div key={layer.key}>
            {i > 0 && <Divider />}
            <div className="analysis-row" style={{
              display: "grid", gridTemplateColumns: "120px 1fr 80px 70px",
              gap: 20, alignItems: "center", padding: "14px 0", transition: "background 0.2s ease",
            }}>
              <div>
                <p style={{ fontFamily: "Georgia, serif", color: "#9b8e7e", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: 10 }}>
                  {layer.title}
                </p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: 15, fontWeight: 600, color: "#2f2a24", margin: 0 }}>
                  {layer.result}
                </p>
              </div>
              <p style={{ fontSize: 13, color: "#5f554b", margin: 0, lineHeight: 1.5 }}>{layer.note}</p>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: 11, color: "#9b8e7e", margin: "0 0 4px" }}>{Math.round(layer.confidence * 100)}%</p>
                <div style={{ height: 3, background: "#e8e3dc", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${layer.confidence * 100}%`, background: "#c97b5a", borderRadius: 2 }} />
                </div>
              </div>
              <div />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── HAIRSTYLE RECOMMENDATIONS ─── */
function HairstyleSection() {
  const styles = [
    {
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
      title: "Soft Layers with Face Framing",
      note: "Enhances natural width balance and adds movement to soft bone structure.",
    },
    {
      img: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=400&q=80",
      title: "Long Wavy Layers",
      note: "Maintains length while adding natural texture aligned with Soft Natural essence.",
    },
    {
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
      title: "Curtain Bangs + Layers",
      note: "Softens the forehead and highlights the eyes — ideal for oval with soft angles.",
    },
    {
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
      title: "Shoulder Length Lob",
      note: "Creates shape and frames the face without overwhelming soft natural line.",
    },
  ];

  return (
    <section>
      <SectionLabel>Hairstyle Recommendations</SectionLabel>
      <p style={{ fontSize: 12, color: "#9b8e7e", margin: "0 0 14px" }}>
        Aim for soft texture, natural waves, and light layers around the face.
      </p>
      <div className="hairstyle-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {styles.map((s) => (
          <div key={s.title}>
            <img
              src={s.img}
              alt={s.title}
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", borderRadius: 3, display: "block" }}
            />
            <p style={{ fontFamily: "Georgia, serif", fontSize: 13, fontWeight: 600, color: "#2f2a24", margin: "8px 0 3px" }}>
              {s.title}
            </p>
            <p style={{ fontSize: 11, color: "#5f554b", margin: 0, lineHeight: 1.5 }}>{s.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── SKIN ANALYSIS ─── */
function SkinAnalysisSection() {
  const observations = [
    "Warm, even skin tone with a natural glow",
    "Minor texture on forehead and around nose — normal",
    "Very light freckles and natural brightness",
    "Overall healthy, low-inflammation baseline",
  ];
  const routine = [
    { step: "Cleanser", detail: "Gentle, hydrating — avoid stripping foams" },
    { step: "Treatment", detail: "Niacinamide or Vitamin C (AM) for glow and even tone" },
    { step: "Moisturizer", detail: "Lightweight, nourishing — warm skin glow" },
    { step: "Sunscreen", detail: "SPF 30+ Broad Spectrum daily, no exceptions" },
  ];

  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
      <div>
        <SectionLabel>Skin Analysis</SectionLabel>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
          {observations.map((o) => (
            <li key={o} style={{ fontSize: 13, color: "#4f463e", display: "flex", gap: 10, lineHeight: 1.5 }}>
              <span style={{ color: "#c97b5a", flexShrink: 0 }}>·</span>
              {o}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SectionLabel>Simple Care Routine</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {routine.map((r) => (
            <div key={r.step} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 12 }}>
              <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9b8e7e", margin: 0, paddingTop: 2 }}>
                {r.step}
              </p>
              <p style={{ fontSize: 13, color: "#4f463e", margin: 0, lineHeight: 1.5 }}>{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GROOMING & DETAIL ─── */
function GroomingSection() {
  const tips = [
    "Keep brows softly defined — no harsh fills or sharp edges",
    "Brush upward for a lifted, open look; tint if sparse",
    "Lightly tidy, maintain natural fullness and arch",
    "Makeup direction: warm browns, terracotta, soft blush",
  ];

  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 180px", gap: 40, alignItems: "start" }}>
      <div>
        <SectionLabel>Grooming & Detail</SectionLabel>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
          {tips.map((t) => (
            <li key={t} style={{ fontSize: 13, color: "#4f463e", display: "flex", gap: 10, lineHeight: 1.5 }}>
              <span style={{ color: "#c97b5a", flexShrink: 0 }}>—</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&q=80"
          alt="Grooming reference"
          style={{ width: "100%", aspectRatio: "1", objectFit: "cover", objectPosition: "top", borderRadius: 3, display: "block" }}
        />
        <p style={{ fontSize: 10, color: "#9b8e7e", marginTop: 6 }}>Brow direction reference</p>
      </div>
    </section>
  );
}

/* ─── GLOW-UP PANEL ─── */
function GlowUpSection() {
  const improvements = [
    "Enhanced skin clarity with warm-toned skincare base",
    "Refined layering — soft texture adds dimension without volume",
    "Natural makeup: terracotta lips, warm bronze eyes, soft blush",
    "Balanced tone — hair warmth harmonized with skin and clothing",
  ];

  return (
    <section style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 40, alignItems: "start" }}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80"
          alt="Glow-up version"
          style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", borderRadius: 3, display: "block" }}
        />
        <p style={{ fontSize: 10, color: "#9b8e7e", marginTop: 6 }}>Styled · Natural · Harmonized</p>
      </div>
      <div>
        <SectionLabel>Glow-Up Version (Styled)</SectionLabel>
        <p style={{ fontSize: 13, color: "#5f554b", margin: "0 0 16px", lineHeight: 1.6 }}>
          What your look achieves when color, structure, and grooming are fully aligned with your profile:
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {improvements.map((imp, i) => (
            <li key={i} style={{ display: "flex", gap: 14, alignItems: "start" }}>
              <span style={{
                flexShrink: 0, width: 20, height: 20,
                background: "#c97b5a", color: "#fff",
                borderRadius: "50%", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 700,
              }}>
                {i + 1}
              </span>
              <p style={{ fontSize: 13, color: "#4f463e", margin: 0, lineHeight: 1.6 }}>{imp}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── QUICK STYLE GUIDE ─── */
function QuickGuideSection() {
  const best = ["Soft textures — knit, linen, cotton, suede", "Warm muted tones — earth, sage, camel", "Relaxed, feminine silhouettes with natural drape"];
  const avoid = ["Cool icy tones — stark white, black, cobalt", "Overly bright or saturated colors", "Sharp tailoring and heavy structure"];
  const tips = ["Layer soft textures for dimension", "Add warmth with gold and bronze jewelry", "Keep everything harmonious and grounded"];

  return (
    <section>
      <SectionLabel>Quick Style Guide</SectionLabel>
      <div className="quick-guide" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
        <div>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "#5E6B3C", margin: "0 0 10px", fontWeight: 700 }}>
            Best Traits to Highlight
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
            {best.map((b) => (
              <li key={b} style={{ fontSize: 12, color: "#4f463e", lineHeight: 1.5, display: "flex", gap: 8 }}>
                <span style={{ color: "#5E6B3C" }}>✓</span> {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "#c97b5a", margin: "0 0 10px", fontWeight: 700 }}>
            Avoid
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
            {avoid.map((a) => (
              <li key={a} style={{ fontSize: 12, color: "#4f463e", lineHeight: 1.5, display: "flex", gap: 8 }}>
                <span style={{ color: "#c97b5a" }}>✕</span> {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "#7C8C4A", margin: "0 0 10px", fontWeight: 700 }}>
            Style Direction
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
            {tips.map((t) => (
              <li key={t} style={{ fontSize: 12, color: "#4f463e", lineHeight: 1.5, display: "flex", gap: 8 }}>
                <span style={{ color: "#7C8C4A" }}>→</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── ANALYSIS STATE FOOTER ─── */
function AnalysisState() {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between",
      fontSize: 11, color: "#9b8e7e", padding: "10px 0",
      borderTop: "1px solid #d9d0c5",
    }}>
      <span>Phase: Color refinement</span>
      <span>Last updated: 2 min ago</span>
      <span>Iterations: 5</span>
    </div>
  );
}


function RetakeAnalysisModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);
  if (!open) return null;
  return (
        <div className="modal-overlay" onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 20 }}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 520, background: "#f7f3ee", borderRadius: 4, border: "1px solid #d9d0c5", padding: "20px" }}>
            <button onClick={onClose} style={{ float: "right", border: "none", background: "transparent", fontSize: 18, cursor: "pointer", color: "#7a6e62" }}>×</button>
            <h3 style={{ margin: "0 0 16px", fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 400, color: "#2f2a24" }}>Retake Analysis</h3>
            {[
              ["Retake Quiz", "Answer structured questions again", () => router.push("/typing/quiz/1")],
              ["Retake AI Image Analysis", "Upload new photos for re-analysis", () => router.push("/typing/upload")],
              ["Book Professional Analysis", "Get typed by a human expert", () => {}],
            ].map(([t, d, action]) => (
              <button className="hover-button" key={t as string} onClick={action as () => void} style={{ width: "100%", textAlign: "left", background: "#fff", border: "1px solid #d9d0c5", borderRadius: 3, padding: "12px 14px", marginBottom: 10, cursor: "pointer" }}>
                <p style={{ margin: "0 0 4px", fontFamily: "Georgia, serif", fontSize: 14, color: "#2f2a24" }}>{t as string}</p>
                <p style={{ margin: 0, fontSize: 12, color: "#7a6e62" }}>{d as string}</p>
              </button>
            ))}
          </div>
        </div>
      );
}

/* ─── PAGE ─── */
export default function TypingPage() {
  const [isRetakeOpen, setIsRetakeOpen] = useState(false);
  const router = useRouter();
  const { mode, currentStep, isComplete, profile, resetFlow } = useTypingStore();

  useEffect(() => {
    if (!profile) {
      router.replace("/typing/start");
    }
  }, [profile, router]);

  if (!profile) return null;
  return (
    <>
    <main style={{
      minHeight: "100vh",
      background: "#f7f3ee",
      padding: "48px 48px 80px",
      color: "#2f2a24",
      fontFamily: "-apple-system, 'Helvetica Neue', sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 0 }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <p style={{ margin: 0, fontSize: 12, color: "#7a6e62" }}>
            Flow state: {mode ?? "not-started"} · step {currentStep} · {isComplete ? "complete" : "in progress"}
          </p>
          <button onClick={resetFlow} style={{ border: "1px solid #d9d0c5", background: "transparent", borderRadius: 3, padding: "6px 10px", cursor: "pointer" }}>
            Reset flow state
          </button>
        </div>
        <div className="section-enter"><ProfileHeader profile={userProfile} onRetake={() => setIsRetakeOpen(true)} onStart={() => router.push("/typing/start")} onRefine={() => router.push("/typing/refine")} /></div>

        <div style={{ height: 40 }} />
        <Divider />
        <div style={{ height: 28 }} />

        <div className="section-enter"><ProfileSnapshot profile={userProfile} /></div>

        <div style={{ height: 32 }} />
        <Divider />
        <div style={{ height: 28 }} />

        <div className="section-enter"><ColorComparisonSection /></div>

        <div style={{ height: 32 }} />
        <Divider />
        <div style={{ height: 28 }} />

        <div className="section-enter"><AnalysisLayers layers={userProfile.layers} /></div>

        <div style={{ height: 32 }} />
        <Divider />
        <div style={{ height: 28 }} />

        <div className="section-enter"><HairstyleSection /></div>

        <div style={{ height: 32 }} />
        <Divider />
        <div style={{ height: 28 }} />

        <div className="section-enter"><SkinAnalysisSection /></div>

        <div style={{ height: 32 }} />
        <Divider />
        <div style={{ height: 28 }} />

        <div className="section-enter"><GroomingSection /></div>

        <div style={{ height: 32 }} />
        <Divider />
        <div style={{ height: 28 }} />

        <div className="section-enter"><GlowUpSection /></div>

        <div style={{ height: 32 }} />
        <Divider />
        <div style={{ height: 28 }} />

        <div className="section-enter"><QuickGuideSection /></div>

        <div style={{ height: 24 }} />
        <AnalysisState />
      </div>
    </main>
      <RetakeAnalysisModal open={isRetakeOpen} onClose={() => setIsRetakeOpen(false)} />
      <style jsx>{`
        @media (max-width: 767px) {
          .profile-header, .profile-snapshot, .color-comparison, .quick-guide { grid-template-columns: 1fr !important; }
          .hairstyle-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .analysis-row:hover { background: rgba(94, 107, 60, 0.05); }

        .section-enter { animation: fadeUp 0.32s ease-out both; }
        .section-enter:nth-of-type(1) { animation-delay: 0.05s; }
        .hover-image { transition: transform 0.2s ease; }
        .hover-image:hover { transform: scale(1.02); }
        .hover-button { transition: opacity 0.2s ease; }
        .hover-button:hover { opacity: 0.88; }
        .modal-overlay { animation: fadeIn 0.2s ease-out both; }
        .modal-panel { animation: scaleIn 0.2s ease-out both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

      `}</style>
    </>
  );
}
