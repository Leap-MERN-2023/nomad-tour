"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function slider({hotel}:any) {
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
        {hotel.Images.map((images : any) => (
          <SwiperSlide key={images}>
            <img
              className="w-full h-48 rounded-btn object-cover"
              src={images}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}