"use client";

import { Button } from "@/components/ui/elements/Button";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: colors.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: spacing.xl,
      }}
    >
      <div
        className="ui-enter"
        style={{
          width: "100%",
          maxWidth: "640px",
          background: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: spacing.lg,
          padding: spacing.xl,
          display: "flex",
          flexDirection: "column",
          gap: spacing.lg,
        }}
      >
        <div>{children}</div>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}
