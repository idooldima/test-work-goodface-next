import * as React from "react";
import { cn } from "@/lib/utils";

type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-10 w-full rounded-md border px-3 text-sm outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

BaseInput.displayName = "BaseInput";