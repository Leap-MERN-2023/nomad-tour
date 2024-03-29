"use client";
import FlightInfo from "@/components/flightSearch/FlightInfo";
import Tabs from "@/components/heroSection/Tabs";
import React from "react";

type Props = {};

const pageSearchFlights = (props: Props) => {
  return (
    <div className="relative bg-white">
      <div className="w-full flex justify-center items-center relative z-10 sm:px-16 px-6 pt-32">
        <Tabs />
      </div>
      <div className="w-full flex flex-col items-center">
        <FlightInfo />
      </div>
    </div>
  );
};

export default pageSearchFlights;
