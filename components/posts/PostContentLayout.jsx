"use client";

import Image from "next/image";
import { useMemo } from "react";

import VisaTOC from "@/components/Pages/visa/VisaTOC";
import VisaContent from "@/components/Pages/visa/VisaContent";

/**
 * Convert heading text into a URL-friendly anchor ID.
 */
function createHeadingId(title = "") {
  return title
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#8211;|&#8212;/gi, "-")
    .replace(/&#8217;|&#39;/gi, "'")
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Convert heading HTML into readable TOC text.
 *
 * DOMParser is intentionally avoided because it is unavailable
 * during Next.js server-side rendering.
 */
function getHeadingText(html = "") {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#34;/gi, '"')
    .replace(/&#39;|&#8217;/gi, "'")
    .replace(/&#8211;/gi, "–")
    .replace(/&#8212;/gi, "—")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Remove unwanted WordPress markup.
 */
function cleanContent(html = "") {
  return html
    // Remove BR tags
    .replace(/<br\s*\/?>/gi, "")

    // Remove empty paragraphs
    .replace(/<p(?:\s[^>]*)?>\s*<\/p>/gi, "")

    // Remove paragraphs containing only &nbsp;
    .replace(/<p(?:\s[^>]*)?>\s*&nbsp;\s*<\/p>/gi, "");
}

/**
 * Process post content:
 *
 * 1. Clean unnecessary markup
 * 2. Extract H2 headings
 * 3. Generate heading IDs
 * 4. Insert IDs into H2 elements
 * 5. Generate TOC data
 *
 * This implementation is safe for both browser and SSR.
 */
function processContent(html = "") {
  if (!html) {
    return {
      html: "",
      headings: [],
    };
  }

  const cleanedHTML = cleanContent(html);

  const headings = [];
  let headingIndex = 0;

  const updatedHTML = cleanedHTML.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (fullMatch, attributes = "", innerHTML = "") => {
      const title = getHeadingText(innerHTML);

      if (!title) {
        return fullMatch;
      }

      const id = createHeadingId(title);

      headingIndex += 1;

      headings.push({
        id,
        title,
        number: headingIndex,
      });

      /*
       * Remove an existing WordPress ID before inserting ours.
       * This prevents duplicate id attributes.
       */
      const cleanAttributes = attributes.replace(
        /\s+id=(["']).*?\1/gi,
        ""
      );

      return `<h2${cleanAttributes} id="${id}">${innerHTML}</h2>`;
    }
  );

  return {
    html: updatedHTML,
    headings,
  };
}

export default function PostContentLayout({ content, image }) {
  const processedContent = useMemo(() => {
    return processContent(content);
  }, [content]);

  const {
    html: updatedContent,
    headings,
  } = processedContent;

  return (
    <section
      className="
        py-80-30
        bg-white
      "
    >
      <div className="container-main posts-grid">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-60-20
          "
        >
          {/* Desktop TOC */}
          <aside
            className="
              hidden
              lg:block
              lg:col-span-3
            "
          >
            <div
              className="
                sticky
                top-28
              "
            >
              <VisaTOC headings={headings} />
            </div>
          </aside>

          {/* Content */}
          <div
            className="
              col-span-1
              lg:col-span-9
            "
          >
            {/* Mobile TOC */}
            <div
              className="
                lg:hidden
                !mb-8
              "
            >
              <VisaTOC headings={headings} />
            </div>

            {/* Featured Image */}
            {image && (
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  !mb-10
                "
              >
                <Image
                  src={image}
                  alt="Blog Featured Image"
                  width={1200}
                  height={700}
                  className="
                    w-full
                    h-auto
                    object-cover
                    rounded-2xl
                  "
                />
              </div>
            )}

            <VisaContent content={updatedContent} />
          </div>
        </div>
      </div>
    </section>
  );
}