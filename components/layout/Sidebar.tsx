import { Icon } from "@iconify/react";
import { Nav } from "../navigation/Nav";
import { Button } from "../ui/Button";
import Header from "../ui/Header";

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"} `}
      />

      <aside
        className={`border-grey-200 scrollbar-hidden fixed inset-y-0 left-0 z-50 flex max-h-screen w-70 flex-col overflow-y-auto border-r bg-white transition-transform lg:sticky lg:z-auto lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        <Header />
        <SideBarContainer>
          <Button size={"sm"} variant="outline" className="text-[13px]">
            <Icon icon={"mdi:plus"} /> Buy new Proxies
          </Button>

          <Nav />
        </SideBarContainer>
        <SidebarFooter />
      </aside>
    </>
  );
}

export function SidebarFooter() {
  return (
    <div className="border-grey-200 -mx-4 mt-auto px-4 py-2.5">
      <div className="flex items-center justify-between border-t px-4 pt-4">
        <div>
          <div>Acc name</div>
          <div className="text-muted-foreground text-sm">acc.name@gmail.com</div>
        </div>

        <div>3</div>
      </div>
    </div>
  );
}

export function SideBarContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4 p-4">{children}</div>;
}
