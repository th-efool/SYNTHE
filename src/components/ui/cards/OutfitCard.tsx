import { ImageContainer } from "@/components/ui/elements/ImageContainer";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";

type OutfitCardProps = {
  items: {
    id: string;
    image: string;
  }[];
  title?: string;
};

export function OutfitCard({ items, title }: OutfitCardProps) {
  return (
    <div
      className="ui-enter"
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: spacing.lg,
        padding: spacing.lg,
      }}
    >
      {title ? (
        <h3
          style={{
            ...typography.cardTitle,
            marginBottom: spacing.md,
          }}
        >
          {title}
        </h3>
      ) : null}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: spacing.sm,
        }}
      >
        {items.slice(0, 4).map((item) => (
          <ImageContainer key={item.id} src={item.image} alt={`Outfit item ${item.id}`} />
        ))}
      </div>
    </div>
  );
}
