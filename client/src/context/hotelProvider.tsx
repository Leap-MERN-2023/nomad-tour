import { create } from "domain";
import React, { PropsWithChildren, createContext, useState } from "react";

interface IHotel {
  name: string;
  desc: string;
  star: number;
}

interface IHotelContext {
  hotels: IHotel[];
}

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

const hotelProvider = ({ children }: PropsWithChildren) => {
  const [hotels, setHotels] = useState<IHotel[]>([]);

  return (
    <HotelContext.Provider value={{ hotels }}>{children}</HotelContext.Provider>
  );
};

export default hotelProvider;
