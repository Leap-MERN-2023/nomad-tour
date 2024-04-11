"use client";
import { useFlightOrder } from "@/context/FlightOrderProvider";
import React, { useContext, useEffect } from "react";
import { myAlertFire } from "@/utils/myAlert";
import { useRouter } from "next/navigation";
import { RoomContext } from "@/context/RoomProvider";
import { HotelContext } from "@/context/hotelProvider";

type Props = {};


const OrderInfo = (props: Props) => {
    const {hotel} = useContext(HotelContext)
    const {getRoomByHotelId} = useContext(RoomContext)
    const router =useRouter()
    // const handleGetRoom = () => {
    //     getRoomByHotelId(hotel?._id as string);
       
    //   };
  const { order } = useFlightOrder();
  return (
    <div className="text-zinc-700 md:w-1/2">
      <h1 className="font-semibold ">Order Informations</h1>
      <div className="p-5 shadow-xl rounded-xl bg-white">
        <figure className="flex justify-between mb-3">
          <p>Hotel name</p>
          <p>{order?.orderUser.name}</p>
        </figure>
        <figure className="flex justify-between mb-3">
          <p>Hotel address</p>
          <p>{order?.orderUser.phone}</p>
        </figure>
        <figure className="flex justify-between mb-3">
          <p>Room name</p>
          <p>{order?.orderUser.email}</p>
        </figure>       
        <figure className="flex justify-between border-t-[1px] border-dashed border-zinc-500 pt-5">
          <p>Total Price</p>
          <p>{order?.totalPrice}$</p>
        </figure>
   
      </div>
      <button
        onClick={() => {
          myAlertFire("Room confirmed, success", "success");
          
        }}
        className="btn w-full bg-blue-400 border-0 text-white text-xl my-5 hover:bg-blue-500"
      >
        Confirm
      </button>
    </div>
  );
};

export default OrderInfo;
