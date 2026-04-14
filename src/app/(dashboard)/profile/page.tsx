import { ProductCard } from "@/components/ui/cards/ProductCard";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Tag } from "@/components/ui/elements/Tag";
import { Grid } from "@/components/ui/layout/Grid";
import { spacing } from "@/components/theme/spacing";
import { mockProducts } from "@/lib/mockData";

export default function Page() {
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
        <SectionHeader title="Your profile" />
      </section>

      <section
        className="ui-enter"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: spacing.lg,
        }}
      >
        <Tag label="Soft Natural" />
        <Tag label="Soft Autumn" />
        <Tag label="Natural / Romantic" />
      </section>

      <section className="ui-enter">
        <Grid>
          <ProductCard {...mockProducts[0]} />
        </Grid>
      </section>
    </div>
  );
}
