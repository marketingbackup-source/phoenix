"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BaseButton from "@/components/UI/BaseButton";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function VisaDesktop({ destinations }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const videos = videoRefs.current.filter(Boolean);

    videos.forEach((video, index) => {
      gsap.set(video, {
        y: index === 0 ? 0 : 120,
        x: index * 10,
        scale: 1 - index * 0.025,
        rotation: index * 1.5,
        opacity: index <= 2 ? 1 : 0,
        zIndex: destinations.length - index,
      });
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${destinations.length * 1000}`,
      scrub: 1,
      pin: true,

      onUpdate: (self) => {
        const progress = self.progress;

        const rawIndex = Math.min(
          destinations.length - 1,
          Math.floor(progress * destinations.length)
        );

        setActiveIndex((previousIndex) => {
          if (previousIndex === rawIndex) return previousIndex;

          gsap.fromTo(
            contentRef.current,
            {
              x: previousIndex < rawIndex ? 60 : -60,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            }
          );

          return rawIndex;
        });

        videos.forEach((video, index) => {
          const distance = index - rawIndex;

          if (distance < 0) {
            gsap.to(video, {
              y: distance * -18,
              x: distance * -8,
              scale: 1 + distance * 0.025,
              rotation: distance * -1.2,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          } else if (distance === 0) {
            gsap.to(video, {
              y: 0,
              x: 0,
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          } else if (distance === 1) {
            gsap.to(video, {
              y: 35,
              x: 10,
              scale: 0.97,
              rotation: 1.5,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          } else if (distance === 2) {
            gsap.to(video, {
              y: 60,
              x: 18,
              scale: 0.94,
              rotation: 2.5,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          } else {
            gsap.to(video, {
              y: 100,
              x: 24,
              scale: 0.92,
              rotation: 3,
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        });
      },
    });

    return () => scrollTrigger.kill();
  }, sectionRef);

  return () => ctx.revert();
}, [destinations]);

  const visa = destinations[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block"
    >
      <div className="min-h-screen flex items-center">
        <div className="container-main w-full">

          <div className="!mb-12">
            <p className="text-sm uppercase tracking-[3px] text-gray-500 !mb-3">
              Global Visa Options
            </p>

            <h2 className="fs-52-32 font-normal leading-[1] uppercase">
              Choose Your{" "}
              <span className="text-[var(--color-red-1)]">
                Destination
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-16">

            {/* Left Content */}
            <div
              ref={contentRef}
              className="w-6/12"
            >
              <div className="flex items-center gap-3 !mb-5">
                <Image
                  src={visa.flag}
                  alt={visa.country}
                  width={45}
                  height={45}
                />

                <span className="text-sm uppercase tracking-[2px] text-gray-500">
                  {visa.country}
                </span>
              </div>

              <h3 className="fs-52-32 uppercase font-normal leading-[1] !mb-5">
                {visa.title}
              </h3>

              <p className="text-[var(--color-red-1)] fs-20-16 !mb-4">
                {visa.subtitle}
              </p>

              <p className="text-gray-500 fs-18-16 leading-[1.5] !mb-8">
                {visa.description}
              </p>

              <div className="flex flex-col gap-4 !mb-8">
                {visa.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-[var(--color-red-1)] shrink-0" />

                    <span className="text-gray-600">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <BaseButton
                title="Explore Visa"
                link
                toLink={visa.link}
                style="primary"
              >
                <ArrowRight size={20} />
              </BaseButton>
            </div>

            {/* Right Video Stack */}
            <div className="w-6/12">
              <div className="relative h-[540px]">

                {destinations.map((item, index) => (
                  <div
                    key={item.country}
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                      rounded-4xl
                      bg-black
                      shadow-2xl
                      border
                      border-[#ccc]
                    "
                  >
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source
                        src={item.video}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}