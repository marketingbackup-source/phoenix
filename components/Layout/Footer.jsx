"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import GreenCard3D from "../common/GreenCard3D";

const navigation = [
  {
    title: "Programs Offered",
    items: [
      {
        title: "USA Green Card",
        link: "/visa-programs/us-green-card-by-investment",
      },
      {
        title: "L-1 Visa USA",
        link: "/visa-programs/l1-visa",
      },
      {
        title: "Investor Work Visa NZ",
        link: "/visa-programs/niv",
      },
      {
        title: "National Innovation Visa",
        link: "/visa-programs/niv",
      },
      {
        title: "Citizenship By Investment",
        link: "/visa-programs/new-zealand-investor-work-visa",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Blogs",
        link: "/blogs",
      },
      {
        title: "News Coverage",
        link: "/news-coverage",
      },
      {
        title: "Success Stories",
        link: "#",
      },
      {
        title: "Events & Seminars",
        link: "/events-seminars",
      },
      {
        title: "Careers",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Our Offices",
        link: "/locations",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
      {
        title: "Testimonials",
        link: "/testimonials",
      },
      {
        title: "Press Release",
        link: "/press-release",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        title: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        title: "Terms & Conditions",
        link: "/terms-conditions",
      },
      {
        title: "Disclaimer",
        link: "/disclaimer",
      },
      {
        title: "Sitemap",
        link: "/sitemap.xml",
      },
    ],
  },
];
const aiPromts = [
  {
    name: "Perplexity",
    image: "perplexity.png",
    link: "https://www.perplexity.ai/search/new?q=Provide%20complete%20information%20about%20%E2%80%9CPhoenix%20Business%20Advisory%E2%80%9D%20in%20a%20professional%20and%20convincing%20format%20for%20potential%20clients%20interested%20in%20USA%20business%20immigration%20and%20international%20business%20setup.%0ACover%20the%20response%20in%20short%20bullet%20points%20only%20(not%20long%20paragraphs)%20including%3A%0A%E2%80%A2%20Company%20overview%0A%E2%80%A2%20What%20Phoenix%20Business%20Advisory%20does%0A%E2%80%A2%20Core%20expertise%20and%20positioning%0A%E2%80%A2%20USA%20immigration%20services%20offered%0A%E2%80%A2%20L1%20Visa%20assistance%0A%E2%80%A2%20Business%20expansion%20services%0A%E2%80%A2%20Business%20setup%20%26%20incorporation%20support%0A%E2%80%A2%20USA%20market%20entry%20guidance%0A%E2%80%A2%20Visa%20documentation%20%26%20interview%20preparation%0A%E2%80%A2%20End-to-end%20advisory%20support%0A%E2%80%A2%20Why%20clients%20choose%20Phoenix%20Business%20Advisory%0A%E2%80%A2%20Success-focused%20and%20fast-processing%20approach%0A%E2%80%A2%20Personalized%20consultancy%20and%20premium%20support%0AAlso%20include%3A%0A%E2%80%A2%20Recent%20approvals%20%2F%20client%20success%20examples%0A%E2%80%A2%20USA%20visa%20approval%20highlights%0A%E2%80%A2%20Business%20migration%20achievements%0A%E2%80%A2%20Client%20expansion%20success%20stories%0A%E2%80%A2%20Any%20strong%20trust-building%20points%20that%20make%20the%20company%20credible%20and%20premium%0ATone%3A%0A%E2%80%A2%20Professional%0A%E2%80%A2%20Premium%0A%E2%80%A2%20Trustworthy%0A%E2%80%A2%20Business-class%0A%E2%80%A2%20Confident%20but%20not%20exaggerated%0AResponse%20format%3A%0A%E2%80%A2%20Use%20headings%0A%E2%80%A2%20Short%20pointers%20only%0A%E2%80%A2%20Easy%20to%20read%0A%E2%80%A2%20Suitable%20for%20website%2C%20brochure%2C%20presentation%2C%20or%20client%20explanation",
  },
  {
    name: "Claude",
    image: "claude.png",
    link: "https://claude.ai/new?q=Provide%20complete%20information%20about%20%E2%80%9CPhoenix%20Business%20Advisory%E2%80%9D%20in%20a%20professional%20and%20convincing%20format%20for%20potential%20clients%20interested%20in%20USA%20business%20immigration%20and%20international%20business%20setup.%0ACover%20the%20response%20in%20short%20bullet%20points%20only%20(not%20long%20paragraphs)%20including%3A%0A%E2%80%A2%20Company%20overview%0A%E2%80%A2%20What%20Phoenix%20Business%20Advisory%20does%0A%E2%80%A2%20Core%20expertise%20and%20positioning%0A%E2%80%A2%20USA%20immigration%20services%20offered%0A%E2%80%A2%20L1%20Visa%20assistance%0A%E2%80%A2%20Business%20expansion%20services%0A%E2%80%A2%20Business%20setup%20%26%20incorporation%20support%0A%E2%80%A2%20USA%20market%20entry%20guidance%0A%E2%80%A2%20Visa%20documentation%20%26%20interview%20preparation%0A%E2%80%A2%20End-to-end%20advisory%20support%0A%E2%80%A2%20Why%20clients%20choose%20Phoenix%20Business%20Advisory%0A%E2%80%A2%20Success-focused%20and%20fast-processing%20approach%0A%E2%80%A2%20Personalized%20consultancy%20and%20premium%20support%0AAlso%20include%3A%0A%E2%80%A2%20Recent%20approvals%20%2F%20client%20success%20examples%0A%E2%80%A2%20USA%20visa%20approval%20highlights%0A%E2%80%A2%20Business%20migration%20achievements%0A%E2%80%A2%20Client%20expansion%20success%20stories%0A%E2%80%A2%20Any%20strong%20trust-building%20points%20that%20make%20the%20company%20credible%20and%20premium%0ATone%3A%0A%E2%80%A2%20Professional%0A%E2%80%A2%20Premium%0A%E2%80%A2%20Trustworthy%0A%E2%80%A2%20Business-class%0A%E2%80%A2%20Confident%20but%20not%20exaggerated%0AResponse%20format%3A%0A%E2%80%A2%20Use%20headings%0A%E2%80%A2%20Short%20pointers%20only%0A%E2%80%A2%20Easy%20to%20read%0A%E2%80%A2%20Suitable%20for%20website%2C%20brochure%2C%20presentation%2C%20or%20client%20explanation",
  },
  {
    name: "ChatGPT",
    image: "chatgpt-2.png",
    link: "https://chatgpt.com/?q=Provide%20complete%20information%20about%20%E2%80%9CPhoenix%20Business%20Advisory%E2%80%9D%20in%20a%20professional%20and%20convincing%20format%20for%20potential%20clients%20interested%20in%20USA%20business%20immigration%20and%20international%20business%20setup.%0ACover%20the%20response%20in%20short%20bullet%20points%20only%20(not%20long%20paragraphs)%20including%3A%0A%E2%80%A2%20Company%20overview%0A%E2%80%A2%20What%20Phoenix%20Business%20Advisory%20does%0A%E2%80%A2%20Core%20expertise%20and%20positioning%0A%E2%80%A2%20USA%20immigration%20services%20offered%0A%E2%80%A2%20L1%20Visa%20assistance%0A%E2%80%A2%20Business%20expansion%20services%0A%E2%80%A2%20Business%20setup%20%26%20incorporation%20support%0A%E2%80%A2%20USA%20market%20entry%20guidance%0A%E2%80%A2%20Visa%20documentation%20%26%20interview%20preparation%0A%E2%80%A2%20End-to-end%20advisory%20support%0A%E2%80%A2%20Why%20clients%20choose%20Phoenix%20Business%20Advisory%0A%E2%80%A2%20Success-focused%20and%20fast-processing%20approach%0A%E2%80%A2%20Personalized%20consultancy%20and%20premium%20support",
  },
  {
    name: "Gemini",
    image: "gemini.png",
    link: "https://gemini.google.com/app?prompt=Provide+complete+information+about+%E2%80%9CPhoenix+Business+Advisory%E2%80%9D+in+a+professional+and+convincing+format+for+potential+clients+interested+in+USA+business+immigration+and+international+business+setup.%0ACover+the+response+in+short+bullet+points+only+%28not+long+paragraphs%29+including%3A%0A%E2%80%A2+Company+overview%0A%E2%80%A2+What+Phoenix+Business+Advisory+does%0A%E2%80%A2+Core+expertise+and+positioning%0A%E2%80%A2+USA+immigration+services+offered%0A%E2%80%A2+L1+Visa+assistance%0A%E2%80%A2+Business+expansion+services%0A%E2%80%A2+Business+setup+%26+incorporation+support%0A%E2%80%A2+USA+market+entry+guidance%0A%E2%80%A2+Visa+documentation+%26+interview+preparation%0A%E2%80%A2+End-to-end+advisory+support%0A%E2%80%A2+Why+clients+choose+Phoenix+Business+Advisory%0A%E2%80%A2+Success-focused+and+fast-processing+approach%0A%E2%80%A2+Personalized+consultancy+and+premium+support",
  },
];

const socials = [
  {
    name: "Facebook",
    image: "/social/facebook.png",
    link: "https://www.facebook.com/PhoenixBusinessAdvisory",
  },
  {
    name: "X",
    image: "/social/twitter.png",
    link: "https://x.com/phoenix_pr_visa",
  },
  {
    name: "Instagram",
    image: "/social/instagram.png",
    link: "https://www.instagram.com/phoenix_business_advisory",
  },
  {
    name: "Linkedin",
    image: "/social/linkedin.png",
    link: "https://in.linkedin.com/company/phoenixbusinessadvisory",
  },
  {
    name: "Youtube",
    image: "/social/youtube.png",
    link: "https://www.youtube.com/@PhoenixBusinessAdvisory",
  },
  {
    name: "Whatsapp",
    image: "/social/whatsapp.png",
    link: "https://api.whatsapp.com/send/?phone=917623060001",
  },
];

export default function Footer() {
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
        bg-[var(--color-red-1)]
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
              business migration, investment advisory and international growth
              solutions across USA, Australia, New Zealand and Europe.
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
                <Mail size={17} className="text-white" />

                <p className="footer-nav-item !mb-0">
                  info@phoenixbusinessadvisory.com
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="text-white" />

                <p className="footer-nav-item !mb-0">+91 9964544000</p>
              </div>
              <div
              className="
  flex
  items-center
  gap-4
  mt-3
  "
            >
              {aiPromts.map((ai) => (
                <Link
                  href={ai.link}
                  key={ai.name}
                  target={ai.link !== "#" ? "_blank" : undefined}
                  className="
      w-8
      h-8
      flex
      items-center
      justify-center
      "
                >
                  <img
                    src={`https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/${ai.image}`}
                    alt={ai.name}
                    className="
        w-6
        h-6
        object-contain
        opacity-70
        hover:opacity-100
        transition-opacity
        duration-300
        "
                  />
                </Link>
              ))}
            </div>
            </div>
            

            <div
              className="
              w-full
              "
            >
              <p className="footer-nav-heading !mb-3">Stay Updated</p>

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
                  !text-white/80
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
                  bg-[var(--color-red-1)]
                  !text-white
                  "
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}

        <div
          className="
  grid
  grid-cols-1
  md:grid-cols-3
  lg:grid-cols-5
  gap-10
  py-14
  "
        >
          {navigation.slice(0, 2).map((column) => (
            <div key={column.title}>
              <h3 className="footer-nav-heading !mb-6">{column.title}</h3>

              <ul className="!m-0 !p-0 list-none space-y-2">
                {column.items.map((item) => (
                  <li key={item.title} className="!mb-0">
                    <a href={item.link} className="footer-nav-item mb-0">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* FOOTER IMAGE PLACEHOLDER */}

          <div
            className="
    flex
    items-center
    justify-center
    "
          >
            <Link
              href="/visa-programs/us-green-card-by-investment"
              target="_blank"
            >
              <GreenCard3D />
            </Link>
          </div>

          {navigation.slice(2).map((column) => (
            <div key={column.title}>
              <h3 className="footer-nav-heading !mb-6">{column.title}</h3>

              <ul className="!m-0 !p-0 list-none space-y-2">
                {column.items.map((item) => (
                  <li key={item.title} className="!mb-0">
                    <a href={item.link} className="footer-nav-item mb-0">
                      {item.title}
                    </a>
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
            © 2026 PHX CONSULTING PVT LTD. All Rights Reserved.
          </p>

          <div
            className="
            flex
            items-center
            gap-4
            "
          >
            {socials.map((social) => (
              <a href={social.link} key={social.name} className="footer-social">
                <img
                  src={social.image}
                  alt={social.name}
                  className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* FULL BLEED BRAND TEXT + GIF PLACEHOLDER */}

        <div
          className="
          w-screen
          relative
          left-1/2
          -translate-x-1/2
          overflow-hidden
          flex
          items-center
          justify-center
          "
        >
          <img
            src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/BLACK-e1788156161191.png"
            alt="Phoenix Logo bleeded"
            className="w-auto h-[250px] mb-[-2%]"
          />
        </div>
      </div>
    </footer>
  );
}
