"use client";
import React, { useContext } from "react";
import MySelect from "./MySelect";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdFlightClass } from "react-icons/md";
import { CountryContext } from "@/context/CountryProvider";
import { AirPortContext } from "@/context/airportProvider";

import { flightClasses } from "@/constants";
import Link from "next/link";
import { FlightContext } from "@/context/flightProvider";

type Props = {};

const FlightSearch = (props: Props) => {
  const {
    airport,
    handleArrival,
    handleDeparture,
    selectedArrivalAirport,
    selectedDepartureAirport,
  } = useContext(AirPortContext);
  const { getSearchedFlights } = useContext(FlightContext);
  const { handleSelectCountry, selectedCountry } = useContext(CountryContext);
  return (
    <div className="w-full ">
      <div className="flex items-center flex-wrap gap-4">
        <div className="flex-1">
          <p>Leaving from</p>
          <select
            value={selectedDepartureAirport}
            onChange={handleDeparture}
            className="select bg-zinc-100 w-full"
            name="departureAirport"
            id=""
          >
            <option disabled selected>
              Select departure Airport
            </option>
            {airport?.map((port: any) => (
              <option key={port._id} value={port._id}>
                {port.name}
              </option>
            ))}
          </select>
        </div>
        <FaArrowRightArrowLeft className="text-[#0281B0] mt-4" size={20} />
        <div className="flex-1">
          <p>Going to</p>
          <select
            value={selectedArrivalAirport}
            onChange={handleArrival}
            className="select bg-zinc-100 w-full"
            name="arrivalAirport"
            id=""
          >
            <option disabled selected>
              Select arrival Airport
            </option>
            {airport?.map((port: any) => (
              <option key={port._id} value={port._id}>
                {port.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <p>Flight Date</p>
          <input className="input bg-zinc-100 w-full" type="date" />
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-1/4 flex items-center relative">
          {/* <select
            onChange={handleSelectCountry}
            className="select bg-zinc-100 w-full"
            name="hotelCountry"
            id=""
          >
            <option disabled selected>
              Select Seat Class
            </option>
            {flightClasses?.map((port) => (
              <option value={port.value}>{port.name}</option>
            ))}
          </select> */}
        </div>
        <Link onClick={getSearchedFlights} href={"/searchFlight"}>
          <button className="btn bg-[#0281B0] mt-4 border-0 text-white hover:bg-blue-300">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FlightSearch;
