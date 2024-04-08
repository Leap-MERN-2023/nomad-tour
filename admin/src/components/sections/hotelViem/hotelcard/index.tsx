import React from "react";
import Slider from "./slider";
import "swiper/css";
import "swiper/css/pagination";
import { HotelContext } from "@/context/hotelProvider";
import { TbStarFilled } from "react-icons/tb";

const HotelCard = ({hotel}: any) => {
  const {deleteHotel} = React.useContext(HotelContext)
  return (
    <div className="card card-compact 2xl:w-96 bg-base-100 shadow-xl h-[300px] cursor-pointer sm:flex m-auto w-[300px]">
      <figure className="relative">
        <Slider />
        <div className="flex justify-center items-center absolute z-10 bg-neutral-600 px-2 right-4 top-4 text-white gap-1 rounded-xl">
          <div className="w-4 h-4"><img className="w-full h-full" src="https://cdn-icons-png.freepik.com/256/4577/4577419.png" /></div>
          <h1>{hotel.stars}</h1>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-black">{hotel.name}</h2>
          <h2 className="text-2xl font-bold text-black">{hotel.price}</h2>
        </div>
        <div className="flex justify-center items-center gap-1">
        <div className="w-4 h-4"><img className="w-full h-full" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNDY3YmF0Y2gyLWxvY2F0aW9uLTAwMl8xLnBuZw.png" /></div>
          <p>{hotel.name}</p>
        </div>
      </div>
      <div className="flex justify-evenly p-3">
      <button className="btn btn-active btn-primary w-1/3 text-white">Put</button>
      <button className="btn btn-error w-1/3 text-white" onClick={()=>{deleteHotel(hotel._id)}}>Del</button>
      </div>
    </div>
  );
};

export default HotelCard;
