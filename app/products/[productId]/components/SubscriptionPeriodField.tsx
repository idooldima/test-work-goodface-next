"use client";

import { Badge } from "@/components/ui/badge";
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
        <FormItem>
          <FormLabel className="subtitle2">Select subscription cycle</FormLabel>

          <FormControl>
            <RadioGroup
              value={String(field.value)}
              onValueChange={(value) => field.onChange(Number(value))}
            >
              {periods.map((period) => {
                const isSelected = field.value === period.id;

                return (
                  <label
                    key={period.id}
                    className={`border-grey-300 flex cursor-pointer items-center gap-2 rounded-[4px] border px-4 py-3 transition ${isSelected ? "ring-primary-500 bg-primary-50 ring-2" : ""} `}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value={String(period.id)} />
                      <span>{period.label}</span>
                    </div>

                    {period.sale && <Badge variant={"secondary"}>Save {period.sale}%</Badge>}
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
