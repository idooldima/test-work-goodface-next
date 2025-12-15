import { NavGroupType } from "./types";

export const NAV_SECTIONS: Record<NavGroupType, string> = {
  [NavGroupType.MAIN]: "",
  [NavGroupType.SYSTEM]: "System Overview",
  [NavGroupType.SERVICES]: "My Services",
  [NavGroupType.DEVELOPER]: "Developer Section",
  [NavGroupType.AFFILIATE]: "Affiliate Programs",
  [NavGroupType.SUPPORT]: "",
};
