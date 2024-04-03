import { Schema, model } from "mongoose";

const TicketsSchema: Schema = new Schema({
  flight: {
    type: Schema.ObjectId,
    ref: "flight",
    required: true,
  },
  seatClass: {
    type: String,
    enum: ["Economy", "Premium", "Business class", "First class"],
  },
  seatNumber: {
    type: Number,
    required: true,
  },
  price: {
    USD: Number,
    MNT: Number,
    CNY: Number,
  },
});

const Tickets = model("Tickets", TicketsSchema);
export default Tickets;
