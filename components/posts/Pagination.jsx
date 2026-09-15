"use client";

import Link from "next/link";


export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}) {

  if (!totalPages || totalPages <= 1) {
    return null;
  }


  const getPageUrl = (page) => {

    if (page === 1) {
      return basePath;
    }

    return `${basePath}?page=${page}`;

  };


  return (

    <nav
      aria-label="Pagination"
      className="
        flex
        items-center
        justify-center
        gap-2
        !mt-16
      "
    >

      {/* Previous */}

      {currentPage > 1 ? (

        <Link
          href={getPageUrl(currentPage - 1)}
          className="
            flex
            items-center
            justify-center
            px-5
            py-3
            border
            border-black
            text-black
            text-sm
            font-semibold
            transition-colors
            duration-300
            hover:bg-black
            hover:text-white
          "
        >
          Previous
        </Link>

      ) : (

        <span
          className="
            flex
            items-center
            justify-center
            px-5
            py-3
            border
            border-gray-300
            text-gray-400
            text-sm
            font-semibold
            cursor-not-allowed
          "
        >
          Previous
        </span>

      )}


      {/* Page Numbers */}

      <div
        className="
          flex
          items-center
          gap-2
        "
      >

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((page) => {

          const isActive =
            page === currentPage;


          return (

            <Link
              key={page}
              href={getPageUrl(page)}
              aria-current={
                isActive
                  ? "page"
                  : undefined
              }
              className={`
                flex
                items-center
                justify-center
                w-11
                h-11
                border
                text-sm
                font-semibold
                transition-colors
                duration-300
                ${
                  isActive
                    ? "border-[var(--color-red-1)] bg-[var(--color-red-1)] text-white"
                    : "border-gray-300 text-black hover:border-black"
                }
              `}
            >
              {page}
            </Link>

          );

        })}

      </div>


      {/* Next */}

      {currentPage < totalPages ? (

        <Link
          href={getPageUrl(currentPage + 1)}
          className="
            flex
            items-center
            justify-center
            px-5
            py-3
            border
            border-black
            text-black
            text-sm
            font-semibold
            transition-colors
            duration-300
            hover:bg-black
            hover:text-white
          "
        >
          Next
        </Link>

      ) : (

        <span
          className="
            flex
            items-center
            justify-center
            px-5
            py-3
            border
            border-gray-300
            text-gray-400
            text-sm
            font-semibold
            cursor-not-allowed
          "
        >
          Next
        </span>

      )}

    </nav>

  );

}