import { useFormik } from "formik";
import React, { ChangeEvent, useContext } from "react";
import { object, string } from "yup";
import { useState } from "react";
import { UserContext } from "@/context/UserProvider";

interface IStepProps {
  email: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepOne = ({ email, handleNext, handleChangeInput }: IStepProps) => {
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  //   otp: "",
  // });

  const { user } = useContext(UserContext);

  return (
    <div className="my-72 flex gap-4 items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center p-2 m-auto ">
        <p className="items-center text-4xl font-bold text-black">
          Reset password
        </p>
        <input
          placeholder="Email"
          onChange={handleChangeInput}
          name="email"
          className="rounded-xl p-3 mt-4 w-full text-black bg-zinc-200"
          value={email}
        />
        <div className="flex flex-row w-[100%] justify-end">
          <button
            onClick={handleNext}
            className="rounded-xl p-4 bg-blue-400 w-full mt-4 text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
