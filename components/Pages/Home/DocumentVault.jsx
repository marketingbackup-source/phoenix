import React from "react";

const documentPoints = [
  "TLS-encrypted in transit — every upload is secured the moment it leaves your device",
  "One vault per client — petitions, approvals, and visa stamps, all in a single place",
  "Auto-extracted data — key details are pulled and verified the moment a document lands",
  "Built for immigration files — I-797s, EAD cards, I-140s, and Green Cards, organized by case",
  "Access anytime — your team and your client see the same up-to-date record",
];

export default function DocumentVault() {
  return (
    <section className="py-80-30">
      <div className="container-main">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

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
                  src="https://l1visausa.com/wp-content/uploads/2026/08/vault.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </div>


          <div className="w-full lg:w-6/12">

            <h2 className="fs-52-32 font-normal leading-[1] uppercase !mb-8">
              Your Documents,
              <br />
              <span className="text-[var(--color-red-1)]">
                Locked In.
              </span>
            </h2>


            <p className="text-gray-500 fs-18-16 leading-[1.5] !mb-10">
              Every petition, approval, and visa document — encrypted,
              organized, and available the moment you need it.
            </p>


            <div className="flex flex-col gap-6">

              {documentPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-4"
                >

                  <span className="flex items-center justify-center w-6 h-6 rounded-full border border-green-600 text-green-600 text-sm shrink-0">
                    {index + 1}
                  </span>

                  <span className="text-gray-600 fs-18-16 leading-[1.5]">
                    {point}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}