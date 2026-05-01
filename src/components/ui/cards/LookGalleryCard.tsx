import { type CSSProperties } from "react";
import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";
import { typography } from "@/components/theme/typography";
import { ImageContainer } from "@/components/ui/elements/ImageContainer";

type LookGalleryCardProps = {
  title: string;
  styleLabel?: string;
  images: string[];
  active?: boolean;
};

export function LookGalleryCard({ title, styleLabel, images, active = false }: LookGalleryCardProps) {
  const showcase = images.slice(0, 4);

  return (
    <div
      className="ui-hover-soft"
      style={{
        display: "grid",
        gap: spacing.sm,
        border: `1px solid ${active ? colors.primaryText : colors.border}`,
        borderRadius: spacing.md,
        padding: spacing.sm,
        background: colors.surface,
        boxShadow: active ? "0 8px 22px rgba(85, 64, 47, 0.12)" : "0 6px 18px rgba(76, 58, 44, 0.08)",
      }}
    >
      <div style={mediaGridStyle}>
        {showcase.map((image, index) => (
          <div key={`${image}-${index}`} style={tileStyle(index)}>
            <ImageContainer src={image} alt={`${title} piece ${index + 1}`} />
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gap: "2px", padding: `0 ${spacing.xs}` }}>
        <p style={{ ...typography.tag, margin: 0, color: colors.mutedText }}>{styleLabel ?? "Editorial look"}</p>
        <h3 style={{ ...typography.cardTitle, margin: 0 }}>{title}</h3>
      </div>
    </div>
  );
}

const mediaGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
  gridTemplateRows: "repeat(2, minmax(0, 90px))",
  gap: spacing.xs,
};

const tileStyle = (index: number): CSSProperties => {
  if (index === 0) return { gridColumn: "1 / span 4", gridRow: "1 / span 2" };
  if (index === 1) return { gridColumn: "5 / span 2", gridRow: "1 / span 1" };
  if (index === 2) return { gridColumn: "5 / span 2", gridRow: "2 / span 1" };
  return { gridColumn: "1 / span 2", gridRow: "2 / span 1" };
};
