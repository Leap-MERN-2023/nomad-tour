"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import NewsCard from "@/components/newsCard"
import { FreeMode, Pagination } from 'swiper/modules';
import { carouselImages } from '@/constants';

export default function slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="w-full h-[500px]"
      >
        {carouselImages.map((item,index) => (
          <SwiperSlide key={index}>
            <NewsCard />
          </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
