import { ProductCard } from "@/components/ui/cards/ProductCard";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Grid } from "@/components/ui/layout/Grid";
import { mockProducts } from "@/lib/mockData";

export default function ExplorePage() {
  return (
    <div>
      <SectionHeader title="Explore" />
      <Grid>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>
    </div>
  );
}
