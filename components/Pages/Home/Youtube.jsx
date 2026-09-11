"use client";


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
    title: "L1 Visa Success Story",
    id: "pR6cUYSzjVQ",
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


const clientStories = [
  {
    title: "Client Testimonial",
    id: "_UseCx9-6K0",
  },
  {
    title: "Visa Journey",
    id: "X54FB7cMnOY",
  },
];



function YoutubeEmbed({ video }) {
  return (
    <div
      className="
      overflow-hidden
      rounded-4xl
      bg-white
      border
      border-gray-200
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      "
    >

      <div
        className="
        aspect-video
        w-full
        overflow-hidden
        "
      >

        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          className="
          h-full
          w-full
          "
          allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share
          "
          allowFullScreen
        />

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


    </div>
  );
}



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

            {howItWorks.map((video)=>(

              <YoutubeEmbed
                key={video.title}
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

            {testimonials.map((video)=>(

              <YoutubeEmbed
                key={video.title}
                video={video}
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

            {clientStories.map((video)=>(

              <YoutubeEmbed
                key={video.title}
                video={video}
              />

            ))}


          </div>


        </div>



      </div>


    </section>

  );

}