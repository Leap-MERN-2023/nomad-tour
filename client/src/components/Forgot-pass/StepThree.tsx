import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ChangeEvent } from "react";
import { myAlertFire } from "@/utils/myAlert";

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
      const data = await axios.post(
        "https://nomad-tour-backend.vercel.app/verify/resetPass",
        {
          email: email,
          newPassword: password,
        }
      );
      router.push("/");
      // setActiveStep((prev) => prev + 1);
      myAlertFire("Password successfully changed", "success");
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
            <div className="flex items-center bg-white relative text-black justify-center">
              <input
                name="password"
                placeholder="Password"
                className="rounded-xl p-3 mt-4 w-full bg-zinc-200"
                type="password"
                value={password}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex items-center  relative text-black">
              <input
                name="password"
                placeholder="Repeat password"
                className="rounded-xl p-3 mt-4 w-full bg-zinc-200"
                type="password"
              />
            </div>
          </div>
          <button
            onClick={savePassword}
            className="rounded-xl p-4 bg-blue-400 w-full mt-4 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
