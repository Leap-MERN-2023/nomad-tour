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
import { IFlight } from "@/types";

interface IFLightContext {
  flights: IFlight[];
  getSearchedFlights: () => void;
  foundFlights: IFlight[] | undefined;
}
export const FlightContext = createContext({} as IFLightContext);

const FlightProvider = ({ children }: PropsWithChildren) => {
  const [foundFlights, setFoundFlights] = useState();
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
    } catch (error) {
      console.log("ERROR IN GET SEARCHED FLIGHTS");
    }
  };
  return (
    <FlightContext.Provider
      value={{ flights, getSearchedFlights, foundFlights }}
    >
      {children}
    </FlightContext.Provider>
  );
};
export default FlightProvider;
