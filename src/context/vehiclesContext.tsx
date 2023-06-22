import { createContext, useEffect, useState } from "react";
import {
  IVehicles,
  IVehiclesProviderProps,
} from "../interfaces/vehiclesInterface";
import { apiKenzieCars } from "../services/api";

export const VehiclesContext = createContext({} as IVehicles);

export const VehiclesProvider = ({ children }: IVehiclesProviderProps) => {
  const [vehiclesList, setVehiclesList] = useState(Array());

  useEffect(() => {
    const vehiclesLoad = async () => {
      try {
        const { data } = await apiKenzieCars.get("/");
        console.log(data);
        var cars = [];
        cars.push(data.chevrolet);
        cars.push(data.fiat);
        setVehiclesList(cars);
      } catch (error) {
        console.log(error);
      }
    };
    vehiclesLoad();
  }, []);

  return vehiclesList;
};
