"use client";

import { useEffect } from "react";
import { initRevealAnimations } from "./Reveal";


export default function RevealProvider({ children }) {

  useEffect(() => {

    initRevealAnimations();

  }, []);


  return children;

}