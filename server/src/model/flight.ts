import { Schema, SchemaType, model } from "mongoose";

const flightSchema = new Schema({
  countryId: {
    type: Schema.ObjectId,
    ref: "Country",
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
    type: Number,
    required: true,
  },
  price: {
    USD: Number,
    MNT: Number,
    CNY: Number,
  },
});

const Flight = model("flight", flightSchema);
export default Flight;
