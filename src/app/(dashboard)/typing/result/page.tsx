"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingResultPage() {
  const router = useRouter();
  const { isComplete, profile } = useTypingStore();
  
  useEffect(() => { if (!profile || !isComplete) router.replace("/typing/start"); }, [isComplete, profile, router]);
  if (!profile || !isComplete) return null;

  return (
    <FlowPage>
      <p style={{ margin: 0, color: typingTokens.color.muted }}>Profile Generated</p>
      <h1 style={{ marginTop: 6 }}>Your Result</h1>
      <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", marginBottom: 14 }}>
        <div style={{ border: typingTokens.border.soft, borderRadius: 8, padding: 12 }}><p style={{ margin: 0, fontSize: 12, color: typingTokens.color.muted }}>Structure</p><p style={{ margin: "6px 0 0" }}>{profile.kibbe}</p></div>
        <div style={{ border: typingTokens.border.soft, borderRadius: 8, padding: 12 }}><p style={{ margin: 0, fontSize: 12, color: typingTokens.color.muted }}>Color</p><p style={{ margin: "6px 0 0" }}>{profile.season}</p></div>
        <div style={{ border: typingTokens.border.soft, borderRadius: 8, padding: 12 }}><p style={{ margin: 0, fontSize: 12, color: typingTokens.color.muted }}>Essence</p><p style={{ margin: "6px 0 0" }}>{profile.essence.join(" + ")}</p></div>
      </div>
      <p style={{ color: typingTokens.color.muted }}>Confidence: {Math.round(profile.confidence * 100)}%</p>
      <button className="to-control" type="button" onClick={() => router.push("/typing")} style={{ border: typingTokens.border.soft, padding: "10px 16px", borderRadius: 8, background: "#fff" }}>Go to Profile Control →</button>
      <style>{`.to-control{transition:all 180ms ease}.to-control:hover{transform:translateX(2px);border-color:${typingTokens.color.accent}}`}</style>
    </FlowPage>
  );
}
