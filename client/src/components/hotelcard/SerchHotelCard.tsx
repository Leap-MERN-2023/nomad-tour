import React, { useContext, useState } from "react";
import Slider from "./slider";
import "swiper/css";
import "swiper/css/pagination";
import HotelModal from "./HotelModal";
import { TiWiFi } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsHeart } from "react-icons/bs";

import { CountryContext } from "@/context/CountryProvider";

import { HotelContext } from "@/context/hotelProvider";
import { GoogleMaps } from "../GoogleMaps";

export const SearchHotelCard = ({ hotels }: any) => {
  const { countries } = useContext(CountryContext);
  const { getHotel, hotel } = useContext(HotelContext);

  const showModal = () => {
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const hotelId = hotels?._id;

  const hotelClick = () => {
    if (hotelId) {
      showModal();
      getHotel(hotelId);
    }
  };

  const countryName =
    countries.find((country) => country._id === hotels.country)?.name || "";

  return (
    <div
      className="card card-compact bg-base-100 shadow-xl h-[300px] cursor-pointer sm:flex w-full"
      onClick={hotelClick}
    >
      <figure className="relative">
        <Slider hotels={hotels} />
        <div className="flex justify-center items-center absolute z-10 bg-neutral-600 px-2 right-4 top-4 text-white gap-1 rounded-lg">
          <img src="Star.png" alt="Star" />
          <h1>{hotels.stars}</h1>
        </div>
      </figure>
      <div className="card-body bg-white rounded-b-2xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-black max-w-[50%] truncate">
            {hotels.name}
          </h2>
          <h2 className="text-2xl font-bold text-black">{hotels.price}$</h2>
        </div>
        <div className="flex justify-between w-36">
          <TiWiFi style={{ height: 18, width: 18 }} />
          <FaCar style={{ height: 18, width: 18 }} />
          <BiSolidPhoneCall style={{ height: 18, width: 18 }} />
          <GiKnifeFork style={{ height: 18, width: 18 }} />
        </div>
        <div className="flex justify-between items-center gap-2 font-bold">
          <div className="flex gap-3">
            <FaLocationDot style={{ height: 20, width: 20 }} />
            <p className="text-md font-bold">
              {countryName}, {hotels.name}
            </p>
          </div>
          <BsHeart style={{ height: 30, width: 30 }} />
        </div>
      </div>

      <HotelModal countryName={countryName} hotels={hotels} hotel={hotel} />
    </div>
  );
};
