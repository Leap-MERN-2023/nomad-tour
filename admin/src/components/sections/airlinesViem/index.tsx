"use client"
import React, { useEffect } from 'react';
import { AirlinesContext } from '@/context/airlines';
import AirlineModal from "@/components/modals/airlineModal"

const index = () => {
    const {airlines,deleteAirline} = React.useContext(AirlinesContext);
  return (
    <section className='w-full'>
        <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Airlines</h1>
            <AirlineModal/>
        </div>
        <div className='flex justify-center w-[80%] flex-col items-center'>
        {airlines?.map((airline : any) => {
                   return  <div key={airline._id}
                     className="flex my-6 items-center gap-[250px]">
                        <img className="py-4 px-6 border-b border-grey-light w-28" src={airline.logo}/>
                        <div className="py-4 px-6 border-b border-grey-light w-[400px]">{airline.name}
                        
                        </div>
                        <div className='flex gap-2 w-[200px]'>
                             <button className="btn btn-active btn-primary w-20 text-white">Put</button>
                             <button className="btn btn-error w-20 text-white" 
                             onClick={()=> {deleteAirline(airline._id)}}
                             >Del</button>
                        </div>
                     </div>
                      })}
        </div>
    </section>
  )
}

export default index;
