import Link from "next/link";
import { ContentWrapper } from "@/components/common/ContentWrapper";
import { PRODUCTS } from "./data/products.mock";

export default function AllProductsPage() {
  return (
    <ContentWrapper>
      <div className="flex flex-col gap-4">
        {PRODUCTS.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="hover:bg-muted rounded-md border px-4 py-3"
          >
            <div className="font-medium">{product.title}</div>
            <div className="text-muted-foreground text-sm">{product.description}</div>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}
