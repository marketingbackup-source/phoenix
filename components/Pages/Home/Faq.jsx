"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";

export default function FaqSection({
  faqs = [],
}) {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#f7f7f7]
      py-80-30
      "
    >

      <div
        className="
        absolute
        -top-40
        left-1/3
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
        bottom-[-200px]
        right-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-gray-300
        opacity-40
        blur-[180px]
        "
      />


      <div className="container-main relative">

        <div
          className="
          flex
          flex-col
          lg:flex-row
          gap-12
          lg:gap-16
          items-start
          "
        >


          {/* Heading */}

          <div
            className="
            w-full
            lg:w-5/12
            "
          >

            <h2
              className="
              fs-52-32
              uppercase
              font-normal
              leading-[1.1]
              text-black
              !mb-6
              "
              data-reveal
            >

              <span className="text-[var(--color-red-1)]">
                What We Do
              </span>{" "}
              for Our Clients?

            </h2>


            <p
              className="
              text-gray-500
              fs-18-16
              leading-[1.7]
              max-w-xl
              "
              data-reveal
            >
              Find answers to common questions about business migration,
              visa pathways, investment opportunities, and the support
              provided by Phoenix Business Advisory throughout your global
              expansion journey.
            </p>


          </div>



          {/* Accordion */}

          <div
            className="
            w-full
            lg:w-7/12
            "
          >

            <Accordion
              className="
              flex
              flex-col
              gap-4
              "
            >

              {faqs.map((faq,index)=>(

                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="
                  rounded-3xl
                  bg-white/70
                  backdrop-blur-xl
                  border
                  border-white
                  shadow-[0_15px_40px_rgba(0,0,0,0.04)]
                  px-6
                  transition-all
                  duration-500
                  hover:bg-white
                  "
                >

                  <AccordionTrigger
                    className="
                    py-6
                    text-left
                    text-lg
                    lg:text-xl
                    font-medium
                    text-black
                    hover:no-underline
                    "
                  >

                    <span className="flex items-center gap-4">

                      <span
                        className="
                        flex
                        items-center
                        justify-center
                        shrink-0
                        w-8
                        h-8
                        rounded-full
                        border
                        border-[var(--color-red-1)]
                        text-[var(--color-red-1)]
                        text-sm
                        "
                      >
                        {index + 1}
                      </span>

                      {faq.question}

                    </span>

                  </AccordionTrigger>


                  <AccordionContent
                    className="
                    pb-6
                    text-gray-500
                    fs-20-16
                    leading-[1.7]
                    "
                  >

                    {faq.answer}

                  </AccordionContent>


                </AccordionItem>

              ))}

            </Accordion>


          </div>


        </div>


      </div>


    </section>
  );
}