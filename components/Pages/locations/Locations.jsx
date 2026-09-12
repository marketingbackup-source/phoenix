"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const FLAG_BASE =
  "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/";

const indiaLocations = [
  {
    city: "Ahmedabad",
    icon: `${FLAG_BASE}india.webp`,
    address:
      "A-812, Wing A, Mondeal Heights, Ramdev Nagar, Ahmedabad, Gujarat- 380015, India",
    phone: "+91 99645 44000",
    email: "info@pcba.com.au",
  },
  {
    city: "Pune",
    icon: `${FLAG_BASE}india.webp`,
    address:
      "WeWork, Futura, Magarpatta Rd, Kirtane Baugh, Pune, Maharashtra 411028",
    phone: "+91 99645 44000",
    email: "info@pcba.com.au",
  },
  {
    city: "Ludhiana",
    icon: `${FLAG_BASE}india.webp`,
    address:
      "Shop No. 07 & 08 Second Floor of Wave Mall, Ferozepur Road, Ludhiana, Punjab 141012",
    phone: "+91 99645 44000",
    email: "info@pcba.com.au",
  },
  {
    city: "Surat",
    icon: `${FLAG_BASE}india.webp`,
    address:
      "A-wing, 202-203 Union Heights Rahul Raj Mall Lane Maharana Pratap Rd, Vesu Surat, Gujarat 395007.",
    phone: "+91 99645 44000",
    email: "info@pcba.com.au",
  },
  {
    city: "Hyderabad",
    icon: `${FLAG_BASE}india.webp`,
    address:
      "Midtown Building, Road no. 1 Banjara Hills, Opp Jalgam Vengal Rao Park, Hyderabad, Telangana 500034",
    phone: "+91 99645 44000",
    email: "info@pcba.com.au",
  },
];

const globalLocations = [
  {
    country: "Australia",
    city: "Sydney",
    icon: `${FLAG_BASE}aus-1.webp`,
    label: "Global Headquarters",
    address:
      "Suite 14.02, 100 William Street, Woolloomooloo Sydney, NSW, Australia 2011",
    phone: "+61 29 357 6843",
    email: "info@pcba.com.au",
  },

  {
    country: "USA",
    city: "Houston",
    icon: `${FLAG_BASE}usa-1.webp`,
    address: "Suite 1000, 5718 Westheimer Road, Houston, Texas, 77057, USA.",
    phone: "+1 713 588 4437",
    email: "info@pcba.com.au",
  },

  {
    country: "USA",
    city: "Dallas",
    icon: `${FLAG_BASE}usa-1.webp`,
    address: "5 Cowboys Way Suite 300 Frisco, TX 75034",
    phone: "+1 310 409 6898",
    email: "info@pcba.com.au",
  },

  {
    country: "UAE",
    city: "Dubai",
    icon: `${FLAG_BASE}UAE.webp`,
    address: "Building 4WA, Office #708, Dubai Airport Free Zone, Dubai U.A.E.",
    phone: "+971 545 846 501",
    email: "info@pcba.com.au",
  },

  {
    country: "UK",
    city: "London",
    icon: `${FLAG_BASE}UK.webp`,
    address: "107-111 Fleet Street, London, Greater London EC4A 2AB",
    email: "info@pcba.com.au",
  },
];

function LocationCard({ location, showImage = false }) {
  return (
    <div
      className="
      flex
      flex-col
      sm:flex-row
      gap-5
      bg-white/[0.35]
      backdrop-blur-2xl
      border
      border-white/40
      rounded-3xl
      p-5
      transition-all
      duration-500
      hover:-translate-y-2
      overflow-hidden
      "
    >
      {/* Country Image Only For International */}
      {showImage && location.icon && (
        <div
          className="
          shrink-0
          flex
          items-center
          justify-center
          "
        >
          <Image
            src={location.icon}
            alt={location.city}
            width={220}
            height={220}
            className="
            h-[180px]
            sm:h-[220px]
            w-auto
            object-contain
            "
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col justify-center">
        <h4
          className="
          uppercase
          text-black
          text-xl
          !mb-5
          "
        >
          {location.city}
        </h4>

        <p
          className="
          text-gray-500
          !text-sm
          leading-[1.7]
          !mb-5
          "
        >
          {location.address}
        </p>

        <div className="flex flex-col gap-3">
          <div
            className="
            flex
            items-center
            gap-3
            text-sm
            text-gray-600
            "
          >
            <MapPin size={16} className="text-[var(--color-red-1)]" />
            Google Location
          </div>

          {location.phone && (
            <div
              className="
              flex
              items-center
              gap-3
              text-sm
              text-gray-600
              "
            >
              <Phone size={16} className="text-[var(--color-red-1)]" />

              {location.phone}
            </div>
          )}

          <div
            className="
            flex
            items-center
            gap-3
            text-sm
            text-gray-600
            "
          >
            <Mail size={16} className="text-[var(--color-red-1)]" />

            {location.email}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GlobalPresence() {
  return (
    <section className="relative py-80-30 overflow-hidden bg-[#f7f7f7]">
      <div className="absolute inset-0">
        <div
          className="
          absolute
          -top-40
          right-1/3
          w-[500px]
          h-[500px]
          rounded-full
          bg-[var(--color-red-1)]
          opacity-10
          blur-[160px]
          "
        />

        <div
          className="
          absolute
          bottom-[-200px]
          left-[-100px]
          w-[600px]
          h-[600px]
          rounded-full
          bg-gray-300
          opacity-40
          blur-[180px]
          "
        />
      </div>

      <div className="container-main relative">
        <div className="text-center !mb-12">
          <h2
            className="
            fs-52-32
            uppercase
            text-black
            "
            data-reveal
          >
            Our <span className="text-[var(--color-red-1)]">Global</span>{" "}
            Presence
          </h2>

          <p
            className="
            text-gray-500
            fs-20-16
            max-w-3xl
            mx-auto
            !mt-5
            "
            data-reveal
          >
            With strategic locations across key international markets, Phoenix
            Business Advisory supports entrepreneurs, investors, and businesses
            with trusted guidance for their global expansion journey.
          </p>
        </div>

        <h3 className="fs-36-24 uppercase text-black !mb-12" data-reveal>
          International Presence
        </h3>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-30-10
          !mb-20
          "
        >
          {globalLocations.map((location) => (
            <LocationCard
              key={location.city}
              location={location}
              showImage={true}
            />
          ))}
        </div>

        <h3 className="fs-36-24 uppercase text-black !mb-6" data-reveal>
          India
        </h3>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-30-10
          "
        >
          {indiaLocations.map((location) => (
            <LocationCard key={location.city} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
