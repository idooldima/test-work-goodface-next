"use client";

import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Icon } from "@iconify/react";

type Option = {
  id: number;
  label: string;
  icon?: string;
};

type Props = {
  name: string;
  options: Option[];
};

export function SelectCountryField({ name, options }: Props) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="subtitle2">Select location</FormLabel>

          <FormControl>
            <Select
              value={field.value ? String(field.value) : undefined}
              onValueChange={(value) => field.onChange(Number(value))}
            >
              <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>

              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.id} value={String(option.id)}>
                    <Icon icon={option.icon ?? ""} />
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
