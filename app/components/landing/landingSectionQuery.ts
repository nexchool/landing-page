/** Query-param navigation for landing sections (no hash URLs). */

export const LANDING_SECTION_PARAM = "section" as const;

export type LandingSectionId = "features" | "pricing" | "faq" | "about" | "cta";

const VALID = new Set<string>(["features", "pricing", "faq", "about", "cta"]);

export function isLandingSectionId(value: string | null): value is LandingSectionId {
  return value !== null && VALID.has(value);
}

export function landingSectionHref(id: LandingSectionId): string {
  const q = new URLSearchParams({ [LANDING_SECTION_PARAM]: id });
  return `/?${q.toString()}`;
}
