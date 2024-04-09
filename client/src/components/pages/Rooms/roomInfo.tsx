"use client";

import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { IRoom } from "@/types";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Swiper = /*unresolved*/ any;
const roomInfo = (room: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | Swiper>(null);
  return (
    <div>
      {" "}
      <Swiper
        style={{
          height: 400,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 5000 }}
        modules={[Thumbs, Autoplay]}
      >
        {room?.images?.map((image: string) => {
          return (
            <SwiperSlide>
              <img className="h-full w-full" src={image} key={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {room?.images?.map((image: string) => {
          return (
            <SwiperSlide>
              <img className="h-28 w-full mt-5" src={image} key={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default roomInfo;
