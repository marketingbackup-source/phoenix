"use client";

const achievements = [
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/66d5826c20ae22014cbe23ee_A30I9652.JPG",
    title:
      "Speaking at USA Business Migration event in Ahmedabad on 1st September 2024",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c738331317bbda277f4e_ANJ_0516.jpg",
    title:
      "With our Brand Ambassador Nargis Fakhri",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c73a331317bbda2780f0_WhatsApp%20Image%202024-04-18%20at%2010.43.23_8e9deaf2.jpg",
    title:
      "Awarded with ET Inspiring Leaders Award by The Times Group",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/66d5826c89b9897661e895b5_A30I9676.JPG",
    title:
      "Speaking at USA Business Migration event in Ahmedabad on 1st September 2024",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c739331317bbda2780c4_with%20Marney%20%26%20Greg%20Mckeen.jpg",
    title:
      "With Marny & Greg Mckeon from Queensland Trade & Investment",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c738331317bbda277f5b_RSP_0396.jpg",
    title:
      "Speaking at Australia Business Migration event in New Delhi",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c737331317bbda277f42_At-CNBC-Studio-for-an-Interview.jpg",
    title:
      "At CNBC Studio for an Interview",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c73a331317bbda278104_Awarded%20as%20Entrepreneur%20of%20the%20year%202020%20by%20Business%20View%C2%A0Magazine.jpg",
    title:
      "Awarded as Entrepreneur of the year 2020 by Business View Magazine",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c73a331317bbda2780e5_MP%20Singh%20speaking%20at%20Ahmedabad%20event.jpg",
    title:
      "Speaking at Australia Business Migration event in Ahmedabad",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c739331317bbda277ff2_Addressing-the-Media-in-New-Delhi.jpg",
    title:
      "Addressing the Media in New Delhi",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c738331317bbda277f79_With-Phillip-Graffioni-Senior-Officer-South-Australia-Government.jpg",
    title:
      "With Phillip Grattini, Senior Officer, South Australia Government",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c737331317bbda277eff_RSP_0466.jpg",
    title:
      "With Abhinav Bhatia Trade and Investment Commissioner, Queensland, Australia and Brett Lee",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c738331317bbda277f69_ANJ_0838.jpg",
    title:
      "Speaking at USA Business Migration event in Dubai",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666c739331317bbda278058_MP%20singh%20with%20Brett%20Lee.jpg",
    title:
      "With Brett Lee",
  },
];


export default function Achievements() {

  return (

    <section className="py-80-30">


      <div className="container-main">


        <div className="!mb-12">

          <h2
            className="
            fs-52-32
            uppercase
            text-black
            max-w-xl
            "
            data-reveal
          >

            <span className="text-[var(--color-red-1)]">
              Achievements
            </span>

            {" "}
            And
            <br />

            Accomplishments

          </h2>

        </div>



        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >


          {achievements.map((item,index)=>(

            <div
              key={index}
              className="
              group
              overflow-hidden
              rounded-3xl
              bg-white
              border
              border-gray-100
              shadow-[0_15px_40px_rgba(0,0,0,0.05)]
              transition-all
              duration-500
              hover:-translate-y-2
              "
            >

              <div
                className="
                overflow-hidden
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-full
                  aspect-[4/5]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  "
                />

              </div>


              <div
                className="
                px-5
                py-4
                "
              >

                <p
                  className="
                  text-gray-500
                  text-sm
                  leading-[1.5]
                  !mb-0
                  "
                  data-reveal
                >
                  {item.title}
                </p>

              </div>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}