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



interface IOrder {
  
}

export const OrderContext = createContext<IOrder>(
  {} as IOrder
);

const Orderprovider = ({ children }: PropsWithChildren) => {
 
  return (
    <OrderContext.Provider value={{}}>
      {children}
    </OrderContext.Provider>
  );
};

export default Orderprovider;