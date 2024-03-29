import React from "react";
import Slider from "./slider";
import "swiper/css";
import "swiper/css/pagination";
import { IHotel } from "../../types";

const HotelCard = ({ hotel }: any) => {
  return (
    <div className="card card-compact 2xl:w-96 bg-base-100 shadow-xl h-[300px] cursor-pointer sm:flex m-auto w-full">
      <figure className="relative">
        <Slider images={hotel.images} />
        <div className="flex justify-center items-center absolute z-10 bg-neutral-600 px-2 right-4 top-4 text-white gap-1 rounded-lg">
          <img src="Star.png" />
          <h1>4.8</h1>
        </div>
      </figure>
      <div className="card-body bg-white rounded-b-2xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-black">{hotel.name}</h2>
          <h2 className="text-2xl font-bold text-black">10000$</h2>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src="location.png" />
          <p>Rio de Janiero, Brazil</p>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
