"use client";
import React, { useContext, useState } from "react";
import { HotelContext } from "@/context/hotelProvider";
import HotelCard from "@/components/hotelcard";

import { HotelModal } from "./modal";

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
    <div className="w-11/12 flex flex-col gap-5 ">
      <HotelModal />
      <div className="flex flex-wrap gap-5">
        {allHotel?.map((hotel) => (
          <HotelCard hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
