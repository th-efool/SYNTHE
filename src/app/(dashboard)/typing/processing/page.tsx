"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";
import { ProcessingIndicator } from "@/features/typing/components/ProcessingIndicator";

const messages = ["Extracting features...", "Analyzing structure...", "Resolving color profile...", "Finalizing result..."];

export default function TypingProcessingPage() {
  const router = useRouter();
  const { completeProfile } = useTypingStore();
  const [tick, setTick] = useState(0);
  const [progress, setProgress] = useState(0);
    const label = useMemo(() => messages[tick % messages.length], [tick]);

  useEffect(() => {
    const msgId = window.setInterval(() => setTick((v) => v + 1), 800);
    const progId = window.setInterval(() => setProgress((v) => Math.min(v + 4, 100)), 95);
    const timeoutId = window.setTimeout(() => {
      completeProfile({ kibbe: "Soft Natural", season: "Soft Autumn", essence: ["Natural", "Romantic"], confidence: 0.81 });
      router.replace("/typing/result");
    }, 2400);
    return () => { window.clearInterval(msgId); window.clearInterval(progId); window.clearTimeout(timeoutId); };
  }, [completeProfile, router]);

  return (
    <FlowPage>
      <div style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
      <section style={{ textAlign: "center", width: "100%", maxWidth: 520 }}>
        <h1>Analyzing your inputs</h1>
        <p style={{ color: typingTokens.color.muted }}>{label}</p>
        <p style={{ fontSize: 12, color: typingTokens.color.muted }}>Comparing against calibrated archetypes</p>
        <div style={{ display: "flex", justifyContent: "center", margin: "12px 0" }}><ProcessingIndicator /></div>
        <div style={{ height: 8, borderRadius: 999, background: "#e6ddd2", overflow: "hidden" }}><div style={{ width: `${progress}%`, height: "100%", background: typingTokens.color.accent, transition: "width 100ms linear" }} /></div>
      </section>
      </div>
    </FlowPage>
  );
}
