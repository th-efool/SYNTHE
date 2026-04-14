import type { ReactNode } from "react";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";

type PageShellProps = {
  children: ReactNode;
  width?: string;
};

export function PageShell({ children, width = "1120px" }: PageShellProps) {
  return (
    <div
      className="ui-enter"
      style={{
        width: `min(${width}, 100%)`,
        margin: "0 auto",
        padding: `clamp(20px, 4vw, ${spacing.xxl})`,
        display: "grid",
        gap: spacing.xl,
      }}
    >
      {children}
    </div>
  );
}

type PanelProps = {
  children: ReactNode;
  muted?: boolean;
};

export function Panel({ children, muted }: PanelProps) {
  return (
    <section
      className="ui-enter"
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: spacing.lg,
        background: muted ? colors.surfaceAlt : colors.surface,
        padding: spacing.xl,
        display: "grid",
        gap: spacing.md,
      }}
    >
      {children}
    </section>
  );
}
