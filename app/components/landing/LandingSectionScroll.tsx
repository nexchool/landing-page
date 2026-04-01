"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { isLandingSectionId, LANDING_SECTION_PARAM } from "./landingSectionQuery";

/**
 * When the home page loads with `?section=…`, scrolls to that section (fixed-nav offset via CSS scroll-margin).
 */
export function LandingSectionScroll() {
  const searchParams = useSearchParams();
  const raw = searchParams.get(LANDING_SECTION_PARAM);

  useEffect(() => {
    if (!isLandingSectionId(raw)) return;

    const t = window.setTimeout(() => {
      document.getElementById(raw)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => clearTimeout(t);
  }, [raw]);

  return null;
}
