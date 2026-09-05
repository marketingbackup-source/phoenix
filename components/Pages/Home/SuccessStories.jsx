"use client";

import MarqueeSlider from "@/components/UI/MarqueeSlider";

const partners = [
  {
    name: "Aadi Travel",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/aadi.png",
  },
  {
    name: "GT",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/gt.png",
  },
  {
    name: "Hindustan",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/hindustan.png",
  },
  {
    name: "HRP",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/hrp.png",
  },
  {
    name: "Janvi",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/janvi.png",
  },
  {
    name: "Kruti Promotions",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/kruti.png",
  },
  {
    name: "Maniar",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/maniar.png",
  },
  {
    name: "Namasvi",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/namasvi.png",
  },
  {
    name: "Polymer",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/polymer.png",
  },
  {
    name: "Prime",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/prime.png",
  },
  {
    name: "Rama",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/rama.png",
  },
  {
    name: "Softone",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/softtone.png",
  },
  {
    name: "SRM",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/srm.png",
  },
  {
    name: "SVR",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/svr.png",
  },
  {
    name: "Vishal Synthetics",
    logo: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/vishal.png",
  },
];

export default function IndustryPartners() {
  return (
    <section className="py-80-30 overflow-hidden bg-[#050505]">
      <div className="container-main">
        <div className="text-center !mb-12">
          <h2 className="fs-52-32 uppercase font-normal leading-[1] text-white">
            <span className="text-[var(--color-red-1)]">Success Stories</span>{" "}
            Across Industries
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <MarqueeSlider
          items={partners}
          speed="55s"
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
          speed="55s"
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
