"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Headset,
  Menu,
  X,
} from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Success Story",
    children: [
      {
        label: "Testimonials",
        href: "/testimonials",
      },
      {
        label: "Our Approvals",
        href: "/approvals",
      },
    ],
  },
  {
    label: "Program Offered",
    megaMenu: true,
    groups: [
      {
        label: "USA",
        children: [
          {
            label: "US Green Card by Investment",
            href: "/visa-programs/us-green-card-by-investment",
          },
          {
            label: "L1 Visa",
            href: "/visa-programs/l1-visa",
          },
          {
            label: "O1 Visa",
            href: "/visa-programs/o1-visa",
          },
          {
            label: "E2 Visa",
            href: "/visa-programs/e2-visa",
          },
          {
            label: "EB1A Visa",
            href: "/visa-programs/eb1a-visa",
          },
          {
            label: "EB1C Visa",
            href: "/visa-programs/eb1c-visa",
          },
          {
            label: "EB-2 NIW Visa",
            href: "/visa-programs/eb-2-niw-visa",
          },
        ],
      },
      {
        label: "Australia",
        children: [
          {
            label: "National Innovation Visa",
            href: "/visa-programs/niv",
          },
        ],
      },
      {
        label: "European Union",
        children: [
          {
            label: "Citizenship By Investment",
            href: "/visa-programs/european-union",
          },
        ],
      },
      {
        label: "New Zealand",
        children: [
          {
            label: "Investor Work Visa",
            href: "/visa-programs/new-zealand-investor-work-visa",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Our Offices",
        href: "/locations",
      },
      {
        label: "Events & Seminars",
        href: "/events-seminars",
      },
      {
        label: "Blogs",
        href: "/blogs",
      },
      {
        label: "Press Release",
        href: "/press-release",
      },
      {
        label: "News Coverage",
        href: "/news-coverage",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const [activeDesktopGroup, setActiveDesktopGroup] = useState("USA");

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
    setOpenMobileMenu(null);
    setOpenMobileGroup(null);
  }

  function toggleMobileMenu(label) {
    setOpenMobileMenu(
      openMobileMenu === label
        ? null
        : label
    );

    setOpenMobileGroup(null);
  }

  function toggleMobileGroup(label) {
    setOpenMobileGroup(
      openMobileGroup === label
        ? null
        : label
    );
  }

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(
        window.scrollY > 20
      );
    }

    handleScroll();

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
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener(
      "keydown",
      handleEscapeKey
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleEscapeKey
      );
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`site-header ${
          isScrolled
            ? "site-header--scrolled"
            : ""
        }`}
      >
        <div className="site-header__container">

          <Link
            href="/"
            className="site-header__brand"
            aria-label="Phoenix Business Advisory home"
          >
            <Image
              src="/logos/Red.png"
              alt="Phoenix Business Advisory"
              width={220}
              height={55}
              priority
              className="site-header__brand-image"
            />
          </Link>


          {/* Desktop Navigation */}

          <nav
            className="site-header__desktop-nav"
            aria-label="Primary navigation"
          >
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => {
                  if (item.megaMenu) {
                    setActiveDesktopGroup("USA");
                  }
                }}
              >

                {item.href ? (
                  <Link
                    href={item.href}
                    className="site-header__nav-link"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="
                      site-header__nav-link
                      flex
                      items-center
                      gap-1
                    "
                  >
                    {item.label}

                    <ChevronDown
                      size={13}
                      strokeWidth={1.8}
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-180
                      "
                    />
                  </button>
                )}


                {/* Standard Desktop Dropdown */}

                {item.children && !item.megaMenu && (
                  <div
                    className="
                      invisible
                      absolute
                      left-0
                      top-full
                      z-50
                      min-w-[260px]
                      translate-y-3
                      pt-4
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <div
                      className="
                        rounded-xl
                        border
                        border-gray-100
                        bg-white
                        p-3
                        shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                      "
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="
                            footer-nav-item
                            block
                            rounded-lg
                            !px-4
                            !py-3
                            !text-black
                            transition-all
                            duration-300
                            hover:bg-gray-50
                            hover:!text-[var(--color-red-1)]
                          "
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}


                {/* Desktop Program Offered Mega Menu */}

                {item.megaMenu && (
                  <div
                    className="
                      invisible
                      fixed
                      left-1/2
                      top-[var(--header-height,70px)]
                      z-50
                      w-[min(900px,calc(100vw-60px))]
                      -translate-x-1/2
                      translate-y-3
                      pt-3
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <div
                      className="
                        flex
                        min-h-[400px]
                        overflow-hidden
                        rounded-xl
                        border
                        border-gray-100
                        bg-white
                        shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                      "
                    >

                      {/* Country Tabs */}

                      <div
                        className="
                          w-[250px]
                          shrink-0
                          border-r
                          border-gray-100
                          bg-gray-50/70
                          p-4
                        "
                      >
                        <div className="flex flex-col gap-2">

                          {item.groups.map((group) => {
                            const isActive =
                              activeDesktopGroup === group.label;

                            return (
                              <button
                                key={group.label}
                                type="button"
                                onMouseEnter={() =>
                                  setActiveDesktopGroup(
                                    group.label
                                  )
                                }
                                className={`
                                  flex
                                  w-full
                                  items-center
                                  justify-between
                                  rounded-lg
                                  px-4
                                  py-4
                                  text-left
                                  uppercase
                                  tracking-[1px]
                                  transition-all
                                  !text-semibold
                                  duration-300
                                  ${
                                    isActive
                                      ? `
                                        bg-[var(--color-red-1)]
                                        !text-white
                                        shadow-md
                                      `
                                      : `
                                        bg-transparent
                                        !text-gray-500
                                        hover:bg-white
                                        hover:!text-[var(--color-red-1)]
                                      `
                                  }
                                `}
                              >
                                <span className="!text-sm !text-bold">
                                  {group.label}
                                </span>

                                <ArrowRight
                                  size={16}
                                  strokeWidth={1.8}
                                  className={`
                                    shrink-0
                                    transition-transform
                                    duration-300
                                    ${
                                      isActive
                                        ? "translate-x-1 !text-white"
                                        : ""
                                    }
                                  `}
                                />
                              </button>
                            );
                          })}

                        </div>
                      </div>


                      {/* Program Links */}

                      <div className="flex-1 p-8">

                        {item.groups.map((group) => {

                          const isActive =
                            activeDesktopGroup === group.label;

                          if (!isActive) {
                            return null;
                          }

                          return (
                            <div
                              key={group.label}
                              className="
                                h-full
                                animate-[fadeIn_0.25s_ease-out]
                              "
                            >

                              <div className="!mb-6">

                                <p
                                  className="
                                    footer-nav-heading
                                    !mb-1
                                    !text-[var(--color-red-1)]
                                  "
                                >
                                  {group.label}
                                </p>

                                <div
                                  className="
                                    h-[2px]
                                    w-10
                                    bg-[var(--color-red-1)]
                                  "
                                />

                              </div>


                              {/* Always Two Columns */}

                              <div
                                className="
                                  grid
                                  grid-cols-2
                                  gap-x-5
                                  gap-y-3
                                "
                              >
                                {group.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    className="
                                      group/link
                                      flex
                                      min-h-[54px]
                                      items-center
                                      justify-between
                                      rounded-lg
                                      border
                                      border-gray-100
                                      bg-white
                                      !px-4
                                      !py-3
                                      !text-black
                                      shadow-[0_4px_15px_rgba(0,0,0,0.04)]
                                      transition-all
                                      duration-300
                                      hover:border-[var(--color-red-1)]
                                      hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]
                                      hover:!text-[var(--color-red-1)]
                                    "
                                  >
                                    <span className="pr-3">
                                      {child.label}
                                    </span>

                                    <ArrowRight
                                      size={16}
                                      strokeWidth={1.8}
                                      className="
                                        shrink-0
                                        opacity-0
                                        transition-all
                                        duration-300
                                        group-hover/link:translate-x-1
                                        group-hover/link:opacity-100
                                      "
                                    />
                                  </Link>
                                ))}
                              </div>

                            </div>
                          );
                        })}

                      </div>

                    </div>
                  </div>
                )}

              </div>
            ))}
          </nav>


          <div className="site-header__desktop-cta">
            <BaseButton
              title="Get a Call in 55 Second"
              link
              toLink="/contact"
              style="primary"
            >
              <Headset
                size={20}
                className="
                  ml-2
                  transition-colors
                  duration-300
                  group-hover:text-[var(--color-white)]
                "
              />
            </BaseButton>
          </div>


          <button
            type="button"
            className="site-header__menu-button"
            onClick={openMenu}
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
          >
            <Menu
              size={26}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>

        </div>
      </header>


      {/* Mobile Overlay */}

      <div
        className={`mobile-menu-overlay ${
          isMenuOpen
            ? "is-open"
            : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />


      {/* Mobile Menu */}

      <aside
        id="mobile-navigation"
        className={`mobile-menu ${
          isMenuOpen
            ? "is-open"
            : ""
        }`}
        aria-hidden={!isMenuOpen}
      >

        <div className="mobile-menu__header">

          <Link
            href="/"
            className="mobile-menu__brand"
            onClick={closeMenu}
            aria-label="Phoenix Business Advisory home"
          >
            <Image
              src="/logos/Red.png"
              alt="Phoenix Business Advisory"
              width={190}
              height={48}
              className="mobile-menu__brand-image"
            />
          </Link>

          <button
            type="button"
            className="
              mobile-menu__close-button
              !text-white
            "
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X
              size={26}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>

        </div>


        <nav
          className="mobile-menu__navigation"
          aria-label="Mobile navigation"
        >

          {navigationItems.map((item) => (
            <div
              key={item.label}
              className="
                border-b
                border-white/10
              "
            >

              {/* Normal Mobile Link */}

              {item.href ? (
                <Link
                  href={item.href}
                  className="
                    mobile-menu__nav-link
                    !text-white
                  "
                  onClick={closeMenu}
                >
                  <span className="!text-white">
                    {item.label}
                  </span>

                  <ArrowRight
                    size={18}
                    strokeWidth={1.8}
                    className="!text-white"
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    toggleMobileMenu(item.label)
                  }
                  className="
                    mobile-menu__nav-link
                    w-full
                    !text-white
                  "
                >
                  <span className="!text-white">
                    {item.label}
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.8}
                    className={`
                      !text-white
                      transition-transform
                      duration-300
                      ${
                        openMobileMenu === item.label
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>
              )}


              {/* Mobile Standard Accordion */}

              {item.children && !item.megaMenu && (
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      openMobileMenu === item.label
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      flex-col
                      pb-3
                      pl-5
                    "
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={closeMenu}
                        className="
                          footer-nav-item
                          !py-3
                          !text-white
                          transition-colors
                          duration-300
                          hover:!text-white
                        "
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}


              {/* Mobile Programs Accordion */}

              {item.megaMenu && (
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ${
                      openMobileMenu === item.label
                        ? "max-h-[1400px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      pb-4
                      pl-5
                    "
                  >
                    {item.groups.map((group) => (
                      <div
                        key={group.label}
                        className="
                          border-b
                          border-white/10
                          last:border-b-0
                        "
                      >

                        <button
                          type="button"
                          onClick={() =>
                            toggleMobileGroup(
                              group.label
                            )
                          }
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            py-3
                            pr-4
                            text-left
                            !text-white
                          "
                        >
                          <span
                            className="
                              footer-nav-heading
                              !text-white
                            "
                          >
                            {group.label}
                          </span>

                          <ChevronDown
                            size={16}
                            strokeWidth={1.8}
                            className={`
                              !text-white
                              transition-transform
                              duration-300
                              ${
                                openMobileGroup ===
                                group.label
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        </button>


                        <div
                          className={`
                            overflow-hidden
                            transition-all
                            duration-300
                            ${
                              openMobileGroup ===
                              group.label
                                ? "max-h-[600px] opacity-100"
                                : "max-h-0 opacity-0"
                            }
                          `}
                        >
                          <div
                            className="
                              flex
                              flex-col
                              pb-3
                              pl-4
                            "
                          >
                            {group.children.map(
                              (child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={closeMenu}
                                  className="
                                    footer-nav-item
                                    !py-2.5
                                    !text-white
                                    transition-colors
                                    duration-300
                                    hover:!text-white
                                  "
                                >
                                  {child.label}
                                </Link>
                              )
                            )}
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}

        </nav>


        <div
          className="mobile-menu__footer"
          onClick={closeMenu}
        >
          <BaseButton
            title="Talk to an Advisor"
            link
            toLink="/contact"
            style="primary mobile-menu__base-button"
          />
        </div>

      </aside>
    </>
  );
}