import { mockProducts, mockOutfits } from "@/lib/mockData";
import { ProductDecisionEngine } from "./product-decision-engine";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id) ?? mockProducts[0];

  return <ProductDecisionEngine product={product} outfit={mockOutfits[0]} productId={id} />;
}
