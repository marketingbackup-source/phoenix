"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BaseButton from "@/components/UI/BaseButton";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


const getCardState = (distance) => {
  if (distance < 0) {
    return {
      y: -160,
      x: distance * 12,
      scale: 1.05,
      rotation: distance * -3,
      opacity: 0,
      zIndex: 101,
    };
  }

  if (distance === 0) {
    return {
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0,
      opacity: 1,
      zIndex: 100,
    };
  }

  if (distance === 1) {
    return {
      y: 45,
      x: 14,
      scale: 0.92,
      rotation: 3,
      opacity: 0.85,
      zIndex: 99,
    };
  }

  if (distance === 2) {
    return {
      y: 80,
      x: 26,
      scale: 0.85,
      rotation: 5,
      opacity: 0.55,
      zIndex: 98,
    };
  }

  return {
    y: 130,
    x: 30,
    scale: 0.78,
    rotation: 6,
    opacity: 0,
    zIndex: 97,
  };
};


export default function VisaDesktop({ destinations }) {

  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRefs = useRef([]);

  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);


  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const images = imageRefs.current.filter(Boolean);


      const applyStack = (activeIdx, animate = true) => {

        images.forEach((image, index) => {

          const { zIndex, ...visual } =
            getCardState(index - activeIdx);


          gsap.set(image, {
            zIndex,
          });


          if (animate) {

            gsap.to(image, {
              ...visual,
              duration: 0.5,
              ease: "power2.out",
              overwrite: "auto",
            });

          } else {

            gsap.set(image, visual);

          }

        });

      };


      applyStack(0, false);


      ScrollTrigger.create({

        trigger: sectionRef.current,

        start: "top top",

        end: `+=${destinations.length * 1000}`,

        scrub: 1,

        pin: true,


        onUpdate: (self) => {

          const rawIndex = Math.min(
            destinations.length - 1,
            Math.floor(self.progress * destinations.length)
          );


          if (rawIndex === activeIndexRef.current)
            return;


          const previousIndex = activeIndexRef.current;


          activeIndexRef.current = rawIndex;


          setActiveIndex(rawIndex);


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
              overwrite: "auto",
            }
          );


          applyStack(rawIndex, true);

        },

      });


    }, sectionRef);


    return () => ctx.revert();


  }, [destinations]);



  const visa = destinations[activeIndex];



  return (

    <section ref={sectionRef} className="hidden lg:block">

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


            <div ref={contentRef} className="w-6/12">


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



              {visa.title2 && (

                <h4 className="uppercase text-lg font-medium !mb-5">

                  {visa.title2}

                </h4>

              )}




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




            <div className="w-6/12">

              <div className="relative h-[540px] flex justify-center items-center">


                {destinations.map((item, index) => (

                  <div

                    key={item.country}

                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}

                    className="absolute inset-0 overflow-hidden rounded-tr-4xl rounded-br-4xl w-fit pointer-events-none will-change-transform"

                  >


                    <img

                      src={item.image}

                      alt={item.country}

                      className="w-full h-full object-cover border border-white shadow-[0_20px_60px_rgba(255,255,255,0.35)]"

                    />


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