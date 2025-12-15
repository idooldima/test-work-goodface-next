"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { BaseInput } from "./BaseInput";

type FormInputProps = {
  name: string;
  label?: string;
  placeholder?: string; 
} & React.InputHTMLAttributes<HTMLInputElement>;

export function FormInput({
  name,
  label,
  placeholder,
    ...props
}: FormInputProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <BaseInput {...props} {...field} placeholder={placeholder} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}