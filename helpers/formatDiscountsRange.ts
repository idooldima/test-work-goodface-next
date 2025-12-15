import { Product } from "@/app/products/data/products.mock";

export function formatDiscountsRange(tier: Product["pricing"]["bundleDiscounts"][0]) {
  if (tier.max) {
    return `${tier.min}–${tier.max}`;
  }

  return `${tier.min}+`;
}
