"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { carousel1 } from "@/assets";

type Props = {};

const Carousel = (props: Props) => {
  console.log("c", carousel1);
  return (
    <div className="w-full h-[400px]">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
      >
        <SwiperSlide>
          <img src={carousel1.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
