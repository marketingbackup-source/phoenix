"use client";

import MarqueeSlider from "@/components/UI/MarqueeSlider";

const partners = [
  {
    name: "ABP News",
    logo: "/images/partners/abp.png",
  },
  {
    name: "Bloomberg",
    logo: "/images/partners/bloom.png",
  },
  {
    name: "Business Standard",
    logo: "/images/partners/businessStandard.png",
  },
  {
    name: "CNBC",
    logo: "/images/partners/cnbc.png",
  },
  {
    name: "Daily Post",
    logo: "/images/partners/dailypost.png",
  },
  {
    name: "Forbes",
    logo: "/images/partners/forbes.png",
  },
  {
    name: "Hindustan Times",
    logo: "/images/partners/Hindustan_Times_logo.svg.png",
  },
  {
    name: "Khaleej Times",
    logo: "/images/partners/Khaleej_Times.png",
  },
  {
    name: "LiveMint",
    logo: "/images/partners/livemintLogo.png",
  },
  {
    name: "Times of India",
    logo: "/images/partners/times of india.png",
  },
  {
    name: "The Week",
    logo: "/images/partners/week.png",
  },
  {
    name: "Yahoo",
    logo: "/images/partners/yahoo.png",
  },
];

export default function TrustedPartners() {
  return (
    <section className="relative py-60-20 overflow-hidden">



      <div className="container-main relative">

        <div className="text-center !mb-12">

          <h2
            className="
            fs-52-32
            font-normal
            uppercase
            text-white
            "
          >

            Our{" "}
            <span className="text-[var(--color-red-3)]">
              Media
            </span>{" "}
            Partners

          </h2>

        </div>

      </div>


      <MarqueeSlider
        items={partners}
        speed="45s"
        gap="gap-6"
        renderItem={(partner) => (

          <div
            className="
            w-[220px]
            h-[110px]
            rounded-3xl
            bg-white/[0.08]
            backdrop-blur-2xl
            border
            border-white/15
            flex
            items-center
            justify-center
            px-8
            transition-all
            duration-500
            hover:bg-white/[0.15]
            hover:border-white/30
            "
          >

            <img
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              className="
              max-w-[150px]
              max-h-[55px]
              object-contain
              grayscale
              opacity-60
              transition-all
              duration-500
              hover:grayscale-0
              hover:opacity-100
              "
            />

          </div>

        )}
      />

    </section>
  );
}