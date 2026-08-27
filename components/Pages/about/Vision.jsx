"use client";

import {
  Lightbulb,
  Target,
} from "lucide-react";


const values = [
  {
    first: "OUR",
    second: "VISION",
    icon: Lightbulb,
    content:
      "To assist HNIs, UHNIs, business owners, and entrepreneurs in achieving strategic business growth and migrating to Australia, the United States, the United Arab Emirates, and New Zealand, enabling them to establish a secure and prosperous second home.",
  },
  {
    first: "OUR",
    second: "MISSION",
    icon: Target,
    content:
      "To become the global leader in strategic business migration to Australia, the United States, the United Arab Emirates, and New Zealand.",
  },
];


export default function MissionVision() {
  return (
    <section
      className="
      relative
      py-80-30
      overflow-hidden
      backgroundProps
      "
      style={{
        backgroundImage: "url('/bg/bg1.webp')",
      }}
    >
      <div className="container-main relative">


        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-40-15
          "
        >


          {values.map((item) => {

            const Icon = item.icon;


            return (

              <div
                key={item.second}
                className="
                relative
                bg-white/[0.35]
                backdrop-blur-xl
                border
                border-white/40
                rounded-3xl
                p-40-15
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                transition-all
                duration-500
                hover:bg-white/[0.5]
                hover:-translate-y-2
                "
              >


                <div
                  className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  rounded-full
                  bg-[var(--color-red-1)]
                  opacity-10
                  blur-3xl
                  "
                />


                <div
                  className="
                  flex
                  items-center
                  justify-between
                  !mb-8
                  "
                >


                  <h3
                    className="
                    fs-52-32
                    uppercase
                    text-black
                    !mb-0
                    "
                  >

                    {item.first}{" "}

                    <span className="text-[var(--color-red-1)]">
                      {item.second}
                    </span>

                  </h3>



                  <div
                    className="
                    flex-center
                    w-16
                    h-16
                    rounded-2xl
                    bg-[var(--color-red-1)]/10
                    backdrop-blur-xl
                    border
                    border-[var(--color-red-1)]/20
                    "
                  >

                    <Icon
                      size={32}
                      className="text-[var(--color-red-1)]"
                    />

                  </div>


                </div>



                <p
                  className="
                  text-gray-500
                  fs-20-16
                  leading-[1.7]
                  !mb-0
                  "
                >
                  {item.content}
                </p>


              </div>

            );

          })}


        </div>


      </div>


    </section>
  );
}