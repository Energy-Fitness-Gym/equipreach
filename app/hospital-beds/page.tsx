import Link from "next/link";

export default function HospitalBedsPage() {
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
            Home care equipment
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
            Hospital Beds
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Hospital beds can support safer positioning, transfers, and care at
            home when a standard bed no longer meets someone’s medical or
            mobility needs.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Coverage reality
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Hospital beds may be covered, but documentation matters.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-600">
            Hospital beds are more likely to be considered durable medical
            equipment when there is a qualifying medical need. Approval often
            depends on physician documentation, medical necessity, diagnosis,
            and supplier requirements.
          </p>
        </div>

        <div className="rounded-3xl bg-[#efe7dc] p-8 shadow-sm ring-1 ring-black/5">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
            Common need
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Safer care and positioning at home
          </h2>

          <p className="mt-4 leading-relaxed text-slate-600">
            Often needed before discharge, after surgery, during serious illness,
            or when transfers from a standard bed are unsafe.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <h2 className="text-2xl font-bold">What to check first</h2>

          <ul className="mt-5 space-y-3 text-slate-600">
            <li>• Is there a qualifying diagnosis?</li>
            <li>• Has a physician documented medical necessity?</li>
            <li>• Is the bed needed temporarily or long-term?</li>
            <li>• Does the supplier handle insurance billing?</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <h2 className="text-2xl font-bold">Possible alternatives</h2>

          <ul className="mt-5 space-y-3 text-slate-600">
            <li>• Hospital bed rental</li>
            <li>• Bed rails</li>
            <li>• Over-bed tables or positioning supports</li>
            <li>• Private-pay DME suppliers</li>
          </ul>
        </div>

        <div
          id="request-help"
          className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm lg:col-span-1"
        >
          <h2 className="text-2xl font-bold">Need help finding options?</h2>

          <p className="mt-4 leading-relaxed text-white/75">
            Soon, you’ll be able to submit your situation and get matched with
            possible local providers or next steps.
          </p>

          <Link
            href="/#request-help"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900"
          >
            Request help
          </Link>
        </div>
      </section>
    </main>
  );
}