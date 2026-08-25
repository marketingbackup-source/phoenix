import { Mail, MapPin, Phone } from "lucide-react";

import BaseBadge from "@/components/UI/BaseBadge";
import ContactForm from "@/components/Pages/Contact/ContactForm";


const contactItems = [
  {
    icon: Mail,
    title: "Mail us",
    content: "info@pcba.com.au",
  },
  {
    icon: Phone,
    title: "Call us",
    content: (
      <>
        <span><strong>India</strong>: +91 99645 44000</span>
        <span><strong>UAE</strong>: +97 154 584 6501</span>
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Management Office",
    content: (
      <>
        <span>
          A-812, Wing A, Mondeal Heights, Ramdev Nagar,
          <br />
          Ahmedabad, Gujarat 380015, India
        </span>
      </>
    ),
  },
];


export default function ContactHero() {
  return (
    <section className="py-80-30 bg-white">

      <div className="container-main">


        <div
          className="
          flex
          flex-col
          lg:flex-row
          gap-60-20
          "
        >


          <div
            className="
            w-full
            lg:w-6/12
            "
          >



            <h3
              className="
              fs-36-24
              mt-40-15
              uppercase
              text-[var(--color-gray-1)]
              !mb-8
              "
            >
              Let's discuss your global business goals
            </h3>



            <p
              className="
              fs-20-16
              text-gray-500
              leading-[1.7]
              max-w-2xl
              !mb-8
              "
            >
              Connect with our team for guidance on international business,
              investment, migration, and expansion opportunities.
            </p>




            <div>

              {contactItems.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="
                    flex
                    w-full
                    mb-4
                    rounded-xl
                    overflow-hidden
                    "
                  >

                    <div
                      className="
                      flex
                      items-center
                      justify-center
                      p-4
                      bg-[var(--color-red-3)]
                      "
                    >

                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        color="white"
                      />

                    </div>



                    <div
                      className="
                      flex
                      flex-col
                      justify-center
                      bg-gray-200
                      px-5
                      py-3
                      "
                    >

                      <p
                        className="
                        text-gray-2
                        leading-[1.7]
                        !mb-0
                        flex
                        flex-col
                        lg:flex-row
                        gap-1
                        lg:gap-4
                        "
                      >

                        {item.content}

                      </p>

                    </div>


                  </div>

                );

              })}


            </div>


          </div>





          <div
            className="
            w-full
            lg:w-6/12
            "
          >

            <ContactForm />

          </div>



        </div>


      </div>


    </section>
  );
}