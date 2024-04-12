"use client";
import React, { useState } from "react";
import Oppurtunity from "@/components/orderCards/left/oppurtunity";
import HotelOrderPage from "@/components/Order";

const Order = () => {
  const [isAgree, setIsAgree] = useState(false);
  return (
    <div className=" bg-gray-200 flex flex-col 2xl:flex-row justify-center gap-10 items-center lg:py-32 2xl:py-32 ">
      <HotelOrderPage />
      <Oppurtunity isAgree={isAgree} setIsAgree={setIsAgree} />
    </div>
  );
};

export default Order;
