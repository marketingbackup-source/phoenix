const BASE_URL =
  "https://www.phoenixbusinessadvisory.com/contact-us";

const CONTACT_TITLE =
  "Contact Phoenix Business Advisory - Get in Touch";

const CONTACT_DESCRIPTION =
  "Have questions about your visa application or business migration? Contact Phoenix Business Advisory today for expert advice and support. We're here to help you succeed.";

const CONTACT_OG_IMAGE =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/open-graph.png";

export const contactMetadata = {
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    url: BASE_URL,
    siteName: "Phoenix Business Advisory",
    type: "website",

    images: [
      {
        url: CONTACT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Phoenix Business Advisory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    images: [CONTACT_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};