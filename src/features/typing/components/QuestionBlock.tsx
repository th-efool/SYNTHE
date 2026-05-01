"use client";

import { typingTokens } from "./uiTokens";
import { OptionCard } from "./OptionCard";

type QuestionBlockProps = {
  questionId: string;
  prompt: string;
  options: string[];
  selectedOption?: string;
  onSelect: (option: string) => void;
};

export function QuestionBlock({ questionId, prompt, options, selectedOption, onSelect }: QuestionBlockProps) {
  return (
    <section>
      <h2 style={{ margin: "0 0 12px" }}>{prompt}</h2>
      <div style={{ display: "grid", gap: 8 }}>
        {options.map((option) => {
          const isSelected = selectedOption === option;
          return (
            <OptionCard
              key={`${questionId}-${option}`}
              onClick={() => onSelect(option)}
              selected={isSelected}
            >
              {option}
            </OptionCard>
          );
        })}
      </div>
    </section>
  );
}
