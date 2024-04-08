"use client";
import React from "react";



const CardOne = () => {
  return (
    <div className=" p-4 flex">
      <div className="mt-4">
        <div className="w-12 h-8 rounded-full ">
          <img
            src="https://media.istockphoto.com/id/1147346714/photo/high-detailed-white-airliner-with-a-red-tail-wing-3d-render-on-a-white-background-airplane.webp?b=1&s=170667a&w=0&k=20&c=hIKu9ctqv2Fh702jZ37n4LTpE360oS42_e3WAfYiphk="
            className="rounded-full"></img>
        </div>
        <hr className="bg-[#0281B0] w-[1.8px] h-52 ml-6"></hr>
      </div>
      <div className="w-full p-2">
        <p className="text-gray-600">2024-05-05 18:15</p>
        <div className="flex ">
          <p className="text-black">Flight from UBN Airport </p>
          <p className="text-black">to HAN</p>
        </div>
        <div className="bg-white rounded-xl w-72 p-4 gap-2 flex flex-col lg:w-[500px]">
          <div className=" flex  gap-3 w-72">
            <img
              src="https://images.unsplash.com/photo-1517429128955-67ff5c1e29da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bm9tYWRlJTIwdG91ciUyMGljb24lMjBwbGFuZXxlbnwwfHwwfHx8MA%3D%3D"
              className="w-20 h-20 rounded-xl"></img>
            <div className="flex items-center">
              <div>
                <p className="text-black">UBN</p>
                <p className="text-black">18:50</p>
              </div>
              <hr className="w-16"></hr>
              <div>
                <p className="text-black">TPE</p>
                <p className="text-black">20:30</p>
              </div>
            </div>
          </div>
          <p className="text-black ml-4">Normal | Nomad-tour airlines</p>
          <button className="w-full bg-[#0281B0] rounded-lg p-1 text-black ">Detail</button>
        </div>
      </div>

    </div>
  );
};


export default CardOne;



