import Link from "next/link";
import {
  createSlug,
  getEquipment,
  getEquipmentBySlug,
} from "@/lib/airtable";

export async function generateStaticParams() {
  const equipment = await getEquipment();

  return equipment.map((item: { fields: Record<string, any> }) => ({
    slug: createSlug(item.fields["Equipment name"] || ""),
  }));
}

export default async function EquipmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = await getEquipmentBySlug(slug);

  if (!item) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f1eb] px-6">
        <div className="rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
          <h1 className="text-3xl font-bold text-slate-900">
            Equipment not found
          </h1>

          <p className="mt-4 text-slate-600">
            This equipment item could not be found.
          </p>

          <Link
            href="/equipment"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Back to equipment
          </Link>
        </div>
      </main>
    );
  }

  const fields = item.fields;

  const name = fields["Equipment name"];
  const category = fields.Category;
  const coverage =
    fields["Insurance Coverage Likelihood"] ||
    fields["Coverage Likelihood"];

  const notes =
    fields["Coverage Notes"] ||
    "Additional coverage guidance will be added soon.";

  return (
    <main className="min-h-screen bg-[#f5f1eb] text-slate-900">
      <section className="relative overflow-hidden px-6 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#d7c0a8,transparent_35%),radial-gradient(circle_at_80%_30%,#7b9a91,transparent_35%),linear-gradient(135deg,#4b3f36,#1f2933)]" />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-5xl">


          <div className="mt-16 max-w-3xl text-white">
            {category && (
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                {category}
              </p>
            )}

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
              {name}
            </h1>

            {coverage && (
              <div className="mt-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                {coverage}
              </div>
            )}

            <p className="mt-8 text-lg leading-relaxed text-white/85 sm:text-xl">
              {notes}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
  <div className="grid gap-6 lg:grid-cols-3">
    <div className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-black/5 lg:col-span-2">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
        Coverage reality
      </p>

      <h2 className="mt-4 text-5xl font-bold leading-tight">
        Insurance coverage for {name.toLowerCase()} can vary significantly.
      </h2>

      <p className="mt-8 text-xl leading-relaxed text-slate-600">
        {notes}
      </p>
    </div>

    <div className="rounded-[2rem] bg-[#efe7dc] p-10 shadow-sm ring-1 ring-black/5">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Common category
      </p>

      <h3 className="mt-4 text-4xl font-bold leading-tight">
        {category || "Accessibility equipment"}
      </h3>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Equipment needs can vary depending on mobility, safety, home setup,
        caregiver support, and long-term goals.
      </p>
    </div>

    <div className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-black/5">
      <h3 className="text-3xl font-bold">
        What to consider
      </h3>

      <ul className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
        <li>• Insurance eligibility requirements</li>
        <li>• Home installation needs</li>
        <li>• Long-term vs temporary use</li>
        <li>• Provider availability</li>
      </ul>
    </div>

    <div className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-black/5">
      <h3 className="text-3xl font-bold">
        Possible alternatives
      </h3>

      <ul className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
        <li>• Rental equipment options</li>
        <li>• Refurbished equipment</li>
        <li>• Community assistance programs</li>
        <li>• Home modifications</li>
      </ul>
    </div>

    <div className="rounded-[2rem] bg-slate-900 p-10 text-white shadow-sm">
      <h3 className="text-4xl font-bold leading-tight">
        Need help finding options?
      </h3>

      <p className="mt-6 text-lg leading-relaxed text-white/75">
        Soon, you'll be able to submit your situation and get matched with
        possible providers, resources, and next steps.
      </p>

      <button className="mt-10 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
        Request help
      </button>
    </div>
  </div>
</section>
    </main>
  );
}