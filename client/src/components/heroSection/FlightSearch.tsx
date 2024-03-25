"use client";
import React, { useContext } from "react";
import MySelect from "./MySelect";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdFlightClass } from "react-icons/md";
import { CountryContext } from "@/context/CountryProvider";
import { AirPortContext } from "@/context/airportProvider";

import { flightClasses } from "@/constants";

type Props = {};

const FlightSearch = (props: Props) => {
  const { airport } = useContext(AirPortContext);
  return (
    <div className="w-full ">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <p>Leaving from</p>
          <MySelect datas={airport} />
        </div>
        <FaArrowRightArrowLeft className="text-black mt-12" size={20} />
        <div className="flex-1">
          <p>Going to</p>
          <MySelect datas={airport} />
        </div>
        <div className="flex-1">
          <p>Flight Date</p>
          <input
            className="input bg-zinc-200 shadow-lg w-full mt-3"
            type="date"
          />
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-1/4 flex items-center relative">
          <MdFlightClass
            className="absolute z-10 top-7"
            size={30}
            color="black"
          />
          <MySelect datas={flightClasses} />
        </div>
        <button className="btn bg-[#0281B0] mt-4 border-0 text-white hover:bg-blue-300">
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;
