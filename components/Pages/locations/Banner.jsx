"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

export default function LocationsBanner() {
  return (
    <section
      className="
      relative
      py-80-30
      overflow-hidden
      min-h-[100vh]
      flex
      items-center
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
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/webpage-3_2.mp4"
          type="video/mp4"
        />
      </video>


      {/* Content */}

      <div className="container-main relative z-10">

        <div
          className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-60-20
          "
        >

          {/* Left Content */}

          <div
            className="
            w-full
            lg:w-6/12
            "
          >

            <p
              className="
              uppercase
              tracking-[2px]
              text-[var(--color-red-1)]
              !mb-5
              "
              data-reveal
            >
              Our Presence
            </p>


            <h1
              className="
              fs-60-32
              uppercase
              text-black
              !mb-8
              "
              data-reveal
            >
              Connecting Businesses Across{" "}
              <span className="text-[var(--color-red-1)]">
                The Globe
              </span>
            </h1>


            <p
              className="
              text-gray-500
              fs-20-16
              leading-[1.7]
              max-w-xl
              !mb-8
              "
              data-reveal
            >
              Phoenix Business Advisory supports entrepreneurs, investors, and
              businesses across key international markets through strategic
              immigration and business advisory solutions. With experience
              across regions including the United States, Australia, the UAE,
              and India, we help clients pursue global opportunities with
              confidence and clarity.
            </p>


            <BaseButton
              title="Explore Locations"
              link
              toLink="/contact-us"
              style="primary w-fit"
            >
              <ArrowRight size={20} />
            </BaseButton>

          </div>


          {/* Right Image */}

          <div
            className="
            w-full
            lg:w-6/12
            flex-center
            "
          >

            <div
              className="
              relative
              w-full
              max-w-[600px]
              "
            >

              <Image
                src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Our-Office-scaled-e1789620528474.webp"
                alt="Phoenix Global Presence"
                width={700}
                height={700}
                className="
                w-full
                object-contain
                mix-blend-multiply
                "
                priority
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}