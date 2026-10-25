/**
 * Single source of truth for the Nexchool marketing site: company name, tagline,
 * contact details, URLs, and meta copy. Import `site` from here only — do not
 * duplicate these values in components.
 */
export const site = {
  /** Product / company display name */
  name: "Nexchool",

  /** Short line under the name (metadata, hero context) */
  tagline: "Next-Gen School Management",

  /** Default meta description for the home page and similar */
  metaDescription:
    "School management for one school or a trust of many campuses: admissions, attendance, fees, timetable, examinations and marksheets, transport, hostel, and a mobile app for teachers and families.",

  /** General inbox — demos, sales, CTA email links */
  email: "hello@nexchool.in",

  /** Privacy, legal notices, and support */
  supportEmail: "hello@nexchool.in",

  /** Canonical public URL (include protocol) */
  websiteUrl: "https://www.nexchool.in",

  /** Same site, display-only (e.g. inline “Website: …”) */
  websiteLabel: "www.nexchool.in",

  /** Human-readable phone for UI */
  phoneDisplay: "+91 79845 53527",

  /** `tel:` link target — digits after + as needed for dialer */
  phoneHref: "tel:+917984553527",

  /**
   * Google Play listing. Leave empty until the app is live: the app section
   * then shows a "Coming soon" badge instead of a dead link.
   */
  playStoreUrl: "",

  /** Shown in footer © line */
  copyrightYear: 2026,
} as const;

export type SiteConfig = typeof site;
