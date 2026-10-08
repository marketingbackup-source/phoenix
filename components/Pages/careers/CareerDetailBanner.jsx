import {
  BriefcaseBusiness,
  Clock3,
  GraduationCap,
  MapPin,
} from "lucide-react";

const videoUrl =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/background-1.mp4";

function formatEmploymentType(value) {
  if (!value) return "";

  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function MetaBadge({ icon: Icon, children }) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-black/10
        bg-white/70
        px-4
        py-2
        text-sm
        text-black/70
        backdrop-blur-md
      "
    >
      <Icon
        size={16}
        className="text-[var(--color-red-1)]"
      />

      <span>{children}</span>
    </div>
  );
}

export default function CareerDetailBanner({ career }) {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-[145px]
        pb-14
        sm:pb-16
        lg:pb-20
      "
    >
      {/* Background Video */}
      <video
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          z-0
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="container-main relative z-10">
        <div className="max-w-[1100px]">
          <p
            className="
              uppercase
              tracking-[3px]
              text-[var(--color-red-1)]
              !mb-4
            "
          >
            Careers at Phoenix
          </p>

          <h1
            className="
              fs-60-32
              !mb-7
              max-w-[1000px]
            "
          >
            {career.title}
          </h1>

          <div className="flex flex-wrap gap-3">
            {career.department && (
              <MetaBadge icon={BriefcaseBusiness}>
                {career.department}
              </MetaBadge>
            )}

            {career.location && (
              <MetaBadge icon={MapPin}>
                {career.location}
              </MetaBadge>
            )}

            {career.employmentType && (
              <MetaBadge icon={BriefcaseBusiness}>
                {formatEmploymentType(career.employmentType)}
              </MetaBadge>
            )}

            {career.experience && (
              <MetaBadge icon={Clock3}>
                {career.experience}
              </MetaBadge>
            )}

            {career.qualification && (
              <MetaBadge icon={GraduationCap}>
                {career.qualification}
              </MetaBadge>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}