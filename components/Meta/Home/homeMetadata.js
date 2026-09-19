const BASE_URL = "https://www.phoenixbusinessadvisory.com";

const HOME_TITLE =
  "USA Business Visa| USA Green Card| Business Migration Service";

const HOME_DESCRIPTION =
  "Apply for USA Business Visa & USA Green Card with Phoenix Business Advisory — trusted experts in global business migration for USA, Australia, New Zealand, EU & UAE.";

const HOME_OG_IMAGE =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/open-graph.png";

export const homeMetadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: BASE_URL,
    siteName: "Phoenix Business Advisory",
    type: "website",

    images: [
      {
        url: HOME_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Phoenix Business Advisory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [HOME_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};