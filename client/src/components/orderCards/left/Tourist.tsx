"use client";
import React from "react";


const Tourist = () => {
  return (
    <div className="bg-white rounded-xl lg:w-[700px] lg:flex lg:flex-col lg:justify-between">
    <div className="flex justify-around p-2">
      <p className="text-black text-xl">Information of tourist</p>
      <button className="bg-blue-500 p-2 rounded-xl text-black">Adult</button>
    </div>
    <hr className="w-full  bg-black h-[1.5px]"></hr>
    <div className="p-3">
      <div className="gap-1 lg:flex ">
        <div>
        <p className="text-black">First name</p>
        <input className="rounded-xl p-2 border-[1px]  bg-white w-full lg:h-10 " />
        </div>
        <div>
        <p className="text-black">Second name</p>
        <input className="rounded-xl  border-[1px] p-2  bg-white w-full lg:h-10" />
        </div>
        <div>
        <p className="text-black">Date of birth</p>
        <input className="rounded-xl   border-[1px] p-2  bg-white w-full lg:h-10" />
        </div>
      </div>
      <div className="lg:flex gap-1">
        <div>
        <p className="text-black">Gender</p>
        <input className="rounded-xl  p-2  border-[1px]  bg-white w-full lg:h-10" />
        </div>
        <div>
        <p className="text-black">Citizen</p>
        <input className="rounded-xl  p-2  border-[1px] bg-white w-full lg:h-10" />
        </div>
        <div>
        <p className="text-black">Passport Id</p>
        <input className="rounded-xl p-2  border-[1px] bg-white w-full lg:h-10" />
        </div>
      </div>
      <div className="lg:flex gap-1">
        <div>
        <p className="text-black">Date of passport issue</p>
        <input className="rounded-xl - p-2  border-[1px]  bg-white w-full lg:h-10" />
        </div>
        <div>
        <p className="text-black">Date of passport validity </p>
        <input className="rounded-xl  p-2  border-[1px]  bg-white w-full lg:h-10" />
        </div>
        <div>
        <p className="text-black">Email </p>
        <input className="rounded-xl  p-2  border-[1px] bg-white w-full lg:h-10" />
        </div>
      </div>
    </div>
  </div>
  );
};


export default Tourist;



