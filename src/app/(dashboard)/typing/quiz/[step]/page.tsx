"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingQuizStepPage() {
  const params = useParams<{ step: string }>();
  const router = useRouter();
  const { saveAnswer, setStep, nextStep } = useTypingStore();

  const numericStep = useMemo(() => {
    const parsed = Number(params.step);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  }, [params.step]);

  const isLastStep = numericStep >= 3;

  return (
    <main style={{ padding: 24 }}>
      <h1>Quiz Step {numericStep}</h1>
      <p>Answer this step, then continue.</p>
      <button
        onClick={() => {
          saveAnswer(`step-${numericStep}`, `answer-${numericStep}`);
          if (isLastStep) {
            setStep(numericStep);
            router.push("/typing/processing");
            return;
          }
          nextStep();
          router.push(`/typing/quiz/${numericStep + 1}`);
        }}
      >
        {isLastStep ? "Submit and process" : "Next step"}
      </button>
    </main>
  );
}
