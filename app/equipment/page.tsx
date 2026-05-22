import { getEquipment } from "@/lib/airtable";
import Link from "next/link";

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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {equipment.map((item: any) => {
            const name = item.fields.Name || "Unnamed equipment";

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
              >
                <h2 className="text-2xl font-semibold">{name}</h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.fields["Coverage Notes"] ||
                    "Coverage guidance will be added soon."}
                </p>

                {item.fields["Installation Required"] && (
                  <p className="mt-5 inline-flex rounded-full bg-[#efe7dc] px-4 py-2 text-sm font-medium text-slate-700">
                    Installation may be required
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}