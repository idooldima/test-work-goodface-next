import { cn } from "@/lib/utils";

export function ContentWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("border-grey-200 h-full w-full rounded-lg border bg-white p-6", className)}
    >
      {children}
    </section>
  );
}
