"use client";
import React, { useContext, useState } from "react";
import Carousel from "./carousel";
import RoomInfo from "./roomInfo";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RoomContext } from "@/context/RoomProvider";
import { IRoom } from "@/types";
type Swiper = /*unresolved*/ any;

const Room = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | Swiper>(null);
  const { rooms } = useContext(RoomContext);
  console.log("RRRRR", rooms);
  return (
    <section className="w-full  relative bg-white pb-10 ">
      <Carousel />

      {rooms?.map((room, i) => {
        return (
          <div className="w-11/12  flex flex-col gap-5 mt-10 justify-between mx-auto max-w-7xl 2xl:flex-row border border-black 2xl:w-9/12 mb-10">
            <div className="flex flex-col justify-between w-1/2 items-center h-60 2xl:h-72  p-2">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full h-1/4  "
              >
                {room?.images?.map((image: string) => {
                  return (
                    <SwiperSlide key={image}>
                      <img
                        className="h-full w-full"
                        src={image}
                        alt="Room Image"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Swiper
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                autoplay={{ delay: 5000 }}
                modules={[Thumbs, Autoplay]}
                className="w-full h-3/4"
              >
                {room?.images?.map((image: string) => {
                  return (
                    <SwiperSlide>
                      <img
                        className=" w-full h-full lg:my-2"
                        src={image}
                        key={image}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex flex-col justify-center items-center ml-3">
              <div className="font-bold text-lg  text-black">{room?.name}</div>
              <div>{room?.price?.USD}$</div>
              <div className="text-sm">{room?.description}</div>
              <button className="btn btn-outline btn-accent">Accent</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Room;
