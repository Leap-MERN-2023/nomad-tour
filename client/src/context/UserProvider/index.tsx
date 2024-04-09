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
export interface IUser {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface IUserContext {
  user: IUser;
  token: string | null;
  login: (email: string, password: string) => void;
  handleChangeUser: any;
  signup: (
    email: string,
    password: string,
    phoneNumber: string,
    name: string
  ) => void;
  selectedItem: string;
  setSelectedItem: any;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState("Country");

  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (email: string, password: string) => {
    console.log("object", email, password);
    try {
      const { data } = await axios.post("http://localhost:8008/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      setUser(data.token);
      router.push("/");
      swal("Good job", "Login successfully", "success");
      // alert("amjilttai nevterlee");
    } catch (error) {
      swal("failed", " login failed ", "error");
    }
  };

  const signup = async (
    email: string,
    password: string,
    name: string,
    phoneNumber: string
  ) => {
    console.log("AAA", email, password, name, phoneNumber);
    try {
      const { data } = await axios.post("http://localhost:8008/auth", {
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        name: name,
      });
      console.log("DATA: ", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      setUser(data.token);
      router.push("/");
      swal("Successfully", "Signup successfully", "success");
    } catch (error: any) {
      swal("Failed", "Signup failed", "error");
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        token,
        handleChangeUser,
        signup,
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
