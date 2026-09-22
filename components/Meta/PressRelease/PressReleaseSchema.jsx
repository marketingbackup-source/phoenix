export default function PressReleaseSchema({ posts = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    "@id":
      "https://www.phoenixbusinessadvisory.com/press-release#collectionpage",

    url:
      "https://www.phoenixbusinessadvisory.com/press-release",

    name:
      "Press Release - Phoenix Business Advisory",

    description:
      "Explore US Green Card by Investment options, EB-5, L1 Visa to Green Card pathways, and U.S. immigration strategies for entrepreneurs with expert guidance.",

    isPartOf: {
      "@type": "WebSite",
      "@id":
        "https://www.phoenixbusinessadvisory.com/#website",
      url:
        "https://www.phoenixbusinessadvisory.com/",
      name: "Phoenix Business Advisory",
    },

    publisher: {
      "@type": "Organization",
      "@id":
        "https://www.phoenixbusinessadvisory.com/#organization",
      name: "Phoenix Business Advisory",
      url:
        "https://www.phoenixbusinessadvisory.com/",
    },

    mainEntity: {
      "@type": "ItemList",

      numberOfItems: posts.length,

      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",

        position: index + 1,

        url: `https://www.phoenixbusinessadvisory.com/press-release/${post.slug}`,

        name:
          post.title ||
          post.titleText ||
          post.slug,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}