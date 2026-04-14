import { ProductCard } from "@/components/ui/cards/ProductCard";
import { Button } from "@/components/ui/elements/Button";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Grid } from "@/components/ui/layout/Grid";
import { spacing } from "@/components/theme/spacing";
import { mockProducts } from "@/lib/mockData";

export default function TypingPage() {
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
        <SectionHeader title="Find your profile" subtitle="Understand your structure, color, and presence" />
      </section>

      <section
        className="ui-enter"
        style={{
          display: "flex",
          gap: spacing.lg,
        }}
      >
        <Button>Start analysis</Button>
        <Button>Continue</Button>
      </section>

      <section className="ui-enter">
        <Grid>
          <ProductCard {...mockProducts[0]} />
        </Grid>
      </section>
    </div>
  );
}
