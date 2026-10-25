import type { MetadataRoute } from "next";
import { site } from "@/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.websiteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${site.websiteUrl}/product`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.websiteUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.websiteUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
