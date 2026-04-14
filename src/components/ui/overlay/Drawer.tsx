"use client";

import { Button } from "@/components/ui/elements/Button";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Drawer({ isOpen, onClose, children }: DrawerProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "min(440px, 100vw)",
        background: colors.surface,
        borderLeft: `1px solid ${colors.border}`,
        padding: spacing.xl,
        display: "flex",
        flexDirection: "column",
        gap: spacing.lg,
      }}
      className="ui-enter"
    >
      <div>{children}</div>
      <Button onClick={onClose}>Close</Button>
    </aside>
  );
}
