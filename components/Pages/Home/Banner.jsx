import BaseButton from "@/components/UI/BaseButton";
import { Headset } from "lucide-react";

export default function Banner() {
  return (
    <section
      className="bg-[#f2f2f278] "
    >
      <div className="container-main rounded-4xl pt-10">

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-7/12">
              <h1 className="fs-60-32 !font-normal leading-[0.95] uppercase !mb-8">Acquire a Business in the USA & Get Your <span className="text-green-700">Green Card</span> in 2 Years*
              </h1>
              <p className="text-gray-500 !mb-8 lg:!mb-12">Phoenix Business Advisory has helped entrepreneurs, investors, founders, and business owners confidently establish and expand their businesses in the USA, Australia, and other global markets. From business setup to immigration strategy, our experts guide you through every step.</p>
              <BaseButton
              title="Get a Call in 55 Second"
              link
              toLink="/contact"
              style="secondary"
            ><Headset
                className="ml-2 transition-colors duration-300 group-hover:text-[var(--color-red-3)]"
                size={20}
              /></BaseButton>
          </div>
          <div className="w-full lg:w-5/12">
          <img src="https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/statue-liberty-isolated-e1786780508702.png" alt="" className="site-header__brand-image !w-full !h-auto" />
          </div>
        </div>
        
      </div>

    </section>
  );
}