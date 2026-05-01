"use client";

import { typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";
import { ProcessingIndicator } from "@/features/typing/components/ProcessingIndicator";

const messages = [
  "Extracting visual features…",
  "Analyzing structural signal…",
  "Resolving color harmony…",
  "Matching essence archetypes…",
  "Cross-validating against calibrated profiles…",
  "Finalizing your result…",
];

export default function TypingProcessingPage() {
  const router = useRouter();
  const { completeProfile } = useTypingStore();
  const [tick, setTick] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgId = window.setInterval(() => setTick((v) => v + 1), 800);
    const progId = window.setInterval(() => setProgress((v) => Math.min(v + 4, 100)), 95);
    const timeoutId = window.setTimeout(() => {
      completeProfile({ kibbe: "Soft Natural", season: "Soft Autumn", essence: ["Natural", "Romantic"], confidence: 0.81 });
      router.replace("/typing/result");
    }, 2400);
    return () => { window.clearInterval(msgId); window.clearInterval(progId); window.clearTimeout(timeoutId); };
  }, [completeProfile, router]);

  const label = messages[tick % messages.length];

  return (
    <FlowPage>
      <div style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
        <section style={{ textAlign: "center", width: "100%", maxWidth: 520 }}>
          <p style={{ margin: 0, fontSize: 12, color: typingTokens.color.muted, letterSpacing: 0.3 }}>Stage · Resolution</p>
          <h1 style={{ margin: "6px 0 4px" }}>Analyzing Your Inputs</h1>
          <p style={{ minHeight: 22, color: typingTokens.color.text, transition: "opacity 200ms ease" }} key={label}>
            <span style={{ animation: "msg-in 320ms ease" }}>{label}</span>
          </p>
          <p style={{ fontSize: 12, color: typingTokens.color.muted }}>Comparing against calibrated archetypes</p>
          <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}><ProcessingIndicator /></div>
          <div style={{ height: 6, borderRadius: 999, background: "#e6ddd2", overflow: "hidden" }}>
            <div style={{ width: `${progress}%`, height: "100%", background: typingTokens.color.accent, transition: "width 100ms linear" }} />
          </div>
          <p style={{ marginTop: 10, fontSize: 11, color: typingTokens.color.muted }}>{progress}% complete</p>
          <style>{`@keyframes msg-in{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:translateY(0)}}`}</style>
        </section>
      </div>
    </FlowPage>
  );
}
