"use client";

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { ContentWrapper } from "@/components/common/ContentWrapper";
import { Product } from "../../data/products.mock";
import { ProductHeader } from "./ProductHeader";
import { BundleDiscounts } from "./BundleDiscounts";
import { ProductConfigurationForm } from "./ProductConfigurationForm";
import { Summary } from "./Summary";
import { ContentBox } from "@/components/common/ContentBox";

export type ProductFormValues = {
  quantity: number;
  subscriptionPeriodId: number;
  countryId: number;
};

export function ProductClient({ product }: { product: Product }) {
  const form = useForm<ProductFormValues>({
    defaultValues: {
      quantity: 50,
      subscriptionPeriodId: 1,
      countryId: 1,
    },
  });

  return (
    <Form {...form}>
      <div className="flex min-h-screen justify-center">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <ContentWrapper className="h-fit! flex-1">
            <ProductHeader
              title={product.title}
              description={product.description}
              icon={<div className="bg-muted h-16 w-16 rounded-md" />}
            />

            <ContentBox>
              <span className="subtitle2 text-bold">Select number of IPs</span>
              <p className="subtitle2 text-grey-500">
                Choose the perfect quantity of IPs for your needs effortlessly
              </p>
            </ContentBox>

            <BundleDiscounts tiers={product.pricing.bundleDiscounts} />

            <ProductConfigurationForm />
          </ContentWrapper>

          <Summary product={product} />
        </div>
      </div>
    </Form>
  );
}
