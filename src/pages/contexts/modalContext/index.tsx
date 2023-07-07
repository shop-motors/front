import { createContext, useState } from "react";
import { iModalButtonContext, iModalButtonProvider } from "./contextTypes";

export const ModalButtonContext = createContext({} as iModalButtonContext);

export const ModalButtonProvider = ({ children }: iModalButtonProvider) => {
  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  return (
    <ModalButtonContext.Provider
      value={{ modal, setModal, updateModal, setUpdateModal }}
    >
      {children}
    </ModalButtonContext.Provider>
  );
};
