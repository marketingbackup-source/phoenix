"use client";

import { ArrowUpRight } from "lucide-react";
import MarqueeSlider from "@/components/UI/MarqueeSlider";
import BaseButton from "@/components/UI/BaseButton";
const countries = [
  {
    country: "USA",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
  },
  {
    country: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
  },
  {
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def",
  },
  {
    country: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
  },
  {
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  {
    country: "UAE",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
  },
  {
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
  },
  {
    country: "Spain",
    image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826",
  },
];

export default function GlobalCountries() {
  return (
    <section className="py-80-30 overflow-hidden">
      <div className="container-main">
        <div className="text-center !mb-12">
          <h2 className="fs-52-32 uppercase font-normal leading-[1]">
            Start Your <span className="text-[var(--color-red-3)]">Global</span>{" "}
            Success Story
          </h2>
        </div>
      </div>

      <MarqueeSlider
        items={countries}
        speed="45s"
        renderItem={(item) => (
          <div className="group relative h-[320px] sm:h-[360px] w-[240px] sm:w-[280px] overflow-hidden rounded-4xl shrink-0">
            <img
              src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
              alt={item.country}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 p-4 transition-all duration-500 group-hover:bg-[var(--color-red-3)] group-hover:border-[var(--color-red-3)]">
                <h3 className="text-white text-sm sm:text-base uppercase font-medium transition-colors duration-500">
                  {item.country}
                </h3>

                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[var(--color-red-3)] transition-all duration-500">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </div>
        )}
      />

      <div className="container-main">
        <div className="flex justify-center !mt-12">
          <BaseButton
            title="Explore All Countries"
            link
            toLink="/countries"
            style="primary"
          >
            <ArrowUpRight size={20} />
          </BaseButton>
        </div>
      </div>
    </section>
  );
}
