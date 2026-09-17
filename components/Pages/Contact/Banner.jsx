"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

export default function ContactBanner() {
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
          src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/background-katko.mp4"
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
              Contact Phoenix
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
              Let's Build Your{" "}
              <span className="text-[var(--color-red-1)]">
                Global Future
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
              Connect with Phoenix Business Advisory for expert guidance on
              business migration, investment opportunities, and global
              expansion strategies. Our experienced team is ready to understand
              your goals and provide personalised solutions for your
              international journey.
            </p>


            <BaseButton
              title="Contact Us"
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
                src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/contact-us.webp"
                alt="Contact Phoenix Business Advisory"
                width={700}
                height={700}
                className="
                max-w-[500px]
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