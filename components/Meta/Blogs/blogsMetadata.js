const BASE_URL =
  "https://www.phoenixbusinessadvisory.com/blogs";

const BLOGS_TITLE =
  "Latest Articles - Phoenix Business Advisory";

const BLOGS_DESCRIPTION =
  "Explore the latest articles from Phoenix Business Advisory on business migration, global mobility, investment pathways, visa programs, and international business opportunities.";

const BLOGS_OG_IMAGE =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/open-graph.png";

export const blogsMetadata = {
  title: BLOGS_TITLE,
  description: BLOGS_DESCRIPTION,

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: BLOGS_TITLE,
    description: BLOGS_DESCRIPTION,
    url: BASE_URL,
    siteName: "Phoenix Business Advisory",
    type: "website",

    images: [
      {
        url: BLOGS_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Phoenix Business Advisory Articles",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: BLOGS_TITLE,
    description: BLOGS_DESCRIPTION,
    images: [BLOGS_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};