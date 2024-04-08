"use client";

import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";


interface IAuthContext {
  users: any,
  deleteUser :(e: any) => void,
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const {data} = await axios.get(
        "http://localhost:8008/auth")
        setUsers(data.getUsers)
        // console.log("users",data.getUsers)
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  const deleteUser = async (userId : any) => {
    try {
      const data = await axios.delete(`http://localhost:8008/auth/${userId}`, {
      })
      console.log("delete",data)
    } catch (error) {
      console.log("delete error", error)
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AuthContext.Provider 
         value={{ users ,deleteUser}}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;