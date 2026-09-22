import { notFound } from "next/navigation";

import getVisaProgram from "@/services/cms/visa-programs/get-visa-program";
import { getMediaUrl } from "@/services/cms/media/get-media-url";

import VisaBanner from "@/components/Pages/visa/VisaBanner";
import VisaContentLayout from "@/components/Pages/visa/VisaContentLayout";

const SITE_URL = "https://www.phoenixbusinessadvisory.com";

const DEFAULT_OG_IMAGE =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/open-graph.png";

function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const visa = await getVisaProgram(slug);

  if (!visa) {
    return {
      title: "Phoenix Business Advisory",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = visa.acf || {};

  const fallbackTitle =
    visa.title || "Phoenix Business Advisory";

  const fallbackDescription =
    stripHtml(visa.excerpt || "") ||
    "Explore global business and immigration programs with Phoenix Business Advisory.";

  const title =
    seo.seo_title?.trim() || fallbackTitle;

  const description =
    seo.seo_description?.trim() || fallbackDescription;

  const canonical =
    seo.seo_canonical?.trim() ||
    `${SITE_URL}/visa-programs/${slug}`;

  const ogTitle =
    seo.og_title?.trim() || title;

  const ogDescription =
    seo.og_description?.trim() || description;

  let ogImage = DEFAULT_OG_IMAGE;
  let ogImageAlt = ogTitle;

  if (seo.og_image) {
    const media = await getMediaUrl(seo.og_image);

    if (media?.url) {
      ogImage = media.url;
      ogImageAlt = media.alt || ogTitle;
    }
  }

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: "Phoenix Business Advisory",
      type: "website",

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function VisaPage({ params }) {
  const { slug } = await params;

  const visa = await getVisaProgram(slug);

  if (!visa) {
    notFound();
  }

  const schema = visa.acf?.seo_schema?.trim();

  return (
    <>
      {schema && (
        <div
          dangerouslySetInnerHTML={{
            __html: schema,
          }}
        />
      )}

      <VisaBanner
        title={visa.title}
        excerpt={visa.excerpt}
        image={visa.image}
      />

      <VisaContentLayout content={visa.content} />
    </>
  );
}