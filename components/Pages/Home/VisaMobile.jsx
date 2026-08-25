"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import BaseButton from "@/components/UI/BaseButton";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function VisaMobile({ destinations }) {
  return (
    <div className="lg:hidden">

      <div className="!mb-10">

        <p className="text-sm uppercase tracking-[3px] text-gray-500 !mb-3">
          Global Visa Options
        </p>

        <h2 className="fs-52-32 font-normal leading-[1] uppercase">
          Choose Your{" "}
          <span className="text-[var(--color-red-3)]">
            Destination
          </span>
        </h2>

      </div>


      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        slidesPerView={1}
      >

        {destinations.map((destination) => (

          <SwiperSlide key={destination.country}>

            <div>

              {/* Video */}

              <div className="overflow-hidden rounded-4xl h-[320px] !mb-8">

                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://l1visausa.com/wp-content/uploads/2026/08/EU-2-1.mp4"
                    type="video/mp4"
                  />
                </video>

              </div>


              {/* Content */}

              <div>

                <div className="flex items-center gap-3 !mb-5">

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


                <h3 className="fs-40-28 font-normal uppercase leading-[1] !mb-5">

                  {destination.title}

                </h3>


                <p className="text-[var(--color-red-3)] fs-20-16 !mb-4">

                  {destination.subtitle}

                </p>


                <p className="text-gray-500 fs-18-16 leading-[1.5] !mb-6">

                  {destination.description}

                </p>


                <div className="flex flex-col gap-3 !mb-8">

                  {destination.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >

                      <span className="mt-2 w-2 h-2 rounded-full bg-[var(--color-red-3)] shrink-0" />

                      <span className="text-gray-600">
                        {point}
                      </span>

                    </div>

                  ))}

                </div>


                <BaseButton
                  title="Explore Visa"
                  link
                  toLink={destination.link}
                  style="primary"
                >
                  <ArrowRight size={20}/>
                </BaseButton>


              </div>


            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}