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
  isRounded: {
    type: Boolean,
    required: true,
  },
  roundFlight: {
    type: Schema.ObjectId,
    ref: "Flight",
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  departureAirportId: {
    type: Schema.ObjectId,
    ref: "Airport",
    required: true,
  },
  arrivalAirportId: {
    type: Schema.ObjectId,
    ref: "Airport",
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Flight = model("flight", flightSchema);
export default Flight;
