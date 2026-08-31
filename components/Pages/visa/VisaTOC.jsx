"use client";

import { useState } from "react";

export default function VisaTOC({ headings = [] }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  const scrollToSection = (id) => {
    setActiveId(id);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        rounded-4xl
        bg-white/[0.45]
        backdrop-blur-2xl
        border
        border-gray-200
        p-3
        lg:p-5
      "
    >
      {/* Mobile Accordion Header */}
      <button
        onClick={() => setOpen(!open)}
        className="
          lg:hidden
          flex-between
          w-full
          text-black
          uppercase
          font-medium
          py-2
        "
      >
        Table Of Contents

        <span>{open ? "-" : "+"}</span>
      </button>

      <div
        className={`
          ${open ? "block" : "hidden"}
          lg:block
        `}
      >
        <ul
          className="
            list-none
            !p-0
            !m-0
            max-h-[calc(100vh-300px)]
            overflow-y-auto
            pr-1
          "
        >
          {headings.map((item) => (
            <li key={item.id} className="!mb-3">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative
                  w-full
                  text-left
                  bg-[#f8f8f8]
                  border-l-[5px]
                  rounded-[4px]
                  px-5
                  py-3
                  text-[#292929]
                  !text-base
                  leading-snug
                  font-medium
                  tracking-[0.02em]
                  transition-all
                  duration-300
                  hover:text-[var(--color-red-1)]
                  ${
                    activeId === item.id
                      ? "border-l-[var(--color-red-1)]"
                      : "border-l-[#e7e7e7]"
                  }
                `}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}