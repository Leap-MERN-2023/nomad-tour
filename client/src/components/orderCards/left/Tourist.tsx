"use client";
import React from "react";


const Tourist = () => {
  return (
    <div className="bg-white rounded-xl lg:w-[900px] lg:flex lg:flex-col lg:justify-between p-6">
    <div className="flex justify-between ">
      <p className="text-black text-xl font-bold">Information of tourist</p>
      <button className="bg-[#0281B0] p-2 w-24 rounded-xl text-black">Adult</button>
    </div>
    <hr className="w-full  bg-gray-400 h-[1.5px] my-3"></hr>
    <div className="">
      <div className="lg:justify-between lg:flex lg:gap-3">
        <div>
        <p className="text-black">First name</p>
        <input className="rounded-xl p-2 border-[1px]  bg-white lg:w-[250px] w-full lg:h-10 " />
        </div>
        <div>
        <p className="text-black">Second name</p>
        <input className="rounded-xl  border-[1px] p-2  bg-white w-full lg:w-[250px] lg:h-10" />
        </div>
        <div>
        <p className="text-black">Date of birth</p>
        <input className="rounded-xl   border-[1px] p-2  bg-white w-full lg:w-[250px] lg:h-10" />
        </div>
      </div>
      <div className="lg:flex gap-1 lg:justify-between">
        <div>
        <p className="text-black">Gender</p>
        <input className="rounded-xl  p-2  border-[1px]  bg-white w-full lg:w-[250px] lg:h-10" />
        </div>
        <div>
        <p className="text-black">Citizen</p>
        <input className="rounded-xl  p-2  border-[1px] bg-white w-full lg:w-[250px] lg:h-10" />
        </div>
        <div>
        <p className="text-black">Passport Id</p>
        <input className="rounded-xl p-2  border-[1px] bg-white w-full lg:w-[250px] lg:h-10" />
        </div>
      </div>
      <div className="lg:flex gap-1 lg:justify-between">
        <div>
        <p className="text-black">Date of passport issue</p>
        <input className="rounded-xl - p-2  border-[1px]  bg-white w-full lg:w-[250px] lg:h-10" />
        </div>
        <div>
        <p className="text-black">Date of passport validity </p>
        <input className="rounded-xl  p-2  border-[1px]  bg-white w-full lg:w-[250px] lg:h-10" />
        </div>
        <div>
        <p className="text-black">Email </p>
        <input className="rounded-xl  p-2  border-[1px] bg-white w-full lg:w-[250px] lg:h-10" />
        </div>
      </div>
    </div>
  </div>
  );
};


export default Tourist;



