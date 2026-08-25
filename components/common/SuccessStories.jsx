"use client";

const successStories = [
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/693ac1e477a56620b573111d_podcast-thumbnail1.jpg",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/693ac2e825a492436db49890_podcast-thumbnail2.jpg",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/693ac36fb196ac166dc85fb9_podcast-thumbnail3.jpg",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/693ac1e3f4d0630111b9d2f6_podcast-thumbnail4.jpg",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/693ac68fc9d9b02867f78479_L1petition.jpg",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/693ac68da15cfc0fd4ab00dd_deepak-kumar-thumbnail.jpg",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/693ac690239d5e0dae6ab6dc_vijay-kumar-thumbnail.jpg",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/693ac691f8ee93a8bfd94706_visa-approved.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/693ac692cef8003bd4ba353a_rakesh-thumbnail.jpg",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/66e7c2079798fc06d9a6d471_WhatsApp%20Image%202024-09-16%20at%2010.48.44_1eb2e874.jpg",
  },
  {
    image: "http://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/66f516b7ce701370ef8a22ee_L1A-Khurmi-thumbnail.jpg",
  }
];


export default function SuccessStories() {
  return (
    <section className="py-80-30">


      <div className="container-main">


        <div className="!mb-12">

          <h2
            className="
            fs-52-32
            uppercase
            text-black
            "
          >

            Our{" "}
            <span className="text-[var(--color-red-3)]">
              Success
            </span>{" "}
            Stories

          </h2>

        </div>



        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-12
          gap-6
          "
        >


          {successStories.map((item,index)=>(

            <div
              key={index}
              className={`
              group
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              bg-white
              ${
                index === 0 ||
                index === 4 ||
                index === 8
                ? "lg:col-span-4"
                : "lg:col-span-4"
              }
              `}
            >


              <div
                className="
                relative
                overflow-hidden
                "
              >


                <img
                  src={item.image}
                  alt="Phoenix Success Story"
                  loading="lazy"
                  className="
                  w-full
                  aspect-[4/5]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  "
                />



                <div
                  className="
                  absolute
                  inset-0
                  bg-black/0
                  transition-all
                  duration-500
                  group-hover:bg-black/10
                  "
                />


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}