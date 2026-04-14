import { ProductCard } from "@/components/ui/cards/ProductCard";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Grid } from "@/components/ui/layout/Grid";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { mockProducts } from "@/lib/mockData";

export default function CheckoutPage() {
  return (
    <div
      style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: spacing.xxl,
        display: "flex",
        flexDirection: "column",
        gap: spacing.lg,
      }}
    >
      <section className="ui-enter">
        <SectionHeader title="Checkout" subtitle="Finalizing your selection" />
      </section>

      <section
        className="ui-enter"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: spacing.xl,
          alignItems: "start",
        }}
      >
        <div
          style={{
            border: `1px solid ${colors.border}`,
            borderRadius: spacing.lg,
            padding: spacing.lg,
            background: colors.surface,
            display: "flex",
            flexDirection: "column",
            gap: spacing.lg,
          }}
        >
          <label style={typography.body}>
            Name
            <input
              type="text"
              placeholder="Your name"
              style={{
                width: "100%",
                marginTop: spacing.xs,
                padding: spacing.sm,
                border: `1px solid ${colors.border}`,
                borderRadius: spacing.sm,
                background: colors.background,
                color: colors.primaryText,
              }}
            />
          </label>
          <label style={typography.body}>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              style={{
                width: "100%",
                marginTop: spacing.xs,
                padding: spacing.sm,
                border: `1px solid ${colors.border}`,
                borderRadius: spacing.sm,
                background: colors.background,
                color: colors.primaryText,
              }}
            />
          </label>
        </div>

        <Grid>
          {mockProducts.slice(0, 2).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Grid>
      </section>
    </div>
  );
}
