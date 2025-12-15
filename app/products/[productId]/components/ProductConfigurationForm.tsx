"use client";

import { useState } from "react";
import { QuantityField } from "./QuantityField";
import { FormInput } from "@/components/ui/input";
import { SubscriptionPeriodField } from "./SubscriptionPeriodField";
import { SelectCountryField } from "./SelectCountryField";
import { Button } from "@/components/ui/Button";

export const SUBSCRIPTION_PERIODS = [
  {
    id: 1,
    value: "1m",
    label: "1 month",
  },
  {
    id: 2,
    value: "3m",
    label: "3 months",
  },
  {
    id: 3,
    value: "12m",
    label: "12 months",
    sale: 20,
  },
];

export const LOCATION_OPTIONS = [
  { id: 1, label: "United Kingdom", icon: "mdi:crown" },
  { id: 2, label: "United States", icon: "mdi:food" },
  { id: 3, label: "Ukraine", icon: "mdi:currency-uah" },
  { id: 4, label: "France", icon: "mdi:france" },
];

export function ProductConfigurationForm() {
  const [isCustomQuantity, setIsCustomQuantity] = useState(false);

  return (
    <form className="space-y-6">
      <div className={isCustomQuantity ? "block" : "hidden"}>
        <FormInput type="number" name="quantity" />
      </div>

      <div className={!isCustomQuantity ? "block" : "hidden"}>
        <QuantityField name="quantity" />
      </div>

      <Button type="button" variant={"outline"} onClick={() => setIsCustomQuantity((v) => !v)}>
        <span className="body2 text-primary-500 font-bold!">
          {isCustomQuantity ? "Use slider" : "Enter custom quantity"}
        </span>
      </Button>
      <SubscriptionPeriodField name="subscriptionPeriodId" periods={SUBSCRIPTION_PERIODS} />
      <SelectCountryField name="countryId" options={LOCATION_OPTIONS} />
    </form>
  );
}
