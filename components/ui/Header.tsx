import { Icon } from "@iconify/react";
import { Heading } from "./Heading";

type HeaderProps = {
  onMenuClick?: () => void;
  showBurger?: boolean;
};

export default function Header({ onMenuClick, showBurger }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-2.5">
      <Heading as="h4">Logo</Heading>
      <div className="flex items-center gap-2">
        <Icon icon="mdi:bell-outline" className="h-5 w-5 cursor-pointer" />
        {showBurger && (
          <button
            onClick={onMenuClick}
            className="rounded-md p-2 hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        )}
      </div>
    </header>
  );
}
