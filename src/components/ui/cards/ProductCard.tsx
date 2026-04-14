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
};

export function ProductCard({ id, name, image, tags, description }: ProductCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        className="ui-enter ui-hover-soft"
        style={{
          background: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: spacing.lg,
          padding: spacing.lg,
          display: "flex",
          flexDirection: "column",
          gap: spacing.md,
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
      </div>
    </Link>
  );
}
