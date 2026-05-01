"use client";

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
            <button
              key={`${questionId}-${option}`}
              onClick={() => onSelect(option)}
              style={{
                textAlign: "left",
                padding: "10px 12px",
                borderRadius: 6,
                border: isSelected ? "1px solid #c97b5a" : "1px solid #d9d0c5",
                background: isSelected ? "#f4e4dc" : "#fff",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </section>
  );
}
