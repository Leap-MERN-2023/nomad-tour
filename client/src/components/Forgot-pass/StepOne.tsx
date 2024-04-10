

import { useFormik } from "formik";
import React, { ChangeEvent } from "react";
import { object, string } from "yup";

interface IStepProps {
  email: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepOne = ({ email, handleNext, handleChangeInput }: IStepProps) => {
  return (
    <div className="my-96 flex gap-4 items-center justify-center flex-col">
      <div
      className="flex flex-col items-center justify-center p-2 m-auto "
    
      >
        <p
        className="items-center text-4xl font-bold"
         
        >
          Нууц үг сэргээх
        </p>
        <input placeholder="Имэйл" onChange={handleChangeInput} name="email" className="rounded-xl p-3 mt-4 w-full"/>
        <div className="flex flex-row w-[100%] justify-end">
          <button  onClick={handleNext} className="rounded-xl p-4 bg-blue-900 w-full mt-4" >Үргэлжлүүлэх</button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
