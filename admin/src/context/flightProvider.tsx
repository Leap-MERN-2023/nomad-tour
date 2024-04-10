"use client";

import axios from "axios";
import { ChangeEvent, PropsWithChildren, createContext, useEffect, useState } from "react";

interface IFLightContext {
  flights: any;
  getFlights : ()=> void;
  handleFlightForm: (e: any) => void;
  createFlight: () => void;
  deleteFlight: (e:any) => void
}
export const FlightContext = createContext({} as IFLightContext);

const FlightProvider = ({ children }: PropsWithChildren) => {
  const [flights, setFlights] = useState([]);
  const [loading,setLoading]= useState(false);
  const [refresh, setrefresh] = useState(false);
  const [newFlight, setNewFlight] = useState({
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
      setLoading(true)
      const data = await axios.post(
        "http://localhost:8008/flight",
        newFlight
      );
      setrefresh(!refresh)
      console.log("newflight",data)
    } catch (error: any) {
      console.log("create airport error", error);
    }finally{
      setLoading(false)
    }
  };
  const deleteFlight = async (flightId : any) => {
    try {
      setLoading(true)
      const data = await axios.delete(`http://localhost:8008/flight/${flightId}`, {
      })
      setrefresh(!refresh)
      console.log("delete flight",data)
    } catch (error) {
      console.log("flight error", error)
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    getFlights();
  }, [refresh]);
  return (
    <FlightContext.Provider value={{ flights, getFlights, handleFlightForm , createFlight,deleteFlight }}>
      {children}
    </FlightContext.Provider>
  );
};
export default FlightProvider;
