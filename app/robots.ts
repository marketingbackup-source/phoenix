import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.phoenixbusinessadvisory.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/eligibility-result",
          "/not-eligible",
        ],
      },

      // AI Crawlers
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}