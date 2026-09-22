export default function BlogsSchema({ posts = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    "@id":
      "https://www.phoenixbusinessadvisory.com/blogs#collectionpage",

    url:
      "https://www.phoenixbusinessadvisory.com/blogs",

    name:
      "Latest Articles - Phoenix Business Advisory",

    description:
      "Explore the latest articles from Phoenix Business Advisory on business migration, global mobility, investment pathways, visa programs, and international business opportunities.",

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
      logo: {
        "@type": "ImageObject",
        url:
          "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/open-graph.png",
      },
    },

    mainEntity: {
      "@type": "ItemList",

      numberOfItems: posts.length,

      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",

        position: index + 1,

        url: `https://www.phoenixbusinessadvisory.com/blogs/${post.slug}`,

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