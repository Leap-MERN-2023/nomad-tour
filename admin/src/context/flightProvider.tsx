"use client";

import axios from "axios";
import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface IFLightContext {
  flights: any;
  getFlights: () => void;
  handleFlightForm: (e: any) => void;
  createFlight: () => void;
  deleteFlight: (e: any) => void;
}
export const FlightContext = createContext({} as IFLightContext);

const FlightProvider = ({ children }: PropsWithChildren) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [newFlight, setNewFlight] = useState({});

  const getFlights = async () => {
    try {
      const { data } = await axios.get(
        "https://nomad-tour-backend.vercel.app/flight"
      );
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
      setLoading(true);
      const data = await axios.post(
        "https://nomad-tour-backend.vercel.app/flight",
        newFlight
      );
      setrefresh(!refresh);
      toast.success("create complete flight")
      console.log("newflight", data);
    } catch (error: any) {
      toast.error("create flignt denied")
      console.log("create airport error", error);
    } finally {
      setLoading(false);
    }
  };
  const deleteFlight = async (flightId: any) => {
    try {
      setLoading(true);
      const data = await axios.delete(
        `https://nomad-tour-backend.vercel.app/flight/${flightId}`,
        {}
      );
      setrefresh(!refresh);
      toast.success("flight delete complete")
      console.log("delete flight", data);
    } catch (error) {
      toast.error("flight delete denied")
      console.log("flight error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFlights();
  }, [refresh]);
  return (
    <FlightContext.Provider
      value={{
        flights,
        getFlights,
        handleFlightForm,
        createFlight,
        deleteFlight,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};
export default FlightProvider;
