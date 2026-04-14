import Link from "next/link";
import { ImageContainer } from "@/components/ui/elements/ImageContainer";
import { Tag } from "@/components/ui/elements/Tag";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  tags?: string[];
  description?: string;
  price?: number | string;
  currency?: string;
  location?: string;
  rating?: number | string;
  inStock?: boolean;
};

export function ProductCard({
  id,
  name,
  image,
  tags,
  description,
  price,
  currency,
  location,
  rating,
  inStock,
}: ProductCardProps) {
  const hasMeta = price !== undefined || location || rating !== undefined || inStock !== undefined;
  const priceLabel =
    price === undefined
      ? null
      : typeof price === "number"
        ? `${currency ?? "$"}${price.toFixed(2)}`
        : `${currency ?? ""}${price}`;

  return (
    <Link
      className="group"
      href={`/product/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        height: "100%",
      }}
    >
      <div
        className="ui-enter ui-hover-soft"
        style={{
          position: "relative",
          overflow: "hidden",
          background: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: spacing.lg,
          padding: spacing.lg,
          display: "flex",
          flexDirection: "column",
          gap: spacing.md,
          height: "100%",
          boxShadow: `0 8px 20px -14px ${colors.secondaryText}`,
        }}
      >
        <ImageContainer src={image} alt={name} />
        <h3 style={typography.cardTitle}>{name}</h3>
        {tags?.length ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: spacing.sm,
            }}
          >
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        ) : null}
        {hasMeta ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: spacing.sm,
            }}
          >
            {priceLabel ? (
              <span
                style={{
                  ...typography.body,
                  fontWeight: 700,
                  color: colors.primaryText,
                }}
              >
                {priceLabel}
              </span>
            ) : null}
            {location ? (
              <span
                style={{
                  ...typography.body,
                  color: colors.mutedText,
                }}
              >
                {location}
              </span>
            ) : null}
            {rating !== undefined ? (
              <span
                style={{
                  ...typography.body,
                  color: colors.secondaryText,
                }}
              >
                ★ {rating}
              </span>
            ) : null}
            {inStock !== undefined ? (
              <span
                style={{
                  ...typography.body,
                  color: inStock ? colors.surface : colors.primaryText,
                  background: inStock ? colors.primaryText : colors.border,
                  borderRadius: spacing.xs,
                  padding: `${spacing.xs}px ${spacing.sm}px`,
                }}
              >
                {inStock ? "In stock" : "Out of stock"}
              </span>
            ) : null}
          </div>
        ) : null}
        {description ? (
          <p
            style={{
              ...typography.body,
              color: colors.mutedText,
            }}
          >
            {description}
          </p>
        ) : null}

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-end",
            padding: spacing.lg,
            background: `linear-gradient(to top, ${colors.primaryText}E6, transparent 70%)`,
            color: colors.surface,
            opacity: 0,
            transition: "opacity 220ms cubic-bezier(0.22, 1, 0.36, 1)",
            pointerEvents: "none",
          }}
          className="card-light"
        >
          <div
            style={{
              display: "grid",
              gap: spacing.xs,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              lineHeight: 1.5,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span>Works with your structure</span>
            <span>Matches your tone</span>
            <span>Reinforces your presence</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
