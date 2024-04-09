"use client";
import { useTicketContext } from "@/context/ticketProvider";
import { ITicket } from "@/types";
import { dateFormat } from "@/utils/dateFormat";
import React, { useEffect, useState } from "react";

const CardOne = ({ orderTicket }: { orderTicket: ITicket | undefined }) => {
  return (
    <div className=" p-4 flex">
      <div className="mt-4">
        <div className="w-12 h-8 rounded-full ">
          <img
            src="https://media.istockphoto.com/id/1147346714/photo/high-detailed-white-airliner-with-a-red-tail-wing-3d-render-on-a-white-background-airplane.webp?b=1&s=170667a&w=0&k=20&c=hIKu9ctqv2Fh702jZ37n4LTpE360oS42_e3WAfYiphk="
            className="rounded-full"
          ></img>
        </div>
        <hr className="bg-[#0281B0] w-[1.8px] h-52 ml-6"></hr>
      </div>
      <div className="w-full p-2">
        <p className="text-gray-600">
          {orderTicket
            ? dateFormat(orderTicket.flight.departureDate)
            : "Loading ..."}
        </p>
        <div className="bg-white rounded-xl max-w-[350px] p-4 gap-2 flex flex-col lg:w-[500px]">
          <div className=" flex  gap-3 w-72">
            {orderTicket?.flight.airline.logo && (
              <img
                src={orderTicket?.flight.airline.logo}
                className="w-20 h-20 rounded-xl"
              />
            )}

            <div className="flex items-center">
              <div>
                <p className="text-black">
                  {orderTicket
                    ? orderTicket.flight.departureAirportId.name
                    : "Loading..."}
                </p>
                <p className="text-black">
                  {orderTicket
                    ? dateFormat(orderTicket.flight.departureDate)
                    : "Loading ..."}
                </p>
              </div>
              <hr className="w-16"></hr>
              <div>
                <p className="text-black">
                  {orderTicket
                    ? orderTicket.flight.arrivalAirportId.name
                    : "Loading..."}
                </p>
                <p className="text-black">
                  {orderTicket
                    ? dateFormat(orderTicket.flight.arrivalDate)
                    : "Loading ..."}
                </p>
              </div>
            </div>
          </div>
          <p className="text-black ml-4">
            {orderTicket && orderTicket.seatClass} |{" "}
            {orderTicket && orderTicket.flight.airline.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
