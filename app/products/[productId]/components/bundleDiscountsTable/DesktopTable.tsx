import { formatDiscountsRange } from "@/helpers/formatDiscountsRange";
import { BundleDiscountsTableProps } from "./BundleDiscountsTable";

export function DesktopTable({ tiers }: BundleDiscountsTableProps) {
  return (
    <div className="hidden md:block">
      <div className="border-grey-200 w-full overflow-hidden rounded-[4px] border">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-grey-100">
            <tr>
              <th className="px-4 py-2 text-left font-medium">IPs</th>

              {tiers.map((tier, index) => (
                <th key={index} className="px-4 py-2 text-center font-medium">
                  {formatDiscountsRange(tier)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium">Price per IP</td>

              {tiers.map((tier, index) => (
                <td key={index} className="px-4 py-3 text-center">
                  ${tier.pricePerIp.toFixed(2)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
