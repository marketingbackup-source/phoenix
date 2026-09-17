"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function initRevealAnimations() {

  const elements = document.querySelectorAll("[data-reveal]");


  elements.forEach((element) => {

    const type = element.dataset.reveal || "default";


    // Avoid duplicate animations
    if (element.dataset.revealInitialized === "true") {
      return;
    }


    element.dataset.revealInitialized = "true";


    /*
     * STAGGER
     */

    if (type === "stagger") {

      const animation = {
        start: "top 65%",
        from: {
          opacity: 0,
          y: 30,
        },
      };


      gsap.fromTo(
        element.children,

        animation.from,

        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          stagger: 0.15,

          ease: "power3.out",

          scrollTrigger: {
            trigger: element,

            start: animation.start,

            once: true,
          },
        }
      );


      return;
    }


    /*
     * REVEAL TYPES
     */

    const animations = {

      default: {
        start: "top 65%",

        from: {
          opacity: 0,
          y: -40,
        },
      },


      scale: {
        start: "top 65%",

        from: {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
      },


      left: {
        start: "top 65%",

        from: {
          opacity: 0,
          x: -70,
          rotation: -4,
        },
      },


      right: {
        start: "top 85%",

        from: {
          opacity: 0,
          x: 40,
          rotation: 4,
        },
      },


      top: {
        start: "top 65%",

        from: {
          opacity: 0,
          y: -70,
        },
      },


      bottom: {
        start: "top 80%",

        from: {
          opacity: 0,
          y: 50,
        },
      },

    };


    const animation =
      animations[type] || animations.default;


    /*
     * CREATE REVEAL
     */

    gsap.fromTo(

      element,

      animation.from,

      {
        opacity: 1,

        x: 0,
        y: 0,

        scale: 1,

        rotation: 0,

        duration: 0.9,

        ease: "power3.out",

        scrollTrigger: {

          trigger: element,

          start: animation.start,

          once: true,

        },

      }

    );

  });


  /*
   * Recalculate ScrollTrigger positions
   */

  ScrollTrigger.refresh();

}