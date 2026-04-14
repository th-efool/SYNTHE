import { colors } from "@/components/theme/colors";
import { spacing } from "@/components/theme/spacing";

type ImageContainerProps = {
  src: string;
  alt?: string;
};

export function ImageContainer({ src, alt = "Image" }: ImageContainerProps) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "4 / 5",
        overflow: "hidden",
        position: "relative",
        borderRadius: spacing.lg,
        border: `1px solid ${colors.border}`,
        background: colors.background,
      }}
    >
      <img
        className="card-image"
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
