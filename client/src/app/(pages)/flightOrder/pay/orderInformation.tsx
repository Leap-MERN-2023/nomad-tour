"use client";
import { useFlightOrder } from "@/context/FlightOrderProvider";
import React, { useEffect } from "react";

type Props = {};

const OrderInformation = (props: Props) => {
  const { order } = useFlightOrder();
  return (
    <div className="text-zinc-700 md:w-1/2">
      <h1 className="font-semibold ">Order Informations</h1>
      <div className="p-5 shadow-xl rounded-xl bg-white">
        <figure className="flex justify-between mb-3">
          <p>Username</p>
          <p>{order?.orderUser.name}</p>
        </figure>
        <figure className="flex justify-between mb-3">
          <p>Phone number</p>
          <p>{order?.orderUser.phone}</p>
        </figure>
        <figure className="flex justify-between mb-3">
          <p>User email</p>
          <p>{order?.orderUser.email}</p>
        </figure>
        <figure className="flex justify-between mb-3 border-t-[1px] border-dashed border-zinc-500 pt-5">
          <p>Tourist name</p>
          <p>{order?.tourist.name}</p>
        </figure>
        <figure className="flex justify-between mb-3">
          <p>Tourist email</p>
          <p>{order?.tourist.email}</p>
        </figure>
        <figure className="flex justify-between mb-3">
          <p>Passport id</p>
          <p>{order?.tourist.passportId}</p>
        </figure>
        <figure className="flex justify-between border-t-[1px] border-dashed border-zinc-500 pt-5">
          <p>Total Price</p>
          <p>{order?.totalPrice}$</p>
        </figure>
      </div>
    </div>
  );
};

export default OrderInformation;
