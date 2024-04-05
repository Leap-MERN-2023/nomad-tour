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
  _id: string;
  country: string;
  name: string;
  description: string;
  images: string;
}

interface ICountryContext {
  countries: ICountry[];
  handleSelectCountry: (e: any) => void;
  selectedCountry: string | undefined;
}

export const CountryContext = createContext<ICountryContext>(
  {} as ICountryContext
);

const CountryProvider = ({ children }: PropsWithChildren) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const handleSelectCountry = (e: any) => {
    console.log("SELECTED COUNTRY ID", e.target.value);
    setSelectedCountry(e.target.value);
  };

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

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{ countries, handleSelectCountry, selectedCountry }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
