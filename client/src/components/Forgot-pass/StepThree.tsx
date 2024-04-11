import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StepThree = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const savePassword = async () => {
    try {
      const data = await axios.post("http://localhost:8008/verify/resetPass", {
        email: user.email,
      });
      // setActiveStep((prev) => prev + 1);
      toast("amjilttai");
    } catch (error) {
      toast.error("Email илгээхэд алдаа гарлааaa.");
      console.log(error);
    }
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword1, setIsShowPasswor1d] = useState(false);
  return (
    <div className="my-72">
      <div className="flex flex-col items-center justify-center p-2 m-auto">
        <p className="items-center text-4xl font-bold">Шинэ нууц үг cэргээх</p>

        <div className="w-[100% mb-2]">
          <div className="flex flex-col w-full">
            <div className="flex items-center bg-slate-300 relative text-black justify-center">
              <input
                name="password"
                placeholder="Нууц үг"
                className="rounded-xl p-3 mt-4 w-full"
                type={isShowPassword ? "password" : "text"}
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
                placeholder="Нууц үг давтах"
                className="rounded-xl p-3 mt-4 w-full"
                type={isShowPassword ? "password" : "text"}
              />
              {isShowPassword1 == false ? (
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
          </div>
          <button
            onClick={savePassword}
            className="rounded-xl p-4 bg-blue-900 w-full mt-4"
          >
            Сэргээх
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
