"use client";
import React, { useContext } from "react";
import { AirlinesContext } from "@/context/airlines";
import AirlineModal from "@/components/modals/airlineModal";
import AirlineCard from "./airlineCard"


const Airline = () => {
  const { airlines, deleteAirline } = useContext(AirlinesContext);
  if (!airlines) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  return (
    <section className="w-full">
      <div className="flex justify-between w-[80%] items-center m-auto my-12">
        <h1 className="text-3xl font-bold">Airlines</h1>
        <AirlineModal />
      </div>
      <div className="flex justify-center w-[80%] flex-col items-center">
        {airlines?.map((airline: any) => {
          return <AirlineCard key={airline._id} airline={airline}/>
        })}
      </div>
    </section>
  );
};

export default Airline;
