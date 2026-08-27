"use client";

import { ArrowUpRight } from "lucide-react";
import MarqueeSlider from "@/components/UI/MarqueeSlider";

const businesses = [
  {
    title: "Convenience Store",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Jewellery Store",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
  },
  {
    title: "Gas Station",
    image:
      "https://images.unsplash.com/photo-1617886322168-72b886573c9f",
  },
  {
    title: "Dentistry",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
  },
  {
    title: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
  },
  {
    title: "Hotel & Motel",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
];

export default function BusinessOpportunities() {
  return (
    <section className="py-80-30 overflow-hidden bg-[#f7f7f7]">

      <div className="container-main">

        <div className="text-center !mb-12">

          <h2 className="fs-52-32 uppercase font-normal leading-[1]">
            Buy A{" "}
            <span className="text-[var(--color-red-1)]">
              Business
            </span>{" "}
            In USA
          </h2>

        </div>

      </div>


      <MarqueeSlider
        items={businesses}
        speed="55s"
        gap="gap-6"
        renderItem={(business) => (

          <div className="group relative w-[240px] sm:w-[280px] lg:w-[300px] h-[320px] sm:h-[360px] lg:h-[390px] overflow-hidden rounded-4xl">

            <img
              src={business.image}
              alt={business.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />


            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


            <div className="absolute bottom-5 left-5 right-5">

              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 p-4 transition-all duration-500 group-hover:bg-[var(--color-red-1)] group-hover:border-[var(--color-red-1)]">

                <h3 className="text-white text-sm sm:text-base uppercase font-medium transition-colors duration-500">
                  {business.title}
                </h3>


                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[var(--color-red-1)] transition-all duration-500 group-hover:bg-white group-hover:text-[var(--color-red-1)]">

                  <ArrowUpRight size={20}/>

                </span>

              </div>

            </div>

          </div>

        )}
      />

    </section>
  );
}