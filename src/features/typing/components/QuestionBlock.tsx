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
      <h2 style={{ margin: "0 0 14px", fontFamily: typingTokens.typography.serif, lineHeight: 1.3 }}>{prompt}</h2>
      <div style={{ display: "grid", gap: 10 }} className="qb-options">
        {options.map((option, i) => {
          const isSelected = selectedOption === option;
          return (
            <div
              key={`${questionId}-${option}`}
              style={{
                animation: `opt-in 280ms ease both`,
                animationDelay: `${i * 40}ms`,
              }}
            >
              <OptionCard onClick={() => onSelect(option)} selected={isSelected}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <span>{option}</span>
                  <span
                    aria-hidden
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      border: `1px solid ${isSelected ? typingTokens.color.accent : "#c8bfb3"}`,
                      background: isSelected ? typingTokens.color.accent : "transparent",
                      transition: "background-color 180ms ease, border-color 180ms ease",
                      flex: "0 0 auto",
                    }}
                  />
                </span>
              </OptionCard>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes opt-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        .qb-options > div > button{transition:background-color 180ms ease,border-color 180ms ease,transform 180ms ease}
        .qb-options > div > button:hover{background:#f4ede2;border-color:${typingTokens.color.accent}}
        .qb-options > div > button:active{transform:scale(.99)}
      `}</style>
    </section>
  );
}
