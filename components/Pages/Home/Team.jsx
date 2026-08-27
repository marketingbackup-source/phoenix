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
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1.5,
        },
      });


      gsap.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          end: "top 25%",
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

      <div className="container-main">

        <div className="text-center !mb-12">

          <h2 className="fs-52-32 uppercase font-normal leading-[1]">
            <span className="text-[var(--color-red-1)]">
              Our
            </span>{" "}
            Team
          </h2>

        </div>

      </div>


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
            src="https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a46058c0e8cdd3fcca09844_faa49bed4109e8ea444d45dd2a9dc015_team-photo2-p-1080.jpg"
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
            "
          >

            <h3 className="
            text-white
            uppercase
            text-xl
            font-medium
            ">
              Phoenix Team
            </h3>


            <p className="
            text-white/80
            text-sm
            uppercase
            tracking-[2px]
            !mb-0
            ">
              Global Business Advisors
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}