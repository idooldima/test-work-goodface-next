"use client";

import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Period = {
  id: number;
  value: string;
  label: string;
  sale?: number;
};

type Props = {
  name: "subscriptionPeriodId";
  periods: Period[];
};

export function SubscriptionPeriodField({ name, periods }: Props) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Select subscription cycle</FormLabel>

          <FormControl>
            <RadioGroup
              value={String(field.value)}
              onValueChange={(value) => field.onChange(Number(value))}
              className="space-y-2"
            >
              {periods.map((period) => {
                const isSelected = field.value === period.id;

                return (
                  <label
                    key={period.id}
                    className={`flex cursor-pointer items-center justify-between rounded-md border px-4 py-3 transition ${isSelected ? "ring-primary ring-2" : ""} `}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={String(period.id)} />
                      <span>{period.label}</span>
                    </div>

                    {period.sale && (
                      <span className="rounded-md px-2 py-1 text-xs font-medium">
                        Save {period.sale}%
                      </span>
                    )}
                  </label>
                );
              })}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
