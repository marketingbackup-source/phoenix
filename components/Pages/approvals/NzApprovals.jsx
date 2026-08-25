"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import BaseButton from "@/components/UI/BaseButton";

const visaLetters = [
  "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/695ba9b4304b6a9f2927f4af_1.jpg",
  "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/695ba9b5a0e2e04a5eac2d2c_2.jpg",
  "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/695ba9b55879a603181eb1eb_3.jpg",
  "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/695ba9b6f1f1d26547af5d77_4.jpg",
  "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/695ba9b78b612de840fab4dd_5.jpg",
  "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/695ba9b83d82c3f6d95614b8_6.jpg",
];

export default function AustraliaVisaGrantLetters() {
  return (
    <section className="relative py-80-30 overflow-hidden bg-[#f7f7f7] nz-approvals-section">
      <div className="absolute inset-0">
        <div
          className="
          absolute
          -top-40
          right-1/3
          w-[500px]
          h-[500px]
          rounded-full
          bg-[var(--color-red-3)]
          opacity-10
          blur-[160px]
          "
        />

        <div
          className="
          absolute
          bottom-[-200px]
          left-[-100px]
          w-[600px]
          h-[600px]
          rounded-full
          bg-gray-300
          opacity-40
          blur-[180px]
          "
        />

        <div
          className="
          absolute
          inset-0
          opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-main relative">
        <div
          className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-60-20
          "
        >
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
              text-[var(--color-red-3)]
              !mb-5
              "
            >
              Australia Approvals
            </p>

            <h1
              className="
              fs-60-32
              uppercase
              text-black
              !mb-8
              "
            >
              Australia{" "}
              <span className="text-[var(--color-red-3)]">Visa Grant</span>{" "}
              Letters
            </h1>

            <p
              className="
              text-gray-500
              fs-20-16
              leading-[1.7]
              max-w-xl
              !mb-8
              "
            >
              Our successful visa grant letters demonstrate Phoenix Business
              Advisory's expertise in delivering strategic immigration
              solutions. We guide clients through every stage of the process
              with accurate documentation, strong preparation, and proven
              results.
            </p>

            <BaseButton
              title="Contact Us"
              link
              toLink="/contact-us"
              style="primary w-fit"
            >
              <ArrowRight size={20} />
            </BaseButton>
          </div>

          <div
            className="
            w-full
            lg:w-6/12
            flex-center
            "
          >
            <div
              className="
              w-full
              
              max-w-[420px]
              "
            >
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                speed={1000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                className="approvalSwiper shadow-none"
              >
                {visaLetters.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="
                      rounded-4xl
                      bg-white/[0.65]
                      backdrop-blur-2xl
                      border
                      border-white
                      p-5
                      "
                    >
                      <Image
                        src={image}
                        alt="Australia Visa Grant Letter"
                        width={600}
                        height={800}
                        className="
                        w-full
                        h-auto
                        object-contain
                        rounded-4xl
                        "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
