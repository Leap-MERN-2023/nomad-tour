<<<<<<< Updated upstream
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
=======
import {Schema, model, Document} from "mongoose"
import bcrypt from "bcrypt"


interface IIuser extends Document {
    name: string,
    email:string,
    password: string,
    phoneNumber: number
}


const userSchema: Schema<IIuser> = new Schema(
    {
        name: {
            type:String,
            required: [true,"Нэрээ заавал оруулна уу" ]
        },
        email: {
            type: String,
            unique: true,
            required: [ true, "И-мэйл хаяг заавал оруулна уу"]
        },
        password: {
            type:String,
            required: [true, "Нууц үг заавал оруулна уу"],
            minlenght:6,
            select:false
        },
        phoneNumber: {
            type: Number,
            required: [true, "Утасны дугаар оруулна уу"]
        }
    }
)

const User = model("User", userSchema)

export default User;
>>>>>>> Stashed changes
