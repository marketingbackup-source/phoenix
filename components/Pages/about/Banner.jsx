"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

export default function AboutBanner() {
  return (
    <section className="relative py-80-30 overflow-hidden bg-[#f7f7f7]">

      <div className="absolute inset-0">

        <div
          className="
          absolute
          -top-40
          right-1/3
          w-[500px]
          h-[500px]
          rounded-full
          bg-[var(--color-red-1)]
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
              text-[var(--color-red-1)]
              !mb-5
              "
            >
              About Phoenix
            </p>


            <h1
              className="
              fs-60-32
              uppercase
              text-black
              !mb-8
              "
            >
              Building Global Success Through
              <span className="text-[var(--color-red-1)]">
                {" "}Strategic Immigration Solutions
              </span>
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
              Phoenix Business Advisory helps entrepreneurs and businesses
              achieve international growth through expert immigration,
              investment and business expansion strategies.
            </p>


            <BaseButton
              title="Discover More"
              link
              toLink="/contact-us"
              style="primary w-fit"
            >
              <ArrowRight size={20}/>
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
              relative
              w-full
              max-w-[600px]
              "
            >

              <Image
                src="/images/about/banner.jpeg"
                alt="Phoenix Business Advisory"
                width={700}
                height={700}
                className="
                w-full
                object-contain
                mix-blend-multiply
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