import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { createContext, useState, useEffect, useContext } from "react";
import {
  CarProviderValue,
  ICarPriverProps,
  Imarca,
  Iproducts,
} from "../interfaces/carInterface";
import { UserContexts } from "./userContexts";
import { marca } from "../data/data";
/* import * as i from "../interfaces/UserInterfaces"; */

export const CarsContext = createContext({} as CarProviderValue);
export const CarProviders = ({ children }: ICarPriverProps) => {
  const { user } = useContext(UserContexts);
  const token = localStorage.getItem("@TOKEN");
  const [cars, setCars] = useState<Iproducts[]>([]);
  const [filter, setFilter] = useState<string>("todos");
  const [marcas, setmarcas] = useState<Imarca[]>(marca);

  const GetCarsHome = async () => {
    try {
      const response = await api.get("vehicles");
      setCars(response.data);
      console.log(response.data);
    } catch (error) {
      setCars([]);
    }
  };

  useEffect(() => {
    GetCarsHome();
  }, []);

  const filterMarcas = () => {
    const marcasFilter = cars.filter((car) =>
      filter === "todos" ? true : car.model === filter
    );

    setCars(marcasFilter);
  };

  filterMarcas();

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
    <CarsContext.Provider value={{ cars, setFilter, marcas }}>
      {children}
    </CarsContext.Provider>
  );
};
