import { Schema, SchemaType, model } from "mongoose";

const flightOrderSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: true,
  },
  ticket: {
    type: Schema.ObjectId,
    ref: "Tickets",
    required: true,
  },
  tourist: {
    name: String,
    birthDate: Date,
    gender: String,
    citizen: String,
    passportId: String,
    passportDate: String,
    passportValidity: String,
    email: String,
  },
  orderUser: {
    name: String,
    birthDate: String,
    phone: String,
    citizen: String,
    email: String,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const FlightOrder = model("flighOrder", flightOrderSchema);
export default FlightOrder;
