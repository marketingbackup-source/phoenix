"use client";

import { Quote, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Vijay-Parmar.png",
    name: "Vijay Kumar",
    from: "Gujarat",
    to: "USA",
    content:
      "Thank you so much for all your support and cooperation throughout this journey. A very special thank to the entire Phoenix team. This would not have been possible without persistence, dedication, and relentless efforts. I truly appreciate everything you have done to make this possible.",
  },

  {
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Sandip-Patel.png",
    name: "Sandip Patel",
    from: "Gujarat",
    to: "USA",
    content:
      "Thank you to the entire Phoenix Business Advisory team for your support throughout my L1 visa approval journey. A special thanks to the Global Immigration Department and the Operations team for their guidance and the valuable mock interview sessions, which greatly improved my confidence and preparation. I truly appreciate everyone's efforts, professionalism, and commitment. Thank you for making the process smooth and for being a part of this important milestone in my journey.",
  },

  {
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Hiren-Patel.png",
    name: "Hiren Patel",
    from: "Gujarat",
    to: "USA",
    content:
      "I would like to share my appreciation for the post-L1 petition support provided by your team. The mock interview sessions and training guidance were extremely helpful and gave me a clear understanding of the process. I would especially like to thank the Global Immigration Department for their prompt support, coordination, and continuous follow-ups, which ensured a smooth experience throughout. Overall, I truly appreciate the team's professionalism and guidance. It was a valuable experience, and I would gladly recommend your services to others. Wishing you continued success.",
  },

  {
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/Brijesh-Patel.png",
    name: "Brijesh Patel",
    from: "Gujarat",
    to: "USA",
    content:
      "The team at Phoenix Business Advisory played a crucial role in my L1 visa preparation. Their guidance and mock interview sessions helped me confidently present my expertise and improve my interview readiness. Special thanks to the Global Immigration Department and the entire team for their dedication, insights, and continuous support throughout the process. Thanks to their preparation, my interview went smoothly, and my L1 visa was approved successfully.",
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
          bg-[var(--color-red-1)]
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
              text-[var(--color-red-1)]
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
              Our <span className="text-[var(--color-red-1)]">Success</span>{" "}
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
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {testimonials.map((item, index) => (
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
                      text-[var(--color-red-1)]
                      opacity-30
                      !mb-8
                      "
                    />

                    <p
                      className="
                      !text-lg
                      !text-gray-600
                      leading-[1.8]
                      !mb-10
                      "
                    >
                      {item.content}
                    </p>

                    <div
  className="
  flex
  items-center
  gap-4
  "
>
  <img
    src={item.image}
    alt={item.name}
    className="
    h-24
    w-24
    rounded-full
    object-cover
    border
    border-gray-200
    "
  />

  <div>

    <h3
      className="
      uppercase
      text-black
      text-xl
      !mb-2
      "
    >
      {item.name}
    </h3>


    <div
      className="
      flex
      items-center
      gap-2
      text-shadow-md
      font-medium
      text-gray-500
      "
    >

      <span>
        {item.from}
      </span>


      <ArrowRight
        size={18}
        strokeWidth={1.8}
        className="
        text-[var(--color-red-1)]
        "
      />


      <span>
        {item.to}
      </span>

    </div>

  </div>

</div>
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
