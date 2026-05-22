const equipment = ["Stairlifts", "Ramps", "Hospital Beds"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] text-slate-900">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#d7c0a8,transparent_35%),radial-gradient(circle_at_80%_30%,#7b9a91,transparent_35%),linear-gradient(135deg,#4b3f36,#1f2933)]" />
        <div className="absolute inset-0 bg-black/35" />
        <nav className="relative z-10 mx-auto mt-6 flex max-w-6xl items-center justify-between rounded-full bg-white/90 px-6 py-4 shadow-lg backdrop-blur">
          <span className="font-bold tracking-wide text-slate-900">
            EquipReach
          </span>

          <div className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#equipment">Equipment</a>
            <a href="#how-it-works">How it works</a>
            <a href="#request-help">Request help</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-4xl flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Home accessibility guidance
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Helping families make home safer, faster.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Find stairlifts, ramps, hospital beds, and mobility equipment with
            clearer guidance on coverage, installation, local providers, and
            next steps.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#equipment"
              className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              Explore equipment
            </a>

            <a
              href="#request-help"
              className="rounded-full border border-white/70 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Request help
            </a>
          </div>
        </div>
      </section>

      <section id="equipment" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Start here
        </p>

        <h2 className="mt-3 max-w-2xl text-4xl font-bold">
          The equipment people often need quickly.
        </h2>

<div className="mt-10 grid gap-6 md:grid-cols-3">
  {equipment.map((item) => {
    const href =
      item === "Stairlifts"
        ? "/stairlifts"
        : item === "Ramps"
        ? "/ramps"
        : "/hospital-beds";

    return (
      <a
        key={item}
        href={href}
        className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <h3 className="text-2xl font-semibold">{item}</h3>

        <p className="mt-3 leading-relaxed text-slate-600">
          Learn coverage basics, installation needs, local providers, and
          alternatives if insurance does not cover it.
        </p>
      </a>
    );
  })}
</div>

<div className="mt-6 flex justify-center">
  <a
    href="/equipment"
    className="inline-flex rounded-full bg-slate-900 px-7 py-3 font-semibold text-white transition hover:bg-slate-800"
  >
    Explore all equipment
  </a>
</div>

      </section>
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 pb-24">
  <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-12">
    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
      How it works
    </p>

    <h2 className="mt-3 max-w-2xl text-4xl font-bold">
      A simpler way to figure out what comes next.
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Explore equipment",
          text: "Learn what each item is used for, what installation may involve, and what questions to ask first.",
        },
        {
          title: "Understand coverage",
          text: "Get clearer guidance on what insurance may or may not cover, plus common denial reasons.",
        },
        {
          title: "Find options",
          text: "Compare local providers, rentals, used equipment, and possible assistance resources.",
        },
      ].map((step, index) => (
        <div key={step.title} className="rounded-3xl bg-[#f5f1eb] p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            {index + 1}
          </div>

          <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

          <p className="mt-3 leading-relaxed text-slate-600">
            {step.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section
  id="request-help"
  className="mx-auto max-w-6xl px-6 pb-24"
>
  <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-8 py-16 text-white md:px-14">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7b9a91,transparent_30%),radial-gradient(circle_at_bottom_right,#d7c0a8,transparent_30%)] opacity-30" />

    <div className="relative z-10 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
        Coming soon
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight">
        A better way to navigate accessibility equipment and home care options.
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-white/75">
        We’re building tools to help families, caregivers, and clinicians
        better understand equipment options, provider availability,
        installation needs, and possible next steps.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur">
          Provider guidance
        </div>

        <div className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur">
          Coverage education
        </div>

        <div className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur">
          Accessibility resources
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="border-t border-black/5 bg-[#efe7dc]">
  <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
    <div className="max-w-md">
      <h3 className="text-2xl font-bold text-slate-900">
        EquipReach
      </h3>

      <p className="mt-4 leading-relaxed text-slate-600">
        Helping families, caregivers, and clinicians better navigate home
        accessibility equipment, coverage realities, and provider options.
      </p>
    </div>

    <div className="flex flex-col gap-3 text-sm text-slate-600">
      <a href="/equipment" className="transition hover:text-slate-900">
        Equipment
      </a>

      <a href="#how-it-works" className="transition hover:text-slate-900">
        How it works
      </a>

      <a href="#request-help" className="transition hover:text-slate-900">
        Coming soon
      </a>
    </div>
  </div>

  <div className="border-t border-black/5 px-6 py-6 text-center text-sm text-slate-500">
    © 2026 EquipReach. Built to simplify accessibility guidance.
  </div>
</footer>
    </main>
  );
}