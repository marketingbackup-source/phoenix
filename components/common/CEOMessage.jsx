"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BaseButton from "@/components/UI/BaseButton";

export default function CEOMessage() {
  return (
    <section className="py-80-30 overflow-hidden">

      <div className="container-main">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="w-full lg:w-7/12">

            <p className="text-sm uppercase tracking-[3px] text-gray-500 !mb-5" data-reveal>
              Leadership Message
            </p>


            <h2 className="fs-52-32 uppercase font-normal leading-[1] !mb-8" data-reveal>
              <span className="text-[var(--color-red-1)]">
                CEO'S
              </span>{" "}
              MESSAGE
            </h2>


            <p className="text-gray-500 fs-18-16 leading-[1.7] !mb-8" data-reveal>
              Welcome to Phoenix Business Advisory. Our mission is to empower
              entrepreneurs and businesses to expand globally with confidence.
              I am passionate about helping people achieve the life they dream
              of. Seeing them grow, succeed, and live better lives motivates
              everything we do. With honest guidance, personalized support,
              and hands-on expertise, we simplify international growth in the
              USA, Australia, New Zealand, European Union and the UAE, turning
              your ambitions into real success.
            </p>


            <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200 p-8 !mb-8">

              <div className="absolute left-0 top-0 h-full w-1 bg-[var(--color-red-1)]" />


              <p className="uppercase tracking-[2px] text-lg leading-[1.6] font-medium !mb-0" data-reveal>

                <span className="text-[var(--color-red-1)]">
                  We are committed
                </span>{" "}
                to becoming the #1 leader in business migration{" "}
                <span className="text-[var(--color-red-1)]">
                  worldwide by 2028.
                </span>

              </p>

            </div>


            <div className="flex flex-col gap-6">

              <img
                src="https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6651e4b27b190374f71726ab_Mp%20singh%20signature%20black-p-1080.png"
                alt="MP Singh Signature"
                className="w-[160px]"
              />


              <BaseButton
                title="Book 1:1 Call With The CEO - $99"
                link
                toLink="https://advice.mpsinggh.com/"
                style="primary w-fit"
              >
                <ArrowRight size={20}/>
              </BaseButton>

            </div>

          </div>


          <div className="w-full lg:w-5/12">

            <div className="relative">

              <div className="absolute -inset-8 rounded-full bg-[var(--color-red-1)] opacity-10 blur-3xl" />


              <div className="relative overflow-hidden rounded-4xl">

                <Image
                  src="https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a3149df6a3dc806a1492b42_mp-singh-profile-p-1080.jpeg"
                  width={700}
                  height={900}
                  alt="MP Singh Founder and CEO"
                  priority
                  className="w-full h-auto object-cover"
                />


                <div className="absolute bottom-6 left-6 right-6">

                  <div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 p-5">

                    <h3 className="!text-white uppercase text-xl">
                      MP Singh
                    </h3>


                    <p className="!text-white/70 text-sm uppercase tracking-[2px] !mb-1">
                      Founder & CEO
                    </p>


                    <p className="!text-white/70 text-sm !mb-0">
                      Phoenix Business Advisory
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}