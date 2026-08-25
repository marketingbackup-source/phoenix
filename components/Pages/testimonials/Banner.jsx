"use client";

import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const testimonials = [
  {
    content:
      "Phoenix Business Advisory provided exceptional guidance throughout our immigration journey. Their strategic approach and professional support helped us achieve our global expansion goals successfully.",
    name: "Client Name",
  },
  {
    content:
      "The Phoenix team delivered personalised solutions with complete transparency and professionalism. Their expertise made our migration process smooth and stress-free.",
    name: "Client Name",
  },
  {
    content:
      "From business planning to immigration strategy, Phoenix Business Advisory supported us at every stage with excellent knowledge and dedication.",
    name: "Client Name",
  },
  {
    content:
      "We highly appreciate the commitment and strategic advice provided by Phoenix Business Advisory. Their approach truly reflects international business expertise.",
    name: "Client Name",
  },
];


export default function TestimonialsBanner() {
  return (
    <section className="relative py-80-30 overflow-hidden bg-[#f7f7f7]">


      <div className="absolute inset-0">


        <div
          className="
          absolute
          -top-40
          right-1/3
          w-[300px]
          h-[300px]
          rounded-full
          bg-[var(--color-red-3)]
          opacity-5
          blur-[160px]
          "
        />


        <div
          className="
          absolute
          bottom-[-200px]
          left-[-100px]
          w-[600px]
          h-[600px]
          rounded-full
          bg-gray-300
          opacity-40
          blur-[180px]
          "
        />


        <div
          className="
          absolute
          inset-0
          opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />


      </div>



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
            lg:w-5/12
            "
          >


            <p
              className="
              uppercase
              tracking-[2px]
              text-[var(--color-red-3)]
              !mb-5
              "
            >
              Testimonials
            </p>


            <h1
              className="
              fs-60-32
              uppercase
              text-black
              !mb-8
              "
            >

              Our{" "}
              <span className="text-[var(--color-red-3)]">
                Success
              </span>{" "}
              Stories

            </h1>



            <p
              className="
              text-gray-500
              fs-20-16
              leading-[1.7]
              max-w-xl
              !mb-0
              "
            >
              Discover inspiring journeys of entrepreneurs, investors, and
              families who achieved their global aspirations with Phoenix
              Business Advisory's strategic guidance and expertise.
            </p>


          </div>




          <div
            className="
            w-full
            lg:w-7/12
            "
          >


            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              speed={3000}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
            >


              {testimonials.map((item,index)=>(

                <SwiperSlide key={index}>


                  <div
                    className="
                    relative
                    bg-white/[0.35]
                    backdrop-blur-2xl
                    border
                    border-gray-300/60
                    rounded-4xl
                    p-40-15
                    "
                  >


                    <Quote
                      size={70}
                      className="
                      text-[var(--color-red-3)]
                      opacity-30
                      !mb-8
                      "
                    />


                    <p
                      className="
                      fs-20-16
                      text-gray-600
                      leading-[1.8]
                      !mb-10
                      "
                    >
                      {item.content}
                    </p>



                    <h3
                      className="
                      uppercase
                      text-black
                      text-xl
                      !mb-0
                      "
                    >
                      {item.name}
                    </h3>


                  </div>


                </SwiperSlide>

              ))}


            </Swiper>


          </div>


        </div>


      </div>


    </section>
  );
}