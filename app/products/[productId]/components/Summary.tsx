import { ContentWrapper } from "@/components/common/ContentWrapper";
import { useFormContext } from "react-hook-form";
import { LOCATION_OPTIONS, SUBSCRIPTION_PERIODS } from "./ProductConfigurationForm";
import { Button } from "@/components/ui/Button";
import { ProductFormValues } from "./ProductClient";
import { Product } from "../../data/products.mock";
import { getPricePerIp } from "@/helpers/getPricePerIp";

export function Summary({ product }: { product: Product }) {
  const { watch } = useFormContext<ProductFormValues>();
  const quantity = watch("quantity");
  const subscriptionPeriodId = watch("subscriptionPeriodId");
  const countryId = watch("countryId");

  const period = SUBSCRIPTION_PERIODS.find((p) => p.id === subscriptionPeriodId);

  const country = LOCATION_OPTIONS.find((c) => c.id === countryId);

  const pricePerIp = getPricePerIp(quantity, product.pricing.bundleDiscounts);

  return (
    <div className="h-fit! w-full lg:sticky lg:top-6 lg:w-90 lg:shrink-0">
      <ContentWrapper className="w-full">
        <div>
          <strong>Price per IP:</strong> ${pricePerIp.toFixed(2)}
          <strong>Quantity:</strong> {quantity}
          <strong>SubscriptionPeriod:</strong> {period?.label}
          <strong>country:</strong> {country?.label}
          <strong>Total:</strong> ${(pricePerIp * quantity).toFixed(2)}
        </div>
      </ContentWrapper>
      <Button type="submit" className={"w-full"} variant={"primary"}>
        Continue to checkout
      </Button>
      <WalletSection />
    </div>
  );
}

export function WalletSection() {
  return <div>items in wallet</div>;
}
