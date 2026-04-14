import { spacing } from "@/components/theme/spacing";

type GridProps = {
  children: React.ReactNode;
};

export function Grid({ children }: GridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: spacing.lg,
        alignItems: "stretch",
      }}
    >
      {children}
    </div>
  );
}
