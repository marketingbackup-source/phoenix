const BASE_URL =
  "https://www.phoenixbusinessadvisory.com/press-release";

const PRESS_RELEASE_TITLE =
  "Press Release - Phoenix Business Advisory";

const PRESS_RELEASE_DESCRIPTION =
  "Explore US Green Card by Investment options, EB-5, L1 Visa to Green Card pathways, and U.S. immigration strategies for entrepreneurs with expert guidance.";

const PRESS_RELEASE_OG_IMAGE =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/open-graph.png";

export const pressReleaseMetadata = {
  title: PRESS_RELEASE_TITLE,
  description: PRESS_RELEASE_DESCRIPTION,

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: PRESS_RELEASE_TITLE,
    description: PRESS_RELEASE_DESCRIPTION,
    url: BASE_URL,
    siteName: "Phoenix Business Advisory",
    type: "website",

    images: [
      {
        url: PRESS_RELEASE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Phoenix Business Advisory Press Release",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PRESS_RELEASE_TITLE,
    description: PRESS_RELEASE_DESCRIPTION,
    images: [PRESS_RELEASE_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};