import { Icon } from "@iconify/react";
import { Button } from "../ui/Button";
import { groupNavByType } from "./groupByType";
import { NAV_ROUTES } from "./routes";
import { NAV_SECTIONS } from "./sections";
import { NavGroupType } from "./types";

const grouped = groupNavByType(NAV_ROUTES);

const SECTION_HAS_DIVIDER: Partial<Record<NavGroupType, boolean>> = {
  [NavGroupType.SUPPORT]: true,
};

export function Nav() {
  return (
    <nav className="space-y-4">
      {(Object.values(NavGroupType) as NavGroupType[]).map((type) => {
        const items = grouped[type];
        if (!items || items.length === 0) return null;

        return (
          <div
            key={type}
            className={SECTION_HAS_DIVIDER[type] ? "border-grey-200 border-t pt-4" : ""}
          >
            {NAV_SECTIONS[type] && (
              <p className="text-grey-700 text-overline mb-2 px-4">{NAV_SECTIONS[type]}</p>
            )}

            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-primary-500 hover:bg-primary-50 text-grey-800 flex items-center gap-3 rounded-[lg] px-4 py-1"
                  >
                    {item.icon && <Icon icon={item.icon} className="h-4 w-4" />}
                    <span className="subtitle2">{item.title}</span>
                    {item.endIcon && <Icon icon={item.endIcon} className="ml-auto h-5 w-5" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
