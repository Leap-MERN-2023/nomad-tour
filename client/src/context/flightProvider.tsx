"use client";

import axios from "axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AirPortContext } from "./airportProvider";
import { IFlight, ITicket } from "@/types";

interface IFLightContext {
  flights: IFlight[];
  getSearchedFlights: () => void;
  foundFlights: IFlight[] | undefined;
  foundTickets: ITicket[];
  refreshSearch: boolean;
  setRefreshSearch: any;
  ticketLoading: boolean;
}
export const FlightContext = createContext({} as IFLightContext);

const FlightProvider = ({ children }: PropsWithChildren) => {
  const [refreshSearch, setRefreshSearch] = useState(false);
  const [ticketLoading, setTicketLoading] = useState(false);
  const [foundFlights, setFoundFlights] = useState();
  const [foundTickets, setFoundTickets] = useState<ITicket[]>([]);
  const { selectedDepartureAirport, selectedArrivalAirport } =
    useContext(AirPortContext);
  const [flights, setFlights] = useState([]);
  const getFlights = async () => {
    try {
      const { data } = await axios.get(
        "https://nomad-tour-backend.vercel.app/flight"
      );
      setFlights(data.allFlights);
    } catch (error) {
      console.log("ERROR IN GET FLIGHTS", error);
    }
  };
  const getSearchedFlights = async () => {
    setTicketLoading(true);
    try {
      setFoundTickets([]);
      const { data } = await axios.post(
        "https://nomad-tour-backend.vercel.app/flight/search",
        {
          depId: selectedDepartureAirport,
          arrId: selectedArrivalAirport,
        }
      );
      if (data.foundFlights.length === 0) {
        setFoundTickets([]);
        setTicketLoading(false);
      } else {
        console.log("FOUND FLIGHTS", data.foundFlights);
        setFoundFlights(data.foundFlights);
        data.foundFlights.map((flight: IFlight) => {
          getSearchedTickets(flight._id);
        });
      }
    } catch (error) {
      console.log("ERROR IN GET SEARCHED FLIGHTS");
    } finally {
      setTicketLoading(false);
    }
  };
  const getSearchedTickets = async (flightId: string) => {
    try {
      const { data } = await axios.get(
        `https://nomad-tour-backend.vercel.app/ticket/${flightId}`
      );
      console.log("FOUND TICKET!", data.searchedTickets);
      data.searchedTickets.map((ticket: ITicket) => {
        setFoundTickets((foundTickets) => [...foundTickets, ticket]);
      });

      setTicketLoading(false);
    } catch (error) {
      console.log("FAILED TO SEARCH TICKETS", error);
    }
  };
  return (
    <FlightContext.Provider
      value={{
        flights,
        getSearchedFlights,
        foundFlights,
        foundTickets,
        setRefreshSearch,
        refreshSearch,
        ticketLoading,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};
export default FlightProvider;

export const useFlightsContext = () => {
  const context = useContext(FlightContext);
  return context;
};
