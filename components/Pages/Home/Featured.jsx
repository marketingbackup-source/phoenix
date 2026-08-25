"use client";

const featuredNews = [
  {
    quote:
      "Phoenix Business Advisory—Most trusted name in HNI business migration to Australia",
    logo: "/images/partners/forbes.png",
  },
  {
    quote:
      "Australia Business Immigration leader Phoenix Business Advisory charts extensive plan for Ultra HNI & HNI migration",
    logo: "/images/partners/week.png",
  },
  {
    quote:
      "Phoenix Business Advisory provides hassle-free and simplified business migration services for your dream PR in Australia",
    logo: "/images/partners/times of india.png",
  },
  {
    quote:
      "Phoenix Business Advisory has provided a detailed understanding of the plethora of advantages for India's business community in Australia.",
    logo: "/images/partners/yahoo.png",
  },
  {
    quote:
      "Phoenix Business Advisory is the premier Indian homegrown brand specializing in providing HNIs with seamless business migration services to the US and Australia",
    logo: "/images/partners/Khaleej_Times.png",
  },
  {
    quote:
      "Phoenix Business Advisory – Revolution in business migration",
    logo: "/images/partners/Hindustan_Times_logo.svg.png",
  },
];

export default function Featured() {
  return (
    <section className="relative py-80-30 overflow-hidden bg-[#f7f7f7]">

      <div
        className="
        absolute
        -top-40
        left-1/2
        -translate-x-1/2
        w-[600px]
        h-[300px]
        rounded-full
        bg-[var(--color-red-3)]
        opacity-10
        blur-[160px]
        "
      />

      <div className="container-main relative">

        <div className="text-center !mb-12">

          <h2
            className="
            fs-52-32
            uppercase
            font-normal
            leading-[1]
            "
          >

            <span className="text-[var(--color-red-3)]">
              Featured
            </span>{" "}
            In The News

          </h2>

        </div>


        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          rounded-4xl
          overflow-hidden
          border
          border-gray-200
          "
        >

          {featuredNews.map((item, index) => (

            <div
              key={index}
              className="
              group
              relative
              min-h-[330px]
              flex
              flex-col
              justify-between
              bg-white/70
              backdrop-blur-xl
              border
              border-gray-200
              p-8
              transition-all
              duration-500
              hover:bg-white
              "
            >

              <div
                className="
                absolute
                top-0
                left-0
                w-full
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-[var(--color-red-3)]
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
                "
              />


              <p
                className="
                text-gray-600
                text-base
                leading-[1.7]
                text-center
                !mb-8
                "
              >
                "{item.quote}"
              </p>


              <div
                className="
                flex
                flex-col
                items-center
                justify-end
                "
              >

                <span
                  className="
                  w-10
                  h-[2px]
                  bg-[var(--color-red-3)]
                  !mb-6
                  "
                />


                <div
                  className="
                  h-[60px]
                  flex
                  items-center
                  justify-center
                  "
                >

                  <img
                    src={item.logo}
                    alt="Media Partner"
                    loading="lazy"
                    className="
                    max-w-[170px]
                    max-h-[55px]
                    object-contain
                    opacity-70
                    grayscale
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:grayscale-0
                    "
                  />

                </div>


              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}