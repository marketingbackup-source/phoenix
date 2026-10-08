import JobCard from "@/components/Pages/careers/JobCard";

export default function OpenPositions({ careers }) {
  return (
    <section
      id="open-positions"
      className="relative py-100-40 bg-[#f8f8f8]"
    >
      <div className="container-main">
        {/* Heading */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
            mb-60-20
          "
        >
          <div className="max-w-[750px]">
            <p
              className="
                uppercase
                tracking-[3px]
                text-[var(--color-red-1)]
                !mb-4
              "
              data-reveal
            >
              Current Opportunities
            </p>

            <h2
              className="
                fs-52-32
                uppercase
                !mb-0
              "
              data-reveal
            >
              Find Your Next{" "}
              <span className="text-[var(--color-red-1)]">
                Opportunity
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[500px]
              text-gray-500
              !mb-0
              lg:text-right
            "
            data-reveal
          >
            Explore our current openings and find a role where your skills,
            ambition and experience can make an impact.
          </p>
        </div>

        {/* Jobs */}
        {careers?.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {careers.map((career) => (
              <JobCard
                key={career.id}
                career={career}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              bg-white
              border
              border-black/10
              rounded-[24px]
              px-6
              py-16
              sm:px-10
              text-center
            "
          >
            <p className="text-sm uppercase tracking-[2px] text-[var(--color-red-1)] !mb-3">
              Careers at Phoenix
            </p>

            <h3 className="fs-36-24 !mb-4">
              No Open Positions Right Now
            </h3>

            <p className="text-gray-500 max-w-[650px] mx-auto !mb-0">
              We do not currently have any active openings. Please check back
              again for future opportunities with Phoenix Business Advisory.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}