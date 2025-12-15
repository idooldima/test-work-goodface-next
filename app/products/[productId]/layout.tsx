import { Back } from "./components/Back";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-[#FAFAFA]">
      <Back />
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}
