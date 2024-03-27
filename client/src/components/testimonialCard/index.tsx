import React from 'react'

const index = () => {
  return (
    <div className="flex justify-center m-12 relative p-2 min-[320px]:w-72 md:w-72 lg:w-80 xl:w-96 2xl:w-96">
        <div className="avatar absolute min-[320px]:left-24 md:left-24 lg:left-12 xl:left-12 2xl:left-12">
            <div className=" w-24 rounded-full">
                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
    <div className='border-2 border-white rounded-2xl mt-14 bg-white'>   
    <div className="flex mx-6 justify-between mt-12 min-[320px]:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className='flex flex-col justify-center items-center'>
            <h2 className="text-2xl font-bold">Sebastian</h2>
            <h2 className="text-sl">Graphic Design</h2> 
        </div>
        <div className="rating mt-1.5 min-[320px]:justify-center">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
    </div>
    <div className="card-actions justify-center m-6">
          <p className='min-[320px]:text-justify'>If a dog chews shoes whose shoes does he choose?
          If a dog chews shoes whose shoes does he choose?
          If a dog chews shoes whose shoes does he choose?
          If a dog chews shoes whose shoes does he choose?
          </p>
    </div>
   </div>  
  </div>
  )
}

export default index;

