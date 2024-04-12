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
import { useRouter } from "next/navigation";

interface IAuthContext {
  users: any;
  deleteUser: (e: any) => void;
  login: (email: string, password: string) => void;
  user: any;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const Router = useRouter();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user,setUser] = useState({
    name:"",
    email: "",
    password: "",
    phoneNumber: "",
    _id: "",
  });
  

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8008/auth"
      );
      setUsers(data.getUsers);
      console.log("users",data.getUsers)
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  const deleteUser = async (userId: any) => {
    try {
      setLoading(true);
      const data = await axios.delete(
        `http://localhost:8008/auth/${userId}`,
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
      const { data }  = await axios.post("http://localhost:8008/auth/login", {
        email: email,
        password: password,
      });
      setLoading(true);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user._doc));
      setUser(data.user)
      setUser(data.user._doc);
      setIsUserLoggedIn(true);
      setrefresh(!refresh);
      Router.push("/admin")
      toast.success("login success")
      console.log("login",data.user)
    } catch (error) {
      toast.error("password or email wrong");
      console.log("error",error)
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
    toast.success("logout admin")
  };

  useEffect(() => {
    getUsers();
  }, [refresh]);

  return (
    <AuthContext.Provider value={{ users, deleteUser,login,user ,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
