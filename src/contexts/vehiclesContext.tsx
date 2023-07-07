import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  IBrand,
  IVehiclesProviderProps,
} from "../interfaces/vehiclesInterface";
import { api, apiKenzieCars } from "../services/api";
import { UserContexts } from "./userContexts";

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
  deleteCar: (id: string) => Promise<void>;
  getVehiclesToShowCards: () => Promise<void>;
  retriveVehicle: (id: string) => Promise<void>;
  retriveVehicles: () => Promise<void>;
  setCardProducts: Dispatch<SetStateAction<iFormVehicles | null>>;
  CardProducts: iFormVehicles | null;
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
  const token = localStorage.getItem("@TOKEN");
  const [listComments, setListComments] = useState([] as ICommentResponse[]);
  const [editId, setEditId] = useState<string | null>(null);
  const { verifyUserLoged } = useContext(UserContexts);
  const [CardProducts, setCardProducts] = useState<iFormVehicles | null>(null);

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

  const getVehiclesToShowCards = async () => {
    const responseShowCards = await api.get("/vehicles");
    setDataFormVehicles(responseShowCards.data.data);
    setShowCard(responseShowCards.data.data);
  };

  const retriveVehicle = async (id: string) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.get(`vehicles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowCard(response.data);
      console.log(response.data.cover_img);
    } catch (error) {
      console.log(error);
    }
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
    try {
      const response = await api.post(`comments/${showCard?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      retriveVehicle(showCard?.id);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCommentary = async (data: IComment, id: string) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.get(`comments`);
      console.log(response.data);
      setListComments(response.data);

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

  const retriveVehicles = async () => {
    try {
      const response = await api.get(`vehicles/${showCard?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // setShowCard(response.data);
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
    console.log(showCard);
    const token = localStorage.getItem("@TOKEN");
    try {
      await api.delete(`/vehicles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDataFormVehicles((prevState) => {
        const updatedVehicles = prevState.filter(
          (vehicle) => vehicle.id !== id
        );

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
      verifyUserLoged();
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
        retriveVehicles,
        updateCommentary,
        deleteCommentary,
        deleteCar,
        getVehiclesToShowCards,
        retriveVehicle,
        setCardProducts,
        CardProducts,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};
