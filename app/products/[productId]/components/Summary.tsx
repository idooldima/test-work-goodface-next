import { ContentWrapper } from "@/components/common/ContentWrapper";
import { useFormContext } from "react-hook-form";
import { LOCATION_OPTIONS, SUBSCRIPTION_PERIODS } from "./ProductConfigurationForm";
import { Button } from "@/components/ui/Button";
import { ProductFormValues } from "./ProductClient";
import { Product } from "../../data/products.mock";
import { getPricePerIp } from "@/helpers/getPricePerIp";
import { ContentBox } from "@/components/common/ContentBox";
import { BaseInput } from "@/components/ui/input";
import { Icon } from "@iconify/react";

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
      <ContentWrapper className="mb-4 w-full">
        <ContentBox className="mb-4!">
          <h5>Order summary</h5>
        </ContentBox>
        <ContentBox className="mb-4! flex flex-col gap-2">
          <div className="mb-2 flex flex-col gap-2">
            <p className="font-medium!">{product.title}</p>
            <span className="text-grey-600 subtitle2 flex items-center gap-1 font-medium">
              <Icon icon="mdi:check-circle" className="size-5 text-green-500" /> 3-day Trial
            </span>
            <span className="text-grey-600 subtitle2 flex items-center gap-1 font-medium">
              <Icon icon="mdi:check-circle" className="size-5 text-green-500" /> Customer Success
              Manager
            </span>
          </div>
          <SummaryRow label="Quantity of IP" value={`${quantity} IPs`} />

          <SummaryRow label="Location" value={String(country?.label)} />

          <SummaryRow label="Price per IP" value={`$${pricePerIp.toFixed(2)}`} />

          <SummaryRow label="Subscription period" value={String(period?.label)} />
        </ContentBox>
        <ContentBox className="mb-4! flex gap-2">
          <BaseInput className="h-7" />{" "}
          <Button size={"sm"} variant={"outline"}>
            Apply
          </Button>
        </ContentBox>
        <div className="bg-grey-300 mb-6 h-px w-full" />
        <div className="flex justify-between">
          <p className="font-medium">Total:</p>
          <span className="text-[24px] font-medium">${(pricePerIp * quantity).toFixed(2)}</span>
        </div>
      </ContentWrapper>

      <Button size={"lg"} type="submit" className={"text-md mb-4 w-full"} variant={"primary"}>
        Continue to checkout
      </Button>
      <WalletSection />
    </div>
  );
}

export function WalletSection() {
  return (
    <div className="text-muted-foreground flex justify-center gap-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} icon="mdi:card-bulleted-outline" className="size-6" />
      ))}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="subtitle2 text-grey-600 font-medium">{label}</span>
      <span className="subtitle2">{value}</span>
    </div>
  );
}
