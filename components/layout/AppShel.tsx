"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import Header from "../ui/Header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="lg:hidden">
        <Header showBurger onMenuClick={() => setIsSidebarOpen(true)} />
      </div>

      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
