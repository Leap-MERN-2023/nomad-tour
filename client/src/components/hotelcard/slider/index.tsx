"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { carouselImages } from '@/constants';
import { Pagination } from 'swiper/modules';

export default function slider() {
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
        {carouselImages.map((img) => (
          <SwiperSlide>
            <img
              className="w-full h-48 rounded-btn object-cover"
              src={img.src}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
