"use client";

import YoutubeCard from "@/components/UI/YoutubeCard";

const howItWorks = [
  {
    title: "L1 Visa Explained",
    url: "https://youtu.be/5ELPl8wYSks?si=j0IArQac0GMcVvkI",
    thumbnail:
      "https://img.youtube.com/vi/5ELPl8wYSks/maxresdefault.jpg",
  },
  {
    title: "Move Your Business To USA",
    url: "https://youtu.be/ziWltiVKW3w?si=NAGb0VO_bgvOJnks",
    thumbnail:
      "https://img.youtube.com/vi/ziWltiVKW3w/maxresdefault.jpg",
  },
];


const testimonials = [
  {
    title: "L1 Visa Success Story",
    url: "https://youtu.be/pR6cUYSzjVQ?si=eb4fLFtWjGL6eAIW",
    thumbnail:
      "https://img.youtube.com/vi/pR6cUYSzjVQ/maxresdefault.jpg",
  },
  {
    title: "Client Success Story",
    url: "https://youtu.be/xjWF-BqoGKw?si=oDFaTa2QXxl8cXEW",
    thumbnail:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/66f6acc89209b52107666c39_Youtube-02-p-1080.jpg",
  },
  {
    title: "Business Migration Experience",
    url: "https://youtu.be/Ni67ARzYBDQ?si=aAsC7jekMbajpY-d",
    thumbnail:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/66f6acc869fd39c1e307888e_Youtube-01-p-1080.jpg",
  },
];


const clientStories = [
  {
    title: "Client Testimonial",
    url: "https://youtu.be/_UseCx9-6K0?si=bf8y8Fn1CFCBkI3K",
    thumbnail:
      "https://img.youtube.com/vi/_UseCx9-6K0/maxresdefault.jpg",
  },
  {
    title: "Visa Journey",
    url: "https://youtu.be/X54FB7cMnOY?si=UwJFI1w6wEgpEIPk",
    thumbnail:
      "https://img.youtube.com/vi/X54FB7cMnOY/maxresdefault.jpg",
  },
];


export default function Youtube() {
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


        {/* HOW IT WORKS */}

        <div className="!mb-20">

          <h2
            className="
            fs-52-32
            uppercase
            text-center
            font-normal
            !mb-10
            "
          >

            <span className="text-[var(--color-red-3)]">
              See
            </span>{" "}
            How It Works

          </h2>


          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            "
          >

            {howItWorks.map((video) => (

              <YoutubeCard
                key={video.title}
                {...video}
                className="aspect-video"
              />

            ))}

          </div>

        </div>



        {/* CLIENT STORIES */}

        <div className="!mb-8">

          <h2
            className="
            fs-52-32
            uppercase
            text-center
            font-normal
            !mb-10
            "
          >

            <span className="text-[var(--color-red-3)]">
              What Our Clients
            </span>{" "}
            Think About Us?

          </h2>


          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
            "
          >

            {testimonials.map((video) => (

              <YoutubeCard
                key={video.title}
                {...video}
                className="aspect-video"
              />

            ))}

          </div>

        </div>



        {/* MORE VIDEOS */}

        <div>

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            "
          >

            {clientStories.map((video) => (

              <YoutubeCard
                key={video.title}
                {...video}
                className="aspect-video"
              />

            ))}

          </div>

        </div>


      </div>


    </section>
  );
}