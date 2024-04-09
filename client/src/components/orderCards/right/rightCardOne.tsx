"use client";
import React from "react";
import CardOne from "./cardOne";
import CardSecond from "./cardSecond";
import CardThird from "./cardThird";

const RightCardOne = () => {
  return (
    <div className="bg-gray-200 w-full p-4 lg:w-[600px] lg:flex lg:flex-col items-center lg:my-24 lg:gap-8">
        <CardOne/>
        <CardSecond/>
        <CardThird/>
      </div>
  );
};

export default RightCardOne;
