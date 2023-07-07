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
  id?: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: string;
  color: string;
  fipe_price: number;
  comments: ICommentResponse[];
  price: number;
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
  showCard: Ivehicles | null;
  setShowCard: Dispatch<SetStateAction<Ivehicles | null>>;
  getNewDataForm: () => Promise<void>;
  createCommentary: (data: IComment) => Promise<void>;
  getCommentaries: () => Promise<void>;
  setListComments: Dispatch<SetStateAction<ICommentResponse[]>>;
  listComments: ICommentResponse[];
  editId: string | null;
  setEditId: Dispatch<SetStateAction<string | null>>;
  patchAdvertiser: (data: iFormVehicles) => Promise<void>;
  retriveVehicles: () => Promise<void>;
}

export interface Ivehicles extends iFormVehicles {
  comments: ICommentResponse[];
}

export interface IComment {
  content: string;
}

export interface ICommentResponse {
  content: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  userId: string;
}

export const VehiclesContext = createContext({} as IVehiclesContext);

export const VehiclesProvider = ({ children }: IVehiclesProviderProps) => {
  const [vehiclesList, setVehiclesList] = useState<IBrand | undefined>();
  const [dataFormVehicles, setDataFormVehicles] = useState(
    [] as iFormVehicles[]
  );
  const [showCard, setShowCard] = useState<Ivehicles | null>(null);
  const token = localStorage.getItem("@TOKEN");
  const [listComments, setListComments] = useState([] as ICommentResponse[]);
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    const vehiclesLoad = async () => {
      try {
        const response = await apiKenzieCars.get<any>("vehicles");
        const data = response.data;
        setVehiclesList(data);
      } catch (error) {
        console.log(error);
      }
    };
    vehiclesLoad();
  }, []);

  const getNewDataForm = async () => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.get("vehicles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataFormVehicles(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCommentary = async (data: IComment) => {
    try {
      const response = await api.post(
        `comments/261cd8e8-f136-4e38-88e9-afb645b191b8`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCommentaries = async () => {
    try {
      const response = await api.get(`comments`);
      console.log(response.data);
      setListComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retriveVehicles = async () => {
    try {
      const response = await api.get(
        `vehicles/261cd8e8-f136-4e38-88e9-afb645b191b8`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setShowCard(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createNew = async (newData: iFormVehicles) => {
    console.log(
      `Aqui vem o newData do createNew ${JSON.stringify(newData, null, 2)}`
    );
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post<iFormVehicles>("vehicles", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDataFormVehicles((prevState) => [...prevState, response.data]);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.request.response);
    }
  };

  const patchAdvertiser = async (data: iFormVehicles) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch<iFormVehicles>("vehicles", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataFormVehicles((prevState) => [...prevState, response.data]);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.request.response);
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
        createCommentary,
        getCommentaries,
        listComments,
        setListComments,
        editId,
        setEditId,
        patchAdvertiser,
        retriveVehicles,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};
