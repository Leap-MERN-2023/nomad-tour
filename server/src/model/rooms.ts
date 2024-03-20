import { Schema, model } from "mongoose";
import { Hotel } from "./hotel";

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  images: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: { USD: Number, MNT: Number, CNY: Number },
    required: true,
  },
  hotel: {
    type: Schema.ObjectId,
    ref: Hotel,
    required: true,
  },
});

export const Room = model("Room", roomSchema);
