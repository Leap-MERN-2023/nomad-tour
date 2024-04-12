"use client";
import React, { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { TiWiFi } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RoomContext } from "@/context/RoomProvider";
import { GoogleMaps } from "../GoogleMaps";

type Swiper = /*unresolved*/ any;

const HotelModal = ({ hotel, hotels, countryName }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | Swiper>(null);
  const stars = Array.from({ length: hotel?.stars }, (_, index) => index + 1);
  const router = useRouter();
  const { getRoomByHotelId } = useContext(RoomContext);

  const handleGetRoom = () => {
    getRoomByHotelId(hotel?._id as string);
    router.push("/hotels/rooms");
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-white">
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
          <div className="text-3xl font-extrabold max-w-[80%] truncate ">
            {hotel?.name}
          </div>
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
        <div className="flex justify-between w-1/2">
          <TiWiFi style={{ height: 20, width: 20 }} />
          <FaCar style={{ height: 20, width: 20 }} />
          <BiSolidPhoneCall style={{ height: 20, width: 20 }} />
          <GiKnifeFork style={{ height: 20, width: 20 }} />
          ...
        </div>
        <div
          className="flex gap-3 font-bold mt-3"
          // onClick={openGoogleMaps}
        >
          <FaLocationDot style={{ height: 25, width: 25 }} />
          <p className="font-bold text-lg">
            {countryName}, {hotels?.name}
          </p>
        </div>
        <div className="shadow-sm rounded-2xl font-semibold p-2 bg-opacity-100 my-3">
          {hotel?.description}
        </div>
        {/* <div>
          <GoogleMaps
            lat={hotel?.location?.latitude}
            lng={hotel?.location?.longitude}
          />
        </div> */}
        <div className="flex justify-between items-center">
          <button
            className="btn btn-outline font-extrabold "
            onClick={handleGetRoom}
          >
            See availability
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default HotelModal;
