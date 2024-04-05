import { FlightContext } from "@/context/flightProvider";
import { IFlight } from "@/types";
import React, { useContext } from "react";
import { MdFlight } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { useTicketContext } from "@/context/ticketProvider";
import { dateFormat, flightTimeCalculator } from "@/utils/dateFormat";
import { priceCalculator } from "@/utils/priceCalc";

type Props = {};

const FlightInfo = (props: Props) => {
  const { tickets } = useTicketContext();
  console.log("FLIGHT DATA", tickets);
  return (
    <div className="xl:w-2/3 flex flex-col items-center">
      <button className="btn w-full mt-5 btn-outline xl:hidden">
        <IoFilterOutline /> Filter
      </button>
      {tickets?.map((ticket: any) => {
        return (
          <div
            key={ticket._id}
            className="w-full shadow-lg bg-slate-100 rounded-xl mt-8"
          >
            <div className="p-5">
              <div className="flex items-center gap-2">
                <img
                  className="w-12 h-12"
                  src={ticket.flight.airline.logo}
                  alt="logo"
                />
                <h1 className="text-3xl font-medium text-black">
                  {ticket.flight.airline.name}
                </h1>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between items-center my-7">
                <div>
                  <h2 className="text-2xl">
                    {ticket.flight.departureAirportId.name}
                  </h2>
                  <p>Departure date </p>{" "}
                  <span className="font-medium font-mono">
                    {dateFormat(ticket.flight.departureDate)}
                  </span>
                </div>

                <div>
                  <div className="w-10 h-10 text-blue-400 flex justify-center items-center border-2 rounded-full border-blue-400 rotate-180 md:rotate-90">
                    <MdFlight size={30} />
                  </div>
                  <p>
                    {flightTimeCalculator(
                      ticket.flight.departureDate,
                      ticket?.flight.arrivalDate
                    )}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl">
                    {ticket.flight.arrivalAirportId.name}
                  </h2>
                  <p>Arrival date </p>
                  <span className="font-medium font-mono">
                    {dateFormat(ticket?.flight.arrivalDate)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-slate-200 p-5">
              <div>
                <h3>Seat class: {ticket.seatClass}</h3>
                <p>
                  Price:{" "}
                  {priceCalculator(
                    ticket.flight.departureDate,
                    ticket.price.USD
                  )}
                  $
                </p>
              </div>
              <button className="btn bg-[#0281B0] text-white border-0">
                Check out
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlightInfo;
