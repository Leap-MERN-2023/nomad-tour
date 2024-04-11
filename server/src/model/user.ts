import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IIuser extends Document {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
  googleId: object;
  otp: any;
  isVerified: any;
}

const userSchema: Schema<IIuser> = new Schema({
  googleId: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: [true, "Нэрээ заавал оруулна уу"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "И-мэйл хаяг заавал оруулна уу"],
  },
  password: {
    type: String,
    required: [true, "Нууц үг заавал оруулна уу"],
    minlenght: 6,
    select: false,
  },
  phoneNumber: {
    type: Number,
    required: [true, "Утасны дугаар оруулна уу"],
  },
  otp: {
    type: Number,
    required: false,
  },
});

const User = model("User", userSchema);

export default User;
