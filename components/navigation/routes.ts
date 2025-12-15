import { NavGroupType, NavItem } from "./types";

export const NAV_ROUTES: NavItem[] = [
  {
    id: "dashboard",
    type: NavGroupType.MAIN,
    title: "Dashboard",
    href: "/dashboard",
    icon: "mdi:view-dashboard-outline",
    visible: true,
  },

  // SYSTEM OVERVIEW
  {
    id: "observability",
    type: NavGroupType.SYSTEM,
    title: "Observability Overview",
    href: "/observability",
    icon: "mdi:eye-outline",
    visible: true,
  },
  {
    id: "logs",
    type: NavGroupType.SYSTEM,
    title: "Live Log Monitor",
    href: "/logs",
    icon: "mdi:monitor-eye",
    visible: true,
  },

  // MY SERVICES
  {
    id: "summary",
    type: NavGroupType.SERVICES,
    title: "Summary",
    href: "/services/summary",
    icon: "mdi:text-box-outline",
    visible: true,
  },
  {
    id: "proxy-list",
    type: NavGroupType.SERVICES,
    title: "Proxy List",
    href: "/services/proxies",
    icon: "mdi:server",
    visible: true,
  },
  {
    id: "settings",
    type: NavGroupType.SERVICES,
    title: "User Settings",
    href: "/settings",
    icon: "mdi:cog-outline",
    visible: true,
  },
  {
    id: "products",
    type: NavGroupType.SERVICES,
    title: "All Products",
    href: "/products",
    icon: "mdi:shopping-outline",
    visible: true,
  },

  // DEVELOPER
  {
    id: "api-keys",
    type: NavGroupType.DEVELOPER,
    title: "API Keys",
    href: "/developer/api-keys",
    icon: "mdi:key-outline",
    visible: true,
  },
  {
    id: "api-requests",
    type: NavGroupType.DEVELOPER,
    title: "API Requests",
    href: "/developer/requests",
    icon: "mdi:api",
    visible: true,
  },

  // AFFILIATE
  {
    id: "resellers",
    type: NavGroupType.AFFILIATE,
    title: "Resellers Statistics",
    href: "/affiliate/resellers",
    icon: "mdi:chart-bar",
    visible: true,
  },
  {
    id: "affiliate",
    type: NavGroupType.AFFILIATE,
    title: "Affiliate Program",
    href: "/affiliate",
    icon: "mdi:account-multiple-outline",
    visible: true,
  },

  // SUPPORT
  {
    id: "billing",
    type: NavGroupType.SUPPORT,
    title: "Billing",
    href: "/billing",
    icon: "mdi:credit-card-outline",
    visible: true,
    endIcon: "mdi:menu-right",
  },
  {
    id: "help",
    type: NavGroupType.SUPPORT,
    title: "Help",
    href: "/help",
    icon: "mdi:help-circle-outline",
    visible: true,
    endIcon: "mdi:menu-right",
  },
];
