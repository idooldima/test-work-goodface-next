export enum NavGroupType {
  MAIN = "MAIN",
  SYSTEM = "SYSTEM",
  SERVICES = "SERVICES",
  DEVELOPER = "DEVELOPER",
  AFFILIATE = "AFFILIATE",
  SUPPORT = "SUPPORT",
}

export interface NavItem {
  id: string;
  type: NavGroupType;
  title: string;
  href: string;
  icon?: string;
  visible: boolean;
}
