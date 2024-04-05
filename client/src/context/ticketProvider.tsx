"use client";
import axios from "axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ITicketContext {
  tickets: any;
}

export const ticketContext = createContext({} as ITicketContext);
const TicketProvider = ({ children }: PropsWithChildren) => {
  const [tickets, setTickets] = useState();
  const getTickets = async () => {
    try {
      const { data } = await axios.get("http://localhost:8008/tickets");
      setTickets(data.tickets);
    } catch (error) {}
  };
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <ticketContext.Provider value={{ tickets }}>
      {children}
    </ticketContext.Provider>
  );
};
export default TicketProvider;

export const useTicketContext = () => {
  const context = useContext(ticketContext);
  return context;
};
