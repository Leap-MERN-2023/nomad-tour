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

interface ICountry {
  country: string;
  name: string;
  description: string;
  images: string;
  _id: string;
}

interface ICountryContext {
  countries: ICountry[];
  getCountries: () => void;
  handleCountryForm: (e: any) => void;
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
  createCountry: () => void;
  deleteCountry: (e: any) => void;
  addImage: (images: string) => void;
}

export const CountryContext = createContext<ICountryContext>(
  {} as ICountryContext
);

const CountryProvider = ({ children }: PropsWithChildren) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [file, setFile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [newCountry, setNewCountry] = useState<any>({
    name: "",
    description: "",
    images: [],
  });

  const getCountries = async () => {
    try {
      const {
        data: { allCountry },
      } = await axios.get("https://nomad-tour-backend.vercel.app/country");
      setCountries(allCountry);
      // console.log("country",allCountry)
    } catch (error: any) {
      console.log("ERR", error);
    }
  };
  const handleCountryForm = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCountry({ ...newCountry, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    console.log("image", e.target.files);
  };
  const createCountry = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        "https://nomad-tour-backend.vercel.app/country",
        newCountry
      );
      setrefresh(!refresh);
      console.log("newCountry", newCountry);
    } catch (error: any) {
      console.log("create airport error", error);
    } finally {
      setLoading(false);
    }
  };
  const deleteCountry = async (countryId: any) => {
    try {
      setLoading(true);
      const data = await axios.delete(
        `https://nomad-tour-backend.vercel.app/country/${countryId}`,
        {}
      );
      setrefresh(!refresh);
      console.log("delete country", data);
    } catch (error) {
      console.log("delete error", error);
    } finally {
      setLoading(false);
    }
  };
  const addImage = (imgUrl: string) => {
    setNewCountry((oldCountry: any) => ({
      ...oldCountry,
      images: [...oldCountry.images, imgUrl],
    }));
  };

  useEffect(() => {
    getCountries();
  }, [refresh]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        getCountries,
        handleCountryForm,
        handleFile,
        createCountry,
        deleteCountry,
        addImage,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
