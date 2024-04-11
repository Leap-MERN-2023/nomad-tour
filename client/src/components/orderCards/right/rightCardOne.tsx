"use client";
import React, { useEffect, useState } from "react";
import CardOne from "./cardOne";
import CardSecond from "./cardSecond";
import CardThird from "./cardThird";
import { useTicketContext } from "@/context/ticketProvider";
import { ITicket } from "@/types";
import { useFlightOrder } from "@/context/FlightOrderProvider";
import { priceCalculator } from "@/utils/priceCalc";

const RightCardOne = ({ id, formik }: { id: string; formik: any }) => {
  const [orderTicket, setOrderTicket] = useState<ITicket | undefined>();
  const { tickets, getTickets } = useTicketContext();
  const { setFlightForm, flightForm } = useFlightOrder();
  useEffect(() => {
    getTickets();
  }, []);
  useEffect(() => {
    if (tickets) {
      setOrderTicket(tickets.filter((ticket) => ticket._id == id)[0]);
    }
  }, [tickets]);
  useEffect(() => {
    if (orderTicket) {
      setFlightForm({
        ...flightForm,
        totalPrice: priceCalculator(
          orderTicket.flight.departureDate,
          orderTicket.price.USD
        ),
        ticket: id,
      });
    }
  }, [orderTicket]);
  return (
    <div className="bg-gray-200 w-full p-4 lg:w-[600px] lg:flex lg:flex-col items-center lg:my-24 lg:gap-8">
      <CardOne orderTicket={orderTicket} />
      <CardThird orderTicket={orderTicket} formik={formik} />
    </div>
  );
};

export default RightCardOne;
