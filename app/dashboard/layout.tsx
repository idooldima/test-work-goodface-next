export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="[#FAFAFA] min-h-screen">
      <div className="mx-auto max-w-7xl p-6">{children}</div>
    </div>
  );
}
