import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import { AppShell } from "@/components/layout/AppShel";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
