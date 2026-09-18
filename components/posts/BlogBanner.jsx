"use client";

import Image from "next/image";

export default function BlogBanner({ title, date }) {
  return (
    <section
      className="
      relative
      py-80-30
      overflow-hidden
      min-h-[80vh]
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
            >
              Phoenix Insights
            </p>


            <h1
              className="
              fs-36-24
              uppercase
              text-black
              leading-[1.2]
              !mb-6
              "
            >
              {title}
            </h1>


            <p
              className="
              text-gray-500
              fs-20-16
              !mb-0
              "
            >
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

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
                src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/blog-banner.webp"
                alt="Phoenix Business Advisory Insights"
                width={700}
                height={700}
                className="
                w-full
                object-contain
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