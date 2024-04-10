
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
      toast.error("OTP илгээхэд алдаа гарлаа.");
    }
  };

  return (
    <div>
      <div
         className="flex flex-col items-center justify-center p-2 m-auto" 
      
      >
        <p
          className="items-center text-4xl font-bold"
        >
          Нууц үг сэргээх
        </p>
        <p className="font-semibold text-xl ">
          Таны <span style={{ color: "#18BA51" }}>{email}</span> хаяг руу
          сэргээх код илгээлээ.
        </p>
        <div className="w-[100% mb-2]">
          <input
            name="otp"
            placeholder="Нууц үг сэргээх код"
            onChange={handleChangeInput}
            className="rounded-xl p-3 mt-4 w-full"
          />
          <button onClick={handleSendOtp} className="rounded-xl p-4 bg-blue-900 w-full mt-4">Үргэлжлүүлэх</button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
