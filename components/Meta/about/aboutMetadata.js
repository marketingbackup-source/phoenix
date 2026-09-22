const BASE_URL = "https://www.phoenixbusinessadvisory.com/about-us";

const ABOUT_TITLE =
  "USA L1 Visa| Australia PR Visa | Business Migration Consultant";

const ABOUT_DESCRIPTION =
  "USA L1 Visa, Australia PR Visa & business migration consultant services. Trusted New Zealand PR Consultant. Book your free consultation today.";

const ABOUT_OG_IMAGE =
  "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/658e70d0c4c1c4b70cae9449_Phoenix-Logo-.png";

export const aboutMetadata = {
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    url: BASE_URL,
    siteName: "Phoenix Business Advisory",
    type: "website",

    images: [
      {
        url: ABOUT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Phoenix Business Advisory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    images: [ABOUT_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};