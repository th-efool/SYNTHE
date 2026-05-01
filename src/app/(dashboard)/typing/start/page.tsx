"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

export default function TypingStartPage() {
  const router = useRouter();
  const { mode, profile, isComplete, currentStep, answers, uploadedImages, resetFlow } = useTypingStore();

  useEffect(() => {
    if (profile && isComplete) {
      router.replace("/typing");
      return;
    }

    const hasPartialInputs =
      Object.keys(answers).length > 0 || uploadedImages.length > 0 || currentStep > 0 || !!mode;
    if (!hasPartialInputs) return;

    if (mode === "quiz") {
      router.replace(`/typing/quiz/${Math.max(currentStep, 1)}`);
      return;
    }

    if (mode === "image") {
      router.replace("/typing/upload");
    }
  }, [answers, currentStep, isComplete, mode, profile, router, uploadedImages]);

  return (
    <main style={{ padding: 24 }}>
      <h1>Start Analysis</h1>
      <p>Begin your typing flow.</p>
      <button onClick={() => { resetFlow(); router.push("/typing/mode"); }}>
        Continue to mode selection
      </button>
    </main>
  );
}
