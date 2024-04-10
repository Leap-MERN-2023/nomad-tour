"use client";

import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

interface IAirlinesContext {
  getAirlines: () => void;
  airlines: any;
  deleteAirline: (e: any) => void;
  createAirline: () => void;
  handleAirlineForm: (e: any) => void;
  addImage: (images: string) => void;
  loading: boolean;
}

export const AirlinesContext = createContext<IAirlinesContext>(
  {} as IAirlinesContext
);

const AirlinesProvider = ({ children }: PropsWithChildren) => {
  const [airlines, setAirlines] = useState();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [newAirline, setNewAirline] = useState<any>({
    logo: "",
    name: "",
  });

  const getAirlines = async () => {
    // console.log("Working airlines");
    try {
      const { data } = await axios.get(
        "https://nomad-tour-backend.vercel.app/airlines"
      );
      // console.log("airlines",data.airline);
      setAirlines(data.airline);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  const deleteAirline = async (airlinetId: any) => {
    setLoading(true);
    try {
      const data = await axios.delete(
        `https://nomad-tour-backend.vercel.app/airport/${airlinetId}`,
        {}
      );
      console.log("delete airline", data);
      setRefresh(!refresh);
    } catch (error) {
      console.log("delete airline error", error);
    } finally {
      setLoading(false);
    }
  };

  const createAirline = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        "https://nomad-tour-backend.vercel.app/Airlines",
        newAirline
      );
      console.log("newAirline", data);
      setRefresh(!refresh);
    } catch (error: any) {
      console.log("create airport error", error);
    } finally {
      setLoading(false);
    }
  };
  const handleAirlineForm = (e: ChangeEvent<HTMLInputElement>) => {
    setNewAirline({ ...newAirline, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const addImage = (imgUrl: string) => {
    setNewAirline((oldAirline: any) => ({
      ...oldAirline,
      logo: [...oldAirline.logo, imgUrl],
    }));
  };
  useEffect(() => {
    getAirlines();
  }, [refresh]);

  return (
    <AirlinesContext.Provider
      value={{
        handleAirlineForm,
        getAirlines,
        airlines,
        deleteAirline,
        createAirline,
        addImage,
        loading,
      }}
    >
      {children}
    </AirlinesContext.Provider>
  );
};

export default AirlinesProvider;
