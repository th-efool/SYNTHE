import { OutfitCard } from "@/components/ui/cards/OutfitCard";
import { ProductCard } from "@/components/ui/cards/ProductCard";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Grid } from "@/components/ui/layout/Grid";
import { spacing } from "@/components/theme/spacing";
import { mockOutfits, mockProducts } from "@/lib/mockData";

export default function WardrobePage() {
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
        <SectionHeader title="Your wardrobe" subtitle="Saved pieces aligned with your profile" />
        <Grid>
          {mockProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Grid>
      </section>

      <section className="ui-enter">
        <SectionHeader title="Saved looks" />
        <Grid>
          {mockOutfits.map((look) => (
            <OutfitCard key={look.id} items={look.items} title={look.title} />
          ))}
        </Grid>
      </section>
    </div>
  );
}
