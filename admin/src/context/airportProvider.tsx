"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
  ChangeEvent,
} from "react";

interface IairPortContext {
  airports: any;
  getAllairPort: () => void;
  createAirport: () => void;
  handleAirportForm: (e: any) => void;
  newAirport: {
    name: string;
  };
}

export const AirPortContext = createContext<IairPortContext>(
  {} as IairPortContext
);

const AirPortProvider = ({ children }: PropsWithChildren) => {
  const [airports, setAirPorts] = useState();
  const [newAirport, setNewAirport] = useState({
    country: "",
    name: "",
  });

  const getAllairPort = async () => {
    try {
      const { airport } = await axios
        .get("http://localhost:8008/airport")
        .then((res) => res.data);
      console.log("airport", airport);
      setAirPorts(airport);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getAllairPort();
  }, []);

  const handleAirportForm = (e: ChangeEvent<HTMLInputElement>) => {
    setNewAirport({ ...newAirport, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const createAirport = async () => {
    try {
      const formData = new FormData();
      formData.set("name", newAirport.name);
      const data = await axios.post(
        "http://localhost:8008/airport",
        newAirport
      );
    } catch (error: any) {
      console.log("create airport error", error);
    }
  };

  return (
    <AirPortContext.Provider
      value={{
        getAllairPort,
        airports,
        createAirport,
        handleAirportForm,
        newAirport,
      }}
    >
      {children}
    </AirPortContext.Provider>
  );
};

export default AirPortProvider;
