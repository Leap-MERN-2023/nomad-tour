"use client";
import axios from "axios";

import {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
  useContext,
  ChangeEvent,
} from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { CgLayoutGrid } from "react-icons/cg";
import swal from "sweetalert";
import { myAlertFire } from "@/utils/myAlert";
export interface IUser {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  _id: string;
}

export interface IUserContext {
  user: IUser;
  token: string | null;
  login: (email: string, password: string) => void;
  handleChangeUser: any;
  isUserLoggedIn: boolean;
  logOut: () => void;
  // change: any
  signup: (
    email: string,
    password: string,
    phoneNumber: string,
    name: string
    // change:any
  ) => void;
  selectedItem: string;
  setSelectedItem: any;
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    _id: "",
  },
  token: "",
  login: function () {},
  logOut: function () {},
  isUserLoggedIn: false,
  handleChangeUser() {},
  signup: function () {},
  selectedItem: "",
  setSelectedItem: undefined,
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState("Country");

  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    _id: "",
  });

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    console.log(user);
    if (storedToken) {
      setToken(storedToken);
    }
    if (user !== null) {
      console.log("this is null");
      // setIsUserLoggedIn(true)
      // setUser(JSON.parse(user))
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")!));
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(
        "https://nomad-tour-backend.vercel.app/auth/login",
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user._doc));
      setUser(data.user);
      setIsUserLoggedIn(true);
      // setUser(data.token);
      router.push("/");
      myAlertFire("Login success", "success");
      setUser(data.user._doc);
    } catch (error) {
      swal("failed", " Password is wrong ", "error");
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setIsUserLoggedIn(false);
  };

  const signup = async (
    email: string,
    password: string,
    name: string,
    phoneNumber: string
  ) => {
    console.log("AAA", email, password, name, phoneNumber);
    try {
      const { data } = await axios.post(
        "https://nomad-tour-backend.vercel.app/auth",
        {
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          name: name,
        }
      );
      console.log("DATA: ", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user._doc));
      setUser(data.user);
      setUser(data.token);
      router.push("/");
      myAlertFire("Signup success, now login", "success");
    } catch (error: any) {
      swal("Failed", "Signup failed", "error");
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        logOut,
        token,
        handleChangeUser,
        signup,
        isUserLoggedIn,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
