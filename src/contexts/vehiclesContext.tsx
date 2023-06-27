import { createContext, useEffect, useState } from "react";
import {
  IVehicles,
  IVehiclesProviderProps,
} from "../interfaces/vehiclesInterface";
import { apiKenzieCars } from "../services/api";

interface IVehiclesContext {
  vehiclesList: IVehicles[];
  createNew: (newData: IVehicles) => Promise<void>;
}

export const VehiclesContext = createContext({} as IVehiclesContext);

export const VehiclesProvider = ({ children }: IVehiclesProviderProps) => {
  const [vehiclesList, setVehiclesList] = useState<IVehicles[]>([]);

  console.log(vehiclesList);

  const createNew = async (newData: IVehicles) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await apiKenzieCars.post<IVehicles>(
        "/vehicles",
        newData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setVehiclesList([...vehiclesList, data]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <VehiclesContext.Provider value={{ vehiclesList, createNew }}>
      {children}
    </VehiclesContext.Provider>
  );
};
