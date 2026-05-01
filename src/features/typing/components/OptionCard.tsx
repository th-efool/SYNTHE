"use client";

import { typingTokens } from "./uiTokens";

type OptionCardProps = {
  children: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
};

export function OptionCard({ children, selected = false, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: "left",
        padding: `${typingTokens.spacing.sm}px ${typingTokens.spacing.md}px`,
        borderRadius: typingTokens.border.radius,
        border: selected ? `1px solid ${typingTokens.color.accent}` : typingTokens.border.soft,
        background: selected ? "#f4e4dc" : "#fff",
        cursor: "pointer",
        fontFamily: typingTokens.typography.serif,
      }}
    >
      {children}
    </button>
  );
}
