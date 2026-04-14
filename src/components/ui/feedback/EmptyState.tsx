import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

type EmptyStateProps = {
  message: string;
};

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div
      className="ui-enter"
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: spacing.lg,
        padding: spacing.xl,
        background: colors.surface,
        textAlign: "center",
      }}
    >
      <p
        style={{
          ...typography.body,
          color: colors.mutedText,
          margin: 0,
        }}
      >
        {message}
      </p>
    </div>
  );
}
