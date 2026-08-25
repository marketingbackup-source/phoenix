"use client";

import { useMemo } from "react";

import VisaTOC from "./VisaTOC";
import VisaContent from "./VisaContent";
import VisaInquiryForm from "./VisaInquiryForm";

export default function VisaContentLayout({ content }) {
  const headings = useMemo(() => {
    if (!content) return [];

    const parser = new DOMParser();

    const doc = parser.parseFromString(content, "text/html");

    return Array.from(doc.querySelectorAll("h2")).map((heading, index) => {
      const title = heading.textContent.trim();

      return {
        id: title
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-"),

        title,

        number: index + 1,
      };
    });
  }, [content]);

  const cleanContent = (html) => {
    if (!html) return "";

    return (
      html

        // Remove all br tags
        .replace(/<br\s*\/?>/gi, "")

        // Remove empty paragraphs
        .replace(/<p>\s*<\/p>/gi, "")

        // Remove paragraphs containing only whitespace
        .replace(/<p>\s*&nbsp;\s*<\/p>/gi, "")
    );
  };

  const updatedContent = useMemo(() => {
    if (!content) return "";

    const cleanHTML = cleanContent(content);

    const parser = new DOMParser();

    const doc = parser.parseFromString(cleanHTML, "text/html");

    const headings = doc.querySelectorAll("h2");

    headings.forEach((heading) => {
      const title = heading.textContent.trim();

      const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      heading.setAttribute("id", id);
    });

    return doc.body.innerHTML;
  }, [content]);

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

          <div
            className="
            lg:col-span-6
            "
          >
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

          <aside
            className="
            lg:col-span-3
            "
          >
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
