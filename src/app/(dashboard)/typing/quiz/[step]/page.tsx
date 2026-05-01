"use client";

import { typingTokens } from "@/features/typing/components/uiTokens";
import { FlowPage } from "@/features/typing/components/FlowPage";
import { useEffect, useMemo, useState } from "react";
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
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  useEffect(() => {
    if (!question) {
      router.replace("/typing/processing");
      return;
    }
    setStep(normalizedStep);
    const previousAnswer = answers[question.id];
    if (typeof previousAnswer === "string") {
      setSelectedOption(previousAnswer);
    } else {
      setSelectedOption(undefined);
    }
  }, [answers, normalizedStep, question, router, setStep]);

  if (!question) return null;

  return (
    <FlowPage>
      <ProgressHeader currentStep={normalizedStep} totalSteps={totalQuestions} />
      <QuestionBlock
        questionId={question.id}
        prompt={question.prompt}
        options={question.options}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <div style={{ marginTop: 16 }}>
        <button
          disabled={!selectedOption}
          onClick={() => {
            if (!selectedOption) return;
            saveAnswer(question.id, selectedOption);
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
