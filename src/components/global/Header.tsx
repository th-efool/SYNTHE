"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

const links = [
  { href: "/explore", label: "Explore" },
  { href: "/typing", label: "Typing" },
  { href: "/wardrobe", label: "Wardrobe" },
  { href: "/sessions", label: "Sessions" },
  { href: "/settings", label: "Settings" },
  { href: "/cart", label: "Cart" },
];

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        borderBottom: `1px solid ${colors.border}`,
        background: `${colors.background}EB`,
        backdropFilter: "blur(12px)",
      }}
    >
      <nav
        style={{
          width: "min(1120px, 100%)",
          margin: "0 auto",
          padding: `${spacing.md} clamp(20px, 4vw, 40px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: spacing.md,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ ...typography.cardTitle, fontSize: "22px", textDecoration: "none", color: colors.primaryText }}>
          SYNTHE
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: spacing.xs, flexWrap: "wrap" }}>
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  ...typography.body,
                  textDecoration: "none",
                  color: active ? colors.primaryText : colors.secondaryText,
                  border: `1px solid ${active ? colors.accent : colors.border}`,
                  background: active ? colors.accentSoft : colors.surface,
                  borderRadius: spacing.xxl,
                  padding: `${spacing.xs} ${spacing.md}`,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/profile"
          style={{
            ...typography.bodyStrong,
            textDecoration: "none",
            color: colors.surface,
            background: colors.primaryText,
            borderRadius: spacing.xxl,
            padding: `${spacing.xs} ${spacing.lg}`,
          }}
        >
          Profile
        </Link>
      </nav>
    </header>
  );
}
