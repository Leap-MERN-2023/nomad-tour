"use client";
import axios from "axios";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface iFlightOrderContext {
  createFlightOrder: () => void;
  handleTourist: (e: any) => void;
  handleOrderUser: (e: any) => void;
  handleFlightForm: (e: any) => void;
  setFlightForm: any;
  flightForm: any;
}
export const FlightOrderContext = createContext({} as iFlightOrderContext);

const FlightOrderProvider = ({ children }: PropsWithChildren) => {
  const [tourist, setTourist] = useState({
    name: "",
    birthDate: "",
    gender: "",
    citizen: "",
    passportId: "",
    passportDate: "",
    passportValidity: "",
    email: "",
  });
  const [orderUser, setOrderUser] = useState({
    name: "",
    birthDate: "",
    phone: "",
    citizen: "",
    email: "",
  });
  const [flightForm, setFlightForm] = useState({
    user: "661555e144e186fa86302acf",
    ticket: "",
    tourist: tourist,
    orderUser: orderUser,
    totalPrice: 0,
  });
  const handleTourist = (e: any) => {
    setTourist({ ...tourist, [e.target.name]: e.target.value });
  };
  const handleOrderUser = (e: any) => {
    setOrderUser({ ...orderUser, [e.target.name]: e.target.value });
  };
  const handleFlightForm = (e: any) => {
    setFlightForm({ ...flightForm, [e.target.name]: e.target.value });
  };
  const createFlightOrder = async () => {
    flightForm.tourist = tourist;
    flightForm.orderUser = orderUser;
    try {
      console.log("FLIGHT FORM", flightForm);
      const { data } = await axios.post(
        "http://localhost:8008/flightOrder",
        flightForm
      );
      console.log("Flight order", data);
    } catch (error) {
      console.log("ERROR IN CREATE ORDER");
    }
  };
  return (
    <FlightOrderContext.Provider
      value={{
        createFlightOrder,
        handleTourist,
        handleOrderUser,
        handleFlightForm,
        setFlightForm,
        flightForm,
      }}
    >
      {children}
    </FlightOrderContext.Provider>
  );
};

export default FlightOrderProvider;

export const useFlightOrder = () => {
  return useContext(FlightOrderContext);
};
