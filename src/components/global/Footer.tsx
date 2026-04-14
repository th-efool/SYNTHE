"use client";

import { usePathname } from "next/navigation";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer
      style={{
        borderTop: `1px solid ${colors.border}`,
        background: `${colors.surface}CC`,
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          width: "min(1120px, 100%)",
          margin: "0 auto",
          padding: `${spacing.xl} clamp(24px, 4vw, 40px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: spacing.lg,
          flexWrap: "wrap",
        }}
      >
        <p style={{ ...typography.cardTitle, fontSize: "18px", margin: 0 }}>SYNTHE</p>
        <p style={{ ...typography.body, color: colors.mutedText, margin: 0 }}>
          Style direction, resolved with clarity.
        </p>
      </div>
    </footer>
  );
}
