import Image from "next/image";
import BaseButton from "@/components/UI/BaseButton";
import { MoveRight, Headset } from 'lucide-react'
export default function CallToAction({
    title,
    description,}) {
    return (
        <section className=" bg-gray-100">
            <div className="w-full bg-[var(--color-red-2)] xl:py-20 xl:px-15 py-10 px-6 rounded-t-4xl">
                <div className="flex flex-col items-center justify-between gap-6">
                <div className="lg:w-8/12 w-full">
                    <h2 className="text-3xl font-bold text-center leading-[1.05] tracking-[-0.04em] text-white lg:text-6xl">{title}</h2>
                    <p className="mt-8 text-lg leading-8 text-center text-gray-50">{description}</p>
                </div>
                <div className="lg:w-8/12 w-full">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center">
                        <BaseButton
                            title="Talk To An Advisor"
                            link
                            toLink="/contact"
                            style="white"
                        ><Headset
                className="ml-2 transition-colors duration-300 group-hover:text-[var(--color-white)]"
                size={20}
              /></BaseButton>
                        <BaseButton
                            title="Register For Next Webinar"
                            type="button"
                            style="whiteBr"
                        ><MoveRight
                className="ml-2 transition-colors duration-300 group-hover:text-[var(--color-red-1)]"
                size={20}
              /></BaseButton>
                    </div>
                </div>
                <div className="w-full"></div>
            </div>
            </div>
        </section>
    );
}