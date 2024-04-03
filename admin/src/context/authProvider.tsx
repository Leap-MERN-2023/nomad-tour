"use client";

import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

interface IAuth {
  name: string;
  email: string;
  password:string;
  phoneNumber:string;
}

interface IAuthContext {
  users: IAuth[];
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<IAuth[]>([]);

  const getUsers = async () => {
    try {
      const {
        data: { allusers },
      } = await axios.get(
        "http://localhost:8008/auth"
      );
      console.log("Hotels",allusers);
      setUsers(allusers);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <AuthContext.Provider 
         value={{ users }}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;