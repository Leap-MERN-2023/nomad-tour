"use client";
import { FlightContext } from "@/context/flightProvider";
import { IFlight } from "@/types";
import React, { useContext } from "react";
import { MdFlight } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";

type Props = {};

const FlightInfo = (props: Props) => {
  const { flights } = useContext(FlightContext);
  console.log("FLIGHT DATA", flights);
  return (
    <div className="xl:w-2/3 flex flex-col items-center">
      <button className="btn w-full mt-5 btn-outline xl:hidden">
        <IoFilterOutline /> Filter{" "}
      </button>
      {flights?.map((flight: IFlight) => {
        return (
          <div
            key={flight._id}
            className="w-full shadow-lg bg-slate-100 rounded-xl mt-8"
          >
            <div className="p-5">
              <h1 className="text-3xl font-bold text-black">
                Flight to {flight.countryId.name}
              </h1>
              <div className="flex flex-col md:flex-row md:justify-between items-center my-7">
                <div>
                  <h2 className="text-2xl">{flight.departureAirportId.name}</h2>
                  <p>Departure date </p>{" "}
                  <span className="font-medium font-mono">
                    {flight.departureDate}
                  </span>
                </div>

                <div>
                  <div className="w-10 h-10 text-blue-400 flex justify-center items-center border-2 rounded-full border-blue-400 rotate-180 md:rotate-90">
                    <MdFlight size={30} />
                  </div>
                  <p></p>
                </div>
                <div>
                  <h2 className="text-2xl">{flight.arrivalAirportId.name}</h2>
                  <p>Arrival date </p>
                  <span className="font-medium font-mono">
                    {flight.arrivalDate}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-slate-200 p-5">
              <div>
                <h3>Availaber seats: {flight.availableSeats}</h3>
                <p>Price: {flight.price.USD}$</p>
              </div>
              <button className="btn bg-[#0281B0] text-white border-0">
                Check out
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlightInfo;
