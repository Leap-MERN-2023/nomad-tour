"use client"
import React, {useContext,useEffect} from 'react'
import { HotelContext } from '@/context/hotelProvider'
// import HotelCard from './hotelcard'
import HotelModal from "@/components/modals/hotelModal"

const index = () => {
  const {hotels, getHotels} = useContext(HotelContext);
     useEffect(() => {
    getHotels();
  }, []);
  return (
    <div>
       <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Hotels</h1>
            <HotelModal/>
      </div>
      {/* {hotels.map((hotel : any) =>{
        console.log("map Hotels", hotel)
        return <HotelCard key={hotel._id} hotel={hotel}/>
})} */}
    </div>
  )
}

export default index
