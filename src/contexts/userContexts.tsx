import { createContext, useState } from "react";
import {
  IProviderValue,
  IUserLogin,
  IuserResponse,
  iUserProviderProps,
} from "../interfaces/userInterface";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export const UserContexts = createContext({} as IProviderValue);

export const UserProviders = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<IuserResponse | null>(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  // async () => {
  //   try {
  //     if (token) {
  //       navigate("/products");
  //     }
  //   } catch (error) {
  //     navigate("/login");
  //     localStorage.removeItem("@TOKEN");
  //   }
  // };

  const LoginUser = async (formLogin: IUserLogin) => {
    try {
      const response = await api.post<IuserResponse>("login", formLogin);
      setUser(response.data);
      toast.success("Você está logado");
      navigate("/products");
      window.localStorage.setItem("@TOKEN", response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("Email incorretos");
    }
  };

  return (
    <UserContexts.Provider value={{ LoginUser, user }}>
      {children}
    </UserContexts.Provider>
  );
};
