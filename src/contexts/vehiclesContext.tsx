import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import {
  IBrand,
  IVehicles,
  IVehiclesProviderProps,
} from "../interfaces/vehiclesInterface";
import { api, apiKenzieCars } from "../services/api";

interface IVehiclesContext {
  vehiclesList: IBrand | undefined;
  setVehiclesList: Dispatch<SetStateAction<IBrand | undefined>>;
  createNew: (newData: IVehicles) => Promise<void>;
}

export const VehiclesContext = createContext({} as IVehiclesContext);

export const VehiclesProvider = ({ children }: IVehiclesProviderProps) => {
  const [vehiclesList, setVehiclesList] = useState<IBrand | undefined>();

  useEffect(() => {
    const vehiclesLoad = async () => {
      try {
        const response = await apiKenzieCars.get<any>("cars");
        const data = response.data;
        setVehiclesList(data);
        /* console.log(data); */
      } catch (error) {
        console.log(error);
      }
    };
    vehiclesLoad();
  }, []);

  const createNew = async (newData: IVehicles) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post<IVehicles>("vehicles", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <VehiclesContext.Provider
      value={{ vehiclesList, setVehiclesList, createNew }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};
