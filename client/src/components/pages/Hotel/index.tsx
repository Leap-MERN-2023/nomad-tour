"use client";
import React, { useContext, useState } from "react";
import { HotelContext } from "@/context/hotelProvider";
import HotelCard from "@/components/hotelcard";

const Hotel = () => {
  const { allHotel } = useContext(HotelContext);
  return <div>{allHotel?.map((hotel) => <HotelCard hotel={hotel} />)}</div>;
};

export default Hotel;
