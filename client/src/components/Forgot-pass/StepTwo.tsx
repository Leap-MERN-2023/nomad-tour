import axios from "axios";
import React, { ChangeEvent } from "react";
import { toast } from "react-toastify";

interface IStepProps {
  email: string;
  otp: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepTwo = ({ email, otp, handleNext, handleChangeInput }: IStepProps) => {
  const handleSendOtp = async () => {
    try {
      const data = await axios.post("http://localhost:8008/verify/otp", {
        email,
        otp,
      });
      handleNext();
    } catch (error) {
      console.log(error);
      toast.error("error to send OTP.");
    }
  };

  return (
    <div className="my-72">
      <div className="flex flex-col items-center justify-center p-2 m-auto">
        <p className="items-center text-4xl font-bold text-black">Reset Password</p>
        <p className="font-semibold text-xl text-gray-600">
          Sent code to  <span style={{ color: "#18BA51" }}>{email}</span> email
        </p>
        <div className="w-[100% mb-2]">
          <input
            name="otp"
            placeholder="Нууц үг сэргээх код"
            onChange={handleChangeInput}
            className="rounded-xl p-3 mt-4 w-full text-black"
          />
          <button
            onClick={handleSendOtp}
            className="rounded-xl p-4 bg-blue-900 w-full mt-4 text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
