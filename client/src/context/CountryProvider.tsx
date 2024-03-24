"use client";

import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

interface ICountry {
  country: string;
  name: string;
  description: string;
  images: string;
}

interface ICountryContext {
  countries: ICountry[];
}

export const CountryContext = createContext<ICountryContext>(
  {} as ICountryContext
);

const CountryProvider = ({ children }: PropsWithChildren) => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  const getCountries = async () => {
    try {
      const {
        data: { allCountry },
      } = await axios.get("http://localhost:8008/country");
      setCountries(allCountry);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  const [hotels, setHotels] = useState([]);
  const [ref, setRef] = useState(false);

  const getHotels = async () => {
    console.log("Working");
    try {
      const {
        data: { filteredHotels },
      } = await axios.get(
        "http://localhost:8008/hotel/" + "65f9aca67a1a0f2424ab74c6"
      );
      console.log("Hotels", filteredHotels);
      setHotels(filteredHotels);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getCountries();
    getHotels();
  }, []);

  return (
    <CountryContext.Provider value={{ countries }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
