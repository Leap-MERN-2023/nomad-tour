"use client"
import React,{useContext,useEffect} from 'react'
import { CountryContext } from '@/context/countryProvider'
import CountryModal from "@/components/modals/countryModal"

const index = () => {
  const {countries, getCountries} = useContext(CountryContext);
  //   useEffect(() => {
  //   getCountries();
  // }, []);

  return (
    <div className='w-full'>
      <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Countries</h1>
            <CountryModal/>
      </div>
      <div>
      {countries?.map((country : any) => {
        return <div key={country._id} className="flex my-24 items-center w-[70%] justify-between ml-[250px] gap-12 ">
           <td className="w-32">{country.name}</td>
           <td className="w-[900px]">{country.description}</td>
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
