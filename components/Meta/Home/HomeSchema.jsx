const organizationSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.phoenixbusinessadvisory.com/#organization",
    name: "Phoenix Business Advisory",
    url: "https://www.phoenixbusinessadvisory.com/",
    logo: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/658e70d0c4c1c4b70cae9449_Phoenix-Logo-.png",
    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/658e70d0c4c1c4b70cae9449_Phoenix-Logo-.png",
    telephone: "+91-99645-44000",
    email: "info@pcba.com.au",

    sameAs: [
      "https://www.facebook.com/PhoenixBusinessAdvisory/",
      "https://www.instagram.com/phoenix_business_advisory/",
      "https://www.linkedin.com/company/phoenixbusinessadvisory",
      "https://www.youtube.com/channel/UCfplY4-z4DaL_DMXe34CKBg",
      "https://x.com/phoenix_pr_visa",
    ],

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "180",
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.phoenixbusinessadvisory.com/#localbusiness",
    name: "Phoenix Business Advisory",
    url: "https://www.phoenixbusinessadvisory.com/",

    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/658e70d0c4c1c4b70cae9449_Phoenix-Logo-.png",

    logo:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/658e70d0c4c1c4b70cae9449_Phoenix-Logo-.png",

    telephone: "+91-99645-44000",
    email: "info@pcba.com.au",
    priceRange: "$$",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "A-812, Wing A, Mondeal Heights, Ramdev Nagar",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380015",
      addressCountry: "IN",
    },

    sameAs: [
      "https://www.facebook.com/PhoenixBusinessAdvisory/",
      "https://www.instagram.com/phoenix_business_advisory/",
      "https://www.linkedin.com/company/phoenixbusinessadvisory",
      "https://www.youtube.com/channel/UCfplY4-z4DaL_DMXe34CKBg",
      "https://x.com/phoenix_pr_visa",
    ],

    parentOrganization: {
      "@id": "https://www.phoenixbusinessadvisory.com/#organization",
    },

    hasPOS: [
      {
        "@type": "Place",
        name: "Phoenix Business Advisory - Ahmedabad Office",
        telephone: "+91-99645-44000",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "A-812, Wing A, Mondeal Heights, Ramdev Nagar",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "380015",
          addressCountry: "IN",
        },
      },

      {
        "@type": "Place",
        name: "Phoenix Business Advisory - Ludhiana Office",
        telephone: "+91-99645-44000",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shop No. 07 & 08 Second Floor of Wave Mall, Ferozepur Road",
          addressLocality: "Ludhiana",
          addressRegion: "Punjab",
          postalCode: "141012",
          addressCountry: "IN",
        },
      },

      {
        "@type": "Place",
        name: "Phoenix Business Advisory - Surat Office",
        telephone: "+91-99645-44000",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "A-wing, 202-203 Union Heights Rahul Raj Mall Lane Maharana Pratap Rd, Vesu",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          postalCode: "395007",
          addressCountry: "IN",
        },
      },

      {
        "@type": "Place",
        name: "Phoenix Business Advisory - Pune Office",
        telephone: "+91-99645-44000",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "WeWork, Futura, Magarpatta Rd, Kirtane Baugh",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          postalCode: "411028",
          addressCountry: "IN",
        },
      },

      {
        "@type": "Place",
        name: "Phoenix Business Advisory - Hyderabad Office",
        telephone: "+91-99645-44000",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Midtown Building, Road No. 1, Banjara Hills, Opp. Jalgam Vengal Rao Park",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500034",
          addressCountry: "IN",
        },
      },
    ],
  },

  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.phoenixbusinessadvisory.com/#website",
    url: "https://www.phoenixbusinessadvisory.com/",
    name: "Phoenix Business Advisory",

    publisher: {
      "@id": "https://www.phoenixbusinessadvisory.com/#organization",
    },
  },
];

const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",

  name: [
    "US Green Card by Investment",
    "L1 Visa USA",
    "New Zealand Investor Work Visa",
    "National Innovation Visa (NIV)",
  ],

  url: [
    "https://www.phoenixbusinessadvisory.com/us-green-card-by-investment",
    "https://www.phoenixbusinessadvisory.com/l1-visa",
    "https://www.phoenixbusinessadvisory.com/new-zealand-investor-work-visa",
    "https://www.phoenixbusinessadvisory.com/niv",
  ],
};

export default function HomeSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(navigationSchema),
        }}
      />
    </>
  );
}