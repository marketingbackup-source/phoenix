import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BaseButton from "@/components/UI/BaseButton";

export const metadata = {
  title: "404 - Page Not Found | Phoenix Business Advisory",
  description:
    "The page you are looking for could not be found. Explore Phoenix Business Advisory services or return to the homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-white py-100-40 min-h-screen flex items-center">
      {/* Soft Background Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-[-100px]
            left-[-120px]
            w-[320px]
            h-[320px]
            rounded-full
            bg-[var(--color-red-1)]
            opacity-10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-100px]
            w-[360px]
            h-[360px]
            rounded-full
            bg-gray-300
            opacity-30
            blur-[140px]
          "
        />
      </div>

      <div className="container-main relative z-10">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-60-20
          "
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p
              className="
                uppercase
                tracking-[3px]
                text-[var(--color-red-1)]
                text-sm
                !mb-4
              "
            >
              Error 404
            </p>

            <h1
              className="
                fs-60-32
                font-normal
                uppercase
                leading-[1]
                text-black
                !mb-6
              "
            >
              Oops! This page
              <br />
              <span className="text-[var(--color-red-1)]">
                cannot be found
              </span>
            </h1>

            <p
              className="
                text-gray-500
                fs-20-16
                leading-[1.7]
                max-w-[640px]
                mx-auto
                lg:mx-0
                !mb-8
              "
            >
              The page you are trying to access may have been moved, removed,
              or the URL may be incorrect. Let’s help you get back on track.
            </p>

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-4
              "
            >
              <BaseButton
                title="Go to Homepage"
                link
                toLink="/"
                style="primary"
              >
                <ArrowRight size={18} />
              </BaseButton>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  sm:text-base
                  font-medium
                  text-black
                  hover:text-[var(--color-red-1)]
                  transition-colors
                "
              >
                <ArrowLeft size={18} />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div
              className="
                relative
                w-full
                max-w-[640px]
                mx-auto
              "
            >
              <div
                className="
                  rounded-[32px]
                  bg-[#f8f8f8]
                  border
                  border-black/5
                  p-20-10
                  shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                "
              >
                <Image
                  src="/images/404-image.pgnhttps://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/404-error-page-found-concept-red-block-letters-number-white-background-3d-render-illustration-scaled.jpg"
                  alt="404 Page Not Found"
                  width={1200}
                  height={800}
                  priority
                  className="
                    w-full
                    h-auto
                    object-contain
                    select-none
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}