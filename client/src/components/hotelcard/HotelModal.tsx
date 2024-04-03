"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { TiWiFi } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Swiper = /*unresolved*/ any;

const HotelModal = ({ hotel }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | Swiper>(null);
  const stars = Array.from({ length: hotel.stars }, (_, index) => index + 1);

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <h3 className="font-extrabold text-2xl mb-3">Nomad Tour</h3>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-6">
            ✕
          </button>
        </form>

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
          {hotel?.images?.map((image: string) => {
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
          {hotel?.images?.map((image: string) => {
            return (
              <SwiperSlide>
                <img className="h-28 w-full mt-5" src={image} key={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="border-t border-black w-full mt-3"></div>
        <div className="flex justify-between my-3 ">
          <div className="text-3xl font-extrabold   ">{hotel.name}</div>
          <div className="flex items-center">
            {stars.map((_: any, index: any) => (
              <svg
                key={index}
                className="w-6 h-6 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.45 7.515H22l-6.545 4.77 2.45 7.715L12 17.515l-5.905 4.475 2.45-7.715L2 9.515h7.55L12 2z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex justify-between w-36">
          <TiWiFi style={{ height: 16, width: 16 }} />
          <FaCar style={{ height: 16, width: 16 }} />
          <BiSolidPhoneCall style={{ height: 16, width: 16 }} />
          <GiKnifeFork style={{ height: 16, width: 16 }} />
        </div>
        <div className="shadow-2xl rounded-2xl p-2 bg-opacity-100 my-3">
          {hotel?.description}
        </div>
      </div>
    </dialog>
  );
};

export default HotelModal;
