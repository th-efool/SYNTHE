import { colors } from "@/components/theme/colors";

export const typography = {
  sectionTitle: {
    fontFamily: "var(--font-editorial), serif",
    fontSize: "36px",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    color: colors.primaryText,
  },
  cardTitle: {
    fontFamily: "var(--font-editorial), serif",
    fontSize: "28px",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    color: colors.primaryText,
  },
  body: {
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: "14px",
    lineHeight: 1.7,
    color: colors.secondaryText,
  },
  tag: {
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: "12px",
    lineHeight: 1.4,
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    color: colors.mutedText,
  },
} as const;
