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
      }}
    >
      <nav
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: `${spacing.md} ${spacing.xxl}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: spacing.lg,
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
