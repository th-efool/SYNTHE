"use client";

import { typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";
import { mockQuestions } from "@/features/typing/data/mockQuestions";
import { ProgressHeader } from "@/features/typing/components/ProgressHeader";
import { QuestionBlock } from "@/features/typing/components/QuestionBlock";

function signalLabel(id: string) {
  if (id.includes("silhouette") || id.includes("fabric") || id.includes("line") || id.includes("neckline") || id.includes("details"))
    return "Refining structure signal";
  if (id.includes("contrast") || id.includes("color") || id.includes("print"))
    return "Refining color signal";
  return "Refining essence signal";
}

export default function TypingQuizStepPage() {
  const params = useParams<{ step: string }>();
  const router = useRouter();
  const { answers, saveAnswer, setStep, nextStep } = useTypingStore();

  const stepNumber = useMemo(() => {
    const parsed = Number.parseInt(params.step, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  }, [params.step]);

  const totalQuestions = mockQuestions.length;
  const normalizedStep = Math.min(Math.max(stepNumber, 1), totalQuestions);
  const question = mockQuestions[normalizedStep - 1];
  const selectedOption = typeof answers[question?.id] === "string" ? (answers[question.id] as string) : undefined;
  const isLast = normalizedStep >= totalQuestions;

  useEffect(() => {
    if (!question) {
      router.replace("/typing/processing");
      return;
    }
    setStep(normalizedStep);
  }, [normalizedStep, question, router, setStep]);

  if (!question) return null;

  return (
    <FlowPage>
      <ProgressHeader currentStep={normalizedStep} totalSteps={totalQuestions} />
      <p style={{ marginTop: -8, marginBottom: 12, fontSize: 12, color: typingTokens.color.muted, letterSpacing: 0.2 }}>
        {signalLabel(question.id)}
      </p>

      <div key={question.id} style={{ animation: "step-in 220ms ease" }}>
        <QuestionBlock
          questionId={question.id}
          prompt={question.prompt}
          options={question.options}
          selectedOption={selectedOption}
          onSelect={(option) => saveAnswer(question.id, option)}
        />
      </div>

      <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
        <button
          type="button"
          onClick={() => {
            if (normalizedStep <= 1) router.push("/typing/quiz");
            else router.push(`/typing/quiz/${normalizedStep - 1}`);
          }}
          style={{
            border: typingTokens.border.soft,
            background: "#fff",
            color: typingTokens.color.text,
            padding: "10px 16px",
            borderRadius: 8,
          }}
        >
          ← Back
        </button>
        <button
          type="button"
          disabled={!selectedOption}
          className="step-cta"
          style={{
            border: typingTokens.border.soft,
            background: selectedOption ? typingTokens.color.accent : "#ece6df",
            color: selectedOption ? "#fff" : typingTokens.color.muted,
            padding: "10px 18px",
            borderRadius: 8,
            cursor: selectedOption ? "pointer" : "not-allowed",
          }}
          onClick={() => {
            if (!selectedOption) return;
            if (isLast) {
              router.push("/typing/processing");
              return;
            }
            nextStep();
            router.push(`/typing/quiz/${normalizedStep + 1}`);
          }}
        >
          {isLast ? "Submit & Analyze →" : "Continue Analysis →"}
        </button>
        <span style={{ marginLeft: "auto", fontSize: 12, color: typingTokens.color.muted }}>
          {selectedOption ? "Selection saved" : "Select an option to continue"}
        </span>
      </div>

      <style>{`
        @keyframes step-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        .step-cta:not(:disabled):hover{filter:brightness(0.95)}
      `}</style>
    </FlowPage>
  );
}
