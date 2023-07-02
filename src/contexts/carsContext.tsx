import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { createContext, useState, useEffect, useContext } from "react";
import {
  CarProviderValue,
  ICarPriverProps,
  Iproducts,
} from "../interfaces/carInterface";
import { UserContexts } from "./userContexts";

export const CarsContext = createContext({} as CarProviderValue);
export const CarProviders = ({ children }: ICarPriverProps) => {
  const { user } = useContext(UserContexts);
  const token = localStorage.getItem("@TOKEN");
  const [cars, setCars] = useState<Iproducts[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [pageAtual, setAtual] = useState(0);
  const [anterior, setAnterior] = useState(false);
  const [nav, setNav] = useState(false);
  const [close, setClose] = useState(false);
  const LIMIT = 12;
  const GetCarsHome = async () => {
    try {
      const response = await api.get(`vehicles?page=${page}&limit=${LIMIT}`);
      setCars(response.data.data);
      setAtual(response.data.data.length);
      setTotal(response.data.total);
      setClose(false)
    } catch (error) {
      setCars([]);
    }
  };

  useEffect(() => {
    GetCarsHome();
  }, [page, LIMIT]);

  const paginationCount = () => {
    const totalPages = Math.ceil(total / LIMIT);
    if (pageAtual === 0 || page >= totalPages - 1) {
      return;
    }
    setAnterior(true);
    setPage(page + 1);
    GetCarsHome();
  };

  const previousCount = () => {
    if (page > 0) {
      setPage(page - 1);
      GetCarsHome();
    }
    if (page === 1) {
      setAnterior(false);
    }
  };

  const openBtns = () => {
    setNav(true);
    if (nav) {
      setNav(false);
    }
  };

  const closeFilter = () => {
    GetCarsHome();
    setClose(false);
  };
  const createAdvertiser = async (body: any) => {
    try {
      const { data, status } = await api.post("register/", body);

      status === 201 && toast.success("Usuário cadastrado com Sucesso!");

      return data;
    } catch (error) {
      const message = error as AxiosError<any>;
      console.log(message);
      if (message.response?.data.car_name[0]) {
        message.response?.data.car_name[0] ===
          "user with this Advertiser already exists." &&
          toast.error("Advertiser já cadastrado!");
      }
      if (message.response?.data.id[0]) {
        message.response?.data.id[0] === "This field must be unique." &&
          toast.error("Advertiser já cadastrado!");
      }
      return false;
    }
  };

  return (
    <CarsContext.Provider
      value={{
        cars,
        setCars,
        LIMIT,
        total,
        paginationCount,
        page,
        pageAtual,
        previousCount,
        anterior,
        nav,
        openBtns,
        close,
        setClose,
        closeFilter,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { createContext, useState, useEffect, useContext } from "react";
import {
  CarProviderValue,
  ICarPriverProps,
  Iproducts,
} from "../interfaces/carInterface";
import { UserContexts } from "./userContexts";
/* import * as i from "../interfaces/UserInterfaces"; */

export const CarsContext = createContext({} as CarProviderValue);
export const CarProviders = ({ children }: ICarPriverProps) => {
  const { user } = useContext(UserContexts);
  const token = localStorage.getItem("@TOKEN");
  const [cars, setCars] = useState<Iproducts[]>([]);
  const [filter, setFilter] = useState();

  const GetCarsHome = async () => {
    try {
      const response = await api.get("vehicles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars(response.data);
      /* console.log(response.data); */
    } catch (error) {
      setCars([]);
    }
  };

  useEffect(() => {
    GetCarsHome();
  }, []);

  const createAdvertiser = async (body: any) => {
    try {
      const { data, status } = await api.post("register/", body);

      status === 201 && toast.success("Usuário cadastrado com Sucesso!");

      return data;
    } catch (error) {
      const message = error as AxiosError<any>;
      /* console.log(message); */
      if (message.response?.data.car_name[0]) {
        message.response?.data.car_name[0] ===
          "user with this Advertiser already exists." &&
          toast.error("Advertiser já cadastrado!");
      }
      if (message.response?.data.id[0]) {
        message.response?.data.id[0] === "This field must be unique." &&
          toast.error("Advertiser já cadastrado!");
      }
      return false;
    }
  };

  return (
    <CarsContext.Provider value={{ cars }}>{children}</CarsContext.Provider>
  );
};