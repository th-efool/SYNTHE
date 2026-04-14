import { ImageContainer } from "@/components/ui/elements/ImageContainer";

type OutfitCardProps = {
  items: {
    id: string;
    image: string;
  }[];
  title?: string;
};

export function OutfitCard({ items, title }: OutfitCardProps) {
  return (
    <div>
      {title ? <h3>{title}</h3> : null}
      <div>
        {items.slice(0, 4).map((item) => (
          <ImageContainer key={item.id} src={item.image} alt={`Outfit item ${item.id}`} />
        ))}
      </div>
    </div>
  );
}
