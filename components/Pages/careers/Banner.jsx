"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  TrendingUp,
} from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

const videoUrl =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/background-1.mp4";

export default function CareerBanner() {
  return (
    <section
      className="
        relative
        min-h-[100vh]
        overflow-hidden
        flex
        items-center
        py-80-40
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
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-60-20
            items-center
          "
        >
          {/* Left Content */}
          <div className="lg:col-span-7">
            <p
              className="
                uppercase
                tracking-[3px]
                text-[var(--color-red-1)]
                !mb-5
              "
              data-reveal
            >
              Careers at Phoenix
            </p>

            <h1
              className="
                fs-60-32
                uppercase
                max-w-[900px]
                !mb-7
              "
              data-reveal
            >
              Build a Career That Goes{" "}
              <span className="text-[var(--color-red-1)]">
                Beyond Borders
              </span>
            </h1>

            <p
              className="
                fs-20-16
                text-gray-500
                max-w-[720px]
                leading-[1.8]
                !mb-8
              "
              data-reveal
            >
              Join a team working at the intersection of business advisory,
              international expansion and global opportunities. Build your
              expertise, take ownership and grow with Phoenix.
            </p>

            <BaseButton
              title="View Open Positions"
              link
              toLink="#open-positions"
              style="primary w-fit"
            >
              <ArrowRight size={19} />
            </BaseButton>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-5">
            <div
              className="
                relative
                border
                border-black/10
                bg-white/75
                backdrop-blur-xl
                p-6
                sm:p-8
                lg:p-10
                rounded-[28px]
                shadow-[0_30px_80px_rgba(0,0,0,0.08)]
              "
              data-reveal="right"
            >
              <div
                className="
                  absolute
                  -top-3
                  -right-3
                  w-20
                  h-20
                  bg-[var(--color-red-1)]
                  rounded-[22px]
                  -z-10
                  opacity-15
                "
              />

              <p className="text-sm uppercase tracking-[2px] text-gray-400 !mb-8">
                Grow With Phoenix
              </p>

              <div className="space-y-7">
                {/* Career Growth */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      shrink-0
                      w-12
                      h-12
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-[var(--color-red-1)]/10
                      text-[var(--color-red-1)]
                    "
                  >
                    <TrendingUp size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg !mb-1">
                      Career Growth
                    </h3>

                    <p className="text-sm text-gray-500 !mb-0 leading-[1.6]">
                      Build capabilities through meaningful responsibilities
                      and continuous professional development.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-black/8" />

                {/* Global Exposure */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      shrink-0
                      w-12
                      h-12
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-[var(--color-red-1)]/10
                      text-[var(--color-red-1)]
                    "
                  >
                    <Globe2 size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg !mb-1">
                      Global Exposure
                    </h3>

                    <p className="text-sm text-gray-500 !mb-0 leading-[1.6]">
                      Work across international business environments and
                      global client requirements.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-black/8" />

                {/* Professional Ownership */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      shrink-0
                      w-12
                      h-12
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-[var(--color-red-1)]/10
                      text-[var(--color-red-1)]
                    "
                  >
                    <BriefcaseBusiness size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg !mb-1">
                      Professional Ownership
                    </h3>

                    <p className="text-sm text-gray-500 !mb-0 leading-[1.6]">
                      Contribute ideas, own outcomes and become part of a
                      performance-driven team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}