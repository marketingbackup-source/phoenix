"use client";

import {
  Landmark,
  UsersRound,
  BadgeDollarSign,
  Globe2,
  ArrowRight,
} from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

const stats = [
  {
    value: "$170M+",
    title: "Investment Capital Mobilized",
    icon: Landmark,
  },
  {
    value: "300+",
    title: "Local Jobs Created",
    icon: UsersRound,
  },
  {
    value: "$25M",
    title: "Investment Advised In India",
    icon: BadgeDollarSign,
  },
  {
    value: "700+",
    title: "Businesses Empowered",
    icon: Globe2,
  },
];

export default function WhyPhoenix() {
  return (
    <section className="relative py-80-30 overflow-hidden bg-[#f7f7f7]">

      <div className="absolute inset-0">

        <div
          className="
          absolute
          -top-40
          left-1/3
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
          right-[-100px]
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
          gap-12
          lg:gap-16
          items-stretch
          "
        >

          <div
            className="
            w-full
            lg:w-6/12
            flex
            flex-col
            justify-center
            rounded-4xl
            bg-white/70
            backdrop-blur-xl
            border
            border-white
            shadow-[0_20px_50px_rgba(0,0,0,0.05)]
            p-8
            lg:p-10
            "
          >

            <h2
              className="
              fs-52-32
              uppercase
              font-normal
              leading-[1.1]
              text-black
              !mb-8
              "
            >

              <span className="text-[var(--color-red-1)]">
                Why
              </span>{" "}
              Phoenix
              <br />
              Business Advisory

            </h2>


            <p
              className="
              text-gray-500
              fs-18-16
              leading-[1.7]
              !mb-8
              "
            >
              We empower businesses and entrepreneurs to expand globally with
              confidence. From helping Indian businesses enter the USA,
              Australia, European Union and New Zealand markets to assisting
              international companies invest in India, our team delivers
              personalized guidance, proven strategies, and real-world results.
            </p>


            <BaseButton
              title="Looking For Best Advisor?"
              link
              toLink="/contact"
              style="primary w-fit"
            >
              <ArrowRight size={20}/>
            </BaseButton>


          </div>


          <div
            className="
            w-full
            lg:w-6/12
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
            "
          >

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                  h-full
                  rounded-3xl
                  bg-white/70
                  backdrop-blur-xl
                  border
                  border-white
                  shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                  p-8
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-2xl
                    bg-[var(--color-red-1)]/10
                    border
                    border-[var(--color-red-1)]/20
                    !mb-6
                    "
                  >

                    <Icon
                      size={28}
                      className="text-[var(--color-red-1)]"
                    />

                  </div>


                  <h3
                    className="
                    text-black
                    text-4xl
                    font-medium
                    uppercase
                    !mb-3
                    "
                  >
                    {item.value}
                  </h3>


                  <p
                    className="
                    text-gray-500
                    uppercase
                    tracking-[1px]
                    text-sm
                    leading-[1.6]
                    !mb-0
                    "
                  >
                    {item.title}
                  </p>


                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}