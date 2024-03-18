import { Schema, model } from "mongoose";
import Country from "./country";

const hotelSchema = new Schema({
  name: String,
  images: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    require: true,
  },
  rooms: [
    {
      name: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },
      price: { USD: Number, MNT: Number, CNY: Number },
    },
  ],
  stars: Number,
  country: {
    type: Schema.ObjectId,
    ref: Country,
    require: true,
  },
});

const Hotel = model("Hotel", hotelSchema);
