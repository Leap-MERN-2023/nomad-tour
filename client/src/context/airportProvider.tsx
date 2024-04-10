"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

interface IairPortContext {
  airport: any;
  getairPort: () => void;
  selectedDepartureAirport: string | undefined;
  selectedArrivalAirport: string | undefined;
  setSelectedDepartureAirport: any;
  setSelectedArrivalAirport: any;
  handleDeparture: (e: any) => void;
  handleArrival: (e: any) => void;
}

export const AirPortContext = createContext<IairPortContext>(
  {} as IairPortContext
);

const AirPortProvider = ({ children }: PropsWithChildren) => {
  const [airport, setAirPort] = useState();
  const [selectedDepartureAirport, setSelectedDepartureAirport] =
    useState<string>();
  const handleDeparture = (e: any) => {
    setSelectedDepartureAirport(e.target.value);
    localStorage.setItem("dep", e.target.value);
  };
  const [selectedArrivalAirport, setSelectedArrivalAirport] =
    useState<string>();
  const handleArrival = (e: any) => {
    setSelectedArrivalAirport(e.target.value);
    localStorage.setItem("arri", e.target.value);
  };
  const getairPort = async () => {
    try {
      const { airport } = await axios
        .get("http://localhost:8008/airport")
        .then((res) => res.data);
      setAirPort(airport);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getairPort();
  }, []);
  return (
    <AirPortContext.Provider
      value={{
        airport,
        getairPort,
        selectedArrivalAirport,
        selectedDepartureAirport,
        handleArrival,
        handleDeparture,
        setSelectedArrivalAirport,
        setSelectedDepartureAirport,
      }}
    >
      {children}
    </AirPortContext.Provider>
  );
};

export default AirPortProvider;
