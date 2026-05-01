"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingQuizPage() {
  const router = useRouter();
  const { setStep, saveAnswer } = useTypingStore();

  return (
    <main style={editorialPageStyle}>
      <h1>Quiz Overview</h1>
      <p>Ready to start the step-by-step quiz?</p>
      <button onClick={() => { setStep(1); saveAnswer("startedQuiz", true); router.push("/typing/quiz/1"); }}>Start quiz</button>
    </main>
  );
}
