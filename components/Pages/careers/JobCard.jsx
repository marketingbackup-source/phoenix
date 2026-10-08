import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  MapPin,
} from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

function formatEmploymentType(value) {
  if (!value) return "";

  return value
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default function JobCard({ career }) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        border
        border-black/10
        bg-white
        rounded-[24px]
        p-6
        sm:p-8
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[var(--color-red-1)]/40
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]
      "
      data-reveal
    >
      {/* Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[3px]
          bg-[var(--color-red-1)]
          scale-y-0
          origin-bottom
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
      />

      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-7">
          {career.department && (
            <p
              className="
                text-[12px]
                sm:text-sm
                uppercase
                tracking-[2px]
                text-[var(--color-red-1)]
                !mb-3
              "
            >
              {career.department}
            </p>
          )}

          <h3
            className="
              text-[24px]
              sm:text-[28px]
              leading-[1.2]
              !mb-0
              transition-colors
              duration-300
              group-hover:text-[var(--color-red-1)]
            "
          >
            {career.title}
          </h3>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8">
          {career.location && (
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={17} />

              <span className="text-sm">
                {career.location}
              </span>
            </div>
          )}

          {career.employmentType && (
            <div className="flex items-center gap-2 text-gray-500">
              <BriefcaseBusiness size={17} />

              <span className="text-sm">
                {formatEmploymentType(career.employmentType)}
              </span>
            </div>
          )}

          {career.experience && (
            <div className="flex items-center gap-2 text-gray-500">
              <Clock3 size={17} />

              <span className="text-sm">
                {career.experience}
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-black/8 flex items-center justify-between gap-5">
          {career.qualification ? (
            <div>
              <span className="block text-[11px] uppercase tracking-[1.5px] text-gray-400 mb-1">
                Qualification
              </span>

              <span className="text-sm text-black">
                {career.qualification}
              </span>
            </div>
          ) : (
            <div />
          )}

          <BaseButton
            title="View Position"
            link
            toLink={`/careers/${career.slug}`}
            style="primary shrink-0"
          >
            <ArrowUpRight size={18} />
          </BaseButton>
        </div>
      </div>
    </article>
  );
}