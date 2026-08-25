"use client";

import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";


const navigation = [
  {
    title: "Programs Offered",
    items: [
      "L-1 Visa USA",
      "National Innovation Visa",
      "Citizenship By Investment",
      "Investor Work Visa NZ",
      "Business Migration Programs",
    ],
  },
  {
    title: "Resources",
    items: [
      "Articles",
      "Webinars",
      "Success Stories",
      "Events & Seminars",
      "Careers",
    ],
  },
  {
    title: "Services",
    items: [
      "Business Migration",
      "Investment Advisory",
      "Business Acquisition",
      "Settlement Support",
      "Global Expansion",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Our Offices",
      "Contact Us",
      "Testimonials",
      "Press Release",
    ],
  },
  {
    title: "Legal",
    items: [
      "Privacy Policy",
      "Terms & Conditions",
      "Disclaimer",
      "Sitemap",
    ],
  },
];


const socials = [
  {
    name:"Facebook",
    image:"/social/facebook.png",
  },
  {
    name:"X",
    image:"/social/twitter.png",
  },
  {
    name:"Instagram",
    image:"/social/instagram.png",
  },
  {
    name:"Linkedin",
    image:"/social/linkedin.png",
  },
  {
    name:"Youtube",
    image:"/social/youtube.png",
  },
  {
    name:"Whatsapp",
    image:"/social/whatsapp.png",
  },
];


export default function Footer(){

  return (

    <footer className="relative overflow-hidden bg-[#050b14] pt-16 pb-0">


      <div
        className="
        absolute
        -top-40
        left-1/3
        w-[600px]
        h-[400px]
        rounded-full
        bg-[var(--color-red-3)]
        opacity-10
        blur-[180px]
        "
      />


      <div className="container-main relative">


        {/* TOP SECTION */}

        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-12
          pb-14
          border-b
          border-white/10
          "
        >


          <div className="max-w-[480px]">


            <Image
              src="/logos/white.png"
              width={180}
              height={60}
              alt="Phoenix Business Advisory"
              className="w-[180px] !mb-6"
            />


            <p
              className="
              footer-nav-item
              leading-[1.8]
              !mb-0
              "
            >
              Helping entrepreneurs and investors expand globally through
              business migration, investment advisory and international
              growth solutions across USA, Australia, New Zealand and Europe.
            </p>


          </div>



          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-10
            lg:gap-16
            "
          >


            <div
              className="
              flex
              flex-col
              gap-5
              "
            >


              <div className="flex items-center gap-3">

                <Mail
                  size={17}
                  className="text-white"
                />

                <p className="footer-nav-item !mb-0">
                  info@phoenixbusinessadvisory.com
                </p>

              </div>


              <div className="flex items-center gap-3">

                <Phone
                  size={17}
                  className="text-white"
                />

                <p className="footer-nav-item !mb-0">
                  +91 96013 77611
                </p>

              </div>


            </div>



            <div
              className="
              w-full
              "
            >

              <p className="footer-nav-heading !mb-3">
                Stay Updated
              </p>


              <div
                className="
                flex
                overflow-hidden
                rounded-lg
                border
                border-white/10
                bg-black/20
                "
              >

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                  w-full
                  bg-transparent
                  px-3
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/40
                  "
                />


                <button
                  className="
                  flex
                  items-center
                  justify-center
                  px-4
                  bg-[var(--color-red-3)]
                  text-white
                  "
                >

                  <ArrowRight size={17}/>

                </button>


              </div>


            </div>


          </div>


        </div>




        {/* NAVIGATION */}


        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-10
          py-14
          "
        >

          {navigation.map((column)=>(

            <div key={column.title}>


              <h3 className="footer-nav-heading !mb-6">
                {column.title}
              </h3>


              <ul className="!m-0 !p-0 list-none space-y-4">

                {column.items.map((item)=>(

                  <li
                    key={item}
                    className="footer-nav-item"
                  >
                    {item}
                  </li>

                ))}

              </ul>


            </div>

          ))}


        </div>



        {/* BOTTOM BAR */}


        <div
          className="
          border-t
          border-white/10
          pt-6
          mt-2
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-5
          "
        >


          <p className="footer-nav-item !mb-0">

            © 2026 Phoenix Business Advisory. All Rights Reserved.

          </p>



          <div
            className="
            flex
            items-center
            gap-4
            "
          >

            {socials.map((social)=>(

              <a
                href="#"
                key={social.name}
                className="footer-social"
              >

                <img
                  src={social.image}
                  alt={social.name}
                  className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />

              </a>

            ))}

          </div>


        </div>



        {/* FULL BLEED BRAND TEXT */}


        <div
          className="
          w-screen
          relative
          left-1/2
          -translate-x-1/2
          overflow-hidden
          "
        >

          <div
            className="
            flex
            justify-center
            overflow-hidden
            "
          >

            <span
              className="
              whitespace-nowrap
              uppercase
              text-[clamp(9rem,24vw,20rem)]
              font-semibold
              leading-none
              tracking-[-6px]
              text-white/[0.035]
              line-height-[0]
              mb-[-7%]
              "
            >
              Phoenix
            </span>


          </div>


        </div>


      </div>


    </footer>

  );

}