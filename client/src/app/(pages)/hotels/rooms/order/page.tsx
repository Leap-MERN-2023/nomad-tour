"use client";
import React from "react";
import Oppurtunity from "@/components/orderCards/left/oppurtunity";
import HotelOrderPage from "@/components/Order";

const Order = () => {
  return (
    <div className=" bg-gray-200 flex flex-col 2xl:flex-row justify-center gap-10 items-center 2xl:py-32 ">
      <HotelOrderPage />
      <Oppurtunity />
    </div>
  );
};

export default Order;
