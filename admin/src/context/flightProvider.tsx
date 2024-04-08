"use client";

import axios from "axios";
import { ChangeEvent, PropsWithChildren, createContext, useEffect, useState } from "react";

interface IFLightContext {
  flights: any;
  getFlights : ()=> void;
  handleFlightForm: (e: any) => void;
  createFlight: () => void;
}
export const FlightContext = createContext({} as IFLightContext);

const FlightProvider = ({ children }: PropsWithChildren) => {
  const [flights, setFlights] = useState([]);
  const [newFlight, setNewFlight] = useState({
    country: "",
    airline:"",
    departureAirport:"",
    arrivalAirport:"",
    Seats:"",
    departureDate:"",
    arrivalDate:"",
  })

  const getFlights = async () => {
    try {
      const { data } = await axios.get("http://localhost:8008/flight");
      // console.log("FLIGHT DATA", data);
      setFlights(data.allFlights);
    } catch (error) {
      console.log("ERROR IN GET FLIGHTS", error);
    }
  };
  const handleFlightForm = (e: ChangeEvent<HTMLInputElement>) => {
    setNewFlight({ ...newFlight, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const createFlight = async () => {
    try {
      const data = await axios.post(
        "http://localhost:8008/flight",
        newFlight
      );
      console.log("newflight",data)
    } catch (error: any) {
      console.log("create airport error", error);
    }
  };
  useEffect(() => {
    getFlights();
  }, []);
  return (
    <FlightContext.Provider value={{ flights, getFlights, handleFlightForm , createFlight }}>
      {children}
    </FlightContext.Provider>
  );
};
export default FlightProvider;
