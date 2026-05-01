"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

const options = [
  { mode: "quiz", title: "Quiz", meta: "~20 questions", bullets: ["Takes ~2–3 minutes", "Best for quick typing"] },
  { mode: "image", title: "Image", meta: "2–3 clear photos", bullets: ["Most accurate with visuals", "Use natural light"] },
  { mode: "pro", title: "Pro", meta: "Live session", bullets: ["Expert guidance", "Deepest refinement"] },
] as const;

export default function TypingModePage() {
  const router = useRouter();
  const { selectMode } = useTypingStore();
  const [selected, setSelected] = useState<string | null>(null);
  
  return <FlowPage><h1>Mode Selection (Optional)</h1><p style={{color:typingTokens.color.muted}}>You can also choose directly from Start. Use this page to switch modes mid-flow.</p><div style={{ display: "grid", gap: 12 }}>{options.map((o) => <button type="button" key={o.mode} onClick={() => { setSelected(o.mode); selectMode(o.mode); router.push(o.mode === "quiz" ? "/typing/quiz" : o.mode === "image" ? "/typing/upload" : "/typing/processing"); }} style={{ textAlign: "left", padding: 16, border: selected === o.mode ? `1px solid ${typingTokens.color.accent}` : typingTokens.border.soft, background: selected === o.mode ? "#f2ebe4" : "#fff", transition: "all 180ms ease", cursor: "pointer" }}><div style={{ display: "flex", justifyContent: "space-between" }}><strong>{o.title}</strong>{selected===o.mode && <span style={{fontSize:12}}>Selected</span>}</div><p style={{ margin: "6px 0", color: typingTokens.color.muted }}>What you'll need: {o.meta}</p><ul style={{ margin: 0, paddingLeft: 18 }}>{o.bullets.map((b)=><li key={b} style={{fontSize:12,color:typingTokens.color.muted}}>{b}</li>)}</ul></button>)}</div></FlowPage>;
}
