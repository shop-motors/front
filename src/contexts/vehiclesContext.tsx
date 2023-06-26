/* import { createContext, useEffect, useState } from "react";
import {
  IVehicles,
  IVehiclesProviderProps,
} from "../interfaces/vehiclesInterface";
import { apiKenzieCars } from "../services/api";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const VehiclesContext = createContext({} as IVehicles);

export const VehiclesProvider = ({ children }: IVehiclesProviderProps) => {
  const [vehiclesList, setVehiclesList] = useState(Array());
  const [vehicles, setVehicles] = useState<IVehicles>();
  const navigate = useNavigate();

  const CreateAdvertiser = async (formVehicles: IVehicles | null) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post<IVehicles>("/advertiser", formVehicles, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVehicles([...vehicles, data]);
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <VehiclesContext.Provider value={{ setVehicles, vehicles }}>
      {children}
    </VehiclesContext.Provider>
  );
}; */
