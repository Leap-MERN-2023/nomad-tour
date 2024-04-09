"use client";
import React from "react";
import Oppurtunity from "@/components/orderCards/left/oppurtunity";
import HotelOrderPage from "@/components/Order";


const Order = () => {
  return (
    <div className=" bg-gray-200  lg:flex lg:justify-center ">
     
     <HotelOrderPage/>
     <Oppurtunity/>
    </div>
  );
};


export default Order;



