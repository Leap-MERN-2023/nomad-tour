import React from "react";

export const EmailSection = () => {
  return (
    <div className="bg-white h-[800px] flex flex-col items-center justify-center ">
      <div className="card lg:card-side shadow-xl h-[400px] w-[60%] bg-gray-200 ">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1617408702027-0641b4d8e148?q=80&w=3124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[500px] h-full "
          />
        </figure>
        <figure>
          <img src="" />
        </figure>
        <div className="card-body flex justify-center gap-14">
          <div className="flex flex-col items-center">
            <h2 className="text-black md:text-2xl md:font-bold text-lg font-bold">
              Get special offers,
            </h2>
            <h2 className="text-black md:text-2xl md:font-bold text-lg font-bold">
              and more from travelworld
            </h2>
          </div>
          <div
            //  className="bg-white rounded-full md:p-3 md:w-full md:flex md:rounded-full"
            className="bg-white rounded-xl h-26 flex flex-col md:rounded-full md:w-full md:flex md:flex-row"
          >
            <input
              className="bg-white w-full p-3 outline-none text-black rounded-full"
              placeholder="Enter your email"
            />
            <button className="rounded-full bg-[#0281B0] text-white font-medium hover:bg-blue-500 p-2 w-15 md:w-20 lg:w-36">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
