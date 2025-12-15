import { NavItem, NavGroupType } from "./types";

export const groupNavByType = (items: NavItem[]): Partial<Record<NavGroupType, NavItem[]>> => {
  return items
    .filter((item) => item.visible)
    .reduce<Partial<Record<NavGroupType, NavItem[]>>>((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type]!.push(item);
      return acc;
    }, {});
};
