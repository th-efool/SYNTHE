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
        maxWidth: "720px",
      }}
    >
      <h2 style={{ ...typography.sectionTitle, margin: 0 }}>{title}</h2>
      {subtitle ? (
        <p
          style={{
            ...typography.body,
            marginTop: spacing.sm,
            marginBottom: 0,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
