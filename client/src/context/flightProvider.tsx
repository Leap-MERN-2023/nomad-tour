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
  foundTickets: ITicket[] | undefined;
}
export const FlightContext = createContext({} as IFLightContext);

const FlightProvider = ({ children }: PropsWithChildren) => {
  const [foundFlights, setFoundFlights] = useState();
  const [foundTickets, setFoundTickets] = useState();
  const { selectedDepartureAirport, selectedArrivalAirport } =
    useContext(AirPortContext);
  const [flights, setFlights] = useState([]);
  const getFlights = async () => {
    try {
      const { data } = await axios.get("http://localhost:8008/flight");
      setFlights(data.allFlights);
    } catch (error) {
      console.log("ERROR IN GET FLIGHTS", error);
    }
  };
  const getSearchedFlights = async () => {
    try {
      const { data } = await axios.post("http://localhost:8008/flight/search", {
        depId: selectedDepartureAirport,
        arrId: selectedArrivalAirport,
      });
      setFoundFlights(data.foundFlights);
      data.foundFlights.map((flight: IFlight) => {
        getSearchedTickets(flight._id);
      });
    } catch (error) {
      console.log("ERROR IN GET SEARCHED FLIGHTS");
    }
  };
  const getSearchedTickets = async (flightId: string) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8008/tickets/${flightId}`
      );
      setFoundTickets(data.searchedTickets);
    } catch (error) {
      console.log("FAILED TO SEARCH TICKETS");
    }
  };
  return (
    <FlightContext.Provider
      value={{ flights, getSearchedFlights, foundFlights, foundTickets }}
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
