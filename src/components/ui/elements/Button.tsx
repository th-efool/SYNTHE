import type { ButtonHTMLAttributes, ReactNode } from "react";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, onClick, disabled, variant = "primary", style, ...props }: ButtonProps) {
  const primary = variant === "primary";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="ui-hover-soft pressable-btn"
      style={{
        ...typography.bodyStrong,
        color: primary ? colors.surface : colors.primaryText,
        background: primary ? colors.primaryText : colors.surface,
        border: `1px solid ${primary ? colors.primaryText : colors.border}`,
        borderRadius: spacing.xxl,
        padding: `${spacing.sm} ${spacing.lg}`,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
        boxShadow: primary ? `0 10px 24px -18px ${colors.primaryText}` : "none",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
