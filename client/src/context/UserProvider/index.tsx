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
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
  signup: (email: string, password:string, phoneNumber:string, name: string)=>void
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  },
  token: "",
  login: function () {},
  handleChangeUser() {},
  signup: function(){}
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

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
      toast("amjilttai nevterlee");
      // alert("amjilttai nevterlee");
   
    } catch (error) {
      toast.error("nevtrelt amjiltgui");
    }
  };

  const signup = async (
    email: string,
    password: string,
    name: string,
    phoneNumber: string
  ) => {
    try {
      const newUser = new FormData();
      newUser.set("name", name);
      newUser.set("email", email);
      newUser.set("password", password);
      newUser.set("phoneNumber", phoneNumber);

      const token = localStorage.getItem("token");
console.log("gore", newUser)
      await axios.post("http://localhost:8008/auth", newUser, { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast("amjilttai burtguullee");
    } catch (error: any) {
      toast.error("Signup failed: " + error.message);
    }
  };

  return (
    <UserContext.Provider value={{ login, user, token, handleChangeUser, signup }}>
      {children}
    </UserContext.Provider>
  );
};
