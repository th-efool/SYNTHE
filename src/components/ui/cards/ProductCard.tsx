import Link from "next/link";
import { ImageContainer } from "@/components/ui/elements/ImageContainer";
import { Tag } from "@/components/ui/elements/Tag";

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  tags?: string[];
  description?: string;
};

export function ProductCard({ id, name, image, tags, description }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <div>
        <ImageContainer src={image} alt={name} />
        <h3>{name}</h3>
        {tags?.length ? (
          <div>
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        ) : null}
        {description ? <p>{description}</p> : null}
      </div>
    </Link>
  );
}
