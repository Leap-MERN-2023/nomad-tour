import { Schema, model } from "mongoose";
import Country from "./country";

const hotelSchema = new Schema({
  name: String,
  images: [
    {
      type: String,
      // required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  stars: String,
  country: {
    type: Schema.ObjectId,
    ref: Country,
    required: true,
  },
});

export const Hotel = model("Hotel", hotelSchema);
