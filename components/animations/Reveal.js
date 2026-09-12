"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function initRevealAnimations() {

  const elements = document.querySelectorAll("[data-reveal]");

  elements.forEach((element) => {

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
      }
    );

  });

}