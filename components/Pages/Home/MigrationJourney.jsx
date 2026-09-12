import React from "react";

const journeySteps = [
  "Eligibility & profile assessment",
  "Business petition filed & approved",
  "Visa approval & consular stamping",
  "Business acquisition & setup in the USA",
  "Green Card approval — permanent residency secured",
];

export default function USJourney() {
  return (
    <section className="py-80-30">
      <div className="container-main">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          <div className="w-full lg:w-6/12">

            <h2 className="fs-52-32 font-normal leading-[1] uppercase !mb-8" data-reveal>
              Your USA{" "}
              <span className="text-[var(--color-red-1)]">
                Business
              </span>
              <br />
              <span className="text-[var(--color-red-1)]">
                Migration
              </span>{" "}
              Journey
            </h2>

            <p className="text-gray-500 fs-18-16 leading-[1.5] !mb-10" data-reveal>
              From your first eligibility check to permanent residency, every
              step of your journey is tracked, verified, and managed by our
              team — so you always know exactly where you stand.
            </p>


            <div className="flex flex-col gap-6">

              {journeySteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4"
                  data-reveal
                >

                  <span className="flex items-center justify-center w-6 h-6 rounded-full border border-green-600 text-green-600 text-sm">
                    {index + 1}
                  </span>

                  <span className="text-gray-600 fs-18-16">
                    {step}
                  </span>

                </div>
              ))}

            </div>

          </div>


          <div className="w-full lg:w-6/12">

            <div className="overflow-hidden rounded-4xl">

              <video
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://l1visausa.com/wp-content/uploads/2026/08/US-Journey-.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}