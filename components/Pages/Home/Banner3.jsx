"use client";

import Image from "next/image";
import BaseButton from "@/components/UI/BaseButton";
import { Headset } from "lucide-react";

const videoUrl =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/webpage-3.mp4";


const flagBaseUrl =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/";


const countries = [
  {
    image: `${flagBaseUrl}us-flag.png`,
    label: "United States",
  },
  {
    image: `${flagBaseUrl}nz-flag.png`,
    label: "New Zealand",
  },
  {
    image: `${flagBaseUrl}uae.png`,
    label: "UAE",
  },
  {
    image: `${flagBaseUrl}eu-flag.png`,
    label: "Europe",
  },
  {
    image: `${flagBaseUrl}aus-flag.png`,
    label: "Australia",
  },
];


const marqueeItems = [...countries, ...countries];


export default function Banner() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-black
      min-h-[85vh]
      flex
      items-center
      "
    >

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        z-0
        "
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video>


      {/* Video Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-white/0
        z-10
        "
      />



      <div
        className="
        container-main
        relative
        z-20
        rounded-4xl
        pt-10
        "
      >

        <div
          className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-12
          "
        >


          {/* Left Content */}

          <div
            className="
            w-full
            lg:w-7/12
            "
          >

            <h1
              className="
              fs-52-32
              leading-[0.95]
              uppercase
              !mb-8
              "
            >

              Acquire Business in USA Get{" "}

              <span className="text-green-700">
                Green Card
              </span>{" "}

              in 2 Years*

            </h1>



            <p
              className="
              text-gray-500
              !mb-8
              lg:!mb-10
              "
            >

              Phoenix Business Advisory has helped entrepreneurs, investors,
              founders, and business owners confidently establish and expand
              their businesses in the USA, Australia, and other global
              markets. From business setup to immigration strategy, our
              experts guide you through every step.

            </p>



            <BaseButton
              title="START YOUR VISA JOURNEY"
              link
              toLink="/contact"
              style="secondary"
            >

              <Headset
                className="
                ml-2
                transition-colors
                duration-300
                group-hover:text-[var(--color-red-1)]
                "
                size={20}
              />

            </BaseButton>




            <div
              className="
              phx-marquee-mask
              relative
              mt-10
              max-w-full
              overflow-hidden
              lg:mt-14
              "
            >

              <div
                className="
                phx-marquee
                flex
                w-max
                items-center
                gap-8
                "
              >

                {marqueeItems.map((country,index)=>(

                  <div
                    key={index}
                    className="
                    flex
                    items-center
                    gap-5
                    whitespace-nowrap
                    "
                  >

                    <Image
                      src={country.image}
                      alt={country.label}
                      width={44}
                      height={44}
                      className="
                      h-10
                      w-10
                      rounded-md
                      object-cover
                      "
                    />


                    <span
                      className="
                      text-sm
                      text-gray-500
                      "
                    >
                      {country.label}
                    </span>


                  </div>

                ))}


              </div>

            </div>


          </div>




          {/* Right Image */}

          <div
            className="
            w-full
            lg:w-5/12
            relative
            z-20
            "
          >

           

          </div>



        </div>

      </div>




      <style>{`

        .phx-marquee {
          animation: phx-marquee-scroll 22s linear infinite;
        }


        .phx-marquee-mask {

          -webkit-mask-image:
          linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );


          mask-image:
          linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );

        }


        @keyframes phx-marquee-scroll {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }


        @media (prefers-reduced-motion: reduce) {

          .phx-marquee {
            animation:none;
          }

        }

      `}</style>


    </section>
  );
}