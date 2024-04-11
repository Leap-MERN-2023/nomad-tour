"use client";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MyStepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const handleNext = async () => {
    try {
      const data = await axios.post("http://localhost:8008/verify/send-email", {
        email: user.email,
      });
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      toast.error("Email илгээхэд алдаа гарлааa.");
      console.log(error);
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-300">
      {activeStep === 1 && (
        <StepOne
          email={user.email}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 2 && (
        <StepTwo
          email={user.email}
          otp={user.otp}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 3 && <StepThree />}
    </div>
  );
};

export default MyStepper;
