"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import "@/styles/imageSlider.css";

export default function ImageSlider({
    images,
    slidesPerView = 3,
    spaceBetween = 24,
    speed = 5000,
    imageWidth = 400,
    imageHeight = 240,
}) {
    return (
        <Swiper
            className="image-slider"
            modules={[Autoplay, FreeMode]}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            speed={speed}
            loop={true}
            loopAdditionalSlides={slidesPerView}
            freeMode={{
                enabled: true,
                momentum: false,
                sticky: false,
            }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            grabCursor={true}
        >
            {images.map((image) => (
                <SwiperSlide key={image.id}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width || imageWidth}
                        height={image.height || imageHeight}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}