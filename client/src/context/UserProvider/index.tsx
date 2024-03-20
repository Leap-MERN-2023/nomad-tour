"use client"
import axios from "axios";
import {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
  useContext,
  ChangeEvent,
} from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export interface IUser {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IUserContext {
  user: IUser;
  token: string | null;
  login: (email: string, password: string) => void;
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  token: "",
  login: function () {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (email: string, password: string) => {
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
      const formData = new FormData();
      formData.set("name", newUser.name);
      formData.set("email", newUser.email);
      formData.set("password", newUser.password);
      formData.set("phoneNumber", newUser.phoneNumber);

      const token = localStorage.getItem("token");

      await axios.post("http://localhost:8008/auth/signup"),
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  return (
    <UserContext.Provider value={{ login, user, token }}>
      {children}
    </UserContext.Provider>
  );
};
