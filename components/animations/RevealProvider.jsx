"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { initRevealAnimations } from "./Reveal";


export default function RevealProvider({ children }) {

  const pathname = usePathname();


  useEffect(() => {

    /*
     * Wait until the new page content
     * has been rendered into the DOM.
     */

    const timer = setTimeout(() => {

      initRevealAnimations();

    }, 100);


    return () => {

      clearTimeout(timer);

    };

  }, [pathname]);


  return children;

}