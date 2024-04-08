"use client"
import React,{useContext,useEffect, useState} from 'react';
import { AirPortContext } from '@/context/airportProvider';
import AirportModal from "@/components/modals/airportModal"


const index = () => {
    const {airports,deleteAirport} = useContext(AirPortContext);
    const [open, setOpen] = useState(true);

    // useEffect(() => {
    //     getAllairPort()
    //   }, []);
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
                   return  <div key={airport._id}
                     className="flex my-6 items-center  gap-[250px]">
                        <div className="py-4 px-6 border-b border-grey-light w-48">{airport.country.name}</div>
                        <div className="py-4 px-6 border-b border-grey-light w-96">{airport.name}
                        
                        </div>
                        <div className='flex gap-2'>
                             <button className="btn btn-active btn-primary w-20 text-white">Put</button>
                             <button className="btn btn-error w-20 text-white" onClick={()=> {deleteAirport(airport._id)}}>Del</button>
                        </div>
                     </div>
                      })}
        </div>
    </section>
    
  )
}

export default index


