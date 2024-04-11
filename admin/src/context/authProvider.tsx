"use client";

import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

interface IAuthContext {
  users: any;
  deleteUser: (e: any) => void;
  login: (email: string, password: string) => void;
  user: any;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [user,setUser] = useState({
    email: "",
    password: "",
  });
  

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://nomad-tour-backend.vercel.app/auth"
      );
      setUsers(data.getUsers);
      // console.log("users",data.getUsers)
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  const deleteUser = async (userId: any) => {
    try {
      setLoading(true);
      const data = await axios.delete(
        `https://nomad-tour-backend.vercel.app/auth/${userId}`,
        {}
      );
      console.log("delete", data);
      setrefresh(!refresh);
      toast.success("user deleted")
    } catch (error) {
      toast.error("user denied")
      console.log("delete error", error);
    } finally {
      setLoading(false);
    }
  };
  const login = async (email: string, password: string) => {
    try {
      const { data }  = await axios.post("https://nomad-tour-backend.vercel.app/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user._doc));
      setUser(data.user)
      setUser(data.user._doc);
      toast.success("login complete")
    } catch (error) {
      toast.success("login complete");
      console.log("error",error)
    } finally {
    }
  };

  useEffect(() => {
    getUsers();
  }, [refresh]);

  return (
    <AuthContext.Provider value={{ users, deleteUser,login,user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
