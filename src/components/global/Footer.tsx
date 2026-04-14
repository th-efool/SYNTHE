"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

const items = [
  { href: "/explore", label: "Explore" },
  { href: "/typing", label: "Typing" },
  { href: "/settings", label: "Settings" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer style={{ borderTop: `1px solid ${colors.border}`, background: `${colors.surface}D9`, backdropFilter: "blur(10px)" }}>
      <div
        style={{
          width: "min(1120px, 100%)",
          margin: "0 auto",
          padding: `${spacing.xl} clamp(20px, 4vw, 40px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: spacing.lg,
          flexWrap: "wrap",
        }}
      >
        <p style={{ ...typography.cardTitle, fontSize: "18px", margin: 0 }}>SYNTHE</p>
        <div style={{ display: "flex", gap: spacing.sm, flexWrap: "wrap" }}>
          {items.map((it) => (
            <Link key={it.href} href={it.href} style={{ ...typography.body, textDecoration: "none", color: colors.secondaryText }}>
              {it.label}
            </Link>
          ))}
        </div>
        <p style={{ ...typography.body, color: colors.mutedText, margin: 0 }}>Style direction, resolved.</p>
      </div>
    </footer>
  );
}
