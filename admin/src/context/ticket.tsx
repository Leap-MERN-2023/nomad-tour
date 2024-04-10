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
  createTicket: () => void;
  handleTicketForm: (e: any) => void;
  handleValueForm: (e: any) => void;
  deleteticket: (e: any) => void;
}

export const TicketContext = createContext<ITicket>({} as ITicket);

const TicketProvider = ({ children }: PropsWithChildren) => {
  const [tickets, setTickets] = useState();
  const [loading, setLoading] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [newTickets, setNewTickets] = useState({
    price: {
      MNT: "",
      USD: "",
      CNY: "",
    },
  });

  const getTickets = async () => {
    try {
      const { data } = await axios.get(
        "https://nomad-tour-backend.vercel.app/ticket"
      );
      console.log("ticket", data.tickets);
      setTickets(data.tickets);
    } catch (error) {
      console.log("error", error);
    }
  };
  const createTicket = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        "https://nomad-tour-backend.vercel.app/ticket",
        newTickets
      );
      setrefresh(!refresh);
      console.log("newTicket", data);
    } catch (error: any) {
      console.log("create ticket error", error);
    } finally {
      setLoading(false);
    }
  };
  const handleTicketForm = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTickets({ ...newTickets, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleValueForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTickets({
      ...newTickets,
      price: { ...newTickets.price, [name]: value },
    });
    console.log(e.target.name, e.target.value);
  };
  const deleteticket = async (ticketId: any) => {
    try {
      setLoading(true);
      const data = await axios.delete(
        `https://nomad-tour-backend.vercel.app/ticket/${ticketId}`,
        {}
      );
      setrefresh(!refresh);
      console.log("delete ticket", data);
    } catch (error) {
      console.log("delete error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTickets();
  }, [refresh]);
  return (
    <TicketContext.Provider
      value={{
        getTickets,
        tickets,
        createTicket,
        handleTicketForm,
        deleteticket,
        handleValueForm,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
