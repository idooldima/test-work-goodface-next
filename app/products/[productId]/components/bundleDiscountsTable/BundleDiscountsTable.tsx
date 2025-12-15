import { Product } from "../../../data/products.mock";
import { DesktopTable } from "./DesktopTable";
import { MobileTable } from "./MobileTable";

export type BundleDiscountsTableProps = {
  tiers: Product["pricing"]["bundleDiscounts"];
};

export function BundleDiscountsTable({ tiers }: BundleDiscountsTableProps) {
  return (
    <>
      <div className="hidden md:block">
        <DesktopTable tiers={tiers} />
      </div>

      <div className="block md:hidden">
        <MobileTable tiers={tiers} />
      </div>
    </>
  );
}
