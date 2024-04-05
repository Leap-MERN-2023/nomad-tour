"use client";
import React from "react";

const UserCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 lg:w-[700px]">
        <p className="text-black text-xl">Information of user</p>
       <p className="text-black">Contact for information of order</p>
      <hr className="w-full  bg-black h-[1.5px]"></hr>
      <div className="p-3 flex flex-col gap-1">
        <div className=" gap-1 lg:flex">
          <div>
          <p className="text-black">First name</p>
          <input className="rounded-xl p-2 border-[1px]  bg-white w-full lg:h-10" />
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
      
        <p className="text-black">Phone</p>
        <div className="flex justify-between">
          <input className="w-[120px] p-2 rounded-xl bg-white  border-[1px] lg:h-10 lg:w-[48%]"/>
          <input className="w-42 p-2 rounded-xl bg-white  border-[1px] lg:h-10 lg:w-[48%]"/>
        </div>
        <div className="lg:flex">
        <div>
          <p className="text-black">Citizen</p>
          <input className="rounded-xl  border-[1px] p-2  bg-white w-full lg:h-10 lg:w-[48%]" />
        </div>
        <div>
          <p className="text-black">Email</p>
            <input className="rounded-xl  border-[1px] p-2  bg-white w-full lg:h-10 lg:w-[48%]" />
            </div>
            </div>
         </div>
      
    </div>
  );
};

export default UserCard;
