"use client"
import FlightModal from "@/components/modals/flightModal";
import { FlightContext } from "@/context/flightProvider";
import { AirlinesContext } from "@/context/airlines";
import { AirPortContext } from "@/context/airportProvider";
import { useContext } from "react";
import FlightCard from "./flightCard"

const Flight = () => {
  const {airlines} = useContext(AirlinesContext);
  const {airports} = useContext(AirPortContext);
  const { flights, deleteFlight } = useContext(FlightContext);


  if (!airlines) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (!airports) {
    return <span className="loading loading-bars loading-lg"></span>;
  }


  return (
    <div>
      <div className='flex justify-between w-[80%] items-center m-auto my-12'>
        <h1 className='text-3xl font-bold'>Flights</h1>
        <FlightModal/>
      </div> 
      <div>
        {flights.map((flight: any) =>{
           return <FlightCard  key={flight._id}  flight={flight} />
        })}
      </div>
    </div>
  );
};

export default Flight;

