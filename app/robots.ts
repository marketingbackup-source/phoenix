import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.phoenixbusinessadvisory.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",

      disallow: [
        "/api/",
        "/eligibility-result",
        "/not-eligible",
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}