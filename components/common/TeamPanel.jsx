"use client";

import {
  Mail,
  Link,
} from "lucide-react";

const teamMembers = [
  {
    name: "Becks Edeh",
    role: "Legal Advisor",
    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a8866f872dfb02f5d4cae64_advocate.jpg-p-500.jpeg",
  },
  {
    name: "Mariya Shaikh",
    role: "VP - Ops & Compliance",
    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/69df286bcf8be68257efa358_mariya-shekh.jpeg",
  },
  {
    name: "Tanuj Mansharamani",
    role: "Vice President Sales",
    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6969dfdb6981939f2f1698cf_tanuj-mansharamani.jpg",
  },
  {
    name: "Deepika Shukla",
    role: "Vice President Sales",
    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a05ccbede53eeea697facf4_deepika-sukla.jpg",
  },
  {
    name: "Waleed Sadiq",
    role: "Vice President Marketing & Ops",
    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6969dfdd4e381abd300427c1_waleed-sadiq.jpg",
  },
  {
    name: "Girish Singh",
    role: "Head Of Marketing",
    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a758fbe7f4e6f91828fa103_website%20image_..jpg-p-500.jpeg",
  },
  {
    name: "Pooja Thakkar",
    role: "Assistant Operations Manager",
    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a75c422d8015a210cb259e6_website%20image%20..jpg%20(2)-p-500.jpeg",
  },
  {
    name: "Santosh Iyer",
    role: "Operations Manager",
    image:
      "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a758fbe2f4f9d447eaa088b_website%20image_%3B%3B.jpg-p-500.jpeg",
  },
];

export default function CoreTeam() {
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

        <div className="text-center !mb-12">

          <h2
            className="
            fs-52-32
            uppercase
            font-normal
            leading-[1]
            "
          >
            <span className="text-[var(--color-red-1)]">
              Core
            </span>{" "}
            Team
          </h2>

        </div>


        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {teamMembers.map((member)=>(

            <div
              key={member.name}
              className="
              group
              relative
              overflow-hidden
              rounded-4xl
              bg-white
              border
              border-white
              shadow-[0_20px_50px_rgba(0,0,0,0.06)]
              "
            >

              <div className="aspect-[4/5] overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:brightness-105
                  "
                />

              </div>


              <div
                className="
                absolute
                bottom-5
                left-5
                right-5
                rounded-3xl
                bg-white/20
                backdrop-blur-xl
                border
                border-white/30
                p-4
                "
              >

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <h3
                      className="
                      !text-white
                      uppercase
                      text-lg
                      font-medium
                      !mb-1
                      "
                    >
                      {member.name}
                    </h3>


                    <p
                      className="
                      !text-white/80
                      !text-sm
                      uppercase
                      tracking-[1px]
                      !mb-0
                      "
                    >
                      {member.role}
                    </p>

                  </div>


                  <div className="flex flex-col gap-2">

                    <span
                      className="
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      rounded-full
                      bg-white/20
                      border
                      border-white/20
                      "
                    >
                      <Mail
                        size={14}
                        className="text-white"
                      />
                    </span>


                    <span
                      className="
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      rounded-full
                      bg-white/20
                      border
                      border-white/20
                      "
                    >
                      <Link
                        size={14}
                        className="text-white"
                      />
                    </span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}