import React, { useContext } from "react";
import Slider from "./slider";
import "swiper/css";
import "swiper/css/pagination";
import { IHotel } from "../../types";
import HotelModal from "./HotelModal";

import { HotelContext } from "@/context/hotelProvider";

const HotelCard = ({ hotel }: any) => {
  const { getHotel } = useContext(HotelContext);

  const showModal = () => {
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  const hotelId = hotel?._id;

  const hotelClick = () => {
    if (hotelId) {
      showModal();
      getHotel(hotelId);
    }
  };
  return (
    <div
      className="card card-compact 2xl:w-96 bg-base-100 shadow-xl h-[300px] cursor-pointer sm:flex m-auto w-full"
      onClick={hotelClick}
    >
      <figure className="relative">
        <Slider hotel={hotel} />
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
      <HotelModal hotel={hotel} />
    </div>
  );
};

export default HotelCard;
