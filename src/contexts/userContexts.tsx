import { createContext, useState } from "react";
import {
  IProviderValue,
  IUserLogin,
  IUserRegister,
  IUserUpdate,
  IuserResponse,
  iUserProviderProps,
} from "../interfaces/userInterface";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export interface IDecoded {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

export const UserContexts = createContext({} as IProviderValue);

export const UserProviders = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<IuserResponse | null>(null);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  const LoginUser = async (formLogin: IUserLogin) => {
    try {
      const response = await api.post<IuserResponse>("login", formLogin);

      const decoded: IDecoded = jwt_decode(response.data.token);

      setUser(response.data);

      setUserId(decoded.sub);

      toast.success("Você está logado");

      navigate("/products");

      window.localStorage.setItem("@TOKEN", response.data.token);

      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

      return response.data;
    } catch (error) {
      console.log(error);

      toast.error("Email incorretos");
    }
  };

  const registerUser = async (data: IUserRegister) => {
    try {
      await api.post("users", data);

      navigate("/login");

      toast.success("Usuário criado!");
    } catch (error) {
      console.log(error);

      toast.error("Algo deu errado");
    }
  };

  const updateUser = async (data: IUserUpdate) => {
    try {
      await api.patch("users", data);

      toast.success("Atualização concluída!");
    } catch (error) {
      console.log(error);

      toast.error("Erro na atualização");
    }
  };

  const deleteUser = async () => {
    try {
      await api.patch("users" + user?.user.id);

      toast.success("Usuário deletado");
    } catch (error) {
      console.log(error);

      toast.error("Erro ao deletar usuários");
    }
  };

  return (
    <UserContexts.Provider
      value={{ LoginUser, user, registerUser, updateUser, deleteUser, userId }}
    >
      {children}
    </UserContexts.Provider>
  );
};
