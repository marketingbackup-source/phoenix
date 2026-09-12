"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

export default function VisaBanner({ title, excerpt, image }) {
  return (
    <section className="relative py-80-30 overflow-hidden bg-[#f7f7f7]">
     

      <div className="container-main relative">
        <div
          className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-60-20
          "
        >
          <div
            className="
            w-full
            lg:w-6/12
            "
          >
            <p
              className="
              uppercase
              tracking-[2px]
              text-[var(--color-red-1)]
              !mb-5
              "
            >
              Immigration Program
            </p>

            <h1
              className="
              fs-60-32
              uppercase
              text-black
              !mb-8
              "
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />

            <div
              className="
              text-gray-500
              fs-20-16
              leading-[1.7]
              max-w-xl
              !mb-8
              "
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
            />

            <BaseButton
              title="Speak With Expert"
              link
              toLink="/contact-us"
              style="primary w-fit"
            >
              <ArrowRight size={20} />
            </BaseButton>
          </div>

          <div
            className="
            w-full
            lg:w-6/12
            flex-center
            "
          >
            <div
              className="
              relative
              w-full
              max-w-[600px]
              "
            >
            

              <div
                className="
                relative
                "
              >
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={600}
                  className="
                  w-full
                  max-w-[500px]
                  object-contain
                  
                  "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
