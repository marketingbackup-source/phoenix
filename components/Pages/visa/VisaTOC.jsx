"use client";

import { useState } from "react";

export default function VisaTOC({
  headings = [],
}) {

  const [open, setOpen] = useState(false);


  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if(element){

      element.scrollIntoView({
        behavior:"smooth",
        block:"start",
      });

    }

  };


  return (

    <div
      className="
      rounded-4xl
      bg-white/[0.45]
      backdrop-blur-2xl
      border
      border-gray-200
      p-3 lg:p-6
      "
    >


      {/* Mobile Accordion Header */}

      <button
        onClick={()=>setOpen(!open)}
        className="
        lg:hidden
        flex-between
        w-full
        text-black
        uppercase
        font-medium
        "
      >

        Table Of Contents

        <span>
          {open ? "-" : "+"}
        </span>

      </button>



      <div
        className={`
        ${open ? "block" : "hidden"}
        lg:block
        `}
      >


        <ul
          className="
          list-none
          !p-0
          !m-0
          max-h-[calc(100vh-400px)]
          overflow-y-auto
          
          "
        >


          {headings.map((item)=>(

            <li
              key={item.id}
              className="
              !mb-2
              "
            >

              <button
                onClick={() =>
                  scrollToSection(item.id)
                }
                className="
                text-left
                text-gray-500
                hover:text-[var(--color-red-1)]
                transition-all
                duration-300
                !text-sm
                "
              >

                <span
                  className="
                  text-[var(--color-red-1)]
                  mr-2
                  "
                >
                  {String(item.number).padStart(2,"0")}
                </span>


                {item.title}


              </button>


            </li>

          ))}


        </ul>


      </div>


    </div>

  );
}