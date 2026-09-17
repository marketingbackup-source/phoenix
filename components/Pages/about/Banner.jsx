"use client";

import { ArrowRight } from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

export default function AboutBanner() {
  return (
    <section
      className="
      relative
      min-h-[100vh]
      overflow-hidden
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
          src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/background-1.mp4"
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
              About Phoenix
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
              Building Global Success Through
              <span className="text-[var(--color-red-1)]">
                {" "}Strategic Immigration Solutions
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
              Phoenix Business Advisory helps entrepreneurs and businesses
              achieve international growth through expert immigration,
              investment and business expansion strategies.
            </p>


            <BaseButton
              title="Discover More"
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

              <img
                src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/about-us-1-e1788429693609-1.webp"
                alt="Phoenix Business Advisory"
                width={700}
                height={700}
                className="
                w-full
                object-contain
                mix-blend-multiply
                "
                loading="eager"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}