"use client";

import Image from "next/image";


const desktopImage =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a885dd083bfc42c63534dc4_green-card-banner-copy-p-2000.png";


const mobileImage =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a8868de92f6a22e8224057f_Vertical-green-card_1.png";


export default function SuccessStoryBanner() {

  return (

    <section className="py-80-30 bg-[#f7f7f7]">

      <div className="container-main">

        <div
          className="
          relative
          overflow-hidden
          rounded-4xl
          "
        >

          {/* Desktop Image */}

          <div
            className="
            hidden
            md:block
            relative
            w-full
            aspect-[16/5]
            "
          >

            <Image
              src={desktopImage}
              alt="Phoenix Business Advisory Success Story"
              fill
              priority
              className="
              object-contain
              "
              sizes="100vw"
            />

          </div>



          {/* Mobile Image */}

          <div
            className="
            block
            md:hidden
            relative
            w-full
            aspect-[4/5]
            "
          >

            <Image
              src={mobileImage}
              alt="Phoenix Business Advisory Success Story"
              fill
              priority
              className="
              object-contain
              "
              sizes="100vw"
            />

          </div>


        </div>

      </div>

    </section>

  );

}