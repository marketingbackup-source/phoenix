"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const mediaBase =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/";

const newsItems = [
  {
    logo:`${mediaBase}insights.webp`,
    title:"Global Entrepreneurs Eye New Zealand as Fast-Track Investor Visa Gains Attention",
    type:"article",
  },
  {
    logo:`${mediaBase}ani.webp`,
    title:"New Zealand PR Program for Global Business Owners",
    type:"article",
  },
  {
    logo:`${mediaBase}Bhart-mirror.webp`,
    title:"Australia Reopens Direct Family PR in 9 months*",
    type:"article",
  },
  {
    logo:`${mediaBase}bharat-mirror-hindi.webp`,
    title:"Australia reopens business visas for entrepreneurs.",
    type:"article",
  },
  {
    logo:`${mediaBase}buisness-view.webp`,
    title:"Phoenix Business Advisory: Most trusted name in Business Migration to Australia in India",
    type:"article",
  },
  {
    logo:`${mediaBase}y8cbvjd3drfenyrykgwb.webp`,
    title:"2000+ Indian entrepreneurs to make Australia their second home by end of 2025",
    type:"article",
  },
  {
    logo:`${mediaBase}hindustan-times.webp`,
    title:"Phoenix Business Advisory to invest 70 crores for the corporate regional offices in India & across the world",
    type:"article",
  },
  {
    logo:`${mediaBase}forbes.webp`,
    title:"Phoenix Business Advisory launched highly lucrative channel partner program",
    type:"article",
  },
  {
    logo:`${mediaBase}buisness-connect.webp`,
    title:"PHOENIX BUSINESS ADVISORY – Reshaping client's vision of business Expansion & Family Business",
    type:"article",
  },
  {
    logo:`${mediaBase}buisness-standard-1.webp`,
    title:"One country that still stands tall amidst the crisis is Australia with its stable economy",
    type:"article",
  },
  {
    logo:`${mediaBase}the-week.webp`,
    title:"Australia Could be the Most Preferred Business Destination After Coronavirus Pandemic Says Phoenix",
    type:"article",
  },
  {
    logo:`${mediaBase}yahoo.webp`,
    title:"Australian has become significantly wealthier compared to an average US citizen",
    type:"article",
  },
  {
    logo:`${mediaBase}TOI.webp`,
    title:"Australia: An ideal destination for Ultra HNI & HNI Migration from the last 5 years",
    type:"article",
  },
  {
    logo:`${mediaBase}news-daddy.webp`,
    title:"Top Global Business Tips from an Industry Expert",
    type:"video",
  },
  {
    logo:`${mediaBase}rex.webp`,
    title:"Discover Phoenix Business Advisory Services",
    type:"video",
  },
  {
    logo:`${mediaBase}tv9.webp`,
    title:"The Rise of Phoenix Business Advisory",
    type:"video",
  },
  {
    logo:`${mediaBase}ptc.webp`,
    title:"Business Migration with MP Singh",
    type:"video",
  },
  {
    logo:`${mediaBase}bhaskar-digital.webp`,
    title:"The Smart Solution for Business Owners in India.",
    type:"video",
  },
  {
    logo:`${mediaBase}podcast.webp`,
    title:"Mr. Singh shares the story of the expansion and his global vision.",
    type:"video",
  },
  {
    logo:`${mediaBase}daily-post.webp`,
    title:"Mr MP Singh on Business Migration to Australia with Daily Post Punjabi",
    type:"video",
  },
  {
    logo:`${mediaBase}daily-post.webp`,
    title:"Meet Mr. MP Singh CEO of Phoenix Business Advisory | An interview with Daily Post Punjabi",
    type:"video",
  },
  {
    logo:`${mediaBase}abp.webp`,
    title:"Opportunities for Business Migration in Australia",
    type:"video",
  },
  {
    logo:`${mediaBase}rj-mirchi.webp`,
    title:"Interview with RJ Dhvanit - 98.3fm, Radio Mirchi Ahmedabad",
    type:"video",
  },
  {
    logo:`${mediaBase}cnbc.webp`,
    title:"Exploring Investment Immigration With Phoenix Business Advisory",
    type:"video",
  },
];


export default function NewsCoverageGrid() {

  return (

    <section className="py-80-30 bg-white">

      <div className="container-main">


        <div className="text-center !mb-12">

          <h2
            className="
            fs-52-32
            uppercase
            text-black
            "
          >
            News{" "}
            <span className="text-[var(--color-red-1)]">
              Coverage
            </span>
          </h2>

        </div>



        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-30-10
          "
        >


          {newsItems.map((item,index)=>(

            <a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              rounded-3xl
              border
              border-gray-200
              bg-white
              overflow-hidden
              shadow-[0_15px_40px_rgba(0,0,0,0.05)]
              transition-all
              duration-500
              hover:-translate-y-2
              "
            >


              <div
                className="
                h-[110px]
                flex-center
                bg-gray-50
                px-8
                "
              >

                <Image
                  src={item.logo}
                  alt="Media Logo"
                  width={180}
                  height={70}
                  className="
                  max-h-[55px]
                  max-w-[160px]
                  object-contain
                  "
                />

              </div>



              <div
                className="
                p-6
                flex
                flex-col
                min-h-[220px]
                "
              >


                <p
                  className="
                  text-gray-600
                  text-sm
                  leading-[1.7]
                  !mb-auto
                  "
                >
                  {item.title}
                </p>



                <div
                  className="
                  flex-between
                  items-center
                  !mt-8
                  "
                >

                  <span
                    className="
                    text-xs
                    uppercase
                    tracking-[1px]
                    text-black
                    "
                  >
                    {item.type === "video"
                      ? "Watch Full Video"
                      : "Read Full Article"}
                  </span>


                  <ArrowUpRight
                    size={18}
                    className="text-gray-700"
                  />

                </div>


              </div>


            </a>


          ))}


        </div>


      </div>


    </section>

  );

}