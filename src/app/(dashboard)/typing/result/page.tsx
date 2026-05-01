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
      <p>{profile.kibbe} · {profile.season}</p>
      <p>Essence: {profile.essence.join(" + ")}</p>
      <p>Confidence: {Math.round(profile.confidence * 100)}%</p>
      <button className="to-control" onClick={() => router.push("/typing")}>Go to Profile Control →</button>
      <style>{`.to-control{transition:all 180ms ease}.to-control:hover{transform:translateX(2px);text-decoration:underline}`}</style>
    </FlowPage>
  );
}
