"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { carouselImages } from "@/constants";
import { Pagination } from "swiper/modules";

export default function slider({ images }: any) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-48 absolute"
      >
        {images?.map((img: string) => (
          <SwiperSlide key={img}>
            <img
              className="w-full h-48 rounded-btn object-cover"
              src={img}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
