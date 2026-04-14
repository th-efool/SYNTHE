import Link from "next/link";
import { OutfitCard } from "@/components/ui/cards/OutfitCard";
import { ImageContainer } from "@/components/ui/elements/ImageContainer";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Tag } from "@/components/ui/elements/Tag";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { mockOutfits, mockProducts } from "@/lib/mockData";

export default function CartPage() {
  const cartItems = mockProducts.slice(0, 3);

  return (
    <div
      className="ui-enter flow-shell"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: spacing.xl,
        alignItems: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: spacing.xxl,
        }}
      >
        <section
          className="ui-enter"
          style={{
            padding: spacing.xl,
            border: `1px solid ${colors.border}`,
            borderRadius: spacing.lg,
            background: `linear-gradient(180deg, ${colors.surface}, ${colors.background})`,
          }}
        >
          <SectionHeader
            title="Your selection"
            subtitle="Everything here works with your structure, tone, and presence."
          />

          <div
            style={{
              display: "grid",
              gap: spacing.md,
            }}
          >
            {cartItems.map((product, index) => (
              <div
                key={product.id}
                className="ui-enter"
                style={{
                  animationDelay: `${index * 90}ms`,
                  display: "grid",
                  gridTemplateColumns: "120px minmax(0, 1fr)",
                  gap: spacing.lg,
                  padding: spacing.lg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: spacing.lg,
                  background: colors.surface,
                  alignItems: "center",
                }}
              >
                <ImageContainer src={product.image} alt={product.name} />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing.sm,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: spacing.lg,
                      flexWrap: "wrap",
                    }}
                  >
                    <h3 style={{ ...typography.cardTitle, margin: 0 }}>{product.name}</h3>
                    <span style={{ ...typography.tag, color: colors.secondaryText }}>Selected</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: spacing.sm,
                    }}
                  >
                    {product.tags?.map((tag) => (
                      <Tag key={`${product.id}-${tag}`} label={tag} />
                    ))}
                  </div>

                  <p style={{ ...typography.body, color: colors.primaryText, margin: 0 }}>{product.description}</p>
                  <p style={{ ...typography.body, color: colors.mutedText, margin: 0 }}>
                    Works with your profile
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="ui-enter"
          style={{
            padding: spacing.xl,
            border: `1px solid ${colors.border}`,
            borderRadius: spacing.lg,
            background: colors.surface,
          }}
        >
          <SectionHeader title="Together" subtitle="This reads as one resolved direction, not separate pieces." />
          <Link href={`/product/${mockOutfits[0].productId}`} style={{ textDecoration: "none", color: "inherit" }}>
            <OutfitCard items={mockOutfits[0].items} title={mockOutfits[0].title} />
          </Link>
        </section>
      </div>

      <aside
        className="ui-enter flow-sidebar"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: spacing.lg,
          padding: spacing.xl,
          border: `1px solid ${colors.border}`,
          borderRadius: spacing.lg,
          background: colors.primaryText,
          color: colors.surface,
          boxShadow: `0 24px 48px -30px ${colors.primaryText}`,
        }}
      >
        <p style={{ ...typography.tag, color: colors.mutedText, margin: 0 }}>Style review</p>
        <h2
          style={{
            fontFamily: "var(--font-editorial), serif",
            fontSize: "32px",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Ready to move.
        </h2>
        <p style={{ ...typography.body, color: colors.surface, margin: 0 }}>
          Silhouette aligns. Tone aligns. Presence aligns. Nothing extra left to solve here.
        </p>

        <div
          style={{
            display: "grid",
            gap: spacing.sm,
            paddingTop: spacing.sm,
            borderTop: `1px solid ${colors.secondaryText}`,
          }}
        >
          <p style={{ ...typography.body, color: colors.surface, margin: 0 }}>3 selected pieces</p>
          <p style={{ ...typography.body, color: colors.surface, margin: 0 }}>1 combined look</p>
          <p style={{ ...typography.body, color: colors.surface, margin: 0 }}>Profile match confirmed</p>
        </div>

        <Link
          href="/checkout"
          style={{
            textDecoration: "none",
            color: colors.primaryText,
            background: colors.surface,
            borderRadius: spacing.xxl,
            padding: `${spacing.sm} ${spacing.lg}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
          className="ui-hover-soft"
        >
          Continue to checkout -&gt;
        </Link>
      </aside>
    </div>
  );
}
