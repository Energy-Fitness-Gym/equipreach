import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="relative z-20 mx-auto mt-6 flex max-w-6xl items-center justify-between rounded-full bg-white/90 px-6 py-4 shadow-lg backdrop-blur">
      <Link href="/" className="font-bold tracking-wide text-slate-900">
        EquipReach
      </Link>

      <div className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
        <Link href="/equipment">Equipment</Link>
        <Link href="/about">About</Link>
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/#request-help">Request help</Link>
      </div>
    </nav>
  );
}