"use client";
import React from "react";
import LeftCardOne from "@/components/orderCards/left/leftCardOne";
import RightCardOne from "@/components/orderCards/right/rightCardOne";


const Order = () => {
  return (
    <div className=" bg-gray-200  lg:flex lg:justify-center ">
     <LeftCardOne/>
     <RightCardOne/>
    </div>
  );
};


export default Order;



