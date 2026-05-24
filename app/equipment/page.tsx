import { getEquipment } from "@/lib/airtable";
import Link from "next/link";
import EquipmentDirectory from "./components/equipment-directory";

export default async function EquipmentPage() {
  const equipment = await getEquipment();

  return (
    <main className="min-h-screen bg-[#f5f1eb] text-slate-900">
      <section className="relative overflow-hidden px-6 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,#d7c0a8,transparent_35%),radial-gradient(circle_at_85%_10%,#7b9a91,transparent_30%),linear-gradient(135deg,#4b3f36,#1f2933)]" />
        <div className="absolute inset-0 bg-black/35" />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white/90 px-6 py-4 shadow-lg backdrop-blur">
          <Link href="/" className="font-bold tracking-wide text-slate-900">
            EquipReach
          </Link>

          <div className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="/#equipment">Equipment</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#request-help">Request help</Link>
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-5xl px-2 pb-24 pt-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">
            Equipment directory
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
            Explore home accessibility equipment.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Browse equipment options, coverage notes, installation needs, and
            possible alternatives pulled from your EquipReach database.
          </p>
        </div>
      </section>

{/* Lower Section */}

<section className="mx-auto max-w-6xl px-6 py-16">
  <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
        Browse equipment
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        Equipment options in one place.
      </h2>

      <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
        Use this directory to quickly compare coverage notes, installation
        needs, rental options, and alternatives.
      </p>
    </div>

    <div className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-black/5">
      {equipment.length} items listed
    </div>
  </div>

<EquipmentDirectory equipment={equipment} />

</section>
    </main>
  );
}