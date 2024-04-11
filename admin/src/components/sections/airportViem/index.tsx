"use client"
import React,{useContext} from 'react';
import { AirPortContext } from '@/context/airportProvider';
import AirportModal from "@/components/modals/airportModal";
import AirportCard from "./airportCard"


const Airport = () => {
  const {airports} = useContext(AirPortContext);
  if (!airports) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  return (
    <section className='w-full'>
        <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Airports</h1>
            <AirportModal/>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
            <div className='flex items-center w-[50%] justify-between my-12'>
                    <h1 className='text-2xl'>Country</h1>
                    <h1 className='text-2xl'>City</h1>
                    <h1 className='text-2xl'>Active</h1>        
            </div>
                 {airports?.map((airport : any) => {
                  return <AirportCard key={airport._id} airport={airport}/>
                 })}
        </div>
    </section>
    
  )
}

export default Airport


