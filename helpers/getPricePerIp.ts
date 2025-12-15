import { Product } from "@/app/products/data/products.mock";

export function getPricePerIp(
  quantity: number,
  tiers: Product["pricing"]["bundleDiscounts"]
): number {
  const tier = tiers.find((t) => {
    if (t.max) {
      return quantity >= t.min && quantity <= t.max;
    }
    return quantity >= t.min;
  });

  return tier?.pricePerIp ?? tiers[0].pricePerIp;
}
