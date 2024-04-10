export interface IAirport {
  country: string;
  name: string;
  _id: string;
}
export interface ICountry {
  _id: string;
  name: string;
  images: string[];
  description: string;
}

export interface IPrice {
  USD: number;
  MNT: number;
  CNY: number;
}
export interface IFlight {
  _id: string;
  airline: IAirline;
  arrivalAirportId: IAirport;
  departureAirportId: IAirport;
  countryId: ICountry;
  availableSeats: number;
  arrivalDate: string;
  departureDate: string;
  price: IPrice;
}

export interface IHotel {
  name: string;
  desc: string;
  star: number;
  price: number;
}

export interface IAirline {
  logo: string;
  name: string;
  _id: string;
}

export interface ITicket {
  flight: IFlight;
  price: IPrice;
  seatClass: string;
  seatNumber: number;
  _id: string;
}

export interface IRoom {
  name: string,
  description: string,
  images: []
  price: number
}
