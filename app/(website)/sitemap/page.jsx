import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sitemap | Phoenix Business Advisory",
  description:
    "Explore all pages, visa programs, resources and company information available on Phoenix Business Advisory.",
};

const sitemapSections = [
  {
    title: "Our Success Story",
    links: [
      {
        name: "Testimonials",
        href: "/testimonials",
      },
      {
        name: "Our Approvals",
        href: "/approval-track-record",
      },
    ],
  },

  {
    title: "Program Offered",
    links: [
      {
        name: "US Green Card by Investment",
        href: "/visa-programs/us-green-card-by-investment",
      },
      {
        name: "L1 Visa",
        href: "/visa-programs/l1-visa",
      },
      {
        name: "O1 Visa",
        href: "/visa-programs/o1-visa",
      },
      {
        name: "E2 Visa",
        href: "/visa-programs/e2-visa",
      },
      {
        name: "EB1A Visa",
        href: "/visa-programs/eb1a-visa",
      },
      {
        name: "EB1C Visa",
        href: "/visa-programs/eb1c-visa",
      },
      {
        name: "EB-2 NIW Visa",
        href: "/visa-programs/eb-2-niw-visa",
      },
      {
        name: "National Innovation Visa",
        href: "/visa-programs/niv",
      },
      {
        name: "Investor Work Visa New Zealand",
        href: "/visa-programs/new-zealand-investor-work-visa",
      },
      {
        name: "European Union Citizenship",
        href: "/visa-programs/european-union",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        name: "Blogs",
        href: "/blogs",
      },
      {
        name: "News Coverage",
        href: "/news-coverage",
      },
      {
        name: "Press Release",
        href: "/press-release",
      },
      {
        name: "Events & Seminars",
        href: "/events-seminars",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        name: "About Us",
        href: "/about-us",
      },
      {
        name: "Our Offices",
        href: "/locations",
      },
      {
        name: "Contact Us",
        href: "/contact-us",
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Terms & Conditions",
        href: "/terms-conditions",
      },
      {
        name: "Disclaimer",
        href: "/disclaimer",
      },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main>
      {/* Hero */}

      <section className="bg-[#f8f8f8] py-24 md:py-32">
        <div className="container-main text-center">
          <p className="uppercase tracking-[3px] text-sm text-gray-500 !mb-4">
            Explore Phoenix
          </p>

          <h1 className="fs-52-32 uppercase font-normal leading-none">
            Website <span className="text-[var(--color-red-1)]">Sitemap</span>
          </h1>
        </div>
      </section>

      {/* Sitemap Grid */}

      <section className="py-20 md:py-28">
        <div className="container-main">
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
          >
            {sitemapSections.map((section) => (
              <div
                key={section.title}
                className="
                  border
                  border-gray-200
                  bg-white
                  p-8
                  rounded-2xl
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >
                <h2
                  className="
                    uppercase
                    text-xl
                    font-semibold
                    text-[var(--color-red-1)]
                    !mb-6
                  "
                >
                  {section.title}
                </h2>

                <ul
                  className="
                  flex
                  flex-col
                  gap-4
                  !p-0
                  !m-0
                  list-none
                "
                >
                  {section.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          text-gray-700
                          transition-colors
                          duration-300
                          hover:text-[var(--color-red-1)]
                        "
                      >
                        <ArrowRight
                          size={16}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />

                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
