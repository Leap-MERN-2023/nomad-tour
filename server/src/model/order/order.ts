import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  hotel: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  checkInDate: {
    type: String,
    required: true,
  },
  checkOutDate: {
    type: String,
    required: true,
  },
});

const Order = model("Order", OrderSchema);
export default Order;
