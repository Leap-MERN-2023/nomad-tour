"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { carouselImages } from "@/constants";

type Props = {};

const Carousel = (props: Props) => {
  return (
    <div className="w-full">
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        cssMode={true}
        autoplay={{ delay: 5000 }}
      >
        {carouselImages.map((img) => (
          <SwiperSlide>
            <img
              className="w-full h-[700px] object-cover"
              src={img.src}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
