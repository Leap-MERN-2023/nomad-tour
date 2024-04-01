"use client";
import React, { useContext, useState } from "react";
import { HotelContext } from "@/context/hotelProvider";
import HotelCard from "@/components/hotelcard/SerchHotelCard";

import { HotelModal } from "./drawer";
import DrawerData from "./drawerData";

const Hotel = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    console.log("Closing modal");
    setOpenModal(false);
  };
  const { allHotel } = useContext(HotelContext);
  return (
    <div className="w-11/12  flex flex-col gap-5 mt-10 justify-between mx-auto max-w-7xl 2xl:w-9/12 ">
      <div className=" lg:hidden">
        <HotelModal />
      </div>
      <div className="flex justify-between gap-3">
        <div className="hidden lg:flex lg:border-[1px] lg:rounded-xl ">
          <DrawerData />
        </div>
        <div className="flex flex-col w-full lg:w-7/12  gap-5 xl:w-8/12 2xl:w-8/12  ">
          {allHotel?.map((hotels) => (
            <HotelCard hotels={hotels} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
