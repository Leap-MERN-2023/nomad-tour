"use client";
import axios from "axios";
import React, { PropsWithChildren, createContext, useEffect, useState } from "react";

interface IairPortContext {
    airport: any;
    getairPort : () => void;
}

export const AirPortContext = createContext<IairPortContext>({} as IairPortContext  );

const AirPortProvider = ({children}: PropsWithChildren) => {
    const [airport,setAirPort]= useState()

    const getairPort = async () => {
      try {
        const { airport } = await axios
          .get("http://localhost:8008/airport")
          .then((res) => res.data);
        setAirPort(airport);
        console.log("AirportProvider",airport)
      } catch (error) {console.log("error" ,error)}
    };
    useEffect(
      () =>{ getairPort()} ,[]
    )
  return (
    <AirPortContext.Provider value={{ airport, getairPort}}>
      {children}
    </AirPortContext.Provider>
  )
}

export default AirPortProvider;