import React from 'react'
import { carouselImages } from '@/constants';

const index = () => {
  return (
    <div className="flex justify-center relative min-[280px]:w-full sm:w-full md:full lg:w-full xl:w-full 2xl:w-full">
        <div className="avatar absolute min-[280px]:left-22 md:left-18 lg:left-10 xl:left-20 2xl:left-8">
            <div className="rounded-full min-[280px]:w-16 sm:w-16 md:w-16 lg:w-18 xl:w-18 2xl:w-20">
                 <img className='w-full h-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
    <div className='border-2 border-white rounded-2xl bg-white min-[280px]:w-full mt-8 md:w-full lg:mt-9 w-full xl:w-full 2xl:w-full'>   
    <div className="flex mx-6 justify-between mt-12 min-[280px]:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row">
        <div className='flex flex-col justify-center items-center'>
            <h2 className="font-bold min-[280px]:text-lg lg:text-lg xl:text-[16px] 2xl:text-xl">Sebastian</h2>
            <h2 className="min-[280px]:text-sm lg:text-[9px] xl:text-[8px] 2xl:text-sm">Graphic Design</h2> 
        </div>
        <div className="rating mt-1.5 m-auto justify-center w-2/4">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
    </div>
    <div className="card-actions tify-center m-6">
          <p className='min-[320px]:text-justify'>If a dog chews shoes whose shoes does he choose?
          If a dog chews shoes whose jusshoes does he choose?
          </p>
    </div>
   </div>  
  </div>
  )
}

export default index;

