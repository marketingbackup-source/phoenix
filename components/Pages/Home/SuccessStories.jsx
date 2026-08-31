"use client";

import MarqueeSlider from "@/components/UI/MarqueeSlider";

const partners = [
  {
    name: "Kruti Promotions",
    logo: "/images/home/successStories/kruti.png",
  },
  {
    name: "Vishal Synthetics",
    logo: "/images/home/successStories/vishal-syth.png",
  },
  {
    name: "Aadi Travel",
    logo: "/images/home/successStories/aadi-travel.png",
  },
  {
    name: "RVP",
    logo: "/images/home/successStories/rvp.png",
  },
  {
    name: "SRM",
    logo: "/images/home/successStories/srm.png",
  },
  {
    name: "SVR",
    logo: "/images/home/successStories/svr.png",
  },
  {
    name: "Maniar",
    logo: "/images/home/successStories/maniar.png",
  },
];

export default function IndustryPartners() {
  return (
    <section className="py-80-30 overflow-hidden bg-[#050505]">

      <div className="container-main">

        <div className="text-center !mb-12">

          <h2 className="fs-52-32 uppercase font-normal leading-[1] text-white">
            <span className="text-[var(--color-red-1)]">
              Success Stories
            </span>{" "}
            Across Industries
          </h2>

        </div>

      </div>


      <div className="flex flex-col gap-8">

        <MarqueeSlider
          items={partners}
          speed="35s"
          direction="left"
          gap="gap-8"
          renderItem={(item) => (

            <div
              className="
              flex
              items-center
              justify-center
              w-[220px]
              h-[110px]
              rounded-3xl
              bg-white/[0.05]
              backdrop-blur-xl
              border
              border-white/10
              px-8
              transition-all
              duration-500
              hover:bg-white
              hover:border-white
              hover:-translate-y-1
              "
            >

              <img
                src={item.logo}
                alt={item.name}
                loading="lazy"
                className="
                h-[70px]
                w-auto
                object-contain
                transition-all
                duration-500
                "
              />

            </div>

          )}
        />


        <MarqueeSlider
          items={[...partners].reverse()}
          speed="40s"
          direction="right"
          gap="gap-8"
          renderItem={(item) => (

            <div
  className="
  flex
  items-center
  justify-center
  w-[220px]
  h-[110px]
  rounded-3xl
  bg-white/[0.05]
  backdrop-blur-xl
  border
  border-white/10
  px-8
  transition-all
  duration-500
  hover:bg-white/20
  hover:border-white/30
  "
>

              <img
                src={item.logo}
                alt={item.name}
                loading="lazy"
                className="
                h-[70px]
                w-auto
                object-contain
                transition-all
                duration-500
                "
              />

            </div>

          )}
        />

      </div>

    </section>
  );
}