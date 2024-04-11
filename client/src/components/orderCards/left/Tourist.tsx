"use client";
import { useFlightOrder } from "@/context/FlightOrderProvider";
import React from "react";

const Tourist = ({ formik }: any) => {
  const { handleTourist } = useFlightOrder();

  return (
    <div className="bg-white rounded-xl lg:w-[900px] lg:flex lg:flex-col lg:justify-between p-6">
      <div className="flex justify-between ">
        <p className="text-black text-xl font-bold">Information of tourist</p>
      </div>
      <hr className="w-full  bg-gray-400 h-[1.5px] my-3"></hr>
      <div className="">
        <div className="lg:justify-between lg:flex lg:gap-3">
          <div>
            <p className="text-black">First name</p>
            <input
              name="name"
              onChange={handleTourist}
              className="rounded-xl p-2 border-[1px]  bg-white lg:w-[250px] w-full lg:h-10 "
            />
          </div>
          <div>
            <p className="text-black">Second name</p>
            <input className="rounded-xl  border-[1px] p-2  bg-white w-full lg:w-[250px] lg:h-10" />
          </div>
          <div>
            <p className="text-black">Date of birth</p>
            <input
              name="birthDate"
              onChange={handleTourist}
              className="rounded-xl   border-[1px] p-2  bg-white w-full lg:w-[250px] lg:h-10"
            />
          </div>
        </div>
        <div className="lg:flex gap-1 lg:justify-between">
          <div>
            <p className="text-black">Gender</p>
            <select
              onChange={handleTourist}
              className="rounded-xl  p-2  border-[1px]  bg-white w-full lg:w-[250px] lg:h-10"
            >
              <option disabled selected>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <p className="text-black">Citizen</p>
            <input
              name="citizen"
              onChange={handleTourist}
              className="rounded-xl  p-2  border-[1px] bg-white w-full lg:w-[250px] lg:h-10"
            />
          </div>
          <div>
            <p className="text-black">Passport Id</p>
            <input
              name="passportId"
              onChange={handleTourist}
              placeholder="E1234567"
              className="rounded-xl p-2  border-[1px] bg-white w-full lg:w-[250px] lg:h-10"
            />
          </div>
        </div>
        <div className="lg:flex gap-1 lg:justify-between">
          <div>
            <p className="text-black">Date of passport issue</p>
            <input
              name="passportDate"
              onChange={handleTourist}
              type="date"
              className="rounded-xl - p-2  border-[1px]  bg-white w-full lg:w-[250px] lg:h-10"
            />
          </div>
          <div>
            <p className="text-black">Date of passport validity </p>
            <input
              name="passportValidity"
              onChange={handleTourist}
              type="date"
              className="rounded-xl  p-2  border-[1px]  bg-white w-full lg:w-[250px] lg:h-10"
            />
          </div>
          <div>
            <p className="text-black">Email </p>
            <input
              name="email"
              onChange={handleTourist}
              className="rounded-xl  p-2  border-[1px] bg-white w-full lg:w-[250px] lg:h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourist;
