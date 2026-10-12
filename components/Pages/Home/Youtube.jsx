import Image from "next/image";
import { Play } from "lucide-react";


const howItWorks = [
  {
    title: "L1 Visa Explained",
    id: "5ELPl8wYSks",
  },
  {
    title: "Move Your Business To USA",
    id: "ziWltiVKW3w",
  },
];


const testimonials = [
  {
    title: "Success Story",
    id: "ccNaxrDgJCI",
  },
  {
    title: "Client Success Story",
    id: "xjWF-BqoGKw",
  },
  {
    title: "Business Migration Experience",
    id: "Ni67ARzYBDQ",
  },
];


function YoutubeCard({ video }) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;

  const thumbnail = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
      group
      block
      overflow-hidden
      rounded-4xl
      bg-white
      border
      border-gray-200
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      "
      data-reveal="bottom"
    >
      <div
        className="
        relative
        aspect-video
        w-full
        overflow-hidden
        bg-black
        "
      >
        <Image
          src={thumbnail}
          alt={video.title}
          fill
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-black/15
          transition-colors
          duration-300
          group-hover:bg-black/25
          "
        />

        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          "
        >
          <div
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-white
            text-[var(--color-red-1)]
            shadow-lg
            transition-transform
            duration-300
            group-hover:scale-110
            "
          >
            <Play
              size={28}
              fill="currentColor"
            />
          </div>
        </div>
      </div>

      <div
        className="
        bg-white
        px-6
        py-5
        "
      >
        <h3
          className="
          text-lg
          font-medium
          uppercase
          text-black
          !mb-0
          "
        >
          {video.title}
        </h3>
      </div>
    </a>
  );
}


export default function Youtube() {
  return (
    <section className="relative py-80-40 overflow-hidden bg-[#f7f7f7]">
      <div
        className="
        absolute
        -top-40
        left-1/2
        -translate-x-1/2
        w-[600px]
        h-[300px]
        rounded-full
        bg-[var(--color-red-1)]
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
            <span className="text-[var(--color-red-1)]">
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
                key={video.id}
                video={video}
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
            <span className="text-[var(--color-red-1)]">
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
                key={video.id}
                video={video}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}