import { Schema, model } from "mongoose";

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
});

const Country = model("Country", countrySchema);

export default Country;
