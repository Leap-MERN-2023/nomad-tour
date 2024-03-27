"use client";
import { FlightContext } from "@/context/flightProvider";
import { IFlight } from "@/types";
import React, { useContext } from "react";

type Props = {};

const FlightInfo = (props: Props) => {
  const { flights } = useContext(FlightContext);
  return (
    <div>
      {flights?.map((flight: IFlight) => (
        <h1></h1>
      ))}
    </div>
  );
};

export default FlightInfo;
