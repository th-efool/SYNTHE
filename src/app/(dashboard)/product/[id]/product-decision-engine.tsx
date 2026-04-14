"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/ui/cards/ProductCard";
import { OutfitCard } from "@/components/ui/cards/OutfitCard";
import { ImageContainer } from "@/components/ui/elements/ImageContainer";
import { SectionHeader } from "@/components/ui/elements/SectionHeader";
import { Tag } from "@/components/ui/elements/Tag";
import { Grid } from "@/components/ui/layout/Grid";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { mockOutfits, mockProducts } from "@/lib/mockData";

type Product = (typeof mockProducts)[number];
type Outfit = (typeof mockOutfits)[number];

type ProductDecisionEngineProps = {
  product: Product;
  productId: string;
  outfit: Outfit;
};

export function ProductDecisionEngine({ product, productId, outfit }: ProductDecisionEngineProps) {
  const [mainImage, setMainImage] = useState(product.image);
  const gallery = [
    product.image,
    mockProducts[1]?.image ?? product.image,
    mockProducts[2]?.image ?? product.image,
    mockProducts[3]?.image ?? product.image,
  ].slice(0, 4);

  const worksWith = mockProducts.filter((item) => item.id !== product.id).slice(0, 3);

  const completeLookProducts = mockProducts.slice(0, 3);

  return (
    <div
      className="ui-enter flow-shell"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.xxl,
      }}
    >
      <section
        className="product-flow"
        style={{
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: spacing.md,
          }}
        >
          <div
            style={{
              border: `1px solid ${colors.border}`,
              borderRadius: spacing.lg,
              overflow: "hidden",
              background: colors.surface,
            }}
          >
            <ImageContainer src={mainImage} alt={product.name} />
          </div>

          <div
            className="gallery-thumbs"
            style={{
            }}
          >
            {gallery.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setMainImage(image)}
                style={{
                  border: `1px solid ${image === mainImage ? colors.accent : colors.border}`,
                  borderRadius: spacing.md,
                  padding: 0,
                  overflow: "hidden",
                  background: colors.surface,
                  cursor: "pointer",
                  transition: "border-color 220ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <ImageContainer src={image} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: spacing.lg,
            paddingTop: spacing.sm,
          }}
        >
        <SectionHeader title={product.name} subtitle="Selected for your profile" />
        <p style={{ ...typography.body, color: colors.secondaryText }}>
          Product ID: {productId}
        </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: spacing.sm,
            }}
          >
            <Tag label="Soft Natural" />
            <Tag label="Soft Autumn" />
            <Tag label="Natural / Romantic" />
          </div>

          <p style={{ ...typography.body, color: colors.secondaryText, fontSize: "16px" }}>
            Light structure. Natural drape. Muted warmth.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: spacing.sm,
              padding: spacing.lg,
              border: `1px solid ${colors.border}`,
              borderRadius: spacing.lg,
              background: colors.surface,
            }}
          >
            <h2 style={typography.sectionTitle}>Why this works</h2>
            <p style={{ ...typography.body, color: colors.primaryText }}>
              Structure: Follows your natural width without adding rigidity.
            </p>
            <p style={{ ...typography.body, color: colors.primaryText }}>
              Color: Holds warmth and softness against your skin tone.
            </p>
            <p style={{ ...typography.body, color: colors.primaryText }}>
              Presence: Supports a relaxed, natural impression.
            </p>
          </div>

          <Link
            href="/wardrobe"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              textDecoration: "none",
              color: colors.surface,
              background: colors.primaryText,
              borderRadius: spacing.xxl,
              padding: `${spacing.sm} ${spacing.lg}`,
              boxShadow: `0 10px 24px -18px ${colors.primaryText}`,
            }}
          >
            Add to wardrobe -&gt;
          </Link>
        </div>
      </section>

      <section className="ui-enter">
        <SectionHeader title="Works best with" subtitle="Items that complement silhouette and color harmony." />
        <Grid>
          {worksWith.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Grid>
      </section>

      <section className="ui-enter">
        <SectionHeader title="Complete the look" subtitle="Full outfit composition, visually grouped." />
        <Grid>
          <Link
            href={`/product/${outfit.productId}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <OutfitCard items={outfit.items} title={outfit.title} />
          </Link>
          {completeLookProducts.map((item) => (
            <ProductCard key={`complete-${item.id}`} {...item} />
          ))}
        </Grid>
      </section>
    </div>
  );
}
