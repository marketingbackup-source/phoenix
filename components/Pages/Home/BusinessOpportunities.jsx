"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import MarqueeSlider from "@/components/UI/MarqueeSlider";

const businesses = [
  {
    title: "Petrol Pump",
    investment: "$300K-700K",
    location: "Texas, USA",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Petrol-Pump-scaled.jpg",
  },
  {
    title: "Convenience Store",
    investment: "$150K-400K",
    location: "Texas, USA",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Convenience-Store-scaled.jpg",
  },
  {
    title: "Jewellery Store",
    investment: "$200K-500K",
    location: "New York, USA",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Jewellery-Store-scaled.jpg",
  },
  {
    title: "Dentistry",
    investment: "$250K-600K",
    location: "California, USA",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Dentistry-scaled.jpg",
  },
  {
    title: "Restaurant",
    investment: "$200K-500K",
    location: "Florida, USA",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Restaurant-scaled.jpg",
  },
  {
    title: "Hotel & Motel",
    investment: "$500K-2M",
    location: "Texas, USA",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Hotel-scaled.jpg",
  },
  {
    title: "Car Rental",
    investment: "$200K-500K",
    location: "Texas, USA",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Car-Rental-scaled.jpg",
  },
  {
    title: "Grocery Store",
    investment: "$200K-500K",
    location: "Texas, USA",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Grocery-Store-scaled.jpg",
  },
  {
    title: "Pharmacy Store",
    investment: "$200K-500K",
    location: "Texas, USA",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Pharmacy-Store-scaled.jpg",
  },
];

export default function BusinessOpportunities() {
  return (
    <section className="py-80-30 overflow-hidden bg-white">
      <div className="container-main">
        <div className="text-center !mb-12">
          <p className="text-sm uppercase tracking-[3px] text-gray-500 !mb-3">
            Business Opportunities
          </p>

          <h2 className="fs-52-32 uppercase font-normal leading-[1]">
            Buy A <span className="text-[var(--color-red-1)]">Business</span> In
            USA
          </h2>
        </div>
      </div>

      <MarqueeSlider
        items={businesses}
        speed="55s"
        gap="gap-8"
        className="py-15"
        renderItem={(business) => (
          <div className="group relative w-[330px] sm:w-[420px] lg:w-[480px] bg-white p-4 shadow-2xl rounded-2xl">
            {/* Image */}
            <div className="relative w-full aspect-[1.55/1] overflow-hidden rounded-[4px]">
              <img
                src={business.image}
                alt={business.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="relative pt-6 pb-4">
              {/* Business Name */}
              <h3 className="font-[var(--font-heading)] text-2xl lg:text-4xl uppercase !font-medium leading-[0.95] text-black !mb-5">
                {business.title}
              </h3>

              {/* Investment */}
              <p className="leading-[1] !text-light !text-3xl  !mb-6">
                {business.investment}
              </p>

              {/* Bottom Row */}
              <div className="flex items-center justify-between gap-6">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <MapPin
                    size={25}
                    strokeWidth={1.5}
                    className="text-[var(--color-red-1)] shrink-0"
                  />

                  <span className="text-xl uppercase font-thin leading-[1] text-[var(--color-gray-2)]">
                    {business.location}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-10 bottom-[30px]">
                  <div
                    className="
      absolute
      inset-[-10px]
      rounded-full
      bg-[var(--color-red-1)]
      opacity-20
      blur-[25px]
    "
                  />

                  <span
                    className="
      relative
      flex
      items-center
      justify-center
      w-13
      h-13
      rounded-full
      bg-[var(--color-red-1)]
      text-white
      transition-transform
      duration-500
      group-hover:scale-110
    "
                  >
                    <ArrowUpRight size={32} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </section>
  );
}
