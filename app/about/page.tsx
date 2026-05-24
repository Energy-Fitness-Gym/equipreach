import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] text-slate-900">
      <section className="relative overflow-hidden px-6 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#d7c0a8,transparent_35%),radial-gradient(circle_at_80%_30%,#7b9a91,transparent_35%),linear-gradient(135deg,#4b3f36,#1f2933)]" />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            ← Back home
          </Link>

          <div className="mt-16 max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              About EquipReach
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
              Helping families navigate accessibility equipment with more clarity.
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-white/85">
              EquipReach was created to simplify the often confusing process of
              understanding accessibility equipment, insurance realities,
              provider options, and possible next steps for patients and families.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-black/5">
          <h2 className="text-4xl font-bold">
            Why EquipReach exists
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Many clinicians, caregivers, and families spend hours trying to
            understand what equipment may help, what insurance may cover, where
            to find providers, and what alternatives exist when coverage is denied.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            EquipReach aims to create a simpler and more transparent starting
            point for navigating accessibility equipment and home support options.
          </p>
        </div>
      </section>
    </main>
  );
}