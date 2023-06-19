import { createContext, useEffect, useState } from "react";
import {
  IVehicles,
  IVehiclesProviderProps,
} from "../interfaces/vehiclesInterface";
import { apiKenzieCars } from "../services/api";

export const VehiclesContext = createContext({} as IVehicles);

export const VehiclesProvider = ({ children }: IVehiclesProviderProps) => {
  const [vehiclesList, setVehiclesList] = useState([]);

  console.log(vehiclesList);

  useEffect(() => {
    const vehiclesLoad = async () => {
      try {
        const { data } = await apiKenzieCars.get("/advertiser");
        setVehiclesList(data);
      } catch (error) {
        console.log(error);
      }
    };
    vehiclesLoad();
  }, []);

  return vehiclesList;
};
