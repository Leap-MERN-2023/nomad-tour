"use client"
import React from 'react'
import Slider from './slider';

const index = () => {
  return (
    <div className="bg-white rounded-3xl min-[280px]:w-64 sm:w-72 md:w-72 lg:w-80 xl:w-96 2xl:w-96">
        <figure className='min[280px]:w-64 sm:w-72 md:w-72 lg:w-80 xl:w-96 2xl:96'>
            <Slider/>
        </figure>
         <div className="card-body">
           <p className='flex items-center gap-1'><img src='calendar.png'/> Febraury 20,2024</p>
           <h2 className="card-title">Delicious restaurant at Hanalei Bay</h2>
           <p className='text-justify '>Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...</p>
           <div className="card-actions items-center ml-[-16px]">
             <button className="btn btn-ghost text-blue-800">
             <img src='arrow1.png' className='border-2 border-blue-700 rounded-full p-1 m-[]'/>
                see more
             </button>
           </div>
        </div>
    </div>
  )
}

export default index;
