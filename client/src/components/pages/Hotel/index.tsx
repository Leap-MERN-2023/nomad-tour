"use client";
import React, { useContext, useState } from "react";
import { HotelContext } from "@/context/hotelProvider";
import HotelCard from "@/components/hotelcard";

const Hotel = () => {
  const { hotels } = useContext(HotelContext);
  return (
    <div>
      {hotels?.map((hotel) => (
        <HotelCard hotel={hotel} />
      ))}
    </div>
  );
};

export default Hotel;
