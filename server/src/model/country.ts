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
      //   required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  hotels: [
    {
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
    },
  ],
});

const Country = model("Country", countrySchema);

export default Country;
