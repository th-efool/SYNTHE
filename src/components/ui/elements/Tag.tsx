import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span
      style={{
        ...typography.tag,
        display: "inline-flex",
        border: `1px solid ${colors.border}`,
        borderRadius: spacing.xxl,
        padding: `${spacing.xs} ${spacing.sm}`,
        background: colors.background,
      }}
    >
      {label}
    </span>
  );
}
