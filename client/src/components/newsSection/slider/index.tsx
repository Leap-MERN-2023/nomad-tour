"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import NewsCard from "@/components/newsCard"
import { FreeMode, Pagination } from 'swiper/modules';

export default function slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide><NewsCard/></SwiperSlide>
        <SwiperSlide><NewsCard/></SwiperSlide>
        <SwiperSlide><NewsCard/></SwiperSlide>
        <SwiperSlide><NewsCard/></SwiperSlide>
      </Swiper>
    </>
  );
};
