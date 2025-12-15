import Link from "next/link";
import { Back } from "./components/Back";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Back />
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}
