"use client";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import axios from "axios";
import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
  useContext,
  ChangeEvent,
} from "react";

export interface IEmail {
  // email: string;
  sendEmail: (email: string) => void;
  handleChangeEmail: any;
}

export const EmailContext = createContext<IEmail>({
  // email: "",
  sendEmail: function () {},
  handleChangeEmail: function () {},
});

export const EmailProvider = ({ children }: PropsWithChildren) => {
  const [userEmail, setUserEmail] = useState({});
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserEmail({ ...userEmail, [name]: value });
  };

  const sendEmail = async (email: string) => {
    try {
      const { data } = await axios.post(
        "https://nomad-tour-backend.vercel.app/email",
        {
          email: email,
        }
      );
      setUserEmail(data.userEmail);
      swal("Good job!", "email added successfully", "success");
    } catch (error) {
      swal("failed", "email failed to add", "error");
    }
  };
  return (
    <EmailContext.Provider value={{ sendEmail, handleChangeEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
