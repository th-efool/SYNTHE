"use client";

import { typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";
import { mockQuestions } from "@/features/typing/data/mockQuestions";
import { ProgressHeader } from "@/features/typing/components/ProgressHeader";
import { QuestionBlock } from "@/features/typing/components/QuestionBlock";

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
      <p style={{ marginTop: -8, marginBottom: 12, fontSize: 12, color: typingTokens.color.muted }}>
        {question.id.includes("structure") || question.id.includes("silhouette")
          ? "Refining structure signal"
          : question.id.includes("color") || question.id.includes("contrast")
            ? "Refining color signal"
            : "Refining essence signal"}
      </p>
      <QuestionBlock
        questionId={question.id}
        prompt={question.prompt}
        options={question.options}
        selectedOption={selectedOption}
        onSelect={(option) => saveAnswer(question.id, option)}
      />
      <div style={{ marginTop: 16 }}>
        <button
          type="button"
          disabled={!selectedOption}
          style={{
            border: typingTokens.border.soft,
            background: selectedOption ? typingTokens.color.accent : "#ece6df",
            color: selectedOption ? "#fff" : typingTokens.color.muted,
            padding: "10px 18px",
            borderRadius: 8,
          }}
          onClick={() => {
            if (!selectedOption) return;
            if (normalizedStep >= totalQuestions) {
              router.push("/typing/processing");
              return;
            }
            nextStep();
            router.push(`/typing/quiz/${normalizedStep + 1}`);
          }}
        >
          {normalizedStep >= totalQuestions ? "Submit and process" : "Next"}
        </button>
      </div>
    </FlowPage>
  );
}
