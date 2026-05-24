const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

export async function getEquipment() {
  const response = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Equipment`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

if (!response.ok) {
  const errorText = await response.text();
  throw new Error(
    `Failed to fetch Airtable equipment: ${response.status} ${errorText}`
  );
}

  const data = await response.json();

  return data.records;
}

export function createSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getEquipmentBySlug(slug: string) {
  const equipment = await getEquipment();

  return equipment.find((item: { fields: Record<string, any> }) => {
    const name = item.fields["Equipment name"] || "";

    return createSlug(name) === slug;
  });
}