import Link from "next/link";
import { OutfitCard } from "@/components/ui/cards/OutfitCard";
import { ProductCard } from "@/components/ui/cards/ProductCard";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Grid } from "@/components/ui/layout/Grid";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { mockOutfits, mockProducts } from "@/lib/mockData";

export default function CartPage() {
  const cartItems = mockProducts.slice(0, 3);

  return (
    <div
      className="ui-enter flow-shell review-flow"
      style={{
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: spacing.xxl,
        }}
      >
        <section className="ui-enter">
          <SectionHeader
            title="Your selection"
            subtitle="Everything here works with your structure, tone, and presence."
          />
          <Grid>
            {cartItems.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Grid>
        </section>

        <section className="ui-enter">
          <SectionHeader title="Together" subtitle="One coherent decision." />
          <Link href={`/product/${mockOutfits[0].productId}`} style={{ textDecoration: "none", color: "inherit" }}>
            <OutfitCard items={mockOutfits[0].items} title={mockOutfits[0].title} />
          </Link>
        </section>

        <p
          className="ui-enter"
          style={{
            ...typography.body,
            color: colors.mutedText,
          }}
        >
          These pieces work together
        </p>
      </div>

      <aside
        className="ui-enter flow-sidebar"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: spacing.lg,
          padding: spacing.lg,
          border: `1px solid ${colors.border}`,
          borderRadius: spacing.lg,
          background: colors.surface,
        }}
      >
        <p style={{ ...typography.body, color: colors.secondaryText }}>
          Review complete. Continue when ready.
        </p>
        <Link
          href="/checkout"
          style={{
            ...typography.body,
            textDecoration: "none",
            color: colors.surface,
            background: colors.primaryText,
            borderRadius: spacing.xxl,
            padding: `${spacing.sm} ${spacing.lg}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
          }}
        >
          Continue to checkout -&gt;
        </Link>
      </aside>
    </div>
  );
}
