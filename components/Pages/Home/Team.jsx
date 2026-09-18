"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurTeam() {
  const sectionRef = useRef(null);
  const scaleRef = useRef(null);
  const badgeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(scaleRef.current, {
        scale: 0.8,
        transformOrigin: "center center",
      });

      gsap.set(badgeRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.to(scaleRef.current, {
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scaleRef.current,
          start: "top 85%",
          end: "top 35%",
          scrub: 1.5,
        },
      });

      gsap.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scaleRef.current,
          start: "top 65%",
          end: "top 40%",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-80-30 overflow-hidden"
    >
      {/* Heading */}
      <div className="container-main">
        <div className="text-center !mb-6 !lg:mb-12">
          <h2 className="fs-52-32 uppercase font-normal leading-[1]">
            <span className="text-[var(--color-red-1)]">
              Our
            </span>{" "}
            Team
          </h2>
        </div>
      </div>

      {/* Image Wrapper */}
      <div className="w-full px-[clamp(20px,4vw,60px)]">
        <div className="flex justify-center">
          <div
            ref={scaleRef}
            className="
              relative
              w-full
              max-w-[1440px]
              overflow-hidden
              rounded-4xl
              will-change-transform
            "
          >
            <img
              src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/group-photo-2-scaled.webp"
              alt="Phoenix Business Advisory Team"
              className="
                w-full
                h-auto
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-transparent
                to-transparent
              "
            />

            <div
              ref={badgeRef}
              className="
                absolute
                bottom-8
                right-8
                rounded-2xl
                bg-white/20
                backdrop-blur-xl
                border
                border-white/30
                px-6
                py-4
                hidden lg:block
              "
            >
              <h3
                className="
                  !text-white
                  uppercase
                  text-xl
                  font-medium
                "
              >
                Phoenix Team
              </h3>

              <p
                className="
                  !text-white/80
                  text-sm
                  uppercase
                  tracking-[2px]
                  !mb-0
                "
              >
                Global Business Advisors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}