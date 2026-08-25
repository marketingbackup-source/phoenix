"use client";

import Image from "next/image";
import { useMemo } from "react";

import VisaTOC from "@/components/Pages/visa/VisaTOC";
import VisaContent from "@/components/Pages/visa/VisaContent";

export default function PostContentLayout({ content, image }) {
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

  const updatedContent = useMemo(() => {
    if (!content) return "";

    const parser = new DOMParser();

    const doc = parser.parseFromString(content, "text/html");

    doc.querySelectorAll("br").forEach((item) => item.remove());

    doc.querySelectorAll("h2").forEach((heading) => {
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
    <section
      className="
      py-80-30
      bg-white
      "
    >
      <div className="container-main">
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
