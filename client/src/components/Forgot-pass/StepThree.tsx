import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ChangeEvent } from "react";

interface IStepProps {
  email: string;
  password: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepThree = ({
  email,
  handleNext,
  handleChangeInput,
  password,
}: IStepProps) => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  console.log("pass", password);
  const savePassword = async () => {
    try {
      const data = await axios.post("http://localhost:8008/verify/resetPass", {
        email: email,
        newPassword: password,
      });
      // setActiveStep((prev) => prev + 1);
      toast("Password successfully changed");
    } catch (error) {
      toast.error("error to resett.");
      console.log(error);
    }
  };

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword1, setIsShowPassword1] = useState(false);
  return (
    <div className="my-72 bg-white">
      <div className="flex flex-col items-center justify-center p-2 m-auto">
        <p className="items-center text-4xl font-bold text-black">
          Reset password
        </p>

        <div className="w-[100%] mb-2">
          <div className="flex flex-col w-full">
            <div className="flex items-center bg-slate-300 relative text-black justify-center">
              <input
                name="password"
                placeholder="Password"
                className="rounded-xl p-3 mt-4 w-full "
                type={isShowPassword ? "password" : "text"}
                value={password}
                onChange={handleChangeInput}
              />
              {isShowPassword == false ? (
                <IoIosEye
                  size={20}
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                  className="absolute right-2 mt-4"
                />
              ) : (
                <IoIosEyeOff
                  size={20}
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                  className="absolute right-2"
                />
              )}
            </div>
            <div className="flex items-center bg-slate-300 relative text-black">
              <input
                name="password"
                placeholder="Repeat password"
                className="rounded-xl p-3 mt-4 w-full "
                type={isShowPassword ? "password" : "text"}
              />

              {isShowPassword === false ? (
                <IoIosEye
                  size={20}
                  onClick={() => {
                    setIsShowPassword(false);
                  }}
                  className="absolute right-2 mt-4"
                />
              ) : (
                <IoIosEye
                  size={20}
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                  className="absolute right-2 mt-4"
                />
              )}
              {isShowPassword1 === false ? (
                <IoIosEye
                  size={20}
                  onClick={() => {
                    setIsShowPassword(false);
                  }}
                  className="absolute right-2 mt-4"
                />
              ) : (
                <IoIosEye
                  size={20}
                  onClick={() => {
                    setIsShowPassword1(!isShowPassword);
                  }}
                  className="absolute right-2 mt-4"
                />
              )}
            </div>
          </div>
          <button
            onClick={savePassword}
            className="rounded-xl p-4 bg-blue-900 w-full mt-4 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
