"use client";

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
        padding: "10px 12px",
        borderRadius: 6,
        border: selected ? "1px solid #c97b5a" : "1px solid #d9d0c5",
        background: selected ? "#f4e4dc" : "#fff",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
