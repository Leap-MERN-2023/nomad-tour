"use client";

import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";



interface ITicket {
  getTickets: () => void;
  tickets: any;
}

export const TicketContext = createContext<ITicket>(
  {} as ITicket
);

const TicketProvider = ({ children }: PropsWithChildren) => {
   const [tickets, setTickets] = useState()

  const getTickets = async () => {
    try {
      const {data}  = await axios
        .get("http://localhost:8008/ticket")
      console.log("ticket",data.tickets);
      setTickets(data.tickets);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <TicketContext.Provider value={{ getTickets,tickets}}>
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;