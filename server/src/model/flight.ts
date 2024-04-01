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
    type: String,
    enum: ["eco", "ecoBusiness", "business", "first"],
  },
  price: {
    USD: Number,
    MNT: Number,
    CNY: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Flight = model("flight", flightSchema);
export default Flight;
