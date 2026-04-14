import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div
      className="ui-enter"
      style={{
        marginBottom: spacing.xl,
      }}
    >
      <h2 style={typography.sectionTitle}>{title}</h2>
      {subtitle ? (
        <p
          style={{
            ...typography.body,
            marginTop: spacing.sm,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
