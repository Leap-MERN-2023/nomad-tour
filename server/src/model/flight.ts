import { Schema, SchemaType, model } from "mongoose";

const flightSchema = new Schema({
  countryId: {
    type: Schema.ObjectId,
    ref: "Country",
    required: true,
  },
  airline: {
    type: Schema.ObjectId,
    ref: "Airline",
    required: true,
  },
  // isRounded: {
  //   type: Boolean,
  //   // required: true,
  // },
  // roundFlight: {
  //   type: Schema.ObjectId,
  //   ref: "Flight",
  // },
  departureDate: {
    type: String,
    required: true,
  },
  arrivalDate: {
    type: String,
    required: true,
  },
  departureAirportId: {
    type: Schema.ObjectId,
    ref: "departureAirport",
    required: true,
  },
  arrivalAirportId: {
    type: Schema.ObjectId,
    ref: "arrivalAirport",
    required: true,
  },
  availableSeats: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Flight = model("flight", flightSchema);
export default Flight;
