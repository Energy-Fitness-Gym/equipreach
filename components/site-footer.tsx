import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[#efe7dc]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <h3 className="text-2xl font-bold text-slate-900">EquipReach</h3>

          <p className="mt-4 leading-relaxed text-slate-600">
            Helping families, caregivers, and clinicians better navigate home
            accessibility equipment, coverage realities, and provider options.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-600">
          <Link href="/equipment" className="transition hover:text-slate-900">
            Equipment
          </Link>

          <Link href="/about" className="transition hover:text-slate-900">
            About
          </Link>

          <Link href="/#how-it-works" className="transition hover:text-slate-900">
            How it works
          </Link>

          <Link href="/#request-help" className="transition hover:text-slate-900">
            Coming soon
          </Link>
        </div>
      </div>

      <div className="border-t border-black/5 px-6 py-6 text-center text-sm text-slate-500">
        <p>© 2026 EquipReach. Built to simplify accessibility guidance.</p>

        <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-slate-400">
          EquipReach is currently in early development and is intended for
          educational and informational purposes only. Coverage, provider
          availability, and equipment eligibility can vary significantly by
          insurance plan, diagnosis, region, and provider requirements.
        </p>
      </div>
    </footer>
  );
}