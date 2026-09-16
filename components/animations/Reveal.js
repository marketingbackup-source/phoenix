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

      gsap.fromTo(
        element.children,

        {
          opacity: 0,
          y: 30,
        },

        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          stagger: 0.15,

          ease: "power3.out",

          scrollTrigger: {
            trigger: element,

            start: "top 50%",

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
        opacity: 0,
        y: -40,
      },


      scale: {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },


      left: {
        opacity: 0,
        x: -50,
      },


      right: {
        opacity: 0,
        x: 50,
      },

    };


    /*
     * CREATE REVEAL
     */

    gsap.fromTo(

      element,

      animations[type] || animations.default,

      {
        opacity: 1,

        x: 0,
        y: 0,
        scale: 1,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {

          trigger: element,

          start: "top 50%",

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