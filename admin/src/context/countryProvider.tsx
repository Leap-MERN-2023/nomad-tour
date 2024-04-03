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
  _id: string;
}

interface ICountryContext {
  countries: ICountry[];
  getCountries: any;
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
      // console.log("all Country", allCountry)
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ countries, getCountries }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
