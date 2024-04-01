"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Swiper = /*unresolved*/ any;

const HotelModal = ({ hotel }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | Swiper>(null);
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Nomad Tour</h3>
        <Swiper
          style={{
            height: 500,
          }}
          loop={true}
          spaceBetween={20}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {hotel.images.map((image: string) => {
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
          {" "}
          {hotel.images.map((image: string) => {
            return (
              <SwiperSlide>
                <img className="h-32 w-full mt-5" src={image} key={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div>{hotel.name}</div>
        <div>{hotel.description}</div>
      </div>
    </dialog>
  );
};

export default HotelModal;
