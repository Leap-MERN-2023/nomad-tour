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
  airlines : any;
  deleteAirline: (e: any) => void;
  createAirline: () => void;
  handleAirlineForm:(e:any) => void;
  addImage: (images: string) => void;
}

export const AirlinesContext = createContext<IAirlinesContext>({} as IAirlinesContext);

const AirlinesProvider = ({ children }: PropsWithChildren) => {
  const [airlines,setAirlines] = useState()
  const [newAirline,setNewAirline] = useState<any>({
    logo: "",
    name: "",
    })

  const getAirlines = async () => {
    // console.log("Working airlines");
    try {
      const {data}  = await axios
        .get("http://localhost:8008/airlines")
      // console.log("airlines",data.airline);
      setAirlines(data.airline);
    } catch (error) {
      console.log("error", error);
    }
  };
  const deleteAirline = async (airlinetId : any) => {
    try {
      const data = await axios.delete(`http://localhost:8008/airport/${airlinetId}`, {
      })
      console.log("delete airline",data)
    } catch (error) {
      console.log("delete airline error", error)
    }
  };
  const createAirline = async () => {
    try {
        const data = await axios.post(
        "http://localhost:8008/Airlines",
        newAirline
      );
      console.log("newAirline",data)
    }
     catch (error: any) {
      console.log("create airport error", error);
    }
  };
  const handleAirlineForm = (e: ChangeEvent<HTMLInputElement>) => {
    setNewAirline({ ...newAirline, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const addImage = (imgUrl: string) => {
    setNewAirline((oldAirline : any) => ({...oldAirline, logo: [...oldAirline.logo , imgUrl]}))
  }
  useEffect(() => {
    getAirlines();
  }, []);
    
  return (
    <AirlinesContext.Provider value={{handleAirlineForm,getAirlines,airlines,deleteAirline,createAirline,addImage}}>
      {children}
    </AirlinesContext.Provider>
  );
};

export default AirlinesProvider;