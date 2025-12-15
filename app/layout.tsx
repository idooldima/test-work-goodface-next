import { Sidebar } from "@/components/layout/Sidebar";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShel";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
