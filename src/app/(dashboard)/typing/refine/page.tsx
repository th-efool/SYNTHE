"use client";

import { editorialPageStyle, typingTokens } from "@/features/typing/components/uiTokens";
import { useRouter } from "next/navigation";
import { useTypingStore } from "@/lib/typing-state";

const refineOptions = [
  { label: "Re-run Structure", startStep: 1, domain: "structure" },
  { label: "Re-run Color", startStep: 2, domain: "color" },
  { label: "Re-run Essence", startStep: 3, domain: "essence" },
] as const;

export default function TypingRefinePage() {
  const router = useRouter();
  const { setStep, saveAnswers, selectMode } = useTypingStore();

  return (
    <main style={editorialPageStyle}>
      <h1>Refine Analysis</h1>
      <p>Select a layer to re-run from the quiz flow.</p>
      <div style={{ display: "grid", gap: 10, maxWidth: 360 }}>
        {refineOptions.map((option) => (
          <button
            key={option.domain}
            onClick={() => {
              selectMode("quiz");
              setStep(option.startStep);
              saveAnswers({ refineDomain: option.domain });
              router.push(`/typing/quiz/${option.startStep}`);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </main>
  );
}
