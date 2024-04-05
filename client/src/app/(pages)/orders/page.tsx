"use client";
import React from "react";

const Order = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <div className="bg-gray-200  w-full h-[900px] p-3">
        <p className="font-bold text-xl mt-20 ">Adult</p>
        <div className="bg-white rounded-xl h-[80%]">
          <div className="flex justify-around p-2">
            <p>Information of tourist</p>
            <button className="bg-blue-500 p-1 rounded-xl">Adult</button>
          </div>
          <hr className="w-full  bg-black h-[1.5px]"></hr>
          <div className="p-3">
            <div>
              <p>First name</p>
              <input className="rounded-xl p-2 border-[1px] border-black w-full" />
              <p>Second name</p>
              <input className="rounded-xl  border-[1px] p-2 border-black w-full" />
              <p>Date of birth</p>
              <input className="rounded-xl   border-[1px] p-2 border-black w-full" />
            </div>
            <div>
              <p>Gender</p>
              <input className="rounded-xl  p-2  border-[1px] border-black w-full" />
              <p>Citizenship</p>
              <input className="rounded-xl  p-2  border-[1px] border-black w-full" />
              <p>Passport Id</p>
              <input className="rounded-xl p-2  border-[1px] border-black w-full" />
            </div>
            <div>
              <p>Date of passport issue</p>
              <input className="rounded-xl - p-2  border-[1px] border-black w-full" />
              <p>Date of passport validity </p>
              <input className="rounded-xl  p-2  border-[1px] border-black w-full" />
              <p>Email </p>
              <input className="rounded-xl  p-2  border-[1px] border-black w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-400 h-[40%] w-full">sdfs</div>
    </div>
  );
};

export default Order;
