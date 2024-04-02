"use client"
import React,{useState,useEffect, useContext} from 'react';
import { FlightContext } from '@/context/flightProvider';
import FlightModal from "@/components/modals/flightModal"

const index = () => {
  const {flights,getFlights} = useContext(FlightContext);
  //    useEffect(() => {
  //    getFlights();
  // }, []);
  return (
    <div>
       <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Flights</h1>
            <FlightModal/>
      </div> 
      <div>
      {flights?.map((flight : any) => {
        // console.log("map flight", flight)
        return <div key={flight._id} className="flex my-6 items-center w-[70%] justify-between ml-[250px]">
           <td className="py-4 px-6 border-b border-grey-light w-96">{flight.countryId.name}</td>
           <td className="py-4 px-6 border-b border-grey-light w-96">{flight.arrivalAirportId.name}</td>
           <td className="py-4 px-6 border-b border-grey-light w-96">{flight.departureAirportId.name}</td>
           <td className="py-4 px-6 border-b border-grey-light w-96">{flight.price.MNT}</td>
           <div className='flex gap-2'>
               <button className="btn btn-active btn-primary w-20 text-white">Put</button>
               <button className="btn btn-error w-20 text-white">Del</button>
           </div>
        </div> 
      })}
      </div>
    </div>
  )
}

export default index
