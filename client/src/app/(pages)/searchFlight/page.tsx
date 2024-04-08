"use client";
import FlightFilter from "@/components/flightSearch/FlightFilter";
import FlightInfo from "@/components/flightSearch/FlightInfo";
import Tabs from "@/components/heroSection/Tabs";
import { AirPortContext } from "@/context/airportProvider";
import { FlightContext } from "@/context/flightProvider";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

type Props = {};

const pageSearchFlights = ({ searchParams }: any) => {
  const router = useRouter();
  const {
    selectedArrivalAirport,
    selectedDepartureAirport,
    setSelectedArrivalAirport,
    setSelectedDepartureAirport,
  } = useContext(AirPortContext);
  useEffect(() => {
    setSelectedArrivalAirport(searchParams.arr);
    setSelectedDepartureAirport(searchParams.dep);
  }, []);
  useEffect(() => {
    router.push(
      `?dep=${selectedDepartureAirport}&arr=${selectedArrivalAirport}`,
      { scroll: false }
    );
  }, [selectedArrivalAirport, selectedDepartureAirport]);

  return (
    <div className="relative bg-white w-full flex flex-col items-center pb-10">
      <div className="w-full flex justify-center items-center relative z-10 sm:px-16 px-6 pt-32">
        <Tabs />
      </div>
      <div className="w-full max-w-7xl flex flex-col xl:flex-row xl:justify-between gap-10">
        <FlightFilter />
        <FlightInfo />
      </div>
    </div>
  );
};

export default pageSearchFlights;
