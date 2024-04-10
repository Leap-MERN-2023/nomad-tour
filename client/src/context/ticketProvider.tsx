"use client";
import { ITicket } from "@/types";
import axios from "axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ITicketContext {
  tickets: ITicket[] | undefined;
  getTickets: () => void;
}

export const ticketContext = createContext({} as ITicketContext);
const TicketProvider = ({ children }: PropsWithChildren) => {
  const [tickets, setTickets] = useState<ITicket[]>();
  const getTickets = async () => {
    try {
      const { data } = await axios.get(
        "https://nomad-tour-backend.vercel.app/ticket"
      );
      setTickets(data.tickets);
    } catch (error) {}
  };
  return (
    <ticketContext.Provider value={{ tickets, getTickets }}>
      {children}
    </ticketContext.Provider>
  );
};

export default TicketProvider;

export const useTicketContext = () => {
  const context = useContext(ticketContext);
  return context;
};
