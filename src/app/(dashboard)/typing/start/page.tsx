"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

const cards = [
  { key: "quiz", title: "Guided Quiz", helper: "Fastest method", description: "Structured questions with deterministic scoring.", recommended: true },
  { key: "image", title: "Image Analysis", helper: "Most accurate with images", description: "Upload 2–3 clear photos for visual signal analysis." },
  { key: "pro", title: "Professional Session", helper: "Human expert review", description: "Book a live guided session for advanced typing." },
] as const;

export default function TypingStartPage() {
  const router = useRouter();
  const { mode, profile, isComplete, currentStep, answers, uploadedImages, resetFlow } = useTypingStore();
  
  useEffect(() => {
    if (profile && isComplete) return void router.replace("/typing");
    const hasPartialInputs = Object.keys(answers).length > 0 || uploadedImages.length > 0 || currentStep > 0 || !!mode;
    if (!hasPartialInputs) return;
    if (mode === "quiz") return void router.replace(`/typing/quiz/${Math.max(currentStep, 1)}`);
    if (mode === "image") return void router.replace("/typing/upload");
  }, [answers, currentStep, isComplete, mode, profile, router, uploadedImages]);

  return (
    <FlowPage>
      <p style={{ margin: 0, color: typingTokens.color.muted }}>Style Analysis System</p>
      <h1 style={{ margin: "6px 0 8px" }}>Find Your Profile</h1>
      <p style={{ marginTop: 0, maxWidth: 620, color: typingTokens.color.muted }}>Resolve your structure, color, and presence through a structured analysis system.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: typingTokens.spacing.md }}>
        {cards.map((card) => (
          <button key={card.key} onClick={() => { resetFlow(); router.push("/typing/mode"); }} style={{ border: typingTokens.border.soft, padding: 20, textAlign: "left", transition: "all 180ms ease", cursor: "pointer" }} className="typing-card">
            <div style={{ width: 18, height: 18, border: typingTokens.border.soft, marginBottom: 10 }} />
            <h3 style={{ margin: "0 0 6px", fontFamily: typingTokens.typography.serif, fontSize: 16 }}>{card.title}</h3>
            <p style={{ margin: "0 0 6px", fontSize: 12, color: typingTokens.color.muted }}>{card.helper}</p>
            <p style={{ margin: 0, fontSize: 13, color: typingTokens.color.muted }}>{card.description}</p>
            {"recommended" in card && card.recommended && <p style={{ margin: "10px 0 0", fontSize: 11 }}>Recommended</p>}
          </button>
        ))}
      </div>
      <p style={{ marginTop: 16, fontSize: 12, color: typingTokens.color.muted }}>Used to analyze structure, color harmony, and presence with deterministic scoring.</p>
      <style>{`.typing-card:hover{transform:translateY(-2px) scale(1.01);border-color:${typingTokens.color.accent}} .typing-card:active{transform:scale(0.98)}`}</style>
    </FlowPage>
  );
}
