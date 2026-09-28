"use client";

import { useMemo } from "react";

import VisaTOC from "./VisaTOC";
import VisaContent from "./VisaContent";
import VisaInquiryForm from "./VisaInquiryForm";

/**
 * Convert a heading title into a URL-friendly anchor ID.
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
 * Convert basic HTML entities / markup into readable TOC text.
 *
 * This deliberately avoids DOMParser because DOMParser is a browser API
 * and is unavailable during Next.js server rendering.
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
 * Remove unwanted markup coming from WordPress.
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
 * Extract H2 headings and add matching IDs to the HTML.
 *
 * This implementation is server-safe and does not depend on DOMParser.
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
       * Remove an existing ID from WordPress before adding ours.
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

export default function VisaContentLayout({ content }) {
  const processedContent = useMemo(() => {
    return processContent(content);
  }, [content]);

  const { html: updatedContent, headings } = processedContent;

  return (
    <section className="py-80-30 bg-white">
      <div className="container-main">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-60-20
          "
        >
          {/* Desktop Table of Contents */}
          <aside
            className="
              hidden
              lg:block
              lg:col-span-3
            "
          >
            <div className="sticky top-28">
              <VisaTOC headings={headings} />
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-6">
            {/* Mobile Table of Contents */}
            <div
              className="
                lg:hidden
                !mb-8
              "
            >
              <VisaTOC headings={headings} />
            </div>

            <VisaContent content={updatedContent} />
          </div>

          {/* Inquiry Form */}
          <aside className="lg:col-span-3">
            <div
              className="
                lg:sticky
                lg:top-28
              "
            >
              <VisaInquiryForm />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}