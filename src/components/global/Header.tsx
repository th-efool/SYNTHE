"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

export default function Header() {
  const pathname = usePathname();
  const links = [
    { href: "/explore", label: "Explore" },
    { href: "/typing", label: "Typing" },
    { href: "/wardrobe", label: "Wardrobe" },
    { href: "/cart", label: "Cart" },
  ];

  if (pathname === "/") {
    return null;
  }

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        borderBottom: `1px solid ${colors.border}`,
        background: `${colors.background}E6`,
        backdropFilter: "blur(12px)",
        boxShadow: `0 10px 30px -28px ${colors.primaryText}`,
      }}
    >
      <nav
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: `${spacing.md} clamp(24px, 4vw, 40px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: spacing.lg,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            ...typography.cardTitle,
            fontSize: "22px",
            textDecoration: "none",
            color: colors.primaryText,
          }}
        >
          SYNTHE
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: spacing.sm,
            flexWrap: "wrap",
          }}
        >
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
                  background: active ? `${colors.accent}1A` : colors.surface,
                  borderRadius: spacing.xxl,
                  padding: `${spacing.xs} ${spacing.md}`,
                  transition: "background 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms cubic-bezier(0.22, 1, 0.36, 1), color 220ms cubic-bezier(0.22, 1, 0.36, 1)",
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
            ...typography.body,
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
