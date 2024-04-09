"use client"
import React, { useState } from "react";

const HotelOrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfRooms: 1,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="pt-20">

      <div className="bg-white rounded-xl p-6 lg:w-[900px]">
        <p className="text-black text-xl font-bold">Hotel Order Page</p>
     
        <hr className="w-full bg-gray-400 h-[1.5px] my-3" />
        <div className="p-3 flex flex-col gap-1">
          <div className="gap-1 lg:flex lg:justify-between">
         
            <div>
              <p className="text-black"> Email:</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-xl border-[1px] p-2 bg-white w-full lg:h-10 lg:w-[250px]"
              />
            </div>
            <div>
              <p className="text-black">Hotel name:</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-xl p-2 border-[1px] bg-white w-full lg:h-10 lg:w-[250px]"
              />
            </div>
            <div>
              <p className="text-black">Name&Number of Room:</p>
              <input
                type="number"
                name="numberOfRooms"
                value={formData.numberOfRooms}
                onChange={handleChange}
                min="1"
                required
                className="rounded-xl border-[1px] p-2 bg-white w-full lg:h-10 lg:w-[400px]"
              />
            </div>
            <div>
              <p className="text-black">Check-in Date:</p>
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                required
                className="rounded-xl border-[1px] p-2 bg-white w-full lg:h-10 lg:w-[250px]"
              />
            </div>
          </div>

          <div className="lg:flex lg:justify-between">
            <div>
              <p className="text-black"> Check-out Date:</p>
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                required
                className="rounded-xl border-[1px] p-2 bg-white w-full lg:h-10 lg:w-[400px]"
              />
            </div>
         
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-outline font-extrabold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelOrderPage;
