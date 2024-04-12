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
import { toast } from "react-toastify";

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
        "http://localhost:8008/airlines"
      );
      // console.log("airlines",data.airline);
      setAirlines(data.airline);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  const deleteAirline = async (airlineId: any) => {
    setLoading(true);
    try {
      const data = await axios.delete(
        `http://localhost:8008/airlines/${airlineId}`,
        {}
      );
      console.log("delete airline", data);
      setRefresh(!refresh);
      setNewAirline({ logo: "",
      name: "",})
      toast.success("complete delete airline")
    } catch (error) {
      toast.error("delete denied")
      console.log("delete airline error", error);
    } finally {
      setLoading(false);
    }
  };

  const createAirline = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        "http://localhost:8008/airlines",
        newAirline
      );
      console.log("newAirline", data);
      setRefresh(!refresh);
      toast.success("complete new airline")
    } catch (error: any) {
      toast.error("no success")
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
