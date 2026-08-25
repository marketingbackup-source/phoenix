"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const proofSlides = [
  {
    id: 1,
    image: "/images/home/clients/6abhavin-patel-p-500.png",
    alt: "USA L1 Visa Approval",
  },
  {
    id: 2,
    image: "/images/home/clients/bhagyesh-kumar-p-500.png",
    alt: "USA L1 Visa Approval",
  },
  {
    id: 3,
    image: "/images/home/clients/dipak-patel-p-500.png",
    alt: "USA L1 Visa Approval",
  },
  {
    id: 4,
    image: "/images/home/clients/harmeet-singh-p-500.png",
    alt: "USA L1 Visa Approval",
  },
  {
    id: 5,
    image: "/images/home/clients/kalpesh-m-patel-p-500.png",
    alt: "USA L1 Visa Approval",
  },
  {
    id: 6,
    image: "/images/home/clients/rakesh-thakkar-p-500.png",
    alt: "USA L1 Visa Approval",
  },
  {
    id: 7,
    image: "/images/home/clients/suketu-patel-p-500.png",
    alt: "USA L1 Visa Approval",
  },
  {
    id: 8,
    image: "/images/home/clients/vijay-parmar-p-500.png",
    alt: "USA L1 Visa Approval",
  },
];

const Proof60Days = () => {
    return (
        <section className="overflow-hidden bg-[#f7f7f7] p-60-20 min-h-[80vh]">

            {/* Heading */}
            <div className="container-main">
                <div className="mb-60-20 text-center">
                    <h2 className="fs-60-32 mb-0">
                        <span className="text-[var(--color-red-1)]">
                            PROOF THAT
                        </span>{" "}
                        VISAS COME IN 60 DAYS*
                    </h2>
                </div>
            </div>

            {/* Slider */}
            <div className="w-full mt-20 overflow-hidden">

                <Swiper
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    speed={600}
                    slidesPerView={5}
                    spaceBetween={0}
                    className="proof60DaysSwiper !overflow-visible"

                    breakpoints={{
                        /* Mobile */
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },

                        /* Tablet */
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },

                        /* Desktop */
                        1025: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {proofSlides.map((slide) => (
                        <SwiperSlide
                            key={slide.id}
                            className="!h-auto"
                        >
                            <div className="proof60Days-card overflow-hidden rounded-[14px] bg-white p-4">

                                {/* Image */}
                                <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[8px] bg-[#eeeeee]">

                                    {slide.image ? (
                                        <img
                                            src={slide.image}
                                            alt={slide.alt}
                                            className="h-full w-full object-contain"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <span className="text-sm text-[#999999]">
                                            Image Placeholder
                                        </span>
                                    )}

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section>
    );
};

export default Proof60Days;