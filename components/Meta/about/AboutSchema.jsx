const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "MP Singh",
  jobTitle: "Founder and President",

  worksFor: {
    "@type": "Organization",
    name: "Phoenix Business Advisory",
  },

  image:
    "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6927982e6bbd5e7c2e1d84ce_MP%20Singh%20Profile-p-1080.jpg",

  url: "https://www.phoenixbusinessadvisory.com/about-us",
};

export default function AboutSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(aboutSchema),
      }}
    />
  );
}