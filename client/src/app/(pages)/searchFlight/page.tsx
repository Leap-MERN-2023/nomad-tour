"use client";
import FlightFilter from "@/components/flightSearch/FlightFilter";
import FlightInfo from "@/components/flightSearch/FlightInfo";
import Tabs from "@/components/heroSection/Tabs";
import React from "react";

type Props = {};

const pageSearchFlights = (props: Props) => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center">
      <div className="w-full flex justify-center items-center relative z-10 sm:px-16 px-6 pt-32">
        <Tabs />
      </div>
      <div className="w-full max-w-7xl sm:px-16 px-6 flex flex-col xl:flex-row xl:justify-between">
        <FlightFilter />
        <FlightInfo />
      </div>
    </div>
  );
};

export default pageSearchFlights;
