"use client";

import MediaPartners from "@/components/Pages/Home/MediaPartners";
import WhyUs from "@/components/Pages/Home/WhyUs";

export default function TrustAuthority() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">

      <div
        className="
        absolute
        -top-40
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[400px]
        rounded-full
        bg-[var(--color-red-1)]
        opacity-20
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        top-[45%]
        -left-40
        w-[500px]
        h-[500px]
        rounded-full
        bg-[var(--color-red-1)]
        opacity-10
        blur-[160px]
        "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        right-[-150px]
        w-[600px]
        h-[600px]
        rounded-full
        bg-white
        opacity-10
        blur-[180px]
        "
      />


      <div className="relative">

        <MediaPartners />

        <WhyUs />

      </div>


    </section>
  );
}