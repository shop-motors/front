import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api";
/* import * as i from "../interfaces/UserInterfaces"; */

export const createAdvertiser = async (body: /* i.Advertiser */) => {
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

