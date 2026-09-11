"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
} from "lucide-react";


const actions = [
  {
    id: "consultation",
    title: "Schedule A Consultation",
    icon: CalendarDays,
    type: "link",
    href: "https://calendly.com/deepika-wj1x/usa-business-migration-consulting?preview_source=et_card&month=2024-10",
    className: "bg-white !text-black border border-gray-200",
  },

  {
    id: "whatsapp",
    title: "WhatsApp Us",
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/whatsapp.png",
    type: "link",
    href: "https://api.whatsapp.com/send?phone=+917698940001&text=Hello,+I+came+across+your+services+and+would+like+to+know+more+details+about+your+services.+Please+share+the+information.+Thank+you.",
    className: "bg-[#1f8f3a] !text-white",
  },
];


export default function FloatingActions() {

  const [expanded, setExpanded] = useState(true);


  useEffect(() => {

    let scrollTimer;


    const handleScroll = () => {

      setExpanded(false);

      clearTimeout(scrollTimer);


      scrollTimer = setTimeout(() => {
        setExpanded(true);
      }, 700);

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      clearTimeout(scrollTimer);

    };

  }, []);



  return (

    <div
      className="
      fixed
      right-[35px]
      bottom-[40px]
      z-[999]
      flex
      flex-col
      items-end
      gap-3
      "
    >

      {actions.map((action) => {

        const Icon = action.icon;


        const buttonContent = (

          <>

            <span
              className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              "
            >

              {action.image ? (

                <img
                  src={action.image}
                  alt={action.title}
                  className="
                  h-6
                  w-6
                  object-contain
                  "
                />

              ) : (

                <Icon
                  size={20}
                  strokeWidth={2}
                />

              )}

            </span>



            <span
              className={`
              overflow-hidden
              whitespace-nowrap
              text-sm
              font-medium
              transition-all
              duration-500
              ease-in-out
              ${
                expanded
                  ? "max-w-[240px] opacity-100 pr-5"
                  : "max-w-0 opacity-0 pr-0"
              }
              `}
            >

              {action.title}

            </span>


          </>

        );



        const commonClass = `
        flex
        h-11
        items-center
        overflow-hidden
        rounded-full
        shadow-[0_5px_20px_rgba(0,0,0,0.15)]
        transition-all
        duration-500
        ease-in-out
        ${expanded ? "w-auto" : "w-11"}
        ${action.className}
        `;



        return (

          <a
            key={action.id}
            href={action.href}
            className={commonClass}
          >

            {buttonContent}

          </a>

        );

      })}


    </div>

  );

}