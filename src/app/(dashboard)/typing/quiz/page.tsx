"use client";

import { typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";
import { mockQuestions } from "@/features/typing/data/mockQuestions";

export default function TypingQuizPage() {
  const router = useRouter();
  const { setStep, saveAnswer } = useTypingStore();
  const total = mockQuestions.length;

  const stages = [
    { label: "Structure", desc: "Silhouette, line, fabric weight" },
    { label: "Color", desc: "Contrast, depth, undertone" },
    { label: "Essence", desc: "Presence, expression, overall feel" },
  ];

  return (
    <FlowPage>
      <p style={{ margin: 0, fontSize: 12, color: typingTokens.color.muted }}>Stage · Guided Quiz</p>
      <h1 style={{ margin: "6px 0 8px" }}>Before You Begin</h1>
      <p style={{ marginTop: 0, maxWidth: 620, color: typingTokens.color.muted }}>
        {total} structured questions resolve your signal across three layers. Answer instinctively — refinement happens automatically.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: typingTokens.spacing.sm, margin: `${typingTokens.spacing.md}px 0` }}>
        {stages.map((s, i) => (
          <div key={s.label} style={{ border: typingTokens.border.soft, borderRadius: typingTokens.border.radius, padding: typingTokens.spacing.sm }}>
            <p style={{ margin: 0, fontSize: 11, color: typingTokens.color.muted }}>Layer {i + 1}</p>
            <p style={{ margin: "4px 0 2px", fontFamily: typingTokens.typography.serif }}>{s.label}</p>
            <p style={{ margin: 0, fontSize: 12, color: typingTokens.color.muted }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12, color: typingTokens.color.muted, margin: "0 0 12px" }}>Estimated time: ~2–3 minutes · Progress is saved as you go.</p>

      <button
        type="button"
        className="quiz-cta"
        onClick={() => { setStep(1); saveAnswer("startedQuiz", true); router.push("/typing/quiz/1"); }}
        style={{
          border: typingTokens.border.soft,
          background: typingTokens.color.accent,
          color: "#fff",
          padding: "10px 18px",
          borderRadius: 8,
        }}
      >
        Begin Quiz →
      </button>
      <style>{`.quiz-cta:hover{filter:brightness(0.95)}.quiz-cta:active{transform:scale(.98)}`}</style>
    </FlowPage>
  );
}
