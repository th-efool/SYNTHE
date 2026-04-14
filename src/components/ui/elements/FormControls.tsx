import type { CSSProperties, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

type Base = {
  label: string;
  hint?: string;
  error?: string;
};

const baseStyle: CSSProperties = {
  width: "100%",
  marginTop: spacing.xs,
  padding: `${spacing.sm} ${spacing.md}`,
  border: `1px solid ${colors.border}`,
  borderRadius: spacing.md,
  background: colors.background,
  color: colors.primaryText,
  outline: "none",
};

export function TextInput({ label, hint, error, ...props }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label style={typography.body}>
      {label}
      <input {...props} aria-invalid={!!error} style={{ ...baseStyle, borderColor: error ? colors.danger : colors.border }} />
      {error ? <small style={{ ...typography.tag, color: colors.danger }}>{error}</small> : hint ? <small style={typography.tag}>{hint}</small> : null}
    </label>
  );
}

export function SelectInput({ label, hint, error, children, ...props }: Base & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label style={typography.body}>
      {label}
      <select {...props} aria-invalid={!!error} style={{ ...baseStyle, borderColor: error ? colors.danger : colors.border }}>
        {children}
      </select>
      {error ? <small style={{ ...typography.tag, color: colors.danger }}>{error}</small> : hint ? <small style={typography.tag}>{hint}</small> : null}
    </label>
  );
}

export function TextAreaInput({ label, hint, error, ...props }: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label style={typography.body}>
      {label}
      <textarea {...props} aria-invalid={!!error} style={{ ...baseStyle, borderColor: error ? colors.danger : colors.border, minHeight: 96, resize: "vertical" }} />
      {error ? <small style={{ ...typography.tag, color: colors.danger }}>{error}</small> : hint ? <small style={typography.tag}>{hint}</small> : null}
    </label>
  );
}
