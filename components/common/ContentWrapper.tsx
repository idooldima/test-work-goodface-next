export function ContentWrapper({ children, className }: { children: React.ReactNode, className?: string; }) {
  return (
    <section className={`bg-white p-6 rounded-lg h-full w-full border border-grey-200 ${className ? className : ''}`}>
      {children}
    </section>
  );
}