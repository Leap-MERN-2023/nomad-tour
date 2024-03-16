import { Schema, model } from "mongoose";

const airPortSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        }
    }
);

const Airport = model("Airport", airPortSchema)

export default Airport;