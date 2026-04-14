import { ProductCard } from "@/components/ui/cards/ProductCard";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Grid } from "@/components/ui/layout/Grid";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { mockProducts } from "@/lib/mockData";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = mockProducts[0];

  return (
    <div
      style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: spacing.xxl,
        display: "flex",
        flexDirection: "column",
        gap: spacing.xxl,
      }}
    >
      <section className="ui-enter">
        <SectionHeader title={product.name} subtitle={`Product ID: ${id}`} />
        <Grid>
          <ProductCard {...product} />
        </Grid>
      </section>

      <section className="ui-enter">
        <p style={{ ...typography.body, color: colors.secondaryText }}>
          Selected because it follows your natural width and maintains softness.
        </p>
      </section>

      <section className="ui-enter">
        <SectionHeader title="Works best with" />
        <Grid>
          {mockProducts.slice(1, 3).map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Grid>
      </section>
    </div>
  );
}
