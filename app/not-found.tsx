import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-[#FAFAFA] pt-16 text-center lg:min-h-screen">
      <h1 className="text-2xl font-semibold">Page not found</h1>

      <p className="text-muted-foreground">The page you are looking for doesn’t exist.</p>

      <Link href="/" className="underline">
        Go back home
      </Link>
    </div>
  );
}
