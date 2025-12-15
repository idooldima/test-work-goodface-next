import { formatDiscountsRange } from "@/helpers/formatDiscountsRange";
import { BundleDiscountsTableProps } from "./BundleDiscountsTable";

export function MobileTable({ tiers }: BundleDiscountsTableProps) {
  return (
    <div className="block md:hidden">
      <div className="w-full divide-y rounded-md border text-sm">
        <div className="bg-muted flex justify-between px-4 py-2 font-medium">
          <span>IPs</span>
          <span>Price per IP</span>
        </div>

        {tiers.map((tier, index) => (
          <div key={index} className="flex justify-between px-4 py-3">
            <span>{formatDiscountsRange(tier)}</span>
            <span>${tier.pricePerIp.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
