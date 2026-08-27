"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const proofSlides = [
  {
    id: 1,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Amandeep-Bhullar.png",
    alt: "Amandeep Bhullar USA L1 Visa Approval",
  },
  {
    id: 2,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Chetankumar-Patel.png",
    alt: "Chetankumar Patel USA L1 Visa Approval",
  },
  {
    id: 3,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Harmeet-Singh-Visa.png",
    alt: "Harmeet Singh USA L1 Visa Approval",
  },
  {
    id: 4,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Vishal-Khurmi.png",
    alt: "Vishal Khurmi USA L1 Visa Approval",
  },
  {
    id: 5,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Nirav-Rabadiya.png",
    alt: "Nirav Rabadiya USA L1 Visa Approval",
  },
  {
    id: 6,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Ronak-Patel.png",
    alt: "Ronak Patel USA L1 Visa Approval",
  },
  {
    id: 7,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Hasibur-Rehman.png",
    alt: "Hasibur Rehman USA L1 Visa Approval",
  },
  {
    id: 8,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Darpan-Patel.png",
    alt: "Darpan Patel USA L1 Visa Approval",
  },
  {
    id: 9,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Dipak-Patel.png",
    alt: "Dipak Patel USA L1 Visa Approval",
  },
  {
    id: 10,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Manas-Biswas.png",
    alt: "Manas Biswas USA L1 Visa Approval",
  },
  {
    id: 11,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Hiren-Patel.png",
    alt: "Hiren Patel USA L1 Visa Approval",
  },
  {
    id: 12,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Kalpesh-M-Patel.png",
    alt: "Kalpesh M Patel USA L1 Visa Approval",
  },
  {
    id: 13,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Nikhil-Pendalwar.png",
    alt: "Nikhil Pendalwar USA L1 Visa Approval",
  },
  {
    id: 14,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Mehulkumar-Patel.png",
    alt: "Mehulkumar Patel USA L1 Visa Approval",
  },
  {
    id: 15,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Nasir-Maniar.png",
    alt: "Nasir Maniar USA L1 Visa Approval",
  },
  {
    id: 16,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Satvinder-Singh.png",
    alt: "Satvinder Singh USA L1 Visa Approval",
  },
  {
    id: 17,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Rakesh-Thakkar.png",
    alt: "Rakesh Thakkar USA L1 Visa Approval",
  },
  {
    id: 18,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Sandip-M-Patel.png",
    alt: "Sandip M Patel USA L1 Visa Approval",
  },
  {
    id: 19,
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/Vijay-Parmar.png",
    alt: "Vijay Parmar USA L1 Visa Approval",
  },
];

const Proof60Days = () => {
  return (
    <section className="overflow-hidden bg-[#f7f7f7] p-60-20 min-h-[80vh]">
      {/* Heading */}
      <div className="container-main">
        <div className="mb-60-20 text-center">
          <h2 className="fs-60-32 mb-0">
            <span className="text-[var(--color-red-1)]">PROOF THAT</span> VISAS
            COME IN 60 DAYS*
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full mt-20 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1100}
          slidesPerView={5}
          spaceBetween={20}
          className="proof60DaysSwiper !overflow-visible"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1025: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {proofSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="!h-auto">
              <div
                className="
          proof60Days-card
          overflow-hidden
          rounded-[20px]
          bg-white
          shadow-[8px_8px_18px_rgba(0,0,0,0.16),-6px_-6px_16px_rgba(255,255,255,0.9)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[12px_12px_24px_rgba(0,0,0,0.20),-8px_-8px_20px_rgba(255,255,255,1)]
        "
              >
                <div className="flex w-full items-center justify-center overflow-hidden rounded-[8px]">
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
