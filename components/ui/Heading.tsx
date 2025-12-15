import { cn } from "@/lib/utils";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
};

export function Heading({ as: Tag = "h1", className = "text-grey-800", children }: HeadingProps) {
  return <Tag className={cn(className)}>{children}</Tag>;
}
