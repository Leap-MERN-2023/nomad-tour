import { Document, Schema, model } from "mongoose";

interface IAirline extends Document {
  logo: String;
  name: String;
}

const AirlineSchema: Schema<IAirline> = new Schema<IAirline>({
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    unique: true,
  },
});

const Airline = model<IAirline>("Airline", AirlineSchema);
export default Airline;
