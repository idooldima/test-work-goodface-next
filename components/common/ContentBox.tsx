export function ContentBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-6 h-full w-full bg-transparent ${className ? className : ""}`}>
      {children}
    </div>
  );
}
