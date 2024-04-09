"use client";
import { useFlightOrder } from "@/context/FlightOrderProvider";
import React from "react";

const UserCard = () => {
  const { handleOrderUser } = useFlightOrder();
  return (
    <div className="bg-white rounded-xl p-6 lg:w-[900px]">
      <p className="text-black text-xl font-bold">Information of user</p>
      <p className="text-black">Contact for information of order</p>
      <hr className="w-full  bg-gray-400 h-[1.5px] my-3"></hr>
      <div className="p-3 flex flex-col gap-1">
        <div className=" gap-1 lg:flex lg:justify-between">
          <div>
            <p className="text-black">First name</p>
            <input
              name="name"
              onChange={handleOrderUser}
              className="rounded-xl p-2 border-[1px]  bg-white w-full lg:h-10 lg:w-[250px]"
            />
          </div>
          <div>
            <p className="text-black">Second name</p>
            <input className="rounded-xl  border-[1px] p-2  bg-white w-full lg:h-10 lg:w-[250px]" />
          </div>
          <div>
            <p className="text-black">Date of birth</p>
            <input
              type="date"
              name="birthDate"
              onChange={handleOrderUser}
              className="rounded-xl   border-[1px] p-2  bg-white w-full lg:h-10 lg:w-[250px]"
            />
          </div>
        </div>

        <p className="text-black">Phone</p>
        <div className="flex justify-between ">
          <input
            name="phone"
            onChange={handleOrderUser}
            className="rounded-xl  border-[1px] p-2  bg-white w-full lg:h-10 lg:w-[400px]"
          />
        </div>
        <div className="lg:flex lg:justify-between">
          <div className="">
            <p className="text-black">Citizen</p>
            <input
              name="citizen"
              onChange={handleOrderUser}
              className="rounded-xl  border-[1px] p-2  bg-white w-full lg:h-10 lg:w-[400px]"
            />
          </div>
          <div>
            <p className="text-black">Email</p>
            <input
              name="email"
              onChange={handleOrderUser}
              className="rounded-xl  border-[1px] p-2  bg-white w-full lg:h-10 lg:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
