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
<<<<<<< Updated upstream:client/src/context/CountryProvider.tsx
=======
interface ICountryContext {}
>>>>>>> Stashed changes:client/src/context/CountryProvider/index.tsx

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
<<<<<<< Updated upstream:client/src/context/CountryProvider.tsx
      console.log("Countyr", allCountry);
=======
      console.log("COUNTRY_get", allCountry);
>>>>>>> Stashed changes:client/src/context/CountryProvider/index.tsx
      setCountries(allCountry);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ countries }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
