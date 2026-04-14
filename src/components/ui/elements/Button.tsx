import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="ui-hover-soft"
      style={{
        ...typography.body,
        color: colors.surface,
        background: colors.primaryText,
        border: `1px solid ${colors.primaryText}`,
        borderRadius: spacing.xxl,
        padding: `${spacing.sm} ${spacing.lg}`,
        cursor: "pointer",
        boxShadow: `0 10px 24px -18px ${colors.primaryText}`,
      }}
    >
      {children}
    </button>
  );
}
