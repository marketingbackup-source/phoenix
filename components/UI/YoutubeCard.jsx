"use client";

import { Play } from "lucide-react";

export default function YoutubeCard({
  thumbnail,
  url,
  title,
  className = "",
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
      group
      relative
      block
      overflow-hidden
      rounded-4xl
      border
      border-gray-200
      bg-white
      ${className}
      `}
    >

      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
        "
      />


      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/60
        via-transparent
        to-transparent
        "
      />


      <div
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        "
      >

        <div
          className="
          flex
          items-center
          justify-center
          w-16
          h-16
          rounded-full
          bg-white/90
          backdrop-blur-xl
          text-[var(--color-red-1)]
          transition-all
          duration-500
          group-hover:scale-110
          "
        >

          <Play
            size={26}
            fill="currentColor"
          />

        </div>

      </div>


      <div
        className="
        absolute
        bottom-0
        left-0
        right-0
        p-6
        "
      >

        <h3
          className="
          text-white
          uppercase
          text-sm
          tracking-[1px]
          "
        >
          {title}
        </h3>

      </div>

    </a>
  );
}