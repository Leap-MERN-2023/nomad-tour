"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

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
        {hotel?.images.map((image : any) => (
          <SwiperSlide key={image}>
            <Image
              className="w-full h-48 rounded-btn object-cover"
              src={image}
              alt="image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
