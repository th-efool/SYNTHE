"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";
import { useTypingPageFX } from "@/features/typing/components/useTypingPageFX";

const refineOptions = [
  { label: "Re-evaluate Structure", desc: "Re-run structural signals and silhouette alignment", startStep: 1, domain: "structure" },
  { label: "Re-evaluate Color", desc: "Re-run undertone and harmony calibration", startStep: 2, domain: "color" },
  { label: "Re-evaluate Essence", desc: "Re-run presence and expression matching", startStep: 3, domain: "essence" },
] as const;

export default function TypingRefinePage() {
  const router = useRouter();
  const { setStep, saveAnswers, selectMode } = useTypingStore();
  const { containerStyle } = useTypingPageFX();

  return (<main style={{ ...editorialPageStyle, ...containerStyle }}><h1>Refine Analysis</h1><p style={{color:typingTokens.color.muted}}>This will not reset your full profile — only refine selected layer.</p><div style={{display:"grid",gap:10,maxWidth:420}}>{refineOptions.map((o)=><button key={o.domain} onClick={()=>{selectMode("quiz");setStep(o.startStep);saveAnswers({refineDomain:o.domain});router.push(`/typing/quiz/${o.startStep}`);}} style={{textAlign:"left",padding:16,border:typingTokens.border.soft,transition:"all 180ms ease",cursor:"pointer"}} className="refine-opt"><strong>{o.label}</strong><p style={{margin:"6px 0",fontSize:13,color:typingTokens.color.muted}}>{o.desc}</p><p style={{margin:0,fontSize:12,color:typingTokens.color.muted}}>Targets only this layer · Recommended if unsure</p></button>)}</div><style>{`.refine-opt:hover{border-color:${typingTokens.color.accent};background:#f2ebe4}.refine-opt:active{transform:scale(.98)}`}</style></main>);
}
