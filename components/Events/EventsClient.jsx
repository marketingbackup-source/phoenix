"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";


export default function EventsClient({ events }) {

    const [activeEvent, setActiveEvent] = useState(
        events?.[0]?.id
    );

    const tabsRef = useRef(null);


    const scrollTabs = (direction) => {

        if (!tabsRef.current) return;


        tabsRef.current.scrollBy({
            left: direction === "next" ? 300 : -300,
            behavior: "smooth",
        });

    };


    const selectedEvent = events.find(
        (event) => event.id === activeEvent
    );


    if (!events || events.length === 0) {
        return null;
    }


    return (

        <section className="pb-100-40">

            <div className="container-main">


                {/* Tabs */}

                <div className="relative mb-60-20">


                    {/* Left Button */}

                    <button
                        type="button"
                        onClick={() => scrollTabs("prev")}
                        className="
                            absolute
                            left-0
                            top-1/2
                            -translate-y-1/2
                            z-10
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            border
                            border-gray-200
                            shadow-md
                            hover:border-[var(--color-red-1)]
                            transition
                        "
                    >

                        <ChevronLeft size={20} />

                    </button>



                    {/* Tabs Container */}

                    <div
                        ref={tabsRef}
                        className="
                            flex
                            gap-3
                            overflow-x-auto
                            scroll-smooth
                            no-scrollbar
                            px-14
                        "
                    >

                        {events.map((event) => {

                            const isActive =
                                activeEvent === event.id;


                            return (

                                <button

                                    key={event.id}

                                    type="button"

                                    onClick={() => {
                                        setActiveEvent(event.id);
                                    }}

                                    className={`
                                        shrink-0
                                        px-5
                                        py-3
                                        border
                                        text-xs
                                        sm:text-sm
                                        tracking-[1.5px]
                                        transition-all
                                        duration-300

                                        ${
                                            isActive
                                                ? "border-[var(--color-red-1)] bg-[var(--color-red-1)] !text-white"
                                                : "border-black/10 bg-white text-gray-500 hover:border-[var(--color-red-1)] hover:text-[var(--color-red-1)]"
                                        }
                                    `}
                                >

                                    {event.title}

                                </button>

                            );

                        })}


                    </div>



                    {/* Right Button */}

                    <button
                        type="button"
                        onClick={() => scrollTabs("next")}
                        className="
                            absolute
                            right-0
                            top-1/2
                            -translate-y-1/2
                            z-10
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            border
                            border-gray-200
                            shadow-md
                            hover:border-[var(--color-red-1)]
                            transition
                        "
                    >

                        <ChevronRight size={20} />

                    </button>


                </div>



                {/* Gallery */}

                <div
                    key={selectedEvent?.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >

                    {selectedEvent?.images?.map((image, index) => (

                        <div
                            key={`${selectedEvent.id}-${index}`}
                            className="overflow-hidden rounded-2xl bg-gray-100"
                            data-reveal="bottom"
                        >

                            <Image

                                src={image}

                                alt={`${selectedEvent.title} event photo ${index + 1}`}

                                width={1200}

                                height={800}

                                className="w-full h-auto transition-transform duration-500 hover:scale-105"

                                sizes="(max-width: 767px) 100vw, 50vw"

                            />

                        </div>

                    ))}


                </div>


            </div>


        </section>

    );

}