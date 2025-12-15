import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BundleDiscountsTable } from "./bundleDiscountsTable/BundleDiscountsTable";
import { Product } from "../../data/products.mock";
import { ContentBox } from "@/components/common/ContentBox";

type BundleDiscountsProps = {
  tiers: Product["pricing"]["bundleDiscounts"];
};

export function BundleDiscounts({ tiers }: BundleDiscountsProps) {
  return (
    <ContentBox>
      <Accordion type="single" collapsible defaultValue="bundle-discounts">
        <AccordionItem value="bundle-discounts">
          <AccordionTrigger>
            <span>Bundle discounts</span>
          </AccordionTrigger>

          <AccordionContent>
            <BundleDiscountsTable tiers={tiers} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ContentBox>
  );
}
