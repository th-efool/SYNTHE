import { ProductCard } from "@/components/ui/cards/ProductCard";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Grid } from "@/components/ui/layout/Grid";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { mockProducts } from "@/lib/mockData";

export default function CartPage() {
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
        <SectionHeader title="Your selection" subtitle="Everything here works with your structure" />
        <Grid>
          {mockProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Grid>
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
  );
}
