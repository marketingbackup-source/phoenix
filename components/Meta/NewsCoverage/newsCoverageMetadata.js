const BASE_URL =
  "https://www.phoenixbusinessadvisory.com/news-coverage";

const NEWS_COVERAGE_TITLE =
  "Phoenix Business Advisory in the News";

const NEWS_COVERAGE_DESCRIPTION =
  "Stay updated with the latest news and media coverage of Phoenix Business Advisory. See how we are making headlines and driving success for our clients globally.";

const NEWS_COVERAGE_OG_IMAGE =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/open-graph.png";

export const newsCoverageMetadata = {
  title: NEWS_COVERAGE_TITLE,
  description: NEWS_COVERAGE_DESCRIPTION,

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: NEWS_COVERAGE_TITLE,
    description: NEWS_COVERAGE_DESCRIPTION,
    url: BASE_URL,
    siteName: "Phoenix Business Advisory",
    type: "website",

    images: [
      {
        url: NEWS_COVERAGE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Phoenix Business Advisory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: NEWS_COVERAGE_TITLE,
    description: NEWS_COVERAGE_DESCRIPTION,
    images: [NEWS_COVERAGE_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};