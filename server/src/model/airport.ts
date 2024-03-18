import { Document, Schema, model } from "mongoose";

interface IAirPort extends Document {
     country: String,
     name: String
}

const AirportSchema: Schema<IAirPort> = new Schema<IAirPort> ({
   country : {
    type:Schema.ObjectId,
    ref: "Country"
   },
   name : {
    type:String,
    unique:true
   }
})
 
const Airport = model<IAirPort>("airports", AirportSchema);
export default Airport;