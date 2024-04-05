"use client";
import React from "react";


const CardThird = () => {
  return (
    <div className="flex flex-col gap-4">
    <div className="bg-white rounded-xl lg:w-[500px] lg:ml-5">
      <div className="p-4">
        <p className="text-black">Cost</p>
        <p className="text-black">View price breakdown</p>
      </div>
      <hr className="h-1"></hr>
      <div className="p-4">
      <p className="text-black">Total</p>
      <p className="text-black">(Includes taxes and surcharges 1m)</p>
    </div>
    </div>
    <button className="bg-blue-300 text-black w-full rounded-xl p-2 lg:w-[500px] lg:ml-5">Order </button>
    </div>
  );
};


export default CardThird;



