import { Icon } from "@iconify/react";
import Link from "next/link";

export function Back() {
  return (
    <div className="mx-auto mb-6 max-w-7xl">
      <div className="flex items-center">
        <Link
          href="/products"
          className="border-grey-300 hover:bg-grey-50 hover:text-accent-foreground hover:border-grey-400 dark:border-input dark:bg-input/30 dark:hover:bg-input/50 inline-flex h-7 items-center gap-1.5 rounded-[4px] border bg-white px-3 text-[13px] font-bold"
        >
          <Icon icon="mdi:menu-left" className="h-4 w-4" /> Back to all
        </Link>
      </div>
    </div>
  );
}
