import { colors } from "@/components/theme/colors";
import { typography } from "@/components/theme/typography";

type EmptyStateProps = {
  message: string;
};

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <p
      className="ui-enter"
      style={{
        ...typography.body,
        color: colors.mutedText,
      }}
    >
      {message}
    </p>
  );
}
