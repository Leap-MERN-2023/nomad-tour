"use client";

import axios from "axios";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface IFLightContext {
  flights: any;
}
export const FlightContext = createContext({} as IFLightContext);

const FlightProvider = ({ children }: PropsWithChildren) => {
  const [flights, setFlights] = useState([]);
  const getFlights = async () => {
    try {
      const { data } = await axios.get("http://localhost:8008/flight");
      console.log("FLIGHT DATA", data);
      setFlights(data.allFlights);
    } catch (error) {
      console.log("ERROR IN GET FLIGHTS", error);
    }
  };
  useEffect(() => {
    getFlights();
  }, []);
  return (
    <FlightContext.Provider value={{ flights }}>
      {children}
    </FlightContext.Provider>
  );
};
export default FlightProvider;
