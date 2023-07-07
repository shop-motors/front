import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import {
  IBrand,
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
  price: number;
  description: string;
  cover_img: string;
  galleryImages: (string | undefined)[];
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
  createCommentary: (data: IComment) => Promise<void>;
  getCommentaries: () => Promise<void>;
  setListComments: Dispatch<SetStateAction<ICommentResponse[]>>;
  listComments: ICommentResponse[];
  editId: string | null;
  setEditId: Dispatch<SetStateAction<string | null>>;
  patchAdvertiser: (data: iFormVehicles) => Promise<void>;
  updateCommentary: (data: IComment, id: string) => Promise<void>;
  deleteCommentary: (id: string) => Promise<void>;
  deleteCar: (id: string)=> Promise<void>
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
  const [showCard, setShowCard] = useState<iFormVehicles | null>(null);
  const [listComments, setListComments] = useState([] as ICommentResponse[]);
  const [editId, setEditId] = useState<string | null>(null);

  const token = localStorage.getItem("@TOKEN");

  const getVehiclesToShowCards = async () => {
    const responseShowCards = await api.get("/vehicles");
    setDataFormVehicles(responseShowCards.data.data);
    setShowCard(responseShowCards.data.data);
  };

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
    const token = localStorage.getItem("@TOKEN");
    try {
      await api.post(`/comments/${showCard?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };


  const updateCommentary = async (data: IComment, id: string) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      await api.patch(`/comments/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCommentary = async (id: string) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      await api.delete(`/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createNew = async (newData: iFormVehicles) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post<iFormVehicles>("vehicles", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDataFormVehicles((prevState) => {
        const updatedVehicles = [...prevState];
        const vehicleIndex = updatedVehicles.findIndex(
          (vehicle) => vehicle.id === editId
        );

        if (vehicleIndex !== -1) {
          updatedVehicles[vehicleIndex] = response.data;
        }
                return updatedVehicles;
      });

      console.log(response.data);
    } catch (error: any) {
      console.log(error.request.response);
    }
  };

  const deleteCar = async (id: string) => {
    console.log(showCard)
    const token = localStorage.getItem("@TOKEN");
    try {
      await api.delete(`/vehicles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setDataFormVehicles((prevState) => {
        const updatedVehicles = prevState.filter((vehicle) => vehicle.id !== id);
  
        if (updatedVehicles.length > 0) {
          setShowCard(updatedVehicles[0]); 
        } else {
          setShowCard(null); 
        }
  
        return updatedVehicles;
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  const patchAdvertiser = async (data: iFormVehicles) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch<iFormVehicles>(
        `vehicles/${editId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDataFormVehicles((prevState) => {
        const updatedVehicles = [...prevState];
        const vehicleIndex = updatedVehicles.findIndex(
          (vehicle) => vehicle.id === editId
        );

        if (vehicleIndex !== -1) {
          updatedVehicles[vehicleIndex] = response.data;
          setShowCard(updatedVehicles[vehicleIndex]); // Update showCard here
        }

        return updatedVehicles;
      });

      console.log(response.data);
    } catch (error: any) {
      console.log(error.request.response);
    }
  };

   const getCommentaries = async () => {
    try {
      const response = await api.get(`/comments`);

      setListComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const vehiclesLoad = async () => {
      try {
        const response = await apiKenzieCars.get<any>("cars");
        const data = response.data;
        setVehiclesList(data);
      } catch (error) {
        console.log(error);
      }
    };
    vehiclesLoad();

    getCommentaries();

    if (token) {
      getVehiclesToShowCards();
    }
  }, []);

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
        updateCommentary,
        deleteCommentary,
        deleteCar
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};
