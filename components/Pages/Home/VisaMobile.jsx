"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BaseButton from "@/components/UI/BaseButton";
import { ArrowRight } from "lucide-react";

import "swiper/css";

export default function VisaMobile({ destinations }) {
  return (
    <div className="lg:hidden">
      <div className="!mb-10">
        <p className="text-sm uppercase tracking-[3px] text-gray-500 !mb-3">
          Global Visa Options
        </p>

        <h2 className="fs-52-32 font-normal leading-[1] uppercase">
          Choose Your{" "}
          <span className="text-[var(--color-red-1)]">Destination</span>
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        speed={2000}
        loop={true}
        autoplay={{
          delay: 1000,

          disableOnInteraction: false,

          pauseOnMouseEnter: false,
        }}
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.country}>
            <div>
              {/* Destination Image */}

              <div className="relative overflow-hidden rounded-4xl h-[300px] !mb-8">
                <Image
                  src={destination.image}
                  alt={`${destination.country} visa destination`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Content */}

              <div>
                <div className="flex items-center gap-3 !mb-3">
                  <Image
                    src={destination.flag}
                    alt={destination.country}
                    width={40}
                    height={40}
                  />

                  <span className="text-sm uppercase tracking-[2px] text-gray-500">
                    {destination.country}
                  </span>
                </div>

                <h3 className="fs-40-28 font-normal uppercase leading-[1] !mb-3">
                  {destination.title}
                </h3>

                <p className="text-[var(--color-red-1)] fs-20-16 !mb-2">
                  {destination.subtitle}
                </p>

                {destination.title2 && (
                  <h4 className="uppercase text-lg font-medium !mb-4">
                    {destination.title2}
                  </h4>
                )}

                <p className="text-gray-500 fs-18-16 leading-[1.5] !mb-3">
                  {destination.description}
                </p>

                <div className="flex flex-col gap-3 !mb-4">
                  {destination.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[var(--color-red-1)] shrink-0" />

                      <span className="text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>

                <BaseButton
                  title="Explore Visa"
                  link
                  toLink={destination.link}
                  style="primary"
                >
                  <ArrowRight size={20} />
                </BaseButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
