import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

export const metadata = {
  title: "Thank You | Phoenix Business Advisory",

  description:
    "Thank you for contacting Phoenix Business Advisory. Our team has received your enquiry and will get back to you shortly.",

  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-5 py-10">

      {/* Soft Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--color-red-1)]/5 blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-black/[0.03] blur-[100px]" />
      </div>

      <div className="container-main relative z-10">

        <div className="mx-auto max-w-4xl text-center">

          {/* Success Icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-red-1)]/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-red-1)] text-white">
              <Check size={30} strokeWidth={2.5} />
            </div>
          </div>

          {/* Label */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-red-1)]">
            Enquiry Received
          </p>

          {/* Heading */}
          <h1 className="fs-52-32 uppercase leading-[1.08]">
            Thank You for
            <br />
            Reaching Out
          </h1>

          {/* Content */}
          <div className="mx-auto mt-7 max-w-2xl">
            <p className="fs-20-16 !mb-3 text-[var(--color-gray-2)]">
              Your message has been received successfully.
            </p>

            <p className="!mb-0 leading-7 text-black/60">
              One of our team members will get back to you as soon as possible.
              In the meantime, you can continue exploring Phoenix Business
              Advisory and learn more about our global business and migration
              services.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/"
              className="
                group
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                gap-3
                rounded-[14px]
                bg-black
                px-7
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:bg-[var(--color-red-1)]
              "
            >
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to Home
            </Link>

            <a
              href="https://www.instagram.com/phoenix_business_advisory/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                gap-3
                rounded-[14px]
                border
                border-black/15
                bg-white
                px-7
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-black
                transition-all
                duration-300
                hover:border-black
              "
            >
              Follow Us on Instagram

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* Footer Note */}
          <p className="mt-10 !mb-0 text-xs uppercase tracking-[0.16em] text-black/35">
            Phoenix Business Advisory
          </p>

        </div>
      </div>
    </main>
  );
}