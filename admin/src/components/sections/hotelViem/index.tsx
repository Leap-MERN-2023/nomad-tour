"use client"
import React, {useContext,useEffect} from 'react'
import { HotelContext } from '@/context/hotelProvider'
import HotelCard from './hotelcard'
import HotelModal from "@/components/modals/hotelModal"

const index = () => {
  const {hotels} = useContext(HotelContext);
  return (
    <div>
       <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Hotels</h1>
            <HotelModal/>
      </div>
      <div className='flex flex-wrap gap-8 w-[90%] my-24'>
       {hotels.map((hotel : any) =>{
        return <HotelCard key={hotel._id} hotel={hotel}/>
       })}
       </div>
    </div>
  )
}

export default index
