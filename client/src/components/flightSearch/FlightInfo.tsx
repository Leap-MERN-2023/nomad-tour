import React, { useContext } from "react";

import { IoFilterOutline } from "react-icons/io5";

import { useFlightsContext } from "@/context/flightProvider";
import TicketSkeleton from "./TicketSkeleton";
import NotFoundFlight from "./NotFoundFlight";
import { useRouter } from "next/navigation";
import TicketCard from "./TicketCard";

type Props = {};

const FlightInfo = (props: Props) => {
  const { foundTickets, ticketLoading } = useFlightsContext();
  return (
    <div className="xl:w-2/3 flex flex-col items-center">
      <button className="btn w-full mt-5 btn-outline xl:hidden">
        <IoFilterOutline /> Filter
      </button>
      {ticketLoading ? (
        <div className="w-full">
          <TicketSkeleton />
          <TicketSkeleton />
          <TicketSkeleton />
        </div>
      ) : foundTickets ? (
        foundTickets?.map((ticket: any) => {
          return <TicketCard key={ticket?._id} ticket={ticket} />;
        })
      ) : (
        <NotFoundFlight />
      )}
    </div>
  );
};

export default FlightInfo;
