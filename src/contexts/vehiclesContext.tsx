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

export interface iFormVehicles {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: string;
  color: string;
  fipe_price: string;
  price: string;
  description: string;
  cover_img: string;
  galleryImages: string[];
}


interface IVehiclesContext {
  vehiclesList: IBrand | undefined;
  setVehiclesList: Dispatch<SetStateAction<IBrand | undefined>>;

  createNew: (newData: iFormVehicles) => Promise<void>;
  dataFormVehicles: iFormVehicles[];
  setDataFormVehicles: Dispatch<SetStateAction<iFormVehicles[]>>;
  showCard: iFormVehicles | null;
  setShowCard: Dispatch<SetStateAction<iFormVehicles | null>>;
  getNewDataForm: () => Promise<void>;

}

export const VehiclesContext = createContext({} as IVehiclesContext);

export const VehiclesProvider = ({ children }: IVehiclesProviderProps) => {
  const [vehiclesList, setVehiclesList] = useState<IBrand | undefined>();

  const [dataFormVehicles, setDataFormVehicles] = useState(
    [] as iFormVehicles[]
  );
  const [showCard, setShowCard] = useState<iFormVehicles | null>(null);



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

  const getNewDataForm = async () => {
//     const token = localStorage.getItem("@TOKEN");
//     try {

//       const response = await api.get("vehicles", {

//       const { data } = await api.post<IVehicles>("vehicles", newData {

//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }))};
      


//       setDataFormVehicles(response.data.data);
//       console.log(response.data.data);

// ()
//     } catch (error) {
//       console.log(error);
//     }
  }

  const createNew = async (newData: iFormVehicles) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post<iFormVehicles>("vehicles", newData, {
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

      value={{
        vehiclesList,
        setDataFormVehicles,
        setVehiclesList,
        dataFormVehicles,
        createNew,
        showCard,
        setShowCard,
        getNewDataForm,
        
      }}

    >
      {children}
    </VehiclesContext.Provider>
  );
};
