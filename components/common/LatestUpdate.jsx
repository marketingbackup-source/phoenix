"use client";

const updates = [
  {
    title:
      "Top Benefits of a US Green Card by Investment Program",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/blog-image_green-card.jpg-300x169.jpeg",
    link: "/blogs/us-green-card-by-investment-benefits",
  },

  {
    title:
      "L1 Visa to Green Card: The Fastest Route for Indian Business Owners and Indian Professionals",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/6a857cdd6e24603c8713ec99_WhatsApp-Image-2026-08-19-at-13.54.16.jpeg",
    link: "/blogs/l1-visa-to-green-card-the-fastest-route-for-indian-business-owners",
  },

  {
    title:
      "Green Card USA: Complete Guide to Eligibility, Process, Benefits and Requirements",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/6a795d13990004e5de237179_Green-Card-Blog.jpg-1.jpeg",
    link: "/blogs/green-card-usa-complete-guide",
  },
];


export default function LatestUpdates() {
  return (
    <section
      className="
      py-80-30
      bg-white
      "
    >

      <div className="container-main">


        <div className="!mb-12">

          <h2
            className="
            fs-52-32
            uppercase
            font-normal
            leading-none
            "
          >
            <span className="text-[var(--color-red-1)]">
              Latest
            </span>{" "}
            Updates
          </h2>

        </div>



        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          "
        >

          {updates.map((item,index)=>(

            <a
              key={index}
              href={item.link}
              className="
              group
              overflow-hidden
              rounded-4xl
              bg-white
              border
              border-gray-100
              shadow-[0_10px_35px_rgba(0,0,0,0.08)]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
              "
            >


              {/* Image */}

              <div
                className="
                relative
                aspect-[1.9/1]
                overflow-hidden
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />


                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  "
                />

              </div>




              {/* Content */}

              <div
                className="
                p-6
                lg:p-7
                "
              >

                <h3
                  className="
                  text-xl
                  lg:text-2xl
                  leading-[1.35]
                  !font-normal
                  transition-colors
                  duration-300
                  group-hover:text-[var(--color-red-1)]
                  "
                >

                  {item.title}

                </h3>


                <div
                  className="
                  mt-6
                  h-[2px]
                  w-10
                  bg-[var(--color-red-1)]
                  transition-all
                  duration-500
                  group-hover:w-20
                  "
                />


              </div>


            </a>

          ))}


        </div>


      </div>

    </section>
  );
}