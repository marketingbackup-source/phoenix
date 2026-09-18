"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

export default function NewsCoverageBanner() {
  return (
    <section
      className="
      relative
      py-80-40
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
          src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/background-2.mp4"
          type="video/mp4"
        />
      </video>


      {/* Content */}

      <div className="container-main relative z-10">

        <div
          className="
          flex
          flex-col-reverse
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
            >
              Media Recognition
            </p>


            <h1
              className="
              fs-52-32
              uppercase
              text-black
              !mb-8
              "
            >
              Featured In{" "}
              <span className="text-[var(--color-red-1)]">
                Leading Publications
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
            >
              Phoenix Business Advisory has been recognised by leading media
              platforms for its expertise in business migration, international
              expansion, and strategic advisory solutions. Our insights and
              achievements have been featured across reputed publications
              highlighting our work with entrepreneurs and global businesses.
            </p>


            <BaseButton
              title="Explore News Coverage"
              link
              toLink="/news-coverage"
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
            mt-15 lg:mt-0
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
                src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/News.png"
                alt="Phoenix Business Advisory News Coverage"
                width={700}
                height={700}
                className="
                max-w-[450px]
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