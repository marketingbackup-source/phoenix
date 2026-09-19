"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

export default function VisaBanner({ title, excerpt, image }) {
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
              Immigration Program
            </p>


            <h1
              className="
              fs-60-32
              uppercase
              text-black
              !mb-8
              "
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />


            <div
              className="
              text-gray-500
              fs-20-16
              leading-[1.7]
              max-w-xl
              !mb-8
              "
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
            />


            <BaseButton
              title="Speak With Expert"
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

              <div
                className="
                relative
                "
              >

                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={600}
                  className="
                  w-full
                  max-w-[500px]
                  object-contain
                  "
                  priority
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}