const BASE_URL =
  "https://www.phoenixbusinessadvisory.com/testimonial";

const TESTIMONIAL_TITLE =
  "Client Testimonials - Phoenix Business Advisory Reviews";

const TESTIMONIAL_DESCRIPTION =
  "Read real client testimonials and reviews about their experience with Phoenix Business Advisory. See how we have helped clients successfully navigate their business and migration journeys.";

const TESTIMONIAL_OG_IMAGE =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/open-graph.png";

export const testimonialMetadata = {
  title: TESTIMONIAL_TITLE,
  description: TESTIMONIAL_DESCRIPTION,

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: TESTIMONIAL_TITLE,
    description: TESTIMONIAL_DESCRIPTION,
    url: BASE_URL,
    siteName: "Phoenix Business Advisory",
    type: "website",

    images: [
      {
        url: TESTIMONIAL_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Phoenix Business Advisory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TESTIMONIAL_TITLE,
    description: TESTIMONIAL_DESCRIPTION,
    images: [TESTIMONIAL_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};