import type { MetadataRoute } from "next";

import { getCategoryId } from "@/services/cms/categories/get-category-id";
import { getAllPostSlugs } from "@/services/cms/sitemap/get-all-post-slugs";
import { getAllVisaSlugs } from "@/services/cms/sitemap/get-all-visa-slugs";

const BASE_URL = "https://www.phoenixbusinessadvisory.com";

/*
 * Safely resolve WordPress modified/published dates.
 */
function getLastModified(
  modified?: string,
  published?: string,
): Date | undefined {
  const value = modified || published;

  if (!value) {
    return undefined;
  }

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /*
   * Static Website Pages
   *
   * We intentionally do not use `new Date()` as lastModified
   * for every static page because that would tell search engines
   * the page changed every time the sitemap is generated.
   */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${BASE_URL}/about-us`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/approvals`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/blogs`,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/contact-us`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${BASE_URL}/events-seminars`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/locations`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${BASE_URL}/news-coverage`,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    {
      url: `${BASE_URL}/press-release`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/testimonials`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${BASE_URL}/terms-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${BASE_URL}/disclaimer`,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${BASE_URL}/eligibility-tracker`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  /*
   * Get WordPress category IDs.
   */
  const [blogCategoryId, pressCategoryId] = await Promise.all([
    getCategoryId("blogs"),
    getCategoryId("press-release"),
  ]);

  /*
   * Fetch all dynamic URLs.
   *
   * Our sitemap helpers handle WordPress pagination internally,
   * so this works even when there are more than 100 records.
   */
  const [blogPosts, pressPosts, visaPrograms] = await Promise.all([
    getAllPostSlugs({
      category: blogCategoryId,
    }),

    getAllPostSlugs({
      category: pressCategoryId,
    }),

    getAllVisaSlugs(),
  ]);

  /*
   * Blog Detail Pages
   */
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const lastModified = getLastModified(
      post.modified,
      post.date,
    );

    return {
      url: `${BASE_URL}/blogs/${post.slug}`,

      ...(lastModified && {
        lastModified,
      }),

      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  /*
   * Press Release Detail Pages
   */
  const pressPages: MetadataRoute.Sitemap = pressPosts.map((post) => {
    const lastModified = getLastModified(
      post.modified,
      post.date,
    );

    return {
      url: `${BASE_URL}/press-release/${post.slug}`,

      ...(lastModified && {
        lastModified,
      }),

      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  /*
   * Visa Program Detail Pages
   */
  const visaPages: MetadataRoute.Sitemap = visaPrograms.map((visa) => {
    const lastModified = getLastModified(
      visa.modified,
      visa.date,
    );

    return {
      url: `${BASE_URL}/visa-programs/${visa.slug}`,

      ...(lastModified && {
        lastModified,
      }),

      changeFrequency: "monthly",
      priority: 0.9,
    };
  });

  /*
   * Final Sitemap
   */
  return [
    ...staticPages,
    ...visaPages,
    ...blogPages,
    ...pressPages,
  ];
}