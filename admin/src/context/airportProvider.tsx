"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
  ChangeEvent,
} from "react";
import { toast } from "react-toastify";

interface IairPortContext {
  airports: any;
  getAllairPort: () => void;
  createAirport: () => void;
  handleAirportForm: (e: any) => void;
  deleteAirport: (e: any) => void;
  newAirport: {
    name: string;
  };
}

export const AirPortContext = createContext<IairPortContext>(
  {} as IairPortContext
);

const AirPortProvider = ({ children }: PropsWithChildren) => {
  const [airports, setAirPorts] = useState();
  const [loading, setLoading] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [newAirport, setNewAirport] = useState({
    country: "",
    name: "",
  });

  const getAllairPort = async () => {
    try {
      const { airport } = await axios
        .get("https://nomad-tour-backend.vercel.app/airport")
        .then((res) => res.data);
      // console.log("airport", airport);
      setAirPorts(airport);
      // toast.success("airport add complete")
    } catch (error) {
      console.log("error", error);
      toast.error("airport denied")
    }
  };
  useEffect(() => {
    getAllairPort();
  }, [refresh]);

  const handleAirportForm = (e: ChangeEvent<HTMLInputElement>) => {
    setNewAirport({ ...newAirport, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const createAirport = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.set("name", newAirport.name);
      const data = await axios.post(
        "https://nomad-tour-backend.vercel.app/airport",
        newAirport
      );
      setrefresh(!refresh);
      toast.success("airport add complete")
      setNewAirport({country: "",
      name: "",})
    } catch (error: any) {
      toast.error("airport denied")
      console.log("create airport error", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAirport = async (airportId: any) => {
    try {
      setLoading(true);
      const data = await axios.delete(
        `https://nomad-tour-backend.vercel.app/airport/${airportId}`,
        {}
      );
      console.log("delete", data);
      setrefresh(!refresh);
      toast.success("airport delete complete")
    } catch (error) {
      toast.error("airport denied")
      console.log("delete error", error);
    } finally {
      setLoading(false);
    }
  };
  const updateAirport = async (airportId: any) => {
    try {
      setLoading(true);
      const data = await axios.put(
        `https://nomad-tour-backend.vercel.app/airport/${airportId}`,
        {}
      );
      console.log("put", data);
      setrefresh(!refresh);
      toast.success("airport put complete")
    } catch (error) {
      toast.error("airport denied")
      console.log("delete error", error);
    } finally {
      setLoading(false);
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
        deleteAirport,
      }}
    >
      {children}
    </AirPortContext.Provider>
  );
};

export default AirPortProvider;
