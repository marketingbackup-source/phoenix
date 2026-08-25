"use client";

import MarqueeSlider from "@/components/UI/MarqueeSlider";


const visaApprovals = [
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a520ed93e32430f223b13e6_suketu-patel-p-800.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a4de6b307d32e736f5350e8_bhavin-patel-visa-p-800.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a3628739d169080ef8a3bab_brijesh-patel-p-800.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a055bd5923e7515b0c22e8d_0b0f6483eefa18fae3e7693e5a49aa4c_harmeet-singh-visa-p-500.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a055bdd05ce34bed39293f4_81e0889565b149455f4562caed089677_rakesh-thakkar.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a055bd2e174ea2f5a8996d5_19c88af2bdc57e318f79edeb3f5c60f9_dipak-patel-p-500.png",
  },
];


const petitionApprovals = [
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a3fa077af13cdf390497808_bhagyesh-kumar-p-800.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a21608f4c3841a664b376be_zulfikarali-hasanali-maknojia-p-800.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a201ce5ad79372ce18a97cc_0882f9fe823214e023355b0bd8ed9f04_niranter-patel-p-800.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a05a37784879eef274aa344_bhavin-patel-p-500.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a055ae43176760e2ceaf5f7_a299141f0b9458d9e7a777fb54f96214_harmeet-singh.png",
  },
  {
    image: "https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6a055aeb4e2f5dc8f675f954_88533db917257522be17722519a17e0e_brijesh-patel.png",
  },
];



function ApprovalSlider({items,direction}) {

  return (

    <div className="relative overflow-hidden">


      <div
        className="
        absolute
        left-0
        top-0
        bottom-0
        w-24
        bg-gradient-to-r
        from-white
        to-transparent
        z-10
        pointer-events-none
        "
      />


      <div
        className="
        absolute
        right-0
        top-0
        bottom-0
        w-24
        bg-gradient-to-l
        from-white
        to-transparent
        z-10
        pointer-events-none
        "
      />



      <MarqueeSlider
        items={items}
        speed="40s"
        direction={direction}
        renderItem={(item)=>(


          <div
            className="
            w-[220px]
            sm:w-[260px]
            shrink-0
            rounded-3xl
            overflow-hidden
            border
            border-gray-200
            bg-white
            p-3
            transition-all
            duration-500
            hover:-translate-y-2
            "
          >

            <img
              src={item.image}
              alt="Approval Certificate"
              className="
              w-full
              h-auto
              object-contain
              rounded-2xl
              "
            />

          </div>


        )}
      />


    </div>

  );

}



export default function Approvals() {

  return (

    <section className="py-80-30 overflow-hidden bg-white">


      <div className="container-main">


        <div
          className="
          text-center
          !mb-12
          "
        >

          <h2
            className="
            fs-52-32
            uppercase
            "
          >

            Our{" "}
            <span className="text-[var(--color-red-3)]">
              Approvals
            </span>

          </h2>

        </div>



        <div className="flex flex-col gap-80-30">


          <div
            className="
            flex
            flex-col
            lg:flex-row
            items-center
            gap-40-15
            "
          >


            <div
              className="
              w-full
              lg:w-2/12
              "
            >

              <h3
                className="
                fs-36-24
                uppercase
                text-black
                "
              >

                Visa{" "}
                <span className="text-[var(--color-red-3)]">
                  Approvals
                </span>

              </h3>

            </div>



            <div
              className="
              w-full
              lg:w-10/12
              "
            >

              <ApprovalSlider
                items={visaApprovals}
                direction="left"
              />

            </div>


          </div>





          <div
            className="
            flex
            flex-col
            lg:flex-row
            items-center
            gap-40-15
            "
          >


            <div
              className="
              w-full
              lg:w-2/12
              "
            >

              <h3
                className="
                fs-36-24
                uppercase
                text-black
                "
              >

                Petition{" "}
                <span className="text-[var(--color-red-3)]">
                  Approvals
                </span>

              </h3>

            </div>



            <div
              className="
              w-full
              lg:w-10/12
              "
            >

              <ApprovalSlider
                items={petitionApprovals}
                direction="right"
              />

            </div>


          </div>


        </div>


      </div>


    </section>

  );

}