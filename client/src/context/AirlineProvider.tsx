"use client";
import { IAirline } from "@/types";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAirlineContext {
  airlines: IAirline[] | undefined;
  getAirlines: () => void;
}

export const AirlineContext = createContext({} as IAirlineContext);

const AirlineProvider = ({ children }: PropsWithChildren) => {
  const [airlines, setAirlines] = useState<IAirline[]>();
  const getAirlines = async () => {
    try {
      const { data } = await axios.get(
        "https://nomad-tour-backend.vercel.app/airlines"
      );
      setAirlines(data.airline);
    } catch (error) {
      console.log("error in get airlines", error);
    }
  };
  return (
    <AirlineContext.Provider value={{ airlines, getAirlines }}>
      {children}
    </AirlineContext.Provider>
  );
};

export default AirlineProvider;

export const useAirlineContext = () => {
  const context = useContext(AirlineContext);
  return context;
};
