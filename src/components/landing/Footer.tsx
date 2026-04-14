import Link from "next/link";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${colors.border}`, background: colors.background, padding: `${spacing.xxl} 0` }}>
      <div style={{ width: "min(1120px, 100%)", margin: "0 auto", padding: `0 clamp(20px, 4vw, 40px)`, display: "flex", gap: spacing.md, justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ ...typography.cardTitle, fontSize: "18px", textTransform: "uppercase" }}>SYNTHE</div>
        <div style={{ display: "flex", gap: spacing.md, flexWrap: "wrap" }}>
          <a href="#discovery" style={{ ...typography.body, textDecoration: "none", color: colors.secondaryText }}>Approach</a>
          <Link href="/auth" style={{ ...typography.body, textDecoration: "none", color: colors.secondaryText }}>Sign in</Link>
          <a href="#" style={{ ...typography.body, textDecoration: "none", color: colors.secondaryText }}>Privacy</a>
        </div>
      </div>
    </footer>
  );
}
