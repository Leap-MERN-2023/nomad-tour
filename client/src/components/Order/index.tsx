"use client";
import axios from "axios";
import React, { useState } from "react";

const HotelOrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    totalPrice: "",
  });
  const [order, setOrder] = useState();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log("NAme Value", name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const createOrder = async (userId: string) => {
    try {
      const {
        data: { orderedRoom },
      } = await axios.post("http://localhost:8008/order/" + userId, formData);
      setOrder(orderedRoom);
    } catch (error) {
      console.log("Err", error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createOrder;
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

  return (
    <div>
      <div className="bg-white rounded-xl p-6 lg:w-[900px]">
        <p className="text-black text-xl font-bold">Hotel Order Page</p>

        <hr className="w-full bg-gray-400 h-[1.5px] my-3" />
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-black">Name:</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl border-[1px] p-2 bg-white w-full lg:h-10 "
            />
          </div>
          <div>
            <p className="text-black">Email </p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl p-2 border-[1px] bg-white w-full lg:h-10 "
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
              className="rounded-xl border-[1px] p-2 bg-white w-full lg:h-10 "
            />
          </div>

          <div>
            <p className="text-black"> Check-out Date:</p>
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              required
              className="rounded-xl border-[1px] p-2 bg-white w-full lg:h-10 "
            />
          </div>
          <div className="border-t border-black font-bold text-xl my-4">
            TotalPrirce:
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-outline font-extrabold ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelOrderPage;
