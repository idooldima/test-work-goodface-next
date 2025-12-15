import { notFound } from "next/navigation";
import { PRODUCTS } from "../data/products.mock";
import { ProductClient } from "./components/ProductClient";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { productId } = await params;

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
