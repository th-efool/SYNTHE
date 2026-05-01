"use client";

import { typingTokens } from "./uiTokens";

type ProgressHeaderProps = {
  currentStep: number;
  totalSteps: number;
};

export function ProgressHeader({ currentStep, totalSteps }: ProgressHeaderProps) {
  const clamped = Math.min(Math.max(currentStep, 1), totalSteps);
  const progress = Math.round((clamped / totalSteps) * 100);

  return (
    <header style={{ marginBottom: typingTokens.spacing.md }}>
      <p style={{ margin: `0 0 ${typingTokens.spacing.xs}px`, fontSize: 12, color: typingTokens.color.muted }}>
        Step {clamped} of {totalSteps}
      </p>
      <div style={{ width: "100%", height: 8, background: "#e6ddd2", borderRadius: 999 }}>
        <div style={{ width: `${progress}%`, height: "100%", background: typingTokens.color.accent, borderRadius: 999 }} />
      </div>
    </header>
  );
}
