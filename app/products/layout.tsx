export default function AllProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-12 lg:py-6">{children}</div>
    </div>
  );
}
