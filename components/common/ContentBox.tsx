import { cn } from "@/lib/utils";

export function ContentBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mb-6 h-full w-full bg-transparent", className)}>{children}</div>;
}
