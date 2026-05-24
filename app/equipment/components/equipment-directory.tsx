"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type EquipmentItem = {
  id: string;
  fields: Record<string, any>;
};

export default function EquipmentDirectory({
  equipment,
}: {
  equipment: EquipmentItem[];
}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = useMemo(() => {
  const uniqueCategories = equipment
    .map((item) => item.fields.Category)
    .filter(Boolean);

  const sortedCategories = Array.from(
    new Set(uniqueCategories)
  ).sort();

  return ["All", ...sortedCategories];
}, [equipment]);

  const filteredEquipment = useMemo(() => {
  return equipment.filter((item) => {
    const name = item.fields["Equipment name"] || "";
    const category = item.fields.Category || "";

    const matchesSearch = name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}, [equipment, search, selectedCategory]);

  return (
    <>
      <div className="mb-10 space-y-5">
  <input
    type="text"
    placeholder="Search equipment..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-lg shadow-sm outline-none transition focus:border-slate-400"
  />

<p className="text-sm font-medium text-slate-500">
  {filteredEquipment.length} result
  {filteredEquipment.length !== 1 ? "s" : ""}
</p>

  <div className="flex flex-wrap gap-2">
    {categories.map((category) => (
      <button
        key={category}
        type="button"
        onClick={() => setSelectedCategory(category)}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          selectedCategory === category
            ? "bg-slate-900 text-white"
            : "bg-white text-slate-600 ring-1 ring-black/10 hover:bg-slate-100"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
</div>

      {filteredEquipment.length === 0 ? (
  <div className="rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
    <h3 className="text-2xl font-semibold text-slate-900">
      No equipment found
    </h3>

    <p className="mt-3 text-slate-600">
      Try adjusting your search or selecting a different category.
    </p>
  </div>
) : (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {filteredEquipment.map((item) => {
          const name =
            item.fields["Equipment name"] || "Unnamed equipment";
            const slug = name
  .toLowerCase()
  .trim()
  .replace(/&/g, "and")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

          const category = item.fields.Category;

          const coverage =
            item.fields["Insurance Coverage Likelihood"] ||
            item.fields["Coverage Likelihood"];

          const coverageNotes = item.fields["Coverage Notes"];

          return (
            <Link
  key={item.id}
  href={`/equipment/${slug}`}
  className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
>
              <div className="flex items-start justify-between gap-4">
                <div>
                  {category && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      {category}
                    </p>
                  )}

                  <h3 className="mt-2 text-2xl font-bold">
                    {name}
                  </h3>
                </div>

                {coverage && (
                  <span className="rounded-full bg-[#efe7dc] px-3 py-1 text-xs font-semibold text-slate-700">
                    {coverage}
                  </span>
                )}
              </div>

              <p className="mt-5 leading-relaxed text-slate-600">
                {coverageNotes ||
                  "Coverage guidance and next steps will be added soon."}
              </p>
            </Link>
          );
        })}
      </div>
)}
    </>
  );
}