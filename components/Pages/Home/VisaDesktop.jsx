"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BaseButton from "@/components/UI/BaseButton";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function VisaDesktop({ destinations }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const steps = destinations.length - 1;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${steps * 1000}`,
          scrub: 1,
        },
      });

      destinations.forEach((_, index) => {
        if (index === 0) return;

        timeline
          .to(
            {},
            {
              duration: 3,
            }
          )
          .to(contentRef.current, {
            y: -30,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          })
          .set(contentRef.current, {
            y: 30,
          })
          .to(contentRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [destinations]);

  const visa = destinations[0];

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block min-h-[5000px]"
    >
      <div className="sticky top-0 min-h-screen flex items-center">
        <div className="container-main w-full">

          <div className="!mb-12">

            <p className="text-sm uppercase tracking-[3px] text-gray-500 !mb-3">
              Global Visa Options
            </p>

            <h2 className="fs-52-32 font-normal leading-[1] uppercase">
              Choose Your{" "}
              <span className="text-[var(--color-red-3)]">
                Destination
              </span>
            </h2>

          </div>


          <div
            ref={contentRef}
            className="flex items-center gap-16"
          >

            <div className="w-6/12">

              <div className="overflow-hidden rounded-4xl h-[520px]">

                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src={visa.video}
                    type="video/mp4"
                  />
                </video>

              </div>

            </div>


            <div className="w-6/12">

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


              <p className="text-[var(--color-red-3)] fs-20-16 !mb-4">
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

                    <span className="mt-1 w-2 h-2 rounded-full bg-[var(--color-red-3)] shrink-0" />

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
                <ArrowRight size={20}/>
              </BaseButton>


            </div>

          </div>

        </div>
      </div>
    </section>
  );
}