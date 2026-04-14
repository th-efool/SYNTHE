"use client";

import Link from "next/link";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Navbar() {
  useScrollReveal();

  return (
    <nav style={{ position: "fixed", top: 0, zIndex: 50, width: "100%", backdropFilter: "blur(12px)", borderBottom: `1px solid ${colors.border}`, background: `${colors.background}DB` }}>
      <div
        style={{
          width: "min(1120px, 100%)",
          margin: "0 auto",
          padding: `0 clamp(20px, 4vw, 40px)`,
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: spacing.md,
        }}
      >
        <div style={{ ...typography.cardTitle, fontSize: "22px", textTransform: "uppercase" }}>SYNTHE</div>
        <div style={{ display: "flex", alignItems: "center", gap: spacing.lg }}>
          <a href="#discovery" style={{ ...typography.body, textDecoration: "none", color: colors.secondaryText }}>Approach</a>
          <a href="#system" style={{ ...typography.body, textDecoration: "none", color: colors.secondaryText }}>System</a>
          <a href="#wardrobe" style={{ ...typography.body, textDecoration: "none", color: colors.secondaryText }}>Selection</a>
          <Link href="/explore" style={{ ...typography.body, textDecoration: "none", color: colors.secondaryText }}>Explore</Link>
        </div>
        <Link
          href="/auth"
          style={{
            ...typography.bodyStrong,
            textDecoration: "none",
            color: colors.surface,
            background: colors.primaryText,
            borderRadius: spacing.xxl,
            padding: `${spacing.xs} ${spacing.lg}`,
          }}
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
