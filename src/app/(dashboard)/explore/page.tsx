import Link from "next/link";
import { OutfitCard } from "@/components/ui/cards/OutfitCard";
import { ProductCard } from "@/components/ui/cards/ProductCard";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Grid } from "@/components/ui/layout/Grid";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { useUserProfile } from "@/hooks/useUserProfile";
import { mockOutfits, mockProducts } from "@/lib/mockData";

export default function ExplorePage() {
  const profile = useUserProfile();
  const aligned = mockProducts.slice(0, 4);
  const refined = mockProducts.slice(1, 6);
  const further = [mockProducts[0], mockProducts[2], mockProducts[4], mockProducts[5]];

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
      <section className="ui-enter" style={{ animationDelay: "0ms" }}>
        <SectionHeader title="Explore" subtitle="Selections shaped by your structure, tone, and presence." />
        <p
          style={{
            ...typography.tag,
            color: colors.secondaryText,
            marginTop: spacing.sm,
          }}
        >
          {profile.kibbe} | {profile.season} | {profile.essence[1]}/{profile.essence[0]}
        </p>
      </section>

      <section className="ui-enter" style={{ animationDelay: "80ms" }}>
        <SectionHeader title="Aligned with you" subtitle="These sit naturally on your frame and tone." />
        <Grid>
          {aligned.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Grid>
      </section>

      <section className="ui-enter" style={{ animationDelay: "140ms" }}>
        <SectionHeader title="Refined selections" subtitle="A narrower field. Still intentional." />
        <Grid>
          {refined.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Grid>
      </section>

      <section className="ui-enter" style={{ animationDelay: "220ms" }}>
        <SectionHeader title="Complete looks" subtitle="Pieces that work together, not just alone." />
        <Grid>
          {mockOutfits.map((look) => (
            <Link
              key={look.id}
              href={`/product/${look.productId}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <OutfitCard items={look.items} title={look.title} />
            </Link>
          ))}
        </Grid>
      </section>

      <section className="ui-enter" style={{ animationDelay: "300ms" }}>
        <SectionHeader title="Explore further" subtitle="Less precise, still considered." />
        <Grid>
          {further.map((product) => (
            <ProductCard key={`further-${product.id}`} {...product} />
          ))}
        </Grid>
      </section>
    </div>
  );
}
